import { useEffect, useState } from "react";
import { db, auth } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Viewing() {
    const [eventList, setEventList] = useState([]);
    const [user, setUser] = useState(null);
    const [showUnauthorizedModal, setShowUnauthorizedModal] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const fetchEventList = async () => {
            try { 
                if (user && user.email !== "graceco921@gmail.com") { //change email
                    setShowUnauthorizedModal(true);
                } else {
                    const eventsCollectionRef = collection(db, "events");
                    const querySnapshot = await getDocs(eventsCollectionRef);
                    const eventData = querySnapshot.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id
                    }));
                    setEventList(eventData);
                }
            } catch (err) {
                console.error(err);
            }
        };

        fetchEventList();
    }, [user]);

    if (!user) {
        return <Link to="/" />;
    }

    if (showUnauthorizedModal) {
        return (
            <div className="modal" style={{ display: 'block' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Unauthorized Access</h5>
                            {/* <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button> */}
                            <Link to={"/"} type="button" className="btn-close"></Link>
                        </div>
                        <div className="modal-body">
                            <p>You are not authorized to access this page.</p>
                        </div>
                        <div className="modal-footer">
                            <Link to={"/"} className="btn btn-secondary">Return to Calendar</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <br></br>
            <br></br>
            <h3> All Event Requests </h3>
            <br></br>
            <div className="container mt-4">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {eventList.map((eventItem, index) => (
                        <div className="col mb-4" key={index}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{eventItem.title}</h5>
                                    <p className="card-text">{formatDate(eventItem.startDate)}</p>
                                    <Link to={`/event/${eventItem.id}`} className="btn btn-primary">View Details</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function formatDate(startDate) {
    if (startDate instanceof Date) {
        return startDate.toDateString();
    } else if (startDate && startDate.toDate instanceof Function) {
        return startDate.toDate().toDateString();
    } else {
        return startDate;
    }
}

export default Viewing;
