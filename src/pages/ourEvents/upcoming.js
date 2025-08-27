import { useEffect, useState, useRef } from "react";

import styled from 'styled-components';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import eventsArray from "@/utility/events";

export default function Events() {

    const events = [
        {
            title: "SUS",
            hightlight: "First Week",
            date: "September 2-5, 2025",
            description: "Get ready for an unforgettable start to the school year with the Science Undergraduate Society (SUS) First Week! Join us for four days of fun, September 2-5. Kick things off at Imagine Day & Faculty Fair on September 2nd to grab some free merch. On September 3rd, unwind at Sips and Swirls at Abdul Ladha from 6-8 p.m., where you can enjoy mocktails and paint while getting a hand or scalp massage from Lush Spa or even creating your own custom bubble bar! Show off your competitive side at Squidlympics on the Macinnes Field from 5:30-7:30 p.m. on September 4th, with a chance to win prizes. We'll end the week with our Welcome Back BBQ on September 5th outside Abdul Ladha from 5-8 p.m., featuring free food, a dunk tank, and a raffle full of exciting prizes. We can't wait to see you there!",
            images: [
                "/images/events-images/fw/fw_main5.png",
                "/images/events-images/fw/fw_main2.jpg",
                "/images/events-images/fw/fw_main1.png",
            ]
        },
        {
            title: "Science",
            hightlight: "RXN",
            date: "September 13-14, 2025",
            description: "Science RXN is the ultimate kickoff flagship event for first-year science students at UBC! Happening September 13-14, this two-day experience is designed to help you make lasting friendships and dive into campus life. Day one is packed with fun indoor and outdoor activities where you'll bond with peers through games, challenges, and team-building. On day two, dress up in blue for our signature dinner and dance, a chance to celebrate the start of your university journey with new friends and unforgettable memories. Don’t miss this exciting opportunity to connect, celebrate, and start your UBC Science adventure on the right foot!",
            images: [
                "/images/events-images/rxn/rxn1_main.JPG",
                "/images/events-images/rxn/rxn2_main.JPG",
                "/images/events-images/rxn/rxn3_main.JPG"
            ]
        }
    ]

    return (
        <>
            <Navbar/>

            <TopContainer>
                {/* Flagship Events */}
                <FlagshipEventsContainer>
                    <br/>
                    <Title><b>Welcome back! Here are some upcoming events and initiatives in September 🥳</b></Title>
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
                
                {/* Mentorship Program */}

                <EventContainer>
                    <EventTitle><b>SUS <Highlight>Mentorship Program</Highlight></b></EventTitle>

                    <p>
                        The SUS Mentorship Program helps build a connected and supportive community within UBC Science by bringing together students across different years and disciplines. Mentors are upper-year undergraduates and graduate students who volunteer their time to support newer students. Through one-on-one or small-group pairings, mentors share their experiences while mentees gain guidance and encouragement as they navigate their academic and personal journeys. The program also hosts events and workshops designed to build meaningful connections, professional development, and community building. At the end of the year, both mentors and mentees are celebrated with awards recognizing their growth and contributions.
                    </p>

                    <MentorshipButtonsContainer>
                        <a href="https://ubc.ca1.qualtrics.com/jfe/form/SV_51rDLgpIDVTciTY" target="_blank" rel="noopener noreferrer">
                            <MentorshipButton><strong>Mentee</strong> Sign Up</MentorshipButton>
                        </a>
                        <a href="https://ubc.ca1.qualtrics.com/jfe/form/SV_6XqYDjMPrFCHsZE" target="_blank" rel="noopener noreferrer">
                            <MentorshipButton><strong>Mentor</strong> Sign Up</MentorshipButton>
                        </a>
                    </MentorshipButtonsContainer>
                </EventContainer>                

                {/* Google Calendar */}
                {/* <EventsGoogleCalendar>
                    <GoogleCalendarTitle>
                        SUS 2025-2026 Events
                    </GoogleCalendarTitle>

                    <CalendarFrame
                        src="https://calendar.google.com/calendar/embed?src=c_d4a570600fdaa112f1ac7be82285135369cdeb870a16b32a4b68df61fdad7dd5%40group.calendar.google.com&ctz=America%2FVancouver" 
                        title = "SUS Events Google Calendar"
                        width="800" 
                        height="600" 
                        frameborder="0">
                    </CalendarFrame> 
                </EventsGoogleCalendar> */}
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

// ===== MENTORSHIP STYLES ===== //

const MentorshipButtonsContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px; 
`;

const MentorshipButton = styled.button`
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
    margin-bottom: 10rem;
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
    font-size: 1.5rem;
    color: #222755; 
`;

const EventContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    margin-bottom: 3rem;
`;

// =============== GOOGLE CALENDAR SECTION =============== //

// const EventsGoogleCalendar = styled.div`
//     width: 95%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//     gap: 28px;

//     background-color: rgba(255,255,255, 0.8);
//     margin-bottom: 4rem;
//     padding: 30px 20px;
//     border-radius: 10px;
//     box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
// `;

// const CalendarFrame = styled.iframe`
//     border: none;
//     border-radius: 10px;
//     box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
//     width: 100%;
//     max-width: 800px;
//     height: 600px;
// `;

// const GoogleCalendarTitle = styled.h1`
//     font-size: 3rem;
//     color: #222755; 

//     @media (max-width: 1000px) {
//         padding-left: 30px;
//     }
// `;

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
