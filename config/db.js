require("dotenv").config();
const mongoose = require("mongoose");

const makeConnection = async (cb) => {
  try {
    const connection = await mongoose.connect(process.env.url);
    console.log("Connected to database: ");
    cb();
  } catch (error) {
    console.log("Error connecting to database\n", error);
  }
};

module.exports = makeConnection;
