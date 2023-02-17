import express from "express";
import { userBO } from "../../Model/BOs/UserBO";

const router = express.Router();

const {} = userBO();

router.post("/login", (req, res) => {});

module.exports = router;
