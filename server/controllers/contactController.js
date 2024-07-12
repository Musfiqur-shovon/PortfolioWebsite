const Contact = require("../models/contactModel");
const nodemailer = require("nodemailer");

// Get all contacts
const getContacts = (req, res) => {
  Contact.find()
    .then((contacts) => {
      res.status(200).json(contacts);
    })
    .catch((err) => {
      console.error("Error fetching contacts:", err); // Log the error details for debugging
      res.status(500).json({ message: err.message });
    });
};
// POST request to send feedback
const feedback = (req, res) => {
  const { contactId, feedback } = req.body;

  Contact.findById(contactId)
    .then((contact) => {
      if (!contact) {
        return res.status(404).json("Contact not found");
      }

      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "md.musfiqur.rahman.shovon@g.bracu.ac.bd",
          pass: "kanh uzze oiio nehw", // Use environment variables for security
        },
      });

      const mailOptions = {
        from: "md.musfiqur.rahman.shovon@g.bracu.ac.bd",
        to: contact.email,
        subject: "Feedback on your message",
        text: feedback,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res.status(500).json("Error sending email: " + error);
        } else {
          res.json("Feedback sent successfully");
        }
      });
    })
    .catch((err) => res.status(400).json("Error: " + err));
};
const submitContactForm = (req, res) => {
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

module.exports = {
  getContacts,
  submitContactForm,
  feedback,
};
