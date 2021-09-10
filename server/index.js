import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import postRoutes from "./routes/Post";

const app = express();

app.use("/posts", postRoutes);

app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://saniru_rajapaksha:WnL3LZD74wyBDACv@memories-cluster.gd90z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3000;

const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose
  .connect(CONNECTION_URL, options)
  .then(() =>
    app.listen(PORT, () => console.log("server is listening on port " + PORT))
  )
  .catch((error) => console.log(error.message));
