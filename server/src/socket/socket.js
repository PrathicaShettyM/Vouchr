import { PrismaClient } from "@prisma/client";
import cors from "cors";
import {Server} from "socket.io";
const db = new PrismaClient();

export const initSocket = (server) => {
    const io = new Server(server, {
        cors: {
            origin: "",
            methods: ["GET", "POST"]
        }
    });

    io.on("connection", (socket) => {
        console.log("User connected: ", socket.id);

        socket.on("joinEvent", ({eventId, userId}) => {
            socket.join(eventId);
            console.log(`User ${userId} joined event room ${eventId}`);
        });

        socket.on("sendMessage", async (data) => {
            const {content, eventId, senderId, imageUrl} = data;
            const newMsg = await db.message.create({
                data: {
                    content,
                    eventId,
                    senderId,
                    imageUrl
                },
                include: {sender: true}
            });

            io.to(eventId).emit("receiveMessage", newMsg);
        });

        socket.on("disconnect", () => {
            console.log("User disconnected: ", socket.id);
        });
    });
};