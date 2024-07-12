import React, { useEffect, useState } from "react";
import axios from "axios";
import "./contactList.css";

function ViewContactMessage() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    axios
      .get("http://192.168.0.100:3002/api/view")
      .then((response) => setContacts(response.data))
      .catch((err) => console.error("Error: " + err));
  }, []);

  const handleShow = (contact) => {
    setSelectedContact(contact);
    setFeedback(""); // Reset feedback when selecting a new contact
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSendFeedback = () => {
    if (selectedContact) {
      const feedbackData = {
        contactId: selectedContact._id,
        feedback,
      };

      axios
        .post("http://192.168.0.100:3002/api/feedback", feedbackData)
        .then(() => {
          alert("Feedback sent successfully");
          setFeedback("");
        })
        .catch((err) => alert("Error: " + err));
    }
  };

  return (
    <div className="contact-list-container">
      <div className="contact-list">
        <h2>Contact List</h2>
        {contacts.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Message</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={index}>
                  <td>{contact.username}</td>
                  <td>{contact.email}</td>
                  <td>{contact.subject}</td>
                  <td>{contact.message}</td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => handleShow(contact)}
                    >
                      Show
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No contacts found.</p>
        )}
      </div>
      {selectedContact && (
        <div className="selected-contact">
          <h3>Contact Details</h3>
          <p>
            <strong>Username:</strong> {selectedContact.username}
          </p>
          <p>
            <strong>Email:</strong> {selectedContact.email}
          </p>
          <p>
            <strong>Subject:</strong> {selectedContact.subject}
          </p>
          <p>
            <strong>Message:</strong> {selectedContact.message}
          </p>
          <div className="feedback-section">
            <h4>Send Feedback</h4>
            <textarea
              value={feedback}
              onChange={handleFeedbackChange}
              placeholder="Enter your feedback"
            ></textarea>
            <button onClick={handleSendFeedback}>Send Feedback</button>
            <button onClick={() => setSelectedContact(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewContactMessage;
