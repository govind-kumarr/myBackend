import { getDb } from "../config/db.js";

export class Cake {
  constructor() {}
  static getAllCakes() {
    const db = getDb();
    return db
      .collection("cakes")
      .find()
      .toArray()
      .then((cakes) => cakes)
      .catch((error) => error);
  }
  static addCake(data) {
    const db = getDb();
    return db
      .collection("cakes")
      .insertOne(data)
      .then((cake) => cake)
      .catch((error) => error);
  }
  
}
