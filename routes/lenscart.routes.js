import { Router } from "express";
import { getLenses, postSingleLens } from "../controllers/lenscart";

const LensCartRouter = Router();

LensCartRouter.get("/", getLenses);

LensCartRouter.post("/",postSingleLens)

export { LensCartRouter };
