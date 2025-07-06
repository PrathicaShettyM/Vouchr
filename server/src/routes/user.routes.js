import express from "express";
import multer from "multer";

import {
    getProfile,
    updateProfile,
    searchVolunteers
} from "../controllers/user.controller";
import { protect } from "../middlewares/authMiddleware";

const router = express.Router();

const upload = multer({dest: 'uploads/'});

router.get(":/id", getProfile);
router.put("/:id", protect, upload.single('image'), updateProfile);
router.get("/", searchVolunteers);

export default router;