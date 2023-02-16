import mongoose, { Schema } from "mongoose";

export interface MessageProps {
  _id: string;
  id_user: number;
  message: string;
  id_addressee: number;
  hour: string;
}

const messageSchema = new Schema<MessageProps>({
  id_user: { type: Number, required: true },
  message: { type: String, required: true },
  id_addressee: { type: Number, required: true },
  hour: { type: String, required: true },
});

export const Message = mongoose.model("Message", messageSchema);
