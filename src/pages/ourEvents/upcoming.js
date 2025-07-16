import { useEffect, useState, useRef } from "react";

import styled from 'styled-components';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import eventsArray from "@/utility/events";

export default function Events() {


    return (
        <>
            <Navbar/>
            <TopContainer>
                <FlagshipEventsContainer>
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
                </FlagshipEventsContainer>
            </TopContainer>
            <Footer/>
        </>
    )
}

// ====== MISC ====== //

const ButtonHollowBlack = styled.button`
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

const Span = styled.a`
  color: #0052ff;
  cursor: pointer;
  text-decoration: none;
`;

// ====== COLLAGE STYLING =======

const EventsTopSection = styled.div`
    margin-bottom: 1rem;
    width: 100%;

    display: flex;
    align-items: center;

    @media (max-width: 1000px) {
        flex-direction: column;
        padding-left: 0;
    }
`;

const Arrow = styled.img`
  width: 200px;
  height: 100%;
  object-fit: cover;
`;

const TopContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 180px;
    padding: 0 20px;
    align-items: center;
`;

const EventsTitle = styled.div`
  font-size: 40px;
  font-weight: 700;

  @media (max-width: 1000px) {
    padding-left: 30px;
  }
`;

const EventsWrapper = styled.div`
    display: grid;
    gap: 2.5rem;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 800px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const Collage = styled.div`
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const EventCard = styled.div`
  max-width: 330px;
  min-width: 330px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 20px;

  img {
    width: 100%;
    height: 120px;
    object-fit: cover;
    border-bottom: 2px solid #222755;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: #222755;
  }

  p {
    font-size: 1.1rem;
    color: #555;
  }
`;

// ====== FLAGSHIP EVENTS ======

const BottomContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 180px;
    padding: 0 20px;
    align-items: center;
`;

const FlagshipEventsContainer = styled.div`
    margin-top: 1rem;
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
    width: 100%;

    @media (max-width: 1100px) {
        flex-direction: column;
    }
`;

const StyledImage = styled(Image)`
    border-radius: 5px;
    border: none; 
    width: 100%;
    height: auto;
`;