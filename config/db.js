import { config } from "dotenv";
import mongodb, { MongoClient } from "mongodb";
config();

let _db;
const makeConnection = async (cb) => {
  try {
    const connection = await MongoClient.connect(process.env.url);
    console.log("Connected to database: ");
    _db = connection.db();
    cb();
  } catch (error) {
    console.log("Error connecting to database\n", error);
  }
};
const getDb = () => (_db ? _db : "No Database Found");

export { makeConnection, getDb };
