import Navbar from "../../components/Navbar";
import grad from "../../components/event-assets/grad.png";

export default function Events() {
  return (
    <div>
         <Navbar />
    
        <div className="background-container">
            <div className="overlay-text"><b>Our Past Events</b></div>
        </div>
    
        <div className='subtitle-container'>
            <hr className='line' />
            <h2 className='event-subtitle'>Science RXN</h2>
            <hr className='line' />
        </div>

    </div>
  );
}
