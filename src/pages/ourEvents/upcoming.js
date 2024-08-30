import styled from 'styled-components';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function Events() {
    return (
        <>
            <Navbar/>
            <Container>
                <EventContainer>
                    <EventTitle><b>Upcoming Events 📕</b></EventTitle>
                    <StyledIframe 
                        src="https://open-web-calendar.hosted.quelltext.eu/calendar.html?url=https%3A%2F%2Fcalendar.google.com%2Fcalendar%2Fical%2Fwebmaster%2540sus.ubc.ca%2Fpublic%2Fbasic.ics"
                        allowFullScreen
                    />
                    <br/><br/>
                    <EventTitle><b>Flagship Events 🚩</b></EventTitle>
                    <SubtitleContainer>
                        <EventSubtitle><b>Science RXN</b></EventSubtitle>
                    </SubtitleContainer>

                    <p>Science RXN is a two-day event geared toward incoming first-year science students to help them build community, meet new people, and integrate into university. The first day includes team-building games and activities and challenges, and RXN is finished off with a gala on the second day. Students will have the opportunity to participate in games and challenges with a chance to win big prizes! Students will also have the opportunity to participate in team-building activities in breakout rooms.</p>
                    <ImageContainer>
                        <StyledImage 
                            src="/images/events-images/rxn/rxnMain1.png" 
                            alt="Science RXN Event"
                            width={500} 
                            height={300}
                        />
                        <StyledImage 
                            src="/images/events-images/rxn/rxnMain2.png" 
                            alt="Science RXN Event" 
                            width={500} 
                            height={300}
                        />
                    </ImageContainer>

                    <SubtitleContainer>
                        <EventSubtitle><b>Science Week</b></EventSubtitle>
                    </SubtitleContainer>

                    <p>Science Week is a week-long event dedicated to science pride on campus. The week is filled with fun interactive games/activities, community-building events, and networking opportunities.</p>
                    <ImageContainer>
                        <StyledImage 
                            src="/images/events-images/sciweek1.png" 
                            alt="Science Week Event"
                            width={500} 
                            height={300} 
                        />
                        <StyledImage 
                            src="/images/events-images/sciweek2.png" 
                            alt="Science Week Event"
                            width={500} 
                            height={300} 
                        />
                    </ImageContainer>
                    
                    <SubtitleContainer>
                        <EventSubtitle><b>Science Graduation</b></EventSubtitle>
                    </SubtitleContainer>

                    <p>Science Graduation is an end-of-the-year event to celebrate the completion of another school year, but most importantly, to give a farewell party for all the graduating science students. The event offers food, alcoholic beverages, and most importantly, a good time!</p>
                    <ImageContainer>
                        <StyledImage 
                            src="/images/events-images/grad.png" 
                            alt="Science Graduation Event" 
                            width={500} 
                            height={300}
                        />
                    </ImageContainer>
                </EventContainer>
            </Container>
        </>
    )
}

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 180px;
    padding: 0 20px;
    align-items: center;
`;

const EventContainer = styled.div`
    margin-top: 180px;
`;

const EventTitle = styled.h1`
    font-size: 3rem;
    margin-bottom: 20px;
    color: #222755; 
`;

const EventSubtitle = styled.h2`
    font-size: 2rem;
    margin-bottom: 10px;
    color: #222755; 
    text-align: center;
`;

const SubtitleContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
    align-self: center;
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
`;

const StyledImage = styled(Image)`
    border-radius: 20px;
    border: 3px solid darkred; 
`;

const StyledIframe = styled.iframe`
    border: none;
    width: 100%;
    height: 600px;
    margin-top: 20px;
`;
