import express from "express";
import { getBadgesForUser, generateAndSendReport } from "../controllers/badge.controller";
import { protect } from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/users/:id/badges", protect, getBadgesForUser);
router.get("/users/:id/report.pdf", protect, generateAndSendReport);
