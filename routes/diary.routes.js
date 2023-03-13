import express from "express";
import {
  delete_A_Note,
  edit_A_Note,
  getDiary,
  post_A_Note,
} from "../controllers/diary.controller.js";

const DiaryRouter = express();

DiaryRouter.get("/", getDiary);

DiaryRouter.patch("/:id", edit_A_Note);

DiaryRouter.post("/", post_A_Note);

DiaryRouter.delete("/:id", delete_A_Note);

export { DiaryRouter };
