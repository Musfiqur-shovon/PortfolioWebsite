import React, { useState } from "react";
import HeadingLine from "../headingLine/HeadingLine";
import "./contact.css";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (val) => {
    const { variable, value } = val.target;
    setFormData({ ...FormData, [variable]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3002/api/contact", formData)
      .then(() => alert("Contact form submitted successfully"))
      .catch((err) => alert("Error: " + err));
  };

  return (
    <>
      <div id="contact" className="container-fluid">
        <div className="session-title">
          <h2>Contact With Me</h2>
          <HeadingLine />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-5 pb-5">
              <div class="coninfo">
                <div className="image-contact"></div>
                <h3>MD. MUSFIQUR RAHMAN SHOVON</h3>
                <h5>Junior Programmer</h5>
                <h5>
                  I am available for freelance work. Connect with me via and
                  call in to my account.
                </h5>
                <p>
                  Phone: <span class="communication">+01234567890</span>
                </p>
                <p>
                  Email: <span class="communication">admin@example.com</span>
                </p>
              </div>
            </div>
            <div class="col-md-7 pb-5">
              <div class="contact-info">
                <form onSubmit={handleSubmit}>
                  <label for="username">Username</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <label for="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label for="subject">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  <label for="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <div class="btn-box">
                    <button type="submit">Send Messages</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
