import { getDb } from "../config/db";
import { lenscartFields } from "../utils/lenscart";

export class Lens {
  constructor(product) {
    for (let key of lenscartFields) {
      this[key] = product[key] || "";
    }
  }
  save() {
    const db = getDb();
    return db
      .collection("lenses")
      .insertOne(this)
      .then((response) => response)
      .catch((err) => err);
  }
  static getAll() {
    const db = getDb();
    return db
      .collection("lenses")
      .find()
      .toArray()
      .then((lenses) => lenses)
      .catch((error) => error);
  }
}
