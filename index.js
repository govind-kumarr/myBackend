require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const makeConnection = require("./config/db");
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

makeConnection(() => {
  app.listen(process.env.port, () => {
    console.log("App listening on port " + process.env.port);
  });
});
