import { Schema } from "mongoose";

var mongoose = require("mongoose");

export interface UserProps {
  _id: string;
  email: string;
}

const userSchema = new Schema<UserProps>({
  email: { type: String, required: true },
});

export const User = mongoose.model("User", userSchema);
