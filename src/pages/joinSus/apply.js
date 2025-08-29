import styled from "styled-components";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function JoinSus() {
    return (
        <>
        <Navbar/>
        <Background>
            <Content>
                <JoinTitle>Fall 2025/2026 Hiring is Opening!</JoinTitle>
                <h3>
                  Join SUS through applying in our Fall 2025/2026 application cycle! 
                  We are now recruiting in all portfolios, available to all UBC Science students. 
                  This is your chance to get involved in an exciting team where you can positively impact our community!
                </h3>
                <p>
                  *First Week and Tutoring Working Groups allow a candidate to hold 2 positions concurrently.
                  For available positions and application links: Check back on September 4th!
                </p>

                <h1>Join the <Span>Society</Span></h1>

                {/* Example EventCards for Fall */}
                <EventCardsContainer>
                  <EventCard>
                    <Image src="/images/apply-images/fall.jpg" alt="Description" width={500} height={300} />
                    <h3>Fall Hiring</h3>
                    <p>
                      General committee positions are hired in early September! To apply, follow our <Span href="https://instagram.com/susubc">Instagram</Span> and check our linktree for hiring info closer to the dates. A cover letter and resume will be required. No prior experience is needed!
                    </p>
                    <Span href="https://www.facebook.com/susubc/">More Info &gt;</Span>
                  </EventCard>
                </EventCardsContainer>

                <HiringTimelineList>
                  <h3>Hiring Timeline:</h3>
                  <div>(1) Applications Open: September 4th 00:00 PDT</div>
                  <div>(2) Applications Close: September 14th 23:59 PDT</div>
                  <div>(3) Interview Offers: September 17th</div>
                  <div>(4) Interview Period: September 18th - September 27th</div>
                  <div>(5) Position Offers: October 1st</div>
                </HiringTimelineList>

                <h1>Join the <Span>Student Council</Span></h1>
                <p>The election process is relatively simple: get signatures and become nominated, campaign for votes, and then… get voted in!</p>
                <p>
                    If you are interested in representing your major, check out the <a href="https://www.instagram.com/sus.elections/" target="_blank" rel="noopener noreferrer">SUS elections Instagram </a> to learn more!
                </p>

                <ImageContent>
                  <Image alt="Council Photos 1" src="/images/apply-images/apply8.png" width={350} height={233} style={{ margin: '20px', borderRadius: '20px' }}/> 
                  <Image alt="Council Photos 2" src="/images/apply-images/apply9.png" width={350} height={233} style={{ margin: '20px'}}/> 
                  <Image alt="Council Photos 3" src="/images/apply-images/apply10.png" width={350} height={233} style={{ margin: '20px', borderRadius: '20px' }}/> 
                </ImageContent>

                <h1>Join <Span>One-time-experience Positions</Span></h1>
                <ul>
                    <li>First week Event Volunteer (Late August - Early September)</li>
                    <li>RXN Leader or Event Volunteer (Early September - Late September)</li>
                    <li>Sciweek Event Volunteer (November - January)</li>
                    <li>Scigrad Event Volunteer (February - March)</li>
                </ul>

                <ImageContent>
                  <Image alt="volunteer 1" src="/images/apply-images/apply5.JPG" width={350} height={233} style={{ margin: '20px', borderRadius: '20px' }}/> 
                  <Image alt="volunteer 2" src="/images/apply-images/apply6.jpg" width={350} height={233} style={{ margin: '20px'}}/> 
                  <Image alt="volunteer 3" src="/images/apply-images/apply7.jpg" width={350} height={233} style={{ margin: '20px', borderRadius: '20px' }}/> 
                </ImageContent>

                <br></br>

                <JoinTitle>SUS <Span>Organizational Structure</Span></JoinTitle>

                <br></br>
                <hr></hr>

                <h2><Span>Presidential</Span> Portfolio</h2>
                <p>The Presidential Portfolio is an executive team that includes the SUS Executive Committee and Projects Commission, the EDI and HR Working Groups. They have the opportunity to represent science students at several Faculty of Science meetings.</p>

                <h2><Span>Administration</Span> Portfolio</h2>
                <p>The Administration Portfolio directly communicates with and supports Science Clubs, promotes sustainability, oversees building management for the Abdul Ladha Science Student Centre, organizes SUS documents and meeting minutes, and maintains the SUS code and policy.</p>

                <h2><Span>Academic</Span> Portfolio</h2>
                <p>The Academic Portfolio enhances student academic experiences, offering mentorship opportunities, promoting wellness, supporting accessibility and inclusion, and contributing to various committees like Skylight Development Grants, TLEF, Science Curriculum, and Killam Teaching Awards.</p>

                <h2><Span>Communications</Span> Portfolio</h2>
                <p>The Communications portfolio includes marketing, productions, sales, graphic design, visual media, and webmasters.</p>

                <h2><Span>External</Span> Portfolio</h2>
                <p>The External portfolio oversees Community Engagement, Careers and Professional Development, Corporate Relations, and Student Benefits. The team collaborates with external organizations, provides networking and volunteering opportunities, advocates for humanitarian causes, and represents the diversity of our student groups.</p>

                <h2><Span>Finance</Span> Portfolio</h2>
                <p>The Finance portfolio provides financial support to students and clubs, aiming to increase grant visibility and budget transparency.</p>

                <h2><Span>Internal</Span> Portfolio</h2>
                <p>The Internal Portfolio handles the inner workings of SUS, including the Internal Committee, Elections, First Year Committee, and Science Student Recognition Awards.</p>

                <h2><Span>Student Life</Span> Portfolio</h2>
                <p>The Student Life Portfolio organizes flagship events such as Science RXN, Science Week, and Science Graduation, as well as social and sports events, aiming for inclusive participation and student engagement.</p>
            </Content>
        </Background>
        <Footer/>
        </>
    )
}


const HiringTimelineList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`

const Title = styled.div`
    color: black;
`

const JoinTitle = styled.div`
  font-size: 35px;
  font-weight: 700;
  align-self: center;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const ImageContent = styled.div`
  font-size: 35px;
  font-weight: 700;
  align-self: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 25px; 
`

const Background = styled.div`
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`
const EventCardsContainer = styled.div`
  display: flex;
  gap: 60px;
  justify-content: center;
  flex-wrap: wrap; /* Allows the cards to wrap if screen size is too small */
  margin-top: 30px;
  margin-bottom: 50px;
`;

const EventCard = styled.div`
  max-width: 500px;
  min-width: 500px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 20px;

  img {
    width: 100%;
    height: 200px;
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

const StyledButton = styled.div`
    display: inline-block;
    width: 210px;
    padding: 10px 20px;
    background-color: #0070f3;
    color: white;
    text-align: center;
    border-radius: 5px;
    text-decoration: none;
    margin-top: 20px;
    cursor: pointer;

    &:hover {
        background-color: #005bb5;
    }
`

const Content = styled.div`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  padding: 200px 10px 20px;
  width: 100%;
  max-width: 1200px;
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
  color: #001961;
  cursor: pointer;
  text-decoration: none;
`;

const ButtonGroup = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 20px;
  justify-content: left;
`;
