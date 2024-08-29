import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "@/components/index-components/Footer";
import {
  faSpotify,
  faYoutube,
  faFacebook,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import eventsArray from "@/utility/events";
import clubs from "@/utility/clubs";

export default function Home() {
  // SCROLL LOGIC

  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      const scrollWidth = scrollElement.scrollWidth - scrollElement.clientWidth;
      const scrollLeft = scrollElement.scrollLeft;
      const scrollPercent = (scrollLeft / scrollWidth) * 100;
      setScrollProgress(scrollPercent);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => {
        scrollElement.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <Background>
      <Navbar />
      <Content>

        {/* Hero Section */}
        <Hero>
          <HeroText>
            <h1>SCIENCE UNDERGRADUATE SOCIETY</h1>
            <p>Representing 9,900+ UBC Science undergrads and 50 Science clubs.</p>
            <p><em>~est. 1961~</em></p>
            {/* <ButtonGroup>
              <ButtonFilledWhite>Who We Are</ButtonFilledWhite>
              <ButtonHollowWhite>Events Calendar</ButtonHollowWhite>
            </ButtonGroup> */}
          </HeroText>
        </Hero>

        {/* About Section */}
        <About>
          {/* don't remove or i'll hunt you down */}
          <TopColour>DL</TopColour>
          <AboutCollage src="/images/index-images/Collage.jpg" />
          <BottomColour></BottomColour>
          <AboutSection>
            <Who>
              <h2>Who We Are</h2>
              <p>
                Founded in 1961, the Science Undergraduate Society (or SUS) aims to promote the academic, physical, & social well-being of Science Students. Supporting over 9700+ Science Students and over 50 Science clubs, every science student is a member of SUS.
              </p>
            </Who>
            <What>
              <h2>What We Do</h2>
              <p>
                Through SUS, we aim to create and foster a sense of science community and continually promote good relations with other communities on campus. Throughout the year, dozens of <Span href="/events">events</Span> are run to in an effort to support our peers here at UBC.
              </p>
            </What>
          </AboutSection>
        </About>

        {/* Events Section */}
        <Events>
          <EventsTopSection>
            <EventsTitle>
              Check out our <Span href="/events">upcoming events</Span> hosted by the <br/> Science Undergraduate Society
            </EventsTitle>
            <Arrow src="images/index-images/(scroll).svg"/>
          </EventsTopSection>

          <Collage>
            <EventsWrapper ref={scrollRef}>
              <EventsInfo>
                <div style={ {marginBottom: "50px"} }>
                  <p>Take a look at our events calendar!</p>
                  <ButtonHollowBlack><Link href="/calendar">Calendar</Link></ButtonHollowBlack>
                </div>

                <div>
                  <p>For events organized by other science clubs, visit our list of associated clubs to find their social media.</p>
                  <ButtonHollowBlack href="/clubs"><Link href="/clubs">Our Clubs</Link></ButtonHollowBlack>
                </div>
              </EventsInfo>

              {eventsArray.map((event, index) => (
                <EventCard key={index}>
                  <img src={event.image} />
                  <h3>{event.title}</h3>
                  <p style={ {color: "grey", fontSize: "13px"} }>{event.date} @ {event.time}</p>
                  <p>{event.description}</p>
                  <Span href={event.link}>More Info --</Span>
                </EventCard>
              ))}
            </EventsWrapper>
          </Collage>

          <ProgressBarContainer>
            <ProgressBar progress={scrollProgress}></ProgressBar>
          </ProgressBarContainer>
        </Events>

        {/* Clubs Collage */}
        <ClubsCollageWrapper>
          <ClubsTitle>Science Undergraduate Society is proud to support 26 departmental and 26 non-departmental clubs. </ClubsTitle>

          <ClubsCollageContent>
            {clubs.map((club, index) => (
              <Club key={index}>
                <ClubImage src={club.image} alt={club.name} />
              </Club>
            ))}
          </ClubsCollageContent>
        </ClubsCollageWrapper>

        {/* Get Involved Section */}
        <InvolvementContainer>

          <LeftCard>
            <h2>How to Get involved</h2>
            <p>There are four different ways you can get involved with (s)us.</p>
            <ul>
              <li style={{ paddingLeft: "30px" }}>(1) Elected executive</li>
              <li style={{ paddingLeft: "30px" }}>(2) Year-round executive</li>
              <li style={{ paddingLeft: "30px" }}>(3) One-time volunteering</li>
              <li style={{ paddingLeft: "30px" }}>(4) Sponsored clubs</li>
            </ul>
            <p>
              These positions are open to ALL science students, even if you haven’t
              been a part of SUS before (this includes the elected positions).
            </p>
          </LeftCard>

          <RightCard>
            <p>(1)<br/>Once a year in spring, all science students have the opportunity to vote for the next year's President and VP’s!</p>
            <p>(2)<br/>In June and September every year, there are multiple positions that are released on <Span href="https://ubc-csm.symplicity.com/">UBC Careers Online</Span> for those wishing to get involved for the entire school year!</p>
            <p>(3)<br/>Throughout the year, large events will require the help of external volunteers. If you want to be involved with SUS but don’t want to commit long-term, this is perfect for you! Make sure to follow our <Span href="https://instagram.com/susubc">Instagram</Span> to be made aware of any volunteering opportunities!</p>
            <p>(4)<br/>SUS supports over 50 science-related clubs at UBC. Make sure to consider getting involved with them too!</p>
          </RightCard>

        </InvolvementContainer>

        {/* Abdul Ladha Section */}
        <Alssc>
          <AlsscContent>
            <Title>Abdul Ladha Science Student Centre</Title>
            <Description>The Abdul Ladha Science Student Centre (ALSSC) is the home of the Science Undergraduate Society. It exists as a social space to encourage both informal and organized academic, club, and social activities and interactions for those students enrolled in the Faculty of Science at UBC Vancouver.</Description>
            <div>
              <ButtonHollowBlack><Link href="/bookings">Room Bookings</Link></ButtonHollowBlack>
            </div>
          </AlsscContent>

          <Frame src="https://www.youtube.com/embed/t-kc4Bppv2I?si=8kjHKUHZ9ZZhmQMy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></Frame>
        </Alssc>

        {/* Podcast Section */}
        <Podcast>
          <Frame src="https://open.spotify.com/embed/show/6LvV59dTsORiXSn4z28Zon/video?utm_source=generator" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></Frame>
          
          <PodcastContent>
            <Title>SUSpisode</Title>
            <Description>In 2023, our productions team thought, "Why not start a podcast all about UBC and university life?" So they did! Join us, along with special guests from around UBC, as we chat about everything from school and life to the quirky moments that make university unique!</Description>
            <SocialMediaIcons>
              <p>Available Platforms:</p>
              <a
                  href='https://www.instagram.com/reel/CzMXIVKA-Wk/'
                  target='_blank'
                  rel='noreferrer'
                  style={{marginLeft: "20px"}}
              >
                  <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                  href='https://open.spotify.com/show/6LvV59dTsORiXSn4z28Zon?si=0f45da7172b94df9'
                  target='_blank'
                  rel='noreferrer'
              >
                  <FontAwesomeIcon icon={faSpotify} />
              </a>
              <a
                  href='https://www.youtube.com/watch?v=uklHoSMsSsY&list=PLb42V8mv92mbcVMyJma3LylkHLciwCMsn'
                  target='_blank'
                  rel='noreferrer'
              >
                  <FontAwesomeIcon icon={faYoutube} />
              </a>
            </SocialMediaIcons>
          </PodcastContent>
        </Podcast>

        {/* Shop Section */}
        <ShopSection>
          <ShopGridContainer>
            <ShopImage src="/images/shop-images/Sand-Hoodie-1.png"/>
            <ShopImage src="/images/shop-images/Black-Hoodie-1.png"/>
            <ShopImage src="/images/shop-images/Blue-Hoodie-1.png"/>
            <ShopImage src="/images/shop-images/Grey-Crew-1.png"/>
            <ShopImage src="/images/shop-images/White-Crew-1.png"/>
          </ShopGridContainer>

          <ShopInfo>
            <p style={{fontSize: "15px", color: "gray"}}>Shop</p>
            <ShopTitle>Science themed merch that lets people know you’re special</ShopTitle>
            <ShopDescription>Every year, our sales team is tasked with creating unique UBC merch that shows off the faculty of science!</ShopDescription>
            <div>
              <ButtonHollowBlack href="/shop">Shop Now</ButtonHollowBlack>
            </div>
          </ShopInfo>
        </ShopSection>
        
        {/* Footer Section*/}
        <Footer color={"white"}/>
      </Content>
    </Background>
  );
}

// =============== GENERAL =============== //

const Background = styled.main`
  width: 100%;
  height: auto;
  overflow-y: auto; 
  scroll-behavior: smooth;
  position: relative; 
  background-color: #F7F5F2;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonFilledWhite = styled.button`
  background-color: white;
  color: #222755;
  padding: 15px 20px;
  border-radius: 30px;
  border: 1px solid transparent;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: #222755;
    color: white;
    border: 2px solid white;
  }
`;

const ButtonHollowWhite = styled.button`
  background-color: transparent;
  color: white;
  padding: 15px 20px;
  border-radius: 30px;
  border: 1px solid white;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: white;
    color: #222755;
  }
`;

const ButtonHollowBlack = styled.button`
  background-color: transparent;
  color: #222755;
  padding: 15px 35px;
  border-radius: 30px;
  border: 1px solid #222755;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;

  &:hover {
    color: #0052FF;
    border: 1px solid #0052FF;
  }
`;

const Span = styled.a`
  color: #0052FF;
  cursor: pointer;
  text-decoration: none;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`

const ButtonGroup = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 20px;
  justify-content: left;
`;

// =============== HERO =============== //

const Hero = styled.div`
  background-color: #222755;
  color: white;
  width: 100%;
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 3rem;
`;

const HeroText = styled.div`
  max-width: 800px;

  h1 {
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-weight: 300;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  em {
    font-weight: 400;
    font-size: 1rem;
  }
`;

// =============== ABOUT SECTION =============== //

const About = styled.div`
  position: relative; /* Ensure the AboutSection is positioned relative to this container */
  background-color: #222755;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const AboutCollage = styled.img`
  width: 100%;
  height: auto;
  max-height: 400px;
  border: none;
  object-fit: cover;
  background-color: #F7F5F2;
`

const TopColour = styled.div`
  width: 100%;
  height: 15vh;
  background-color: #222755;
  color: #222755;
`

const BottomColour = styled.div`
  width: 100%;
  height: 15vh;
  background-color: #F7F5F2;
  color: #F7F5F2;
`

const AboutSection = styled.div`
  position: absolute;
  top: 0; /* Position at the top of the parent container */
  left: 50%;
  transform: translateX(-50%);
  z-index: 10; /* Ensure it is above other elements */
  
  background-color: white;
  width: 100%;
  max-width: 1000px;
  margin: 40px 0;
  padding: 60px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);

  @media (max-width: 650px) {
    padding: 20px;
  }
`;

const Who = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  
  border-bottom: 1px solid #808080;
  border-right: 1px solid #808080;

  padding-right: 50px;
  padding-bottom: 50px;

  h2 {
    margin-bottom: 0;
  }
  p{
    padding-left: 30px;
  }

  @media (max-width: 650px) {
    padding-bottom: 10px;

    h2 {
      font-size: 14px;
    }

    p {
      font-size: 14px;
    }
  }
`

const What = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  text-align: right;
  
  border-left: 1px solid #808080;

  padding-left: 50px;
  padding-top: 50px;

  @media (max-width: 650px) {
    padding-top: 10px;

    h2 {
      font-size: 14px;
    }

    p {
      font-size: 14px;
    }
  }
`

// =============== ABOUT SECTION =============== //

const Events = styled.div`
  margin-top: 10vh;
  width: 100%;
  padding: 70px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const EventsTopSection = styled.div`
  margin-bottom: 1rem;
  padding-left: 4rem;
  width: 100%;
  
  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding-left: 0;
  }
`

const EventsTitle = styled.div`
  font-size: 35px;
  font-weight: 700;
  
  @media (max-width: 1000px) {
    padding-left: 30px;
  }
`

const Arrow = styled.img`
    width: 200px;
    height: 100%;
    object-fit: cover;
`

const EventsWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 2.5rem;
  padding: 20px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {z
    display: none;
  }
`;

const EventsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 500px;
  margin-right: 3rem;
  margin-left: 5rem;

  background-color: white;
  padding: 40px 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`

const Collage = styled.div`
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
`

const ProgressBarContainer = styled.div`
  width: 100%;
  padding: 0 50px;
`

const ProgressBar = styled.div`
  border-radius: 5px;
  height: 4px;
  width: ${props => props.progress}%;
  background-color: grey;
  transition: width 0.2s ease;
`;

const EventCard = styled.div`
  max-width: 300px;
  min-width: 300px;
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
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #222755;
  }

  p {
    font-size: 0.9rem;
    color: #555;
  }
`;

// =============== CLUBS COLLAGE =============== //

const moveLeft = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const ClubsCollageWrapper = styled.div`
  width: 100%;
  // overflow: hidden; /* Hide the overflow to prevent scrollbars */
  background-color: #333333;
  margin: 50px 0;
  margin-bottom: 8rem;
  padding: 40px 0;
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ClubsCollageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; /* Allows wrapping to the next row */
  gap: 10px; /* Adjust the spacing between images */
  margin-top: 1rem;
  // animation: ${moveLeft} 60s linear infinite; /* Adjust the duration (30s) to control speed */
`;

const ClubsTitle = styled.p`
  color: #F7F5F2;
  text-align: center;
`

const Club = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 20px;
`;

const ClubImage = styled.img`
  width: 40px;
  height: auto;
  object-fit: cover;
`;

// =============== CLUBS COLLAGE =============== //

const InvolvementContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;
  padding: 50px;

  background-image: url('/images/index-images/get-involved-background.svg');
  background-size: 100% auto; /* 100% width, auto height */
  background-position: center;
  background-repeat: no-repeat;
`;

const Card = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 45%;
`;

const LeftCard = styled(Card)`
  h2 {
    font-size: 1.8rem;
    color: #222755;
    margin-bottom: 20px;
  }
  ul {
    list-style-type: none;
    padding: 0;
    li {
      margin: 10px 0;
    }
  }
`;

const RightCard = styled(Card)`
  p {
    margin-bottom: 15px;
  }
  a {
    color: #0052FF;
    text-decoration: none;
  }
  strong {
    color: #222755;
  }
`;

// =============== CLUBS & PODCAST =============== //

const Alssc = styled.div`
  margin-top: 20vh;
  display: flex;
  justify-content: center;
  gap: 4rem;
  width: 90%;
`

const AlsscContent = styled.div`
  display: flex;
  flex-direction: column;
  color: #222755;
  text-align: right;
  width: 60%;
  height: 100%;
`

const Podcast = styled.div`
  margin-top: 15vh;
  display: flex;
  justify-content: center;
  gap: 4rem;
  width: 90%;
`

const PodcastContent = styled.div`
  display: flex;
  flex-direction: column;
  color: #222755;
  text-align: left;
  width: 60%;
  height: 100%;
`

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 1.3rem;
`

const Description = styled.div`
  margin-bottom: 1.3rem;
  font-size: 20px;
  color: #333333
`

const Frame = styled.iframe`
  width: 40%;
  height: auto;
`

const SocialMediaIcons = styled.div`
  margin-bottom: 32px;
  display: flex;
  align-items: center;

  a {
    color: #333333;
    width: 20px;
    height: 19%;
    transition: color 200ms;
    margin-left: 15px;
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;

    :hover {
      color: #0052FF;
    }
  }
`;

// =============== ABOUT SECTION =============== //

const ShopSection = styled.div`
  margin-top: 25vh;

  background-color: white;
  width: 90%;
  max-width: 1400px;
  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);

  display: flex;
  gap: 2rem;
`

const ShopGridContainer = styled.div`
  display: flex;
  width: 70%;
`

const ShopImage = styled.img`
  width: 20%;
  height: auto;
  object-fit: cover;
`

const ShopInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 60px 0;
`

const ShopTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`

const ShopDescription = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
`