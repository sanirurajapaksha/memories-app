import PostMessage from "../models/postMessages.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(error.status).json({ message: error.message });
  }
};

export const createPosts = (req, res) => {
  const post = req.body;
  const newPosts = new PostMessage(post);
  try {
    await newPosts.save();

    res.status(201).json(newPosts);
  } catch (error) {
    res.status(error.status).json({ message: error.message });
  }
};
