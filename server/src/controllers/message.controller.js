import {PrismaClient} from "@prisma/client";
const db = new PrismaClient();

// 1. get all the messages for an event
export const getMessageForEvent = async (req, res) => {
    const {eventId} = req.params;
    try {
        const messages = await db.message.findMany({
            where: {eventId},
            include: {
                sender: {
                    select: {
                        name: true, 
                        role: true
                    }
                }
            },
            orderBy: {createdAt: "asc"}
        });

        res.status(200).json(messages);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({
            message: "Something went wrong while fetching the messages"
        });
    }
};

// 2. edit the message
export const editMessage = async (req, res) => {
    const {id} = req.params;
    const {content} = req.body;
    
    try {
        if(!content || content.trim() === ""){
            return res.status(400).json({
                message: "Message cannot be empty"
            });
        }

        const updated = await db.message.update({
            where: {id},
            data: {content}
        });

        res.status(200).json(updated);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({
            message: "Something went wrong while editing this message"
        })
    }
}

// 3. delete the message
export const deleteMessage = async (req, res) => {
    const {id} = req.params;
    try {
        await db.message.delete({
            where: {id}
        });

        res.status(200).json({
            message: "Message deleted successfully"
        });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({
            message: "Error deleting this message"
        });
    }
}