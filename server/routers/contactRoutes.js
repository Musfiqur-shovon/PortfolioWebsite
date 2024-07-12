const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

router.get("/view", contactController.getContacts);
router.post("/contact", contactController.submitContactForm);
router.post("/feedback", contactController.feedback);

module.exports = router;
