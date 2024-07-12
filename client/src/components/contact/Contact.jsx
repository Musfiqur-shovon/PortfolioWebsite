import React, { useState } from "react";
import HeadingLine from "../headingLine/HeadingLine";
import "./contact.css";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (val) => {
    const { name, value } = val.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://192.168.0.100:3002/api/contact", formData)
      .then(() => {
        alert("Contact form submitted successfully");
        // Clear form data
        setFormData({
          username: "",
          email: "",
          subject: "",
          message: "",
        });
      })
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
                <div className="image-contact">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.741008995707!2d89.12005037410569!3d23.89880088306531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe964df3f05a6d%3A0x58013c3bbd5a3f09!2sPearatola%20Mosque!5e0!3m2!1sen!2sbd!4v1720352611045!5m2!1sen!2sbd"
                    width="100%"
                    height="250px"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <h3>MD. MUSFIQUR RAHMAN SHOVON</h3>
                <h4>Junior Programmer</h4>
                <h5>
                  <br />
                  Interested minds are always welcome! If you have any queries,
                  feel free to send your feedback
                </h5>
                <p>
                  <br />
                  Address : <br />
                  <span className="communication">
                    16/4 Bir Muktejoddha Asad Sorok,
                    <br />
                    Pearatol, Kushtia.
                  </span>
                  <br />
                  <br />
                </p>
                <p>
                  Phone: <span className="communication">01721535480</span>
                </p>
                <p>
                  Email:{" "}
                  <span class="communication">musfiqurr666@gmail.com</span>
                </p>
              </div>
            </div>
            <div class="col-md-7 pb-5">
              <div class="contact-info">
                <form onSubmit={handleSubmit}>
                  <label for="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
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
