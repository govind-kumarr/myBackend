import { UserModel } from "../models/User.js";

export const getUsers = async (req, res, next) => {
  try {
    const students = await UserModel.find();
    res.send(students);
  } catch (err) {
    res.send("Something went wrong!");
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
