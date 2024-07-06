const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  username: String,
  email: String,
  subject: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
