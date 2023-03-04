require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const connection = require("./config/db");
const DiaryRouter = require("./routes/diary.routes");
const app = express();

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

app.listen(process.env.port, async () => {
  console.log("App is listening on port " + process.env.port);
  try {
    await connection;
    console.log("Connected to database");
  } catch (error) {
    console.log("Error connecting to database \n", error);
  }
});
