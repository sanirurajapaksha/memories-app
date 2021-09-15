import express from "express";

import { getPosts, createPosts } from "../controllers/post.js";

const router = express.Router();

router.get("/get-post", getPosts);
router.post("/create-post", createPosts);

export default router;
