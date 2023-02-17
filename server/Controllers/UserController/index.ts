import express from "express";
import { userBO } from "../../Model/BOs/UserBO";

const router = express.Router();

const { login } = userBO();

router.post("/login", login);

module.exports = router;
