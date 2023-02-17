import { RequestHandler } from "express";
import { errorResponse, successResponse } from "../../../Utils/Response";
import { userDTO } from "../../DTOs/UserDTO";
import { User } from "../../Entities/User";
import { conn } from "../../..";

export const userBO = () => {
  const login: RequestHandler = async (req, res, next) => {
    const data = userDTO.parse(req.body);
    const { email } = data;
    const session = conn.startSession();

    try {
      session.startTransaction();
      const user = await User.findOne({ email });
      if (!user) {
        const createdUser = await User.create(data);
        session.commitTransaction();
        session.endSession();
        return res
          .send(successResponse("User created successfully!", createdUser))
          .status(201);
      }
      return res.send(successResponse("Login successfully!", user)).status(200);
    } catch (err) {
      session.abortTransaction();
      session.endSession();
      return res
        .send(errorResponse("An error occurred, please try again later!"))
        .status(400);
    }
  };

  return { login };
};
