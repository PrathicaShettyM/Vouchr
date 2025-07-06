import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

// 1. create event
export const createEvent = async (req, res) => {
    // destructure all the data from the req.body
    const {title, description, city, date, maxVolunteers, imageUrl} = req.body;
    
    try {
        // create a new event in the database and add thier details
        const event = db.event.create({
            data: {
                title,
                description,
                city,
                date: new Date(date),
                maxVolunteers: parseInt(maxVolunteers),
                imageUrl, // cloudinary url
                createdBy: req.user.id,
            },
        });

        // return the event created
        res.status(201).json(event);
    } catch (error) {
        console.log("Error: " + error);
        res.status(500).json({
            message: "Error creating a new event"
        });
    }
};

// 2. get all events - filter them by city and date
export const getEvents = async (req, res) => {
    const { city, date} = req.query;
    try {
        const filters = {};
        
        if(city) filters.city = city;
        if(date) filters.date = new Date(date);

        const events = await db.event.findMany({
            where: filters
        });

        res.json(events);
    } catch (error) {
        console.log("Error: " + error);
        res.status(500).json({
            message: "Error fetching events"
        });
    }
};

// 3. get single event details
export const getEventById = async (req, res) => {
    try {
        // 1. get events from the db
        const event = await db.event.findUnique({
            where: {id: req.params.id},
            include: {volunteers: true}
        });
        // 2. check if the event exists
        if(!event) return res.status(404).json({
            message: "Event not found"
        });
        // 3. send json response
        res.json(event);
    } catch (error) {
        console.log("Error: " + error);
        res.status(500).json({
            message: "Error fetching events"
        })
    }
}

// 4. delete a event
export const deleteEvent = async (req, res) => {
    try {
        await db.event.delete({
            where: {id: req.params.id},
        });

        res.json({
            message: "Event deleted successfully"
        });
    } catch (error) {
        console.log("Error: " + error);
        res.status(500).json({
            message: "Error deleting the event"
        })
    }
}