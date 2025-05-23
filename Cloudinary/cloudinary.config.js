const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const cloudName = process.env.CLOUD_NAME;
const cloudApiKey = process.env.CLOUD_API_KEY;
const cloudApiSecrete = process.env.CLOUD_API_SECRETE;

cloudinary.config({
  cloud_name: cloudName,
  api_key: cloudApiKey,
  api_secret: cloudApiSecrete,
});

module.exports = cloudinary;
