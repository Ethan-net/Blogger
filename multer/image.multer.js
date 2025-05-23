const multer = require("multer");
const path = require("path");
const fs = require("fs");
const storage = require("../Cloudinary/cloudinary.storage");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const dir = "upload";
//     if (!fs.existsSync(dir)) {
//       fs.mkdirSync(dir);
//     }
//     cb(null, dir);
//   },
//   filename: (req, file, cb) => {
//     const uniqueName = "IMG" + Date.now() + path.extname(file.originalname);
//     cb(null, uniqueName);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype == "image/png" || file.mimetype == "image/jpeg") {
//     cb(null, true);
//   } else null, false;
// };

const uploads = multer({ storage });

module.exports = uploads;
