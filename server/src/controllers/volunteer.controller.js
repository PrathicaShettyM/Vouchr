import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

// 1. signup for an event
export const signupForEvent = async (req, res) => {
    // grab the userid from the req.user
    const userId = req.user.id;
    // grab the eventId from params
    const eventId = req.params.id;

    try {
        // 1.  find the event for which u want to signup
        const event = await db.event.findUnique({
            where: {id: eventId},
            include: {volunteers: true}
        });

        // 2. check if the event exists
        if(!event) return res.status(404).json({
            message: "Event not found"
        });

        // 3. check if enough slots are available
        if(event.volunteers.length >= event.maxVolunteers){
            return res.status(400).json({
                message: "Volunteer limit reached"
            })
        }

        // 4. find the volunteer who is going to signup
        const alreadySignUp = await db.eventVolunteer.findUnique({
            where: {
                eventId_userId: {
                    eventId,
                    userId,
                },
            },
        });

        // 5. check if the volunteer is already signedup, if yes send a warning message
        if(alreadySignUp) return res.status(400).json({
            message: "Already signed up"
        });

        // 6. create a new record: add the userId and eventId for this purpose
        const record = await db.eventVolunteer.create({
            data: {eventId, userId},
        });

        // 7. send a json response
        res.status(201).json(record);
    } catch (error) {
        console.log("Error: " + error);
        res.status(500).json({
            message: "Error signing up for the event"
        })
    }
}