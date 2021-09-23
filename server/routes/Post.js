import express from "express";
// import multer from "multer";

import { getPosts, createPosts } from "../controllers/post.js";

const router = express.Router();

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "/filepath");
//   },

//   filename: function (req, file, cb) {
//     let filename = "filenametogive";
//     req.body.file = filename;

//     cb(null, filename);
//   },
// });

// const upload = multer({ storage: storage });

router.get("/", getPosts);
router.post("/", createPosts);

export default router;

// upload.single("filename"),