const express = require("express");
const app = express();
const moongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const contactRoutes = require("./routers/contactRoutes");

app.use(bodyParser.json());
app.use(cors());

// Database Connection code
const URL =
  "mongodb+srv://msshovon:shovon2021@contactform.qm7nm2m.mongodb.net/?retryWrites=true&w=majority&appName=contactForm";
const connectDB = async () => {
  try {
    await moongoose.connect(URL);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.log("MongoDB connection error", err);
    process.exit(1);
  }
};
connectDB();
// Database connection code

app.use("/api", contactRoutes);

app.listen(3002, () => {
  console.log("Server is Running...");
});
