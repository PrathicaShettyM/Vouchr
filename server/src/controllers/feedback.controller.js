import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

// volunteer feedbacks
export const submitFeedback = async (req, res) => {
    const {eventId} = req.params;
    const userId = req.user.id; // from middleware
    const { comment } = req.body;

    try {
        const feedback = await db.feedback.create({
            data: {
                userId,
                eventId,
                comment
            },
        });
        
        res.status(201).json(feedback);
    } catch (error) {
        console.log("Error: ", error);
        return res.status(500).json({
            message: "Failed to save feedback"
        });
    }
};