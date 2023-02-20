import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import mongoose from "mongoose";
import morgan from "morgan";
import responseTime from "response-time";
import http from 'http';

//dotenv Config
dotenv.config();
//DB Url
const dbUrl = process.env.DB_URL;

//Db Connection
mongoose.connect(dbUrl, () => {
  console.log("Connected to DB");
});
export const conn = mongoose.connection;

export const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

//Config and Middlewares
app.use(cors({ origin: "*" }));
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(responseTime());

//Controllers
app.use("/api/message", require("./Controllers/MessageController"));
app.use("/api/user", require("./Controllers/UserController"));

//Start Server
server.listen(process.env.PORT, () => {
  console.log("---------------------------------------------------------");
  console.log(`🚀💻 Server is running on port ${process.env.PORT} 💻🚀`);
});
