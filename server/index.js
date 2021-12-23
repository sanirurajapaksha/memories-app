import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import router from "../server/routes/Post.js";

const app = express();

app.use(express.json({ limit: "200mb", extend: true }));
app.use(express.urlencoded({ limit: "200mb", extended: true }));
app.use(cors());

app.use("/posts", router);

const PORT = process.env.PORT || 8080;

const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose
  .connect(process.env.CONNECTION_URL, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log("server started: listening on port " + PORT)
    )
  )
  .catch((error) =>
    console.log(error.message + "error when connecting to database ")
  );
