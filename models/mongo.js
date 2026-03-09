import mongoose from "mongoose";
import postSchema from "../skema/board.js";

export const Post = mongoose.model('Post', postSchema);
