// Example User Model here

const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
  name: String,
  candy: Number,
  likesPokemon: Boolean,
  pizzaToppings: [String]
})

const Student = mongoose.model("Student", studentSchema)

module.exports = Student