import express from "express";
import { messageBO } from "../../Model/BOs/MessageBO";

const router = express.Router();
const { createMessage, deleteMessage, getAllMessages } = messageBO();

router.get("/", getAllMessages);
router.post("/", createMessage);
router.delete("/:id", deleteMessage);

module.exports = router;
