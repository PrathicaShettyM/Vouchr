import express from "express";
import { signupForEvent } from "../controllers/volunteer.controller.js";
import { protect } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/:id/signup", protect, signupForEvent);

export default router;