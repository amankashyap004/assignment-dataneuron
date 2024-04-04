import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./db/index.js";
import routers from "./routes/user.routes.js";

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api", routers);

app.listen(process.env.PORT, () => {
  console.log("server is runing...");
});
