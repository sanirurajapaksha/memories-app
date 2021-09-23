import express from "express";
import multer from "multer";

import { getPosts, createPosts } from "../controllers/post.js";

const router = express.Router();
const upload = multer();

router.get("/", getPosts);
router.post("/", upload.single("filename"), createPosts);

export default router;
