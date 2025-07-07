import express from "express";
import { checkInToEvent, getVolunteerHours } from "../controllers/checkin.controller";
import { protect, isVolunteer } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/events/:id/checkin", protect, isVolunteer, checkInToEvent);
router.get("/users/:id/hours", protect, getVolunteerHours);