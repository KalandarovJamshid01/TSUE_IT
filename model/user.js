const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surName: {
    type: String,
    required: true,
  },
  birthDate: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  faculty: {
    type: String,
    required: true,
  },
  direction: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    enum: ["1", "2", "3", "4", "Boshqa"],
    default: "1",
    required: true,
  },
  course: {
    type: String,
    enum: ["Frontend", "Backend", "FullStack"],
    required: true,
  },
  startTime: {
    type: String,
    enum: [],
  },
  english: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"],
  },
  math: {
    type: String,
    enum: ["Boshlang'ich", "O'rta", "Yuqori"],
  },
});

const User = mongoose.model("users", userSchema);
module.exports = User;
