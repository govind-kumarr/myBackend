import { config } from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { makeConnection } from "./config/db.js";
import { DiaryRouter } from "./routes/diary.routes.js";
import { FruitRouter } from "./routes/fruits.routes.js";
import { ProductRouter } from "./routes/products.routes.js";
import { LensCartRouter } from "./routes/lenscart.routes.js";
import { CakeRouter } from "./routes/Cake.routes.js";
import { connection } from "./config/db1.js";
import { UserRouter } from "./routes/users.routes.js";
import { login, signUp } from "./controllers/user.controller.js";

const app = express();

config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);


app.use("/users", UserRouter);

app.use("/diary", DiaryRouter);

app.use("/lenses", LensCartRouter);

app.use("/products", ProductRouter);

app.use("/cakes", CakeRouter);

app.use("/fruits", FruitRouter);

app.use("/", (req, res, next) => {
  res.send("Welcome to the app!");
});

makeConnection(async () => {
  try {
    await connection;
    console.log("Connected to the database using mongoose");
    app.listen(process.env.port, () => {
      console.log(`App is listening on port: ${process.env.port}`);
    });
  } catch (error) {
    console.log(
      "Error while connecting to the database using mongoose: \n",
      error
    );
  }
});
