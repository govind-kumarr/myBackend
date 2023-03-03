const mongoose = require("mongoose");

const diarySchema = mongoose.Schema({
  date: String,
  content: String,
  author: String,
});

const DiaryModel = mongoose.model("diary", diarySchema);

module.exports = { DiaryModel };
