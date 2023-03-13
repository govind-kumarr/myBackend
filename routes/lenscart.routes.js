import { Router } from "express";
import {
  getLenses,
  getLensWithQuery,
  postSingleLens,
} from "../controllers/lenscart.controllers.js";

const LensCartRouter = Router();

LensCartRouter.get("/", getLensWithQuery);

LensCartRouter.get("/", getLenses);

LensCartRouter.post("/", postSingleLens);

export { LensCartRouter };
