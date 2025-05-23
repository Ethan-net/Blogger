const blogSchema = require("../model/blogpost.schema");
const mongoose = require("mongoose");

const blogposter = async (req, res) => {
  try {
    const { title, description, post, author, image } = req.body;
    const imageFile = req.file?.path;

    const blogpost = new blogSchema({
      title,
      description,
      post,
      author,
      image: imageFile,
    });

    await blogpost.save();

    res.status(200).json({
      message: "Posted successfully",
      sucess: true,
    });
  } catch (error) {
    res.status(400).json({
      message: "something went Wrong",
      error: error,
    });
  }
};

const getblogposts = async (req, res) => {
  try {
    const blogs = await blogSchema.find();
    res.status(200).json({
      lenght: blogs.length,
      data: blogs,
    });
  } catch (error) {
    res.send(error);
  }
};

const getsinglePost = async (req, res) => {
  try {
    const id = req.params.id;
    const blogs = await blogSchema.findById(id);
    res.status(200).json({
      data: blogs,
    });
  } catch (error) {
    res.send(error);
  }
};

module.exports = { blogposter, getblogposts, getsinglePost };
