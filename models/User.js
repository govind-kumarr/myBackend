import mongoose from "mongoose";

const StudentSchema = mongoose.Schema({
  name: String,
  age: Number,
  legal: Boolean,
  city: String,
  language: String,
});

export const UserModel = mongoose.model("student", StudentSchema);
