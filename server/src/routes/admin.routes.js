import express from "express";
import { getAllVolunteers, getEventStats, exportEventsToCSV, getEventFeedbackSummary } from "../controllers/admin.controller";
import {protect, isAdmin} from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/volunteers", getAllVolunteers);
router.get("/events/:id/stats", getEventStats);
router.get("/events/export", exportEventsToCSV);
router.get("/events/:id/feedback/summary", getEventFeedbackSummary);

export default router;