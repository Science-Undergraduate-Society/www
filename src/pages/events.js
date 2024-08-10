import Link from 'next/link';
import Navbar from "../../components/Navbar";
import rxnImg1 from "../../components/event-assets/rxnimg1.png";
import Image from 'next/image';
import rxn2 from "../../components/event-assets/rxn2.png"
export default function Events() {
    return (
        <div>
            <Navbar/>
        <div className="event-container">
            <h1 className="title">Upcoming Events</h1>
            <iframe 
                src="https://open-web-calendar.hosted.quelltext.eu/calendar.html?url=https%3A%2F%2Fubccsss.org%2Fevents%2Findex.ics&title=UBC%20CSSS%20Calendar"
                allowFullScreen
            />

            <h1>Flagship Events</h1>
            <h2>Science RXN</h2>

            <p>Science RXN is a two day event geared toward incoming first year science students to help them build community, meet new people, and help them integrate into university. The first day includes team-building games and activities and challenges and RXN is finished off with a gala on the second day. Students will have the opportunity to participate in games and challenges with a chance to win big prizes! Students will also have the opportunity to participate in team-building activities in breakout rooms.</p>
            <Image 
                    src={rxnImg1} 
                    alt="Science RXN Event" 
                    width={500} 
                    height={300} 
                    style={{ marginRight: '20px' }} 
                />
            <Image 
                    src={rxn2} 
                    alt="Science RXN Event" 
                    width={500} 
                    height={300}
                />
            
            <h2>Science Week</h2>
            <p>Science Week is a week-long event dedicated to science pride on campus. The week is filled with fun interactive games/activities, community building events, and networking opportunities.</p>

            <h2>Science Graduation</h2>
            <p>Science Graduation is an end of the year event to celebrate the completion of another school year, but most importantly, to give a farewell party for all the graduating science students. The event offers food, alcoholic beverages, and most importantly, a good time! </p>

        </div>
        </div>
    )
}

