import { mongoose } from "../..";

export const Message = mongoose.model("Message", {
  message: String,
  id_user: Number,
  id_addressee: Number,
  hour: String,
});
