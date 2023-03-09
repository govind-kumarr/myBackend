import express from "express";
import { Diary } from "../models/Diary.js";

const DiaryRouter = express();

DiaryRouter.get("/", async (req, res, next) => {
  Diary.getDiary()
    .then((diary) => res.send(diary))
    .catch((err) => {
      console.log(err);
      res.send("Error while retrieving data");
    });
});

DiaryRouter.post("/", async (req, res, next) => {
  const { date, content, author } = req.body;
  if (!date || !content || !author) {
    res.send("One of the field is missing");
  } else {
    const Page = new Diary(date, content, author);
    Page.save()
      .then((result) => {
        console.log("Result",result)
        res.send("Page saved successfully");
      })
      .catch((error) => {
        console.log("Error occured saving page\n", error);
        res.send("Error occured saving page");
      });
  }
});

export { DiaryRouter };
