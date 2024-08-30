import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db, getDoc } from "../config/firebase"; // Import doc and getDoc functions
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap'; // Import Bootstrap components
import { deleteDoc, doc } from "firebase/firestore";
import { Link } from 'react-router-dom'; 
import { addDoc, collection } from "firebase/firestore";


function Event() {
    const { eventId } = useParams();
    const [eventData, setEventData] = useState(null);

    const [showDeclined, setShowDeclined] = useState(false);
    const [showApproved, setShowApproved] = useState(false);


    const eventsCollectionRef = collection(db, "approvedEvents");
  

    useEffect(() => {
        const fetchEventDetails = async () => {
            try {
                const eventRef = doc(db, "events", eventId);
                const eventSnapshot = await getDoc(eventRef);

                if (eventSnapshot.exists()) {
                    const eventData = eventSnapshot.data();
                    setEventData(eventData);
                } else {
                    console.log("Event not found");
                }
            } catch (error) {
                console.error("Error fetching event:", error);
            }
        };

        fetchEventDetails();
    }, [eventId]);

    const deleteEvent = async (id) => {
        const eventDoc = doc(db, "events", id);
        await deleteDoc(eventDoc);
        setShowDeclined(true);
    };

    const approveEvent = async (id) => {
        try {
            await addDoc(eventsCollectionRef, {
              firstName: eventData.firstName,
              lastName: eventData.lastName,
              email: eventData.email,
              organization: eventData.organization,
              startDate: eventData.startDate,
              endDate: eventData.endDate,
              title: eventData.title,
              message: eventData.message,
              sus: eventData.sus,
            });

            const eventDoc = doc(db, "events", id);
        await deleteDoc(eventDoc);

            setShowApproved(true);
          } catch (err) {
            console.error(err);
          }
    };

    return (
        // <div style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${require("../assets/formB.jpg")})`, backgroundSize: 'cover', minHeight: '100vh' }}>
        <div>
            <Modal show={showDeclined} onHide={() => setShowDeclined(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Event Declined</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Event successfully declined!</p>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={() => setShowDeclined(false)}>Close</Button> */}
                    <Link to={"/viewing"} className="btn btn-secondary">Close</Link>
                </Modal.Footer>
            </Modal>

            <Modal show={showApproved} onHide={() => setShowDeclined(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Event Approved</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Event successfully approved!</p>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={() => setShowDeclined(false)}>Close</Button> */}
                    <Link to={"/viewing"} className="btn btn-secondary">Close</Link>
                </Modal.Footer>
            </Modal>

            <div className="container" >
            <div className="row justify-content-center">
                <div className="card mb-3" style={{ maxWidth: "1000px", marginTop: "100px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={require("../assets/logo.jpg")} className="img-fluid rounded-start" alt="..." style={{ width: '100%', height: '100%', margin: 0 }} />
                        </div> 
                        <div className="col-md-8">
                            <div className="card-body">
                                {eventData ? (
                                    <>
                                        <h5 className="card-title">{eventData.title}</h5>
                                        <ul className="list-group" style={{ textAlign: "left" }}>
                                            <li className="list-group-item">Start Date: {eventData.startDate?.toDate().toDateString()}</li>
                                            <li className="list-group-item">End Date: {eventData.endDate?.toDate().toDateString()}</li>
                                            <li className="list-group-item">Description: {eventData.message}</li>
                                            <li className="list-group-item">Submitter Name: {eventData.firstName} {eventData.lastName}</li>
                                            <li className="list-group-item">Submitter Email: {eventData.email}</li>
                                            <li className="list-group-item">Working Group / Club: {eventData.organization}</li>
                                            <li className="list-group-item">Held By SUS: {eventData.sus} </li>
                                        </ul>
                                        {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
                                        {/* <hr style={{ borderColor: 'blue' }} /> */}
                                        <br></br>
                                    </>
                                ) : (
                                    <p>Loading...</p>
                                )}
                            </div>
                        </div> 
                    </div>
                </div>
                <br></br>
                <div className="container">
                    <br></br>
            <div className="row justify-content-center">
                    <Button onClick={() => approveEvent(eventId)} variant="primary" className="w-50 mr-0.4" >Approve</Button>
                    <h1> </h1>
                    <h1> </h1>
                    <Button onClick={() => deleteEvent(eventId)} variant="light" className="w-50 mr-0.4" >Decline</Button>
            </div>
        </div>
            </div>
        </div>
        </div>
        // </div>
    );
}

export default Event;
