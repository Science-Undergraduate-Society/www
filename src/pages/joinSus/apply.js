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
                <JoinTitle>Summer 2025 hiring is closed!</JoinTitle>
                <h3>Thank you to everyone who applied this summer! If you missed this round, stay tuned—more opportunities will open during Fall 2025 hiring!.</h3>
                <h1>Join the <Span>Society</Span></h1>

                {/* <h3>Apply today on UBC <a href="https://ubc-csm.symplicity.com/">CareerOnline!</a></h3>
                <p>
                  Click <a href="https://docs.google.com/document/d/1x5a8yTuR2oakSCWZM-cklZ0uwkt2foglk88KW5d1Zc0/edit?tab=t.0" target="_blank" rel="noopener noreferrer">here</a> to learn about all the portfolios, committees, and positions!
                </p> */}

                {/* <HiringTimelineList>
                  <h3>Hiring Timeline:</h3>
                  <div>(1) Applications Open: May 15, 2025 00:00 PDT</div>
                  <div>(2) Applications Close: May 24, 2025 23:59 PDT</div>
                  <div>(3) Interview Offers: May 28, 2025</div>
                  <div>(4) Interview Period: May 29, 2025 - June 5, 2025</div>
                  <div>(5) Position Offers: June 11, 2025</div>
                </HiringTimelineList> */}

                <EventCardsContainer>
                <EventCard>
                  <Image src="/images/apply-images/summer.JPG" alt="Description" width={500} height={300} />
                  <h3>Summer Hiring</h3>
                  <p>The UBC Science Undergraduate Society encourages Science students from all abilities, experiences, and backgrounds to apply. We are committed to fair and equitable hiring processes. No experience in SUS is required! Fresh perspectives are encouraged and highly welcome.</p>
                  
                  <p>Assistant to Vice-presidents, Committee chairs, and General Committee positions are hired in the summer, in mid to late May. Positions are posted on CareersOnline, so keep your eyes peeled around May! We also usually have a Facebook event and Instagram post that has all positions available, so look out for an event that is typically named “SUS Executive Hiring 20XX [Summer]”. No prior experience is needed, but a cover letter and resume are. </p>
                  <Span href="https://docs.google.com/document/d/1ca6Tsa4BK0e6NhS5Yq7xsYRVf0EBEm-49FTIC740XNg/edit?usp=sharing">More Info &gt;</Span>
                </EventCard>

                <EventCard>
                  <Image src="/images/apply-images/fall.jpg" alt="Description" width={500} height={300} />
                  <h3>Fall Hiring</h3>
                  <p>General committee positions are hired in early September! To apply, follow our <Span href="https://instagram.com/susubc">Instagram </Span> and check our linktree for hiring information closer to the dates. A cover letter and resume will be required and submitted to CareersOnline. No prior experience is needed!</p>
                  
                  <Span href="https://www.facebook.com/susubc/">More Info &gt;</Span>
                </EventCard>
                </EventCardsContainer>

                <h1>Join the <Span>Student Council</Span></h1>
                <p>The election process is relatively simple: get signatures and become nominated, campaign for votes, and then… get voted in!</p>
                <p>
                    If you are interested in representing your major, check out the <a href="https://www.instagram.com/sus.elections/" target="_blank" rel="noopener noreferrer">SUS elections instagram </a> to learn more!
                </p>

                <ImageContent>
                <Image src="/images/apply-images/apply8.png" width={350} height={233} style={{ margin: '20px', borderRadius: '20px' }}/> 
                <Image src="/images/apply-images/apply9.png" width={350} height={233} style={{ margin: '20px'}}/> 
                <Image src="/images/apply-images/apply10.png" width={350} height={233} style={{ margin: '20px', borderRadius: '20px' }}/> 
                </ImageContent>

                <h1>Join <Span>One-time-experience Positions</Span></h1>
                <ul>
                    <li>First week Event Volunteer (Late August - Early September)</li>
                    <li>RXN Leader or Event Volunteer (Early September - Late September)</li>
                    <li>Sciweek Event Volunteer (November - January)</li>
                    <li>Scigrad Event Volunteer (February - March)</li>
                </ul>

                <ImageContent>
                <Image src="/images/apply-images/apply5.JPG" width={350} height={233} style={{ margin: '20px', borderRadius: '20px' }}/> 
                <Image src="/images/apply-images/apply6.jpg" width={350} height={233} style={{ margin: '20px'}}/> 
                <Image src="/images/apply-images/apply7.jpg" width={350} height={233} style={{ margin: '20px', borderRadius: '20px' }}/> 
                </ImageContent>

                <br></br>

                <JoinTitle>SUS <Span>Organizational Structure</Span></JoinTitle>

                <br></br>
                <hr></hr>

                <h2><Span>Presidential</Span> Portfolio</h2>
                <p>The Presidental Portfolio is an executive team that includes the SUS Executive Committee and Projects Commission, the EDI and HR Working Groups. They have the opportunity to represent science students at several Faculty of Science meetings.</p>

                <h2><Span>Administration</Span> Portfolio</h2>
                <p>The Administration Portfolio directly communicates with and support Science Clubs, promote sustainability, oversee building management for the Abdul Ladha Science Student Centre, organize SUS documents and meeting minutes, and maintain the SUS code and policy.</p>

                <h2><Span>Academic</Span> Portfolio</h2>
                <p>The Academic Portfolio is there to enhance student academic experiences, by offering mentorship opportunities, and promoting physical and mental wellness outside of the lecture hall. They are also there to share the student perspective, and support accessibility and inclusion on the Skylight Development Grants, Teaching and Learning Enhancement Fund (TLEF), Science Curriculum, and Killam Teaching Awards Committees. </p>

                <h2><Span>Communications</Span> Portfolio</h2>
                <p>The Communications portfolio includes the following commissions: marketing, productions, sales, graphic design, visual media and webmasters.</p>

                <h2><Span>External</Span> Portfolio</h2>
                <p>The External portfolio oversees all things relating to Community Engagement, Careers and Professional Development, Corporate Relations, and Student Benefits. The team works to collaborate with external organizations and campus partners, provide networking, volunteering and career development opportunities, advocate for humanitarian causes, maintain the Blue Card science student discount program, and represent the full diversity of our student groups.</p>

                <h2><Span>Finance</Span> Portfolio</h2>
                <p>The Finance portfolio provides financial support to a variety of students and clubs across campus. They have the mission to increase grant/subsidy visibility and budget transparency.</p>

                <h2><Span>Internal</Span> Portfolio</h2>
                <p>The Internal Portfolio relates to anything and everything that concerns the inner workings of SUS and here are the following committees within the portfolio: Internal Committee, Elections, First Year Committee and Science Student Recognition Awards.</p>

                <h2><Span>Student Life</Span> Portfolio</h2>
                <p>The Student Life Portfolio is responsible for flagship events such as Science RXN, Science Week, and Science Graduation, as well as the Social and Sports Working Group events throughout the school year. The Student Life Portfolio aims to plan and execute events that get the student body excited to participate and are inclusive towards everyone.</p>
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