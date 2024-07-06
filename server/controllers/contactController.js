const Contact = require("../models/contactModel");

exports.submitContactForm = (req, res) => {
  const newContact = new Contact({
    username: req.body.username,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
  });
  newContact
    .save()
    .then(() => res.status(201).send("Contact form submitted successfully"))
    .catch((err) => res.status(400).send("Error: " + err));
};
