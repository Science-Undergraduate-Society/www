import Link from 'next/link';
import Navbar from "../../components/Navbar";
import rxnImg1 from "../../components/event-assets/rxnimg1.png";
import Image from 'next/image';
import rxn2 from "../../components/event-assets/rxn2.png"
import sciweek1 from "../../components/event-assets/sciweek1.png"
import sciweek2 from "../../components/event-assets/sciweek2.png"
import grad from "../../components/event-assets/grad.png"

export default function Events() {
    return (
        <div>
            <Navbar/>
        <div className="event-container">
            <h1 className="event-title">Upcoming Events 🗓️</h1>
            <iframe 
                src="https://open-web-calendar.hosted.quelltext.eu/calendar.html?url=https%3A%2F%2Fubccsss.org%2Fevents%2Findex.ics&title=UBC%20CSSS%20Calendar"
                allowFullScreen
            />

            <h1 className='event-title'>Flagship Events</h1>
            <div className='subtitle-container'>
                <hr className='line' />
                <h2 className='event-subtitle'>Science RXN</h2>
                <hr className='line' />
            </div>

            <p>Science RXN is a two day event geared toward incoming first year science students to help them build community, meet new people, and help them integrate into university. The first day includes team-building games and activities and challenges and RXN is finished off with a gala on the second day. Students will have the opportunity to participate in games and challenges with a chance to win big prizes! Students will also have the opportunity to participate in team-building activities in breakout rooms.</p>
            <div className="image-container">
            <Image 
                src={rxnImg1} 
                alt="Science RXN Event" 
                className="eventimage" 
            />
            <Image 
                src={rxn2} 
                alt="Science RXN Event" 
                className="eventimage" 
            />
            </div>

            
            <div className='subtitle-container'>
                <hr className='line' />
                <h2 className='event-subtitle'>Science Week</h2>
                <hr className='line' />
            </div>

            <p>Science Week is a week-long event dedicated to science pride on campus. The week is filled with fun interactive games/activities, community building events, and networking opportunities.</p>
            <div className="image-container">
            <Image 
                    src={sciweek1} 
                    alt="Science week event"
                    className="eventimage"
                />
            <Image 
                    src={sciweek2} 
                    alt="Science week event"
                    className="eventimage"
                />
            </div>
            <div className='subtitle-container'>
                <hr className='line' />
                <h2 className='event-subtitle'>Science Graduation</h2>
                <hr className='line' />
            </div>
            <p>Science Graduation is an end of the year event to celebrate the completion of another school year, but most importantly, to give a farewell party for all the graduating science students. The event offers food, alcoholic beverages, and most importantly, a good time! </p>
            <div className='image-container'>
            <Image 
                    src={grad} 
                    alt="Science Graduation Event" 
                    className='eventimage'
                />
            </div>
        </div>
        </div>
    )
}

