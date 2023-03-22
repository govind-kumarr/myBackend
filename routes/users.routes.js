import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller.js";

export const UserRouter = Router();

UserRouter.get("/", getUsers);

UserRouter.post("/createUser", createUser);

UserRouter.patch("/updateUser/:id", updateUser);

UserRouter.delete("/:id", deleteUser);
