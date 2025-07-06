import express from "express";
import {
    createEvent,
    getEvents,
    getEventById,
    deleteEvent
} from "../controllers/event.controller";
import { protect, isAdmin } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/", protect, isAdmin, createEvent);
router.get("/", getEvents);
router.get("/:id", getEventById);
router.delete("/:id", isAdmin, deleteEvent);

export default router;