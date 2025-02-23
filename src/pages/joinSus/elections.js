import styled from "styled-components";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
// import elect1 from "../../../public/images/elections-images/elect1.jpg"
// import elect2 from "../../../public/images/elections-images/elect4.jpg"
// import elect3 from "../../../public/images/elections-images/3.jpg"

export default function Elections() {
    return (
        <Background>
            <Navbar />
            <Content>
                <Title>Spring Elections <Span>2025</Span></Title>

                <p>Hello candidates! Use this page as a one-stop shop for all of your documents this election.</p>

                <ImageContent>
                <Image src="/images/elections-images/elect1.JPG" width={350} height={233} style={{ margin: '20px', borderRadius: '20px' }}/> 
                <Image src="/images/elections-images/elect4.JPG" width={350} height={233} style={{ margin: '20px'}}/> 
                <Image src="/images/elections-images/3.JPG" width={350} height={233} style={{ margin: '20px', borderRadius: '20px' }}/> 
                </ImageContent>

                <h1>Elections Documentation</h1>
                <p>Click the links below to learn more:</p>

                <ul>
                    <li>
                        <strong>
                            <a href="https://ubc.ca1.qualtrics.com/jfe/form/SV_9HPKY4dJEkXyQB0" target="_blank" rel="noopener noreferrer">Nomination Form</a>
                        </strong>: The official form to nominate a candidate for an executive position.
                    </li>
                    <HalfBreak/>
                    <li>
                        <strong>
                            <a href="https://docs.google.com/document/d/1nZQO15ZUPUvvWgaWa9kcIuwDhDc8G-4dtZTcKDbTNzs/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Campaign Violations & Penalties Document</a>
                        </strong>: Must be read in full prior to promoting your platform.
                    </li>
                    <HalfBreak/>
                    <li>
                        <strong>
                            <a href="https://docs.google.com/document/d/1qj7fmKhLpuGcvk1MUApgeDasohl71NjwB9-k_dhR2F4/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Campaign Guidelines</a>
                        </strong>: Must be read in full once we have confirmed you have met the minimum cut-off for nominations. All of the important dates and deadlines are laid out in this document.
                    </li>
                    <HalfBreak/>
                    <li>
                        <strong>
                            <a href="https://docs.google.com/document/d/18vAnNcWOyUHim9kp-Tey2EBFPENLhuqHVgBeeSkbLd0/edit" target="_blank" rel="noopener noreferrer">Executive Brochure</a>
                        </strong>: Use this visually stimulating aid to learn more about the history of SUS and the roles of its executive members.
                    </li>
                </ul>
                
                <h1>Elections Timeline</h1>

                <Timeline>
                    <TimelineItem>
                        <Circle />
                        <TimelineContent>
                            <Date>Friday, February 14th</Date>
                            <Time>12:00 AM</Time>
                            <Description>Nomination submissions open with Qualtrics survey</Description>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <Circle />
                        <TimelineContent>
                            <Date>Sunday, March 2nd</Date>
                            <Time>11:59 PM</Time>
                            <Description>Deadline for completed nomination submissions</Description>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <Circle />
                        <TimelineContent>
                            <Date>Tentative: Wednesday, March 5th</Date>
                            <Time>[6:00 PM]</Time>
                            <Description>MANDATORY All Candidates Meeting (via Zoom)</Description>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <Circle />
                        <TimelineContent>
                            <Date>Sunday, March 8th</Date>
                            <Time>11:59 PM</Time>
                            <Description>Deadline for headshot/blurb submissions</Description>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <Circle />
                        <TimelineContent>
                            <Date>Monday, March 10th</Date>
                            <Time>12:00 AM</Time>
                            <Description>Campaigning Begins</Description>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <Circle />
                        <TimelineContent>
                            <Date>Thursday, March 13th</Date>
                            <Time>[12 PM - 6 PM]</Time>
                            <Description>All Candidates Forum</Description>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <Circle />
                        <TimelineContent>
                            <Date>Monday, March 17th</Date>
                            <Time>12:00 AM</Time>
                            <Description>Voting opens (https://amsvoting.as.it.ubc.ca)</Description>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <Circle />
                        <TimelineContent>
                            <Date>Wednesday, March 26th</Date>
                            <Time>11:59 PM</Time>
                            <Description>Campaign ends AND voting closes</Description>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <Circle />
                        <TimelineContent>
                            <Date>Tentative: Friday, March 28th</Date>
                            <Time>[Time TBD]</Time>
                            <Description>Elections Viewing Party</Description>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>

                <h1>Voting</h1>
                <h3><Span>Voting instructions</Span></h3>
                <p>To vote, click the login button after clicking the link and login with your CWL. The ballot will appear as the top item under “Current Ballots” and click “Vote now!” To cast your ballot. Note you are only able to vote for candidates that apply to you (eg you can only vote for candidates that represent the current major you’re in, or if you’re in First Year, you will only be able to vote for First Year Reps and not the specialization reps. This does not apply to the role of AMS representative).</p>

                <ButtonHollowBlack><Link href="https://amsvoting.as.it.ubc.ca/">Vote Here</Link></ButtonHollowBlack>
            
                <h1>Candidates Descriptions</h1>
                <p>See information in this <a href="https://suselections.carrd.co/">link</a></p>
            
                <p>The SUS Elections are independently administered by the Elections Administrators. For any questions regarding the Spring 2024 Elections, contact them at <a href="mailto:elections@sus.ubc.ca">elections@sus.ubc.ca</a>
</p>
            </Content>
            <Footer />
        </Background>
    )
}

const HalfBreak = styled.div`
    height: 0.5em; /* Adjust the height to your desired size */
    margin: 0; /* Remove any default margins */
`;

const Title = styled.div`
    font-size: 35px;
    font-weight: 700;
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
    justify-content: center;
    text-align: center;
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

const Span = styled.a`
    color: #001961;
    cursor: pointer;
    text-decoration: none;
`;

const Timeline = styled.div`
    position: relative;
    padding: 0px 0;
    margin: 0 auto;
    width: 100%;
    max-width: 800px;

    &:before {
        content: '';
        position: absolute;
        left: 0%;
        top: 0;
        height: 100%;
        border-left: 2px solid #001961;
        transform: translateX(-50%);
    }
`;

const TimelineItem = styled.div`
    position: relative;
    padding: 20px 0;
    display: flex;
    align-items: flex-start;
    
    &:not(:last-child) {
        margin-bottom: 0px;
    }
`;

const Circle = styled.div`
    position: absolute;
    left: -10px;
    width: 20px;
    height: 20px;
    background-color: #001961;
    border-radius: 50%;
    z-index: 1;
`;

const TimelineContent = styled.div`
    margin-left: 40px;
    width: calc(100% - 40px);
`;

const Date = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: #222755;
`;

const Time = styled.div`
    font-size: 16px;
    color: #555;
`;

const Description = styled.div`
    margin-top: 5px;
    font-size: 16px;
    color: #333;
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

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`
