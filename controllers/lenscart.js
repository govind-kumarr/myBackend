import { Lens } from "../models/Lens";

export const getLenses = (req, res, next) => {
  Lens.getAll()
    .then((lenses) => res.send(lenses))
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
};

export const postSingleLens = (req, res, next) => {
  const data = req.body;
  const newLens = new Lens(data);
  console.log(newLens);
};
