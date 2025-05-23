const express = require("express");
const cors = require("cors");
const connectDatabase = require("./dbcconfig/database.config");
const router = require("./routes/blogpost.route");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("You are now connected");
});

app.use("/api", router);

connectDatabase();

app.listen(port, () => {
  console.log(`You are now running on port ${port}`);
});
