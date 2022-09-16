import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import indexRouter from "./app.routes";

dotenv.config({
  path: ".env",
});

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use("/api/v1", indexRouter);
// app.use();

mongoose.connect(process.env.MONGODB_URL!);
mongoose.connection.on("connected", () => {
  console.log("connected to mongodb");
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});
