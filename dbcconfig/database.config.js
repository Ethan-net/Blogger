const mongoose = require("mongoose");
require("dotenv").config();

const databaseUrl = process.env.DBSTRING;

const connectDatabase = async () => {
  try {
    console.log("connecting to database");
    await mongoose.connect(databaseUrl, {});
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDatabase;
