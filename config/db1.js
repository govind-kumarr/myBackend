import { config } from "dotenv";
import { connect } from "mongoose";

config();

export const connection = connect(process.env.url);
