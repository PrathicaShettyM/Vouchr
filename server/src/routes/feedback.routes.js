import express from "express";
import { submitFeedback } from "../controllers/feedback.controller";
import { protect } from "../middlewares/authMiddleware";
const router = express.Router();

router.post("/events/:eventId/feedback", protect, submitFeedback);

export default router;