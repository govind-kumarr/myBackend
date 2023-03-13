import { ObjectId } from "mongodb";
import { getDb } from "../config/db.js";

export class Diary {
  constructor(date, content, author) {
    this.date = date;
    this.content = content;
    this.author = author;
    this._id = id;
  }

  static getDiary() {
    const db = getDb();
    return db
      .collection("diaries")
      .find()
      .toArray()
      .then((diary) => diary)
      .catch((err) => err);
  }

  static shallowUpdate(id, data) {
    const db = getDb();
    return db
      .collection("diaries")
      .updateOne({ _id: new ObjectId(id) }, { $set: data })
      .then((updatedProduct) => updatedProduct)
      .catch((error) => error);
  }

  static getById(id) {
    const db = getDb();
    return db
      .collection("diaries")
      .findOne({ _id: new ObjectId(id) })
      .then((note) => note)
      .catch((err) => err);
  }

  save() {
    const db = getDb();
    return db
      .collection("diaries")
      .insertOne(this)
      .then((result) => result)
      .catch((err) => err);
  }

  static Delete(id) {
    const db = getDb();
    return db
      .collection("diaries")
      .deleteOne({ _id: new ObjectId(id) })
      .then((result) => result)
      .catch((err) => err);
  }
}
