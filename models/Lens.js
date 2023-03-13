import { getDb } from "../config/db.js";
import { lenscartFields } from "../utils/lenscart.js";

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
  static getWithQuery(query) {
    // console.log(query);
    const db = getDb();
    if ("sort" in query) {
      const criteria = query["sort"];
      if ("order" in query) {
        const order = query["order"] == "asc" ? 1 : -1;

        delete query["order"];
        delete query["sort"];

        return db
          .collection("lenses")
          .find(query)
          .sort({ [criteria]: order })
          .toArray()
          .then((products) => products)
          .catch((error) => error);
      }
    }
    return db
      .collection("lenses")
      .find(query)
      .toArray()
      .then((products) => products)
      .catch((error) => error);
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
