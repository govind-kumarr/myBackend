import { getDb } from "../config/db.js";

export class Fruit {
  constructor(name, qty, rating) {
    this.name = name;
    this.qty = qty;
    this.rating = rating;
  }
  static fetchAll() {
    const db = getDb();
    return db
      .collection("fruits")
      .find()
      .toArray()
      .then((result) => result)
      .catch((error) => error);
  }
}
