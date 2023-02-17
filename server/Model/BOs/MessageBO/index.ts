import { RequestHandler } from "express";
import { conn } from "../../..";
import { errorResponse, successResponse } from "../../../Utils/Response";
import { messageDTO } from "../../DTOs/MessageDTO";
import { Message } from "../../Entities/Message";

export const messageBO = () => {
  const createMessage: RequestHandler = async (req, res) => {
    const dataBody = { ...messageDTO.parse(req.body), hour: new Date() };
    if (dataBody.id_user === dataBody.id_addressee) {
      return res
        .send(
          errorResponse(
            "Sender User ID and Receiver User ID cannot be the same"
          )
        )
        .status(400);
    }
    const session = await conn.startSession();
    try {
      session.startTransaction();
      const createdMessage = await Message.create(dataBody);
      session.commitTransaction();
      session.endSession();

      return res
        .send(successResponse("Message created successfully!", createdMessage))
        .status(201);
    } catch (err) {
      session.abortTransaction();
      session.endSession();
      return res.send(errorResponse("Message was not created!")).status(400);
    }
  };

  const deleteMessage: RequestHandler = async (req, res) => {
    const session = await conn.startSession();

    try {
      session.startTransaction();
      const message = await Message.findOne({
        _id: req.params.id,
      });
      if (!message)
        res.send(errorResponse("Message was not found!")).status(404);
      await Message.deleteOne({ _id: req.params.id });
      session.commitTransaction();
      session.endSession();

      return res.send(successResponse("Message deleted successfully!"));
    } catch (err) {
      session.abortTransaction();
      session.endSession();
      return res.send(errorResponse("Message was not deleted!")).status(400);
    }
  };

  const getAllMessages: RequestHandler = async (req, res) => {
    try {
      const messages = await Message.find();
      return res.send(
        successResponse("Messages found successfully!", messages)
      );
    } catch (err) {
      return res.send(errorResponse("Messages not found!")).status(404);
    }
  };

  return { createMessage, deleteMessage, getAllMessages };
};
