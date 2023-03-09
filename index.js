import { config } from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { makeConnection } from "./config/db.js";
import { DiaryRouter } from "./routes/diary.routes.js";
const app = express();

config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/diary", DiaryRouter);

app.use("/", (req, res, next) => {
  res.send("Welcome to the app!");
});

makeConnection(() => {
  app.listen(process.env.port, () => {
    console.log("App listening on port " + process.env.port);
  });
});
