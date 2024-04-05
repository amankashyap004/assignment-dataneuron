import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import connectDB from "./db/index.js";
import routers from "./routes/index.js";
import { apiLogMiddleware } from "./utils/index.js";

import { getApiLogs } from "./routes/index.js";

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api", apiLogMiddleware, routers);

app.get("/api/api-logs", getApiLogs);

app.listen(process.env.PORT || 8000, () => {
  console.log("server is running...");
});
