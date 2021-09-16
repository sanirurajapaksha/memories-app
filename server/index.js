import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import router from "../server/routes/Post.js";

const app = express();

app.use(express.json({ extend: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/posts", router);

const CONNECTION_URL =
  "mongodb+srv://saniru_rajapaksha:WnL3LZD74wyBDACv@memories-cluster.gd90z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 8080;

const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose
  .connect(CONNECTION_URL, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log("server started: listening on port " + PORT)
    )
  )
  .catch((error) =>
    console.log(error.message + "error when connecting to database ")
  );
