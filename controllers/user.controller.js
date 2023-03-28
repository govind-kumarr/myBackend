import jsonwebtoken from "jsonwebtoken";
import { UserModel } from "../models/User.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await UserModel.findOne({ email, password });
    console.log(result);
    const token = jsonwebtoken.sign({ name: "Govind Kumar" }, "gov");
    if (result) res.send({ message: "Login successful!", token });
    else res.send("No such user found!");
  } catch (err) {
    res.send("Something went wrong Try to login again");
  }
};

export const signUp = async (req, res, next) => {
  const payload = req.body;
  try {
    await UserModel.insertMany([payload]);
    console.log("SignUp successful");
    res.send("SignUp successful");
  } catch (error) {
    console.log(error);
    res.send("Something Went wrong Try again");
  }
};

export const getUsers = async (req, res, next) => {
  const { authorization } = req.headers;
  let decodedToken;
  jsonwebtoken.verify(authorization, "gov", (error, decoded) => {
    if (error) res.send("Please login! wrong credentials");
    else decodedToken = decoded;
  });

  if (decodedToken) {
    try {
      const students = await UserModel.find();
      res.send(students);
    } catch (err) {
      res.send("Something went wrong!");
    }
  }
};

export const createUser = async (req, res, next) => {
  const data = req.body;
  try {
    await UserModel.insertMany([data]);
    res.send("Data Saved successfully");
  } catch (err) {
    res.send("Something went wrong");
  }
};

export const updateUser = async (req, res, next) => {
  const id = req.params.id;
  const updateData = req.body;
  try {
    await UserModel.findByIdAndUpdate(id, { $set: updateData });
    res.send("Data is updated successfully");
  } catch (err) {
    console.error("Error while updating \n", err);
    res.send("Something went wrong while updating");
  }
};

export const deleteUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    await UserModel.findByIdAndDelete(id);
    res.send("Deleted user successfully");
  } catch (err) {
    console.log("Error while deleting user", err);
    res.send("Something went wrong!");
  }
};
