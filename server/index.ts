export const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
export const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl, () => {
  console.log("Connected to DB");
});

export const app = express();
app.use(cors({ origin: "*" }));
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/message", require("./Controllers/Message"));

app.listen(5000, () => {
  console.log("🚀💻 Server is running on port 5000 💻🚀");
});
