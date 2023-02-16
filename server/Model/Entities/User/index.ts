var mongoose = require("mongoose");

export const User = mongoose.model("User", {
  id: Number,
  email: String,
});
