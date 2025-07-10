
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userId: String,
  content: String,
  likes: [String]
}, { timestamps: true });

module.exports = mongoose.model("Post", postSchema);
