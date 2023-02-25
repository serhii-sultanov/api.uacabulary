const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: String,
  id: String,
});

const User = model("User", userSchema);

module.exports = User;
