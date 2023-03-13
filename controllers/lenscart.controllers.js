import { Lens } from "../models/Lens.js";
import { validateQuery } from "../utils/removeQuotes.js";

export const getLenses = (req, res, next) => {
  Lens.getAll()
    .then((lenses) => {
      console.log(lenses.length);
      res.send(lenses);
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
};

export const getLensWithQuery = (req, res, next) => {
  let query = req.query;
  if (Object.keys(query).length) {
    query = validateQuery(query);
    Lens.getWithQuery(query)
      .then((lenses) => res.send(lenses))
      .catch((error) => {
        console.log("Error", error);
        res.send("Error while getting products");
      });
  } else next();
};

export const postSingleLens = (req, res, next) => {
  const data = req.body;
  const newLens = new Lens(data);
  newLens
    .save()
    .then((response) => {
      console.log("added successfully");
      res.send(response);
    })
    .catch((error) => {
      console.log("Error while saving", error);
      res.send("Error while adding new lens");
    });
};
