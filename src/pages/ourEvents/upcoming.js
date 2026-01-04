import React, { useEffect } from 'react';
import styled from 'styled-components';

import Image from 'next/image';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Events() {
    useEffect(() => {
        // Load Instagram embed script if not already loaded
        if (!document.getElementById("instagram-embed-script")) {
            const script = document.createElement("script");
            script.id = "instagram-embed-script";
            script.src = "https://www.instagram.com/embed.js";
            script.async = true;
            document.body.appendChild(script);
        } else {
        // If already loaded, reprocess embeds
        window.instgrm?.Embeds.process();
        }
    }, []);

    const events = [
        // {
        //     title: "SUS",
        //     hightlight: "First Week",
        //     date: "September 2-5, 2025",
        //     description: "Get ready for an unforgettable start to the school year with the Science Undergraduate Society (SUS) First Week! Join us for four days of fun, September 2-5. Kick things off at Imagine Day & Faculty Fair on September 2nd to grab some free merch. On September 3rd, unwind at Sips and Swirls at Abdul Ladha from 6-8 p.m., where you can enjoy mocktails and paint while getting a hand or scalp massage from Lush Spa or even creating your own custom bubble bar! Show off your competitive side at Squidlympics on the Macinnes Field from 5:30-7:30 p.m. on September 4th, with a chance to win prizes. We'll end the week with our Welcome Back BBQ on September 5th outside Abdul Ladha from 5-8 p.m., featuring free food, a dunk tank, and a raffle full of exciting prizes. We can't wait to see you there!",
        //     images: [
        //         "/images/events-images/fw/fw_main5.png",
        //         "/images/events-images/fw/fw_main2.jpg",
        //         "/images/events-images/fw/fw_main1.png",
        //     ]
        // },
        // {
        //     title: "Science",
        //     hightlight: "RXN",
        //     date: "September 13-14, 2025",
        //     description: "Science RXN is the ultimate kickoff flagship event for first-year science students at UBC! Happening September 13-14, this two-day experience is designed to help you make lasting friendships and dive into campus life. Day one is packed with fun indoor and outdoor activities where you'll bond with peers through games, challenges, and team-building. On day two, dress up in blue for our signature dinner and dance, a chance to celebrate the start of your university journey with new friends and unforgettable memories. Don’t miss this exciting opportunity to connect, celebrate, and start your UBC Science adventure on the right foot!",
        //     images: [
        //         "/images/events-images/rxn/rxn1_main.JPG",
        //         "/images/events-images/rxn/rxn2_main.JPG",
        //         "/images/events-images/rxn/rxn3_main.JPG"
        //     ]
        // }
    ]

    return (
        <>
            <Navbar/>

            <TopContainer>
                {/* Flagship Events */}
                <FlagshipEventsContainer>
                    <br/>
                    <Title><b>Fall 2025 has arrived, UBC 👀! Check out what&apos;s coming up this September—exciting events and initiatives you won&apos;t want to miss 🥳”</b></Title>
                    <h2>
                        To keep up to date on all our events, please check out our{" "}
                        <HighlightLink
                            href="https://calendar.google.com/calendar/u/0?cid=Y19kNGE1NzA2MDBmZGFhMTEyZjFhYzdiZTgyMjg1MTM1MzY5Y2RlYjg3MGExNmIzMmE0YjY4ZGY2MWZkYWQ3ZGQ1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
                            target="_blank"
                        >
                            Google Calendar
                        </HighlightLink>{" "}
                        and follow our{" "}
                        <InstagramLink
                            href="https://www.instagram.com/susubc/"
                            target="_blank"
                        >
                            Instagram
                        </InstagramLink>
                        !
                    </h2>
                    <br/>

                    {/* External Sources */}

                    <ExternalSourcesContainer>
                        <CalendarSection>
                            <CalendarFrame
                            src="https://calendar.google.com/calendar/embed?src=c_d4a570600fdaa112f1ac7be82285135369cdeb870a16b32a4b68df61fdad7dd5%40group.calendar.google.com&ctz=America%2FVancouver" 
                            title="SUS Events Google Calendar"
                            />
                        </CalendarSection>

                        <InstagramSection>
                            <InstagramFrame
                            src="https://www.instagram.com/susubc/embed" 
                            title="SUSUBC Instagram Post"
                            allowTransparency
                            />
                        </InstagramSection>
                    </ExternalSourcesContainer>

                    <br/>

                    {events.map((event, index) => (
                        <EventContainer key={index}>
                            <EventTitle><b>{event.title} <Highlight>{event.hightlight}</Highlight></b></EventTitle>
                            <EventSubtitle><b>{event.date}</b></EventSubtitle>

                            <p>{event.description}</p>

                            <CollageContainer>
                                {event.images.map((src, idx) => (
                                    <CollageImage 
                                        key={idx}
                                        src={src}
                                        alt={`${event.title} Event`}
                                        width={500} 
                                        height={300}
                                        $span={2}
                                    />
                                ))}
                            </CollageContainer>
                        </EventContainer>
                    ))}
                </FlagshipEventsContainer>
                
                {/* Back to School Survey */}

                <EventContainer>
                    <EventTitle><b>SUS <Highlight>Mentorship Program</Highlight></b></EventTitle>

                    <p>
                        The SUS Mentorship Program helps build a connected and supportive community within UBC Science by bringing together students across different years and disciplines. Mentors are upper-year undergraduates and graduate students who volunteer their time to support newer students. Through one-on-one or small-group pairings, mentors share their experiences while mentees gain guidance and encouragement as they navigate their academic and personal journeys. The program also hosts events and workshops designed to build meaningful connections, professional development, and community building. At the end of the year, both mentors and mentees are celebrated with awards recognizing their growth and contributions.
                    </p>

                    <MentorshipButtonsContainer>
                        <a href="https://ubc.ca1.qualtrics.com/jfe/form/SV_51rDLgpIDVTciTY" target="_blank" rel="noopener noreferrer">
                            <InitiativeButton><strong>Mentee</strong> Sign Up</InitiativeButton>
                        </a>
                        <a href="https://ubc.ca1.qualtrics.com/jfe/form/SV_6XqYDjMPrFCHsZE" target="_blank" rel="noopener noreferrer">
                            <InitiativeButton><strong>Mentor</strong> Sign Up</InitiativeButton>
                        </a>
                    </MentorshipButtonsContainer>
                </EventContainer>    
                
                {/* Back2School Survey */}

                {/* <EventContainer>
                    <EventTitle><b>SUS <Highlight>Back2School Survey</Highlight></b></EventTitle>

                    <p>
                        The SUS Back2School Survey is an annual initiative led by the Academic Portfolio to gather meaningful feedback from UBC Science students. Open to students across all years and majors, it provides critical insights that guide advocacy efforts and help enhance the student experience. This year, our goal is to collect more than <strong>1,750 responses</strong>, ensuring the broadest representation of the science student body. By sharing their perspectives, students help shape programs, resources, and support systems tailored to their needs. To encourage participation, everyone who completes the survey will be entered into a raffle for a variety of exciting prizes.
                    </p>

                    <EventSubtitle>The survey will close on November 24, 2025 at 11:59 PM.</EventSubtitle>

                    <br/>

                    <a href="https://ubc.ca1.qualtrics.com/jfe/form/SV_4JwuVlyeHp1BMdo" target="_blank" rel="noopener noreferrer">
                        <InitiativeButton><strong>Take Survey</strong></InitiativeButton>
                    </a>
                </EventContainer>     */}

                {/* Survival Guide */}

                <EventContainer>
                    <EventTitle><b>SUS <Highlight>Survival Guide</Highlight></b></EventTitle>

                    <p>
                    <strong>The SUS Science Survival Guide</strong> is a comprehensive resource for everything a UBC Science student needs! Inside are practical tips for navigating university life, study strategies for popular courses, advice on getting involved in research, and guidance on how to make the most of campus life. Plus, this year the guide features a puzzle! Solve it for a chance to win any gift card of choice.
                    </p>

                    <a href="https://drive.google.com/file/d/1L8lPDrr3br4f3HeoBoeRuQkFWJEtnrZy/view" target="_blank" rel="noopener noreferrer">
                        <InitiativeButton><strong>See the Guide</strong></InitiativeButton>
                    </a>
                </EventContainer>   

                {/* Brunch */}

                {/* <EventContainer>
                    <EventTitle><b>Come out for<Highlight> Brunch</Highlight></b></EventTitle>
                    <EventSubtitle><strong>October 10, 9-12pm</strong></EventSubtitle>
                    <p>
                    Join us for brunch to celebrate National Coming Out Day! Hosted by SUS EDI, KUS Pride, and LFSUS, this event is a space to connect with others and enjoy good food. Everyone is welcome! Abdul Ladha Science Student Centre, <strong>October 10th, 9-12PM (drop-in)</strong> For questions, please contact edi@sus.ubc.ca.
                    </p>

                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSc3QcCV1IR-gurgwHY-9WFi3B7lckYXlBxQ3L7pBVyWAfzVPw/viewform" target="_blank" rel="noopener noreferrer">
                        <InitiativeButton><strong>Event RSVP Form</strong></InitiativeButton>
                    </a>
                </EventContainer>     */}

                {/* FYC Haunted Carnival */}
                {/* <EventContainer>
                    <EventTitle><b>FYC<Highlight> Haunted Carnival</Highlight></b></EventTitle>
                    <EventSubtitle>October 30, 5-9 PM</EventSubtitle>
                    <p>
                    First years, do you have any plans this Halloween? Join the FYC at Abdul Ladha on October 30 from 5-9 PM for a spooky series of events! Bring your friends, dress up, and participate to win prizes!
                    </p>
                </EventContainer>    */}
                {/* Pizza N' Profs */}
                {/* <EventContainer>
                    <EventTitle><b>Pizza N <Highlight>Profs</Highlight></b></EventTitle>
                    <EventSubtitle><strong>November 17, 5:30 - 7:30 PM</strong></EventSubtitle>
                    <p>Join Pizza N Profs on November 17th, 5:30 to 7:30 PM at Abdul Ladha! Hear professors share their journeys, research, and advice during an interactive panel and Q&A, followed by small-group networking over pizza. Gain insights, ask questions, and connect with professors. RSVP now!</p>
                
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdUQaMu9Kacy2ZQyyosdNY5rJGiGUZbbiVW4cqRRnf5F4Mqig/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer">
                        <InitiativeButton><strong>Event RSVP Form</strong></InitiativeButton>
                    </a>
                </EventContainer>   */}

                {/* Ignite Conference */}
                {/* <EventContainer>
                    <EventTitle><b>Ignite <Highlight>Conference</Highlight></b></EventTitle>
                    <EventSubtitle><strong>November 22, 1:00 - 6:00 PM</strong></EventSubtitle>
                    <p>Ignite is the Science Undergraduate Society`&apos;`s annual career conference, offering students interactive workshops, industry panels, and networking opportunities with professionals. Join us on November 22 to explore diverse science careers and gain insights to shape your professional journey.</p>
                
                    <a href="https://www.instagram.com/susubc/?hl=en" target="_blank" rel="noopener noreferrer">
                        <InitiativeButton><strong>Find out more</strong></InitiativeButton>
                    </a>
                </EventContainer>   */}

                
                {/* Festive Face Off */}
                {/* <EventContainer>
                    <EventTitle><b>Festive <Highlight>Face Off</Highlight></b></EventTitle>
                    <EventSubtitle><strong>November 27, 7:30 - 10:30 PM</strong></EventSubtitle>
                    <p>Come join the SUS Social Committee at Festive Face-Off, happening on November 27th from 7:30-10:30PM at Abdul Ladha! A cozy evening of mini games, a big game of Jeopardy, prizes, pizza, and hot chocolate! Sign up in groups of 3-6 or as an individual (and we`&apos;`ll place you in a team)! RSVP now!</p>
                    <a href="https://forms.gle/X9NFouwdjdwNHjhc8" target="_blank" rel="noopener noreferrer">
                        <InitiativeButton><strong>Event RSVP Form</strong></InitiativeButton>
                    </a>
                </EventContainer>   */}

                {/* Ball till you Fall */}
                {/* <EventContainer>
                    <EventTitle><b>Ball Till You <Highlight>Fall</Highlight></b></EventTitle>
                    <EventSubtitle><strong>November 28, 1:00 - 5:00 PM</strong></EventSubtitle>
                    <p>SUS Sports is back with another tournament! This time we`&apos;`re hitting the court for a 4v4 Half-Court Basketball Showdown! Bring your squad and make sure to have at least one girl on court at all times. We`&apos;`ve got a Competitive bracket (with a $200 prize) and a Just-for-Fun court so sign up accordingly!</p>
                
                    <a href="https://www.bouncelife.com/events/6906821deebb2acd35f0b227" target="_blank" rel="noopener noreferrer">
                        <InitiativeButton><strong>Event RSVP</strong></InitiativeButton>
                    </a>
                </EventContainer>   */}

                {/* FYC House Party */}
                <EventContainer>
                    <EventTitle><b>FYC House <Highlight>Party</Highlight></b></EventTitle>
                    <EventSubtitle><strong>January 16th, 7 PM - 10 PM</strong></EventSubtitle>
                    <p>Attention First Years! FYC is hosting a WHITE LIES themed winter HOUSE PARTY, January 16th, Abdul Ladha Center, 7pm-10pm! Free food and fun vibes. No better way to begin the cold return to campus! Photo Booth, giveaways, and more… RSVP TODAY</p>
                
                    <a href=" https://www.bouncelife.com/events/69470e6ec4ce1255cfef0e74" target="_blank" rel="noopener noreferrer">
                        <InitiativeButton><strong>Event RSVP</strong></InitiativeButton>
                    </a>
                </EventContainer>  
                
                {/* SCI Week */}
                <EventContainer>
                    <EventTitle><b>SCI <Highlight>Week</Highlight></b></EventTitle>
                    <EventSubtitle><strong>January 12 - 16</strong></EventSubtitle>
                    <p>Introducing… SCIENCE WEEK 2026! From January 12th to 16th, come join us for a full week of fun! With events ranging from dodgeball, to trivia, to crafts, SCI Week has something for everyone! For more info and to RSVP, check out @susubc on Instagram</p>
                
                    <ButtonRow>
                        <a
                        href="https://www.bouncelife.com/events/6954513be8b73672d1d4ad12"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <InitiativeButton>RSVP: Charcuterie</InitiativeButton>
                        </a>

                        <a href="https://www.bouncelife.com/events/695323cdbd51a7842448be0a">
                            <InitiativeButton>RSVP: Bunny Yoga</InitiativeButton>
                        </a>

                        <a href="https://doodle.com/sign-up-sheet/participate/2d7b2048-5ab2-45e6-9fb4-f33a60e4bcce/select">
                            <InitiativeButton>RSVP: Trivia</InitiativeButton>
                        </a>
                    </ButtonRow>
                </EventContainer>          
            </TopContainer>
            <Footer/>
        </>
    )
}

// ===== SUBTITLE ===== //

const HighlightLink = styled.a`
    color: #0073e6;
    font-weight: bold;
    text-decoration: underline;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #f0f8ff;
        color: #005bb5;
        text-decoration: none;
        border-radius: 4px;
        padding: 0 4px;
    }
`;

const InstagramLink = styled(HighlightLink)`
    color: #e4405f;

    &:hover {
        background-color: #ffe6ec;
        color: #c13584;
    }
`;

// ===== INITIATIVES STYLES ===== //

const MentorshipButtonsContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px; 
`;

const InitiativeButton = styled.button`
    background-color: transparent;
    color: #222755;
    padding: 15px 35px;
    border-radius: 30px;
    border: 1px solid #222755;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 600;
    transition:
        background-color 0.3s ease,
        color 0.3s ease,
        border-color 0.3s ease;

    &:hover {
        color: #0052ff;
        border: 1px solid #0052ff;
    }
`;
const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap; /* allows stacking on small screens */
`;



// ====== COLLAGE STYLES ====== //

const CollageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: masonry;
    gap: 15px;
    margin: 20px 0;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const CollageImage = styled(Image)`
    border-radius: 12px;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
    object-fit: cover;
    width: 100%;
    height: auto;
    grid-column: span ${(props) => props.$span || 3};
    transform: rotate(${() => Math.random() * 4 - 2}deg);
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05) rotate(0deg);
        z-index: 10;
    }
`;

// ====== EVENTS STYLES ======

const FlagshipEventsContainer = styled.div`
    margin-top: 1rem;
    margin-bottom: 3rem;
`;

const Title = styled.h1`
    font-size: 3rem;
    color: #222755; 
`;

const EventTitle = styled.h1`
    font-size: 2rem;
    color: #222755; 
`;

const EventSubtitle = styled.h2`
    font-size: 1.25rem;
    color: #222755; 
`;

const EventContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    margin-bottom: 3rem;
`;

// =============== EXTERNAL SOURCES =============== //

const ExternalSourcesContainer = styled.div`
    width: 95%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 40px;

    background-color: rgba(255,255,255, 0.8);
    margin-bottom: 4rem;
    padding: 30px 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);

    @media (max-width: 768px) {
        display: none; /* Hide on screens smaller than 768px */
    }
`;

const CalendarSection = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InstagramSection = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

const CalendarFrame = styled.iframe`
    border: none;
    border-radius: 10px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 800px;
    height: 600px;
`;

const InstagramFrame = styled.iframe`
    border: none;
    border-radius: 10px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    width: 400px;
    height: 600px;
`;

// ====== MISC ====== //

const TopContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 180px;
    padding: 0 20px;
    align-items: center;
`;

const Highlight = styled.span`
    color: #0173BE;
`;

