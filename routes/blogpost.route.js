const express = require("express");
const upload = require("../multer/image.multer");
const {
  blogposter,
  getblogposts,
  getsinglePost,
} = require("../controller/blog.controller");
const { default: mongoose } = require("mongoose");

const router = express.Router();

router.post("/blogpost", upload.single("image"), blogposter);
router.get("/blogposts", getblogposts);
router.get("/blogposts/:id", getsinglePost);

module.exports = router;
