import express from "express";
import { config } from "dotenv";
import authRouter from "./routes/auth.js";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import { log } from "console";

config();

const app: any = express();
const mongoConnection = async () => {
    await mongoose.connect(
        process.env["MONGOURI"] || "mongodb://localhost:27017/",
        {
            dbName: "KARM",
        }
    );
    log("Connected to MongoDB");
};
mongoConnection();

app.use(bodyParser.json());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use(cors());
app.use(morgan("dev"));
const port: any = process.env["PORT"] || 3000;

app.get("/", (_: any, res: any) => {
    res.status(200).send("hello varshil");
});

app.get("*", (_: any, res: any) => {
    res.status(404).send("Not Found!");
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});
