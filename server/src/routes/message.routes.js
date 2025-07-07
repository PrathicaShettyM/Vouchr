import express from "express";
import {
    getMessageForEvent,
    deleteMessage,
    editMessage
} from "../controllers/message.controller";
import { protect } from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/events/:eventId/messages", protect, getMessageForEvent);
router.put("/messages/:id", protect, editMessage);
router.delete("/messages/:id", protect, deleteMessage);

export default router;