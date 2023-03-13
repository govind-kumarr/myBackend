import { Router } from "express";
import { add_A_Cake, getAllCakes } from "../controllers/cake.controller.js";

const CakeRouter = Router();

CakeRouter.get("/", getAllCakes);

CakeRouter.post("/", add_A_Cake);

export { CakeRouter };
