import { Request, Response } from "express";
import { messageDTO } from "../../Model/DTOs/MessageDTO";
import { Message } from "../../Model/Entities/Message";
import express from "express";
import { successResponse, errorResponse } from "../../Utils/Response";

const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  const dataBody = { ...messageDTO.parse(req.body), hour: new Date() };
  try {
    Message.create(dataBody);
    return res.send(successResponse("Message created successfully!", dataBody));
  } catch (err) {
    return res.send(errorResponse("Message was not created!", dataBody));
  }
});

module.exports = router;
