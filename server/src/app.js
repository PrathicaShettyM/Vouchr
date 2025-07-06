import express, { json } from "express";
import cors from "cors"; 
// cross origin resource sharing: Allows the API to be accessed from different domains(eg: a frontend app hosted on a different server)
import "dotenv/config";

// Mounting routes
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(cors()); // enable cors
app.use(express.json()); // its a middleware to parse incoming request bodies as JSON

// give paths for the routes
app.use("/api/auth", authRoutes);

export default app;