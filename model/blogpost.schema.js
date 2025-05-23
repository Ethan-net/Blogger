const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    description: { type: String, minlenght: 50, require: true },
    post: { type: String, minlength: 150, require: true },
    image: { type: String },
    author: { type: String, require: true },
    created: Date,
    updated: Date,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("EthanBlog", blogSchema);
