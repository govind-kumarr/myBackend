import { ObjectId } from "mongodb";
import { getDb } from "../config/db.js";

export class Product {
  constructor(name, price, brand, category, originalPrice, discount) {
    this.name = name;
    this.price = price;
    this.originalPrice = originalPrice || price + 100;
    this.discount = discount || 100;
    this.category = category || "Electronics";
    this.brand = brand || name.split(" ")[0];
  }
  save() {
    const db = getDb();
    return db
      .collection("newProducts")
      .insertOne(this)
      .then((product) => product)
      .catch((error) => error);
  }
  static findWithQuery(query) {
    const db = getDb();
    return db
      .collection("newProducts")
      .find(query)
      .toArray()
      .then((products) => products)
      .catch((error) => error);
  }
  static fetchAll() {
    const db = getDb();
    return db
      .collection("newProducts")
      .find()
      .toArray()
      .then((products) => products)
      .catch((error) => error);
  }

  static getSingleProduct(id) {
    const db = getDb();

    return db
      .collection("newProducts")
      .findOne({ _id: new ObjectId(id) })
      .then((product) => product)
      .catch((error) => error);
  }
  static update(id, data) {
    const db = getDb();
    return db
      .collection("newProducts")
      .updateOne({ _id: new ObjectId(id) }, { $set: data })
      .then((updatedProduct) => updatedProduct)
      .catch((error) => error);
  }
  static delete(id) {
    const db = getDb();
    return db
      .collection("newProducts")
      .deleteOne({ _id: new ObjectId(id) })
      .then((deletedProduct) => deletedProduct)
      .catch((error) => error);
  }
  static deleteMany(list) {
    const db = getDb();
    return db
      .collection("newProducts")
      .deleteMany({ _id: { $in: list.map((id) => new ObjectId(id)) } })
      .then((result) => result)
      .catch((error) => error);
  }
}

// {
//     "_id": "640e19ac4907e650a0606ed7",
//     "name": "Keyboard",
//     "price": 599
//   },
//   {
//     "_id": "640e1a2f4907e650a0606ed8",
//     "name": "Samsung 4K monitor",
//     "price": 80000
//   },
