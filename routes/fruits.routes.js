import { Router } from "express";
import { Fruit } from "../models/Fruits.js";

const FruitRouter = Router();

FruitRouter.get("/", (req, res, next) => {
  Fruit.fetchAll()
    .then((fruits) => res.send(fruits))
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

export { FruitRouter };
