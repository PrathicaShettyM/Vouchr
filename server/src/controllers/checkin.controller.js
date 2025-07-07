import {PrismaClient} from "@prisma/client";
const db = new PrismaClient();
import { haversineDistance } from "../utils/geoUtils";

const ALLOWED_RADIUS=100; // in meters

// 1. check in to the event: Put ur attendence
export const checkInToEvent = async (req, res) => {
    const {latitude, longitude} = req.body;
    const {id: eventId} = req.params;
    const volunteerId = req.user.id;

    // find the event to signin
    const event = await db.event.findUnique({
        where: {id: parseInt(eventId)}
    });

    // if no event then give a warning message 
    if(!event) return res.status(404).json({
        message: "Event not found"
    });

    const distance = haversineDistance(latitude,longitude, event.latitude, event.longitude);

    if(distance > ALLOWED_RADIUS){
        return res.status(400).json({
            message: "You are not near the event location"
        });
    }

    const checkin = await db.checkIn.create({
        data: {
            volunteerId,
            eventId: parseInt(eventId),
            latitude,
            longitude
        }
    });

    res.json({
        message: "Check -in successful",
        checkin
    });
}

// 2. get volunteers hours
export const getVolunteerHours = async (req, res) => {
    // 1. grab the volunteer id from the req.params
    const {id} = req.params;

    // 2. count the no. of events volunteered, for each volunteer - then in the next step multiply it by a threshold hrs (say 5 hrs is each event's duration)
    const count = await db.checkIn.count({
        where: {volunteerId: parseInt(id)}
    });

    // 3. let the total hrs for a event assumed be 5, so multiply it with the no. of events
    const totalHours = count*5;

    // send json response of no. of hours of work
    res.json({
        hours: totalHours
    });
}