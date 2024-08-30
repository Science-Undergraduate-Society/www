import React, { useState } from 'react';
import './Form.css'; // Import CSS file for custom styling
import { db } from "../config/firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    startDate: '',
    endDate: '',
    title: '',
    message: '',
    sus: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      organization: '',
      startDate: '',
      endDate: '',
      title: '',
      message: '',
      sus: '',
    });
  };

  const ErrorModal = () => {
    return (
      <div className="popup-overlay">
        <div className="error-popup">
          <div className="error-message">
            <p>Please fill in all fields before submission</p>
            <button onClick={() => setShowErrorModal(false)}>Close</button>
          </div>
        </div>
      </div>
    );
  };


  const eventsCollectionRef = collection(db, "events");
  const [showErrorModal, setShowErrorModal] = useState(false);

  // new event states
  const [newEventFirstName, setNewFirstName] = useState("");
  const [newEventLastName, setNewLastName] = useState("");
  const [newEventEmail, setNewEmail] = useState("");
  const [newEventOrg, setNewOrg] = useState("");
  const [newEventStartDate, setNewStartDate] = useState(0);
  const [newEventEndDate, setNewEndDate] = useState(0);
  const [newEventTitle, setNewTitle] = useState("");
  const [newEventMessage, setNewMessage] = useState("");
  const [newEventSus, setNewSus] = useState("");

  const onSubmitEvent = async () => {
    try {
      if (
        newEventFirstName === "" ||
        newEventLastName === "" ||
        newEventEmail === "" ||
        newEventOrg === "" ||
        newEventStartDate === 0 ||
        newEventEndDate === 0 ||
        newEventTitle === "" ||
        newEventMessage === "" ||
        newEventSus === false
      ) {
        setShowErrorModal(true); 
        return; 
      }
  
      const startDate = new Date(newEventStartDate);
      startDate.setDate(startDate.getDate() + 1);
  
      const endDate = new Date(newEventEndDate);
      endDate.setDate(endDate.getDate() + 1);
  
      await addDoc(eventsCollectionRef, {
        firstName: newEventFirstName,
        lastName: newEventLastName,
        email: newEventEmail,
        organization: newEventOrg,
        startDate: Timestamp.fromDate(startDate),
        endDate: Timestamp.fromDate(endDate),
        title: newEventTitle,
        message: newEventMessage,
        sus: newEventSus,
      });
      setShowSuccess(true);
    } catch (err) {
      console.error(err);
    }
  };
  

  const [showSuccess, setShowSuccess] = useState(false); 

  
  return (
    <div className="full">
      {showErrorModal && <ErrorModal />}
      {showSuccess && (
    <div className="popup-overlay">
    <div className="success-popup">
      <div className="success-message">
        <p>Thank you for your event request. Submission Successful! </p>
        <Link to={"/"} className="btn btn-primary">Return to Calendar</Link>
      </div>
    </div>
  </div>
  )}

      <br></br>
      <br></br>
      <br></br>
    <div className="form-container">
      <h2 className="form-heading">SUS Website Calendar Submission</h2>
      
     <div class="line"></div>
     <br></br>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="firstName" className="form-label">First Name:</label>
          <input
            type="text"
            onChange={(e) => setNewFirstName(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="form-label">Last Name:</label>
          <input
            type="text"
            onChange={(e) => setNewLastName(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            onChange={(e) => setNewEmail(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="organization" className="form-label">Working Group/Club:</label>
          <input
            type="text"
            onChange={(e) => setNewOrg(e.target.value)}
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="startDate" className="form-label">Start Date:</label>
          <input
            type="date"
            onChange={(e) => setNewStartDate(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate" className="form-label">End Date:</label>
          <input
            type="date"
            onChange={(e) => setNewEndDate(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="title" className="form-label">Event Title:</label>
          <input
            type="text"
            onChange={(e) => setNewTitle(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea
            onChange={(e) => setNewMessage(e.target.value)}
            className="form-textarea"
          />
        </div>
        <div className="form-group">
          <label htmlFor="organization" className="form-label">Hosted By SUS:</label>
          <input
            type="checkbox"
            onChange={(e) => setNewSus(e.target.value)}
            className="form-input"
          />
        </div>
        <h1> </h1>
        <button type="button" onClick={onSubmitEvent} className="form-button">Submit Form</button>
        
      </form>
       

        <br></br>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h6> </h6>
    </div>
  );
}

export default Form;
