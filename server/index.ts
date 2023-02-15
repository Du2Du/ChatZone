const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");

const dbUrl = process.env.DB_URL;

const app = express();
app.use(cors({ origin: "*" }));
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.listen(3000, () => {
  console.log("🚀💻 Server is running on port 3000 💻🚀");
});
