import { mongoose } from "../..";

export const User = mongoose.model("User", {
  id: Number,
  email: String,
});
