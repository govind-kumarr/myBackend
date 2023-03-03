const express = require("express");
const { DiaryModel } = require("../models/Diary");

const DiaryRouter = express();

DiaryRouter.get("/", async (req, res, next) => {
  const data = await DiaryModel.find();
  res.send(data);
});

DiaryRouter.post("/create", async (req, res, next) => {
  const { date, content, author } = req.body;
  if (!date || !content || !author) {
    res.send("One of the field is missing");
  } else {
    try {
      const page = new DiaryModel({
        date,
        content,
        author,
      });
      await page.save();
      res.send("Page saved successfully");
    } catch (error) {
      console.log("Error occured saving page\n", error);
      res.send("Error occured saving page");
    }
  }
});

module.exports = DiaryRouter;
