import mongoose from "mongoose";

const StudentSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: String,
  age: Number,
});

export const UserModel = mongoose.model("student", StudentSchema);
