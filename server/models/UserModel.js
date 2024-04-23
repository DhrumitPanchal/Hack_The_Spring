const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ["client", "worker"],
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
  },
  contactNo: {
    type: Number,
  },
  address: {
    type: String,
  },
  birthday: {
    type: String,
  },
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
