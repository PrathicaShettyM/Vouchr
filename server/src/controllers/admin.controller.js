import {PrismaClient} from "@prisma/client";
import {Parser} from "json2csv";
import fs from "fs";
import { summarizeText } from "../utils/aiUtils.js";

const db = new PrismaClient();

// 1. display all the volunteers
export const getAllVolunteers = async (req, res){
    try {
        const volunteers = await db.user.findMany({
            where: {role: "VOLUNTEER"},
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
                checkIns: true,
            },
        });

        res.status(200).json(volunteers);
    } catch (error) {
        console.log("Error: ", error);
        return res.status(500).json({
            message: "Error fetching all the volunteers"
        });
    }
};

// 2. event statistics for ananlysis
export const getEventStats = async (req, res) => {
    try {
        const checkInCount = await db.checkIn.count({
            where: {eventId: id}
        });
        const volunteerCount = await db.eventVolunteer.count({
            where: {eventId: id}
        });

        res.status(200).json({
            checkIns: checkInCount,
            volunteers: volunteerCount
        });

    } catch (error) {
        console.log("Error: ", error);
        return res.status(500).json({
            message: "Failed to retrive the event statistics"
        });
    }
};



// 3. export all the event details to csv
export const exportEventsToCSV = async (req, res) => {
    try {
        const events = await db.event.findMany({
            include: {
                checkIns: true,
                volunteers: true,
            }
        });

        const eventData = events.map((e) => ({
            Title: e.title,
            City: e.city,
            Date: e.date.toISOString(),
            Volunteers: e.volunteers.length, // this needs attention
            CheckIns: e.checkIns.length,
        }));

        const parser = new Parser();
        const csv = parser.parse(eventData);

        const filePath = "./exports/events.csv";
        fs.writeFileSync(filePath, csv);

        res.download(filePath, () => {
            fs.unlinkSync(filePath); // for cleanup
        });

    } catch (error) {
        console.log("Error: ", error);
        return res.status(500).json({
            message: "Failed to export events"
        });
    }
};

// 4. event feedback summary
export const getEventFeedbackSummary = async (req, res) => {
    const {id} = req.params;
    try {
        const feedbacks = await db.feedbacks.findMany({
            where: {eventId: id},
            select: {comment: true},
        })

        const rawText = feedbacks.map((f) => f.comment).join("\n");
        const summary = await summarizeText(rawText);

        res.status(200).json({summary});
    } catch (error) {
        console.log("Error: ", error);
        return res.status(500).json({
            message: "Failed to summarise feedback"
        });
    }
};
