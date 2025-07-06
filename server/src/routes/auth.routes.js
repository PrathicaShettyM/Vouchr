import express from "express";
// express framework: used to build web servers and APIs in Node.js.

const router = express.Router(); // Creates a new Express router instance using express.Router()
// A router is a mini Express application that handles specific routes (e.g., /register, /login) and can be mounted on a base path in the main app

import { 
    register, 
    login 
} from "../controllers/auth.controller.js";

router.post("/register", register); 
router.post("/login",login);

export default router;