import { Cake } from "../models/Cake.js";

export const getAllCakes = (req, res, next) => {
  Cake.getAllCakes()
    .then((cakes) => {
      res.send(cakes);
    })
    .catch((error) => {
      console.log("Error while getting cakes\n", error);
      res.send("Something went wrong😓");
    });
};

export const add_A_Cake = (req, res, next) => {
  const data = req.body;
  Cake.addCake(data)
    .then((cake) => res.send(cake))
    .catch((error) => {
      console.log("Error occured while adding cake" + error);
      res.send("Something went wrong");
    });
};
