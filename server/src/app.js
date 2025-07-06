import express, { json } from "express";
import cors from "cors";
import "dotenv/config"

import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.get("/", (req, res) => res.send("API endpoints are running"));

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});


export default app;