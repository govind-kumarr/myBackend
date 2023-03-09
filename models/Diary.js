import { getDb } from "../config/db.js";

export class Diary {
  constructor(date, content, author) {
    this.date = date;
    this.content = content;
    this.author = author;
  }
  static getDiary() {
    const db = getDb();
    return db
      .collection("diary")
      .find()
      .toArray()
      .then((diary) => diary)
      .catch((err) => err);
  }

  save() {
    const db = getDb();
    return db
      .collection("diary")
      .insertOne(this)
      .then((result) => result)
      .catch((err) => err);
  }
}
