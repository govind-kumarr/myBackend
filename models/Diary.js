import { ObjectId } from "mongodb";
import { getDb } from "../config/db.js";

export class Diary {
  constructor(date, content, author, id) {
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

  static shallowUpdate()

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
    if (this._id) {
      return db
        .collection("diaries")
        .updateOne({ _id: new ObjectId(this._id) }, { $set: this })
        .then((result) => result)
        .catch((err) => err);
    }
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
