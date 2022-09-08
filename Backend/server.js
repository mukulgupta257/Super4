import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

mongoose
  .connect(config.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((_) => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.log(error.reason);
  });

app.use(cors());
app.use(bodyParser.json());
