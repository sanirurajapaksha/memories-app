import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: { type: String, required: false },
  description: { type: String, required: false },
  creator: { type: String, required: false },
  tags: { type: String, required: false },
  likeCount: {
    type: Number,
    default: 0,
    required: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
