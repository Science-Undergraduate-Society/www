import styled from "styled-components";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
// import elect1 from "../../../public/images/elections-images/elect1.jpg"
// import elect2 from "../../../public/images/elections-images/elect4.jpg"
// import elect3 from "../../../public/images/elections-images/3.jpg"
const tutors = [
    {
        name: "Rachel Dong",
        courses: "SUS President",
        image: "/images/2025-elections/rachel.png",
        description: "Hi UBC Science! My name is Rachel Dong (she/her) and I am running to be your next SUS President. As the current Vice-President External, my portfolio launched the Abdul Ladha Food Pantry and Community Eats, expanded career development opportunities, and improved the Blue Card Discount Program to make savings more accessible. Throughout my three years in the Science Undergraduate Society, I have acquired the knowledge and skillset needed to successfully lead the society. I am committed to data-driven ADVOCACY, building meaningful CONNECTIONS across campus, and advancing EQUITY, DIVERSITY & INCLUSION initiatives.\n\nPlatform Highlights:\n\n● ADVOCACY: Maintain a close working relationship with the Dean of Science’s Office, AMS, and departmental representatives to ensure student voices from all disciplines are represented. Utilize survey results to guide effective advocacy and SUS initiatives that students want to see.\n● CONNECTIONS: Foster strong relations with student groups by increasing support for Science clubs and streamlining external collaborations to maximize outreach. Implement an up-to-date calendar on the SUS Website to keep students informed.\n● EQUITY, DIVERSITY & INCLUSION: Promote inclusivity by seeking input from groups that support underrepresented students, expanding the BIPOC Community Market, and increasing accessibility of resources for BIPOC, 2SLGBTQI+, and neurodiverse students.\n\nVisit @rachel4suspresident on Instagram for more information!"
    },
    {
        name: "Carmen Choo",
        courses: "VP Communications",
        image: "/images/2025-elections/carmen.png",
        description: "Hi UBC Science! My name is Carmen and I am so excited to be running for your next VP Communications. As the current Associate Vice President Communications and former Visual Media Chair, I’m ready to streamline Communications and bring new ideas to our Community.\n\nHere’s my plan:\n● Feature more clubs on our platforms by collaborating on filming initiatives, merchandise, and create a new 'all clubs' newsletter\n● Host SUS’ first Hackathon open to all experience levels\n● Increase funding efforts for more giveaways and to subsidize merchandise costs\n● Strengthen website resources by featuring more career development, research opportunities and club events\n● Reduce the number of posting and increase visual standards on our platforms by introducing stricter marketing guidelines\n\nFor more details on my platform please feel free to email me at carm01@student.ubc.ca. Thank you so much for your support!"
    },
    {
        name: "Renee Hui",
        courses: "VP Academics",
        image: "/images/2025-elections/renee.png",
        description: "As your next VP Academics, I got it all covered!\n\n● Course support: Mentorship, peer-tutor, office-hours\n● Course materials: Free textbook, second-hand supplies\n● Study sphere: Platform for science students to share course materials, practice questions, review sheets\n● Research and career opportunities: Website for PIs across UBC to connect with students, LinkedIn UBC version\n● Open to listen to YOUR needs\n● Support you in making the most out of your academic journey\n\nHeyyyy thanks for dropping by! If you are here, why not vote for Renee as VP Academics? I am reliable (don’t worry, I will make your dream uni-life turn into reality), enthusiastic (come talk to me, I’m nice, I don’t bite), and responsible (I will get work done, trust!). I am committed to enhancing your UBC life and making your academic life easier!!\n\nEver struggled to find the right resource to help with a specific course? Ever forced to buy the textbook that cost at least 10 big way runs? Ever tried to cram for the final exam that allows a review-sheet but couldn’t find one online? I gotchu. Vote for Renee and have all these resources available to you! Make your dream uni life become reality by voting for RENEE!!"
    },
    {
        name: "Nicholas Samuelson",
        courses: "VP Academics",
        image: "/images/2025-elections/nick.png",
        description: "Hey, UBC Science! I'm Nick, a 4th-year CAPS student and your current Associate Vice-President Academic; I'm excited and honoured to be running to be your next VP Academic. This year, our portfolio has made significant strides to support science students at UBC, including:\n\n● Lobbying for hiring a faculty-embedded counsellor to enhance student mental and physical well-being.\n● Launching the SUS Tutoring Program, providing free, accessible support for popular science courses.\n● Collaborating with multiple constituencies to distribute a survey to gather student feedback on Workday, driving our advocacy efforts.\n\nNext year, I’m committed to building on these initiatives by continuing to push for meaningful change at the faculty level, while creating events and programs that truly enhance your academic experience at UBC.\n\nKey Focus Areas of My Platform:\n● Informed Advocacy: Using student survey data to guide and amplify advocacy efforts.\n● Expanded Access: Connecting students to more research opportunities and academic resources.\n● Policy Improvement: Strengthening the exam hardship policy and developing a progressive AI-use policy.\n● Better Facilities & Recorded Lectures: Securing 24-hour student access to faculty buildings and pushing for universal recorded lectures.\n\nFor a full breakdown of my campaign, visit https://nickvpacademic.my.canva.site/. I appreciate your consideration!"
    },
    {
        name: "Bardia Mohammadizadeh",
        courses: "AMS Representative",
        image: "/images/2025-elections/bardia.png",
        description: "Hey Science Students! I’m Bardia, studying second-year Neuroscience. For the past two years, I’ve been advocating for Science representation in student government, and I hope to now represent you as your next AMS representative!\n\nI have previously campaigned for various positions within the AMS, such as the SLFS, UBC Senate, and UBC Board of Governors, with the primary goal of addressing the underrepresentation of Science students and standing up for our needs.\n\nWithin AMS council, I will focus on initiatives like more workshops and support for students looking for undergraduate research opportunities and financial aid. Additionally, to combat the $5-6m that is left unused in financial aid every year, I will be advocating for the creation of a brand new easy-to-use financial aid portal, making those resources more accessible to us students.\n\nI run on a platform of transparency and communication. I will post regular updates on AMS Council activities, including summaries and more, accessible for all to see on social media.\n\nI have made sure to make our voices heard, and will continue to do so! Vote Bardia for AMS rep!\n\nFollow me on IG to learn more, @votebardia"
    },
    {
        name: "Pri Cooner",
        courses: "VP Administration",
        image: "/images/2025-elections/pri.png",
        description: "Hey UBC Science! My name is Pri Cooner (He/Him) and I am currently a third-year Neuroscience student. I am super excited to be running to be your next Vice President Administration! As someone who has been involved in SUS previously as a member of the First Year Committee, I feel I have experienced firsthand the great culture that is fostered through many events and programs, helping students garner new connections whilst developing professionally. However, we can do more to strengthen our community and ensure every student has a meaningful and positive experience. As a former Sustainability Chair passionate about environmental justice, I will push for stronger sustainable event planning and greater transparency in code and policy, promoting accessibility and student-driven policy. Additionally, I will work with other portfolios and working groups to make the Abdul Ladha Science Student Centre a space for everyone, for any vibe, whether you want to chill and eat with friends or seriously lock in. I hope you too can join me on this journey to create a fun, inclusive, and hard working community for all!"
    },
    {
        name: "Alan Wei",
        courses: "VP Administration",
        image: "/images/2025-elections/alan.png",
        description: "Hello Science students! My name is Alan Wei, and I’m running to be your next VP Administration. Over the past two years, I’ve gained valuable experience across multiple SUS portfolios — from Administration and Student Life portfolios as a Social Working Group Administrative Assistant to my current role in the External portfolio as a Careers and Professional Development Coordinator. With this diverse perspective on SUS operations, I hope to implement meaningful improvements that foster a more welcoming and structured science community.\n\nPlatform Highlights:\n\n● Enhance Abdul Ladha Student Science Centre (ALSSC) Experience: Supply students with more building amenities and extend building hours during finals season\n● Streamline ALSSC Building Event Booking: Introduce a faster and automatic booking system to simplify event planning and availability viewing\n● Support SUS Club Growth: Increase funding for events and marketing opportunities by collaborating with the Communications portfolio on SUS social media\n● Improve Governance Transparency: Clarify SUS codes and policies by providing better resources to help students understand how they apply to SUS activities and club regulations\n● Promote Sustainability: Integrate sustainable practices across all SUS activities and ensure consistent implementation within every portfolio\n\nFor more information about my platform, visit @votealanwei on instagram!"
    },
    {
        name: "Catherine Jiang",
        courses: "VP External",
        image: "/images/2025-elections/catherine.png",
        description: "Hi UBC Science! I am Catherine Jiang and I am a 2nd-year Integrated Sciences student (Preventative Medicine & Public Health) running to be your next VP External for the Science Undergraduate Society. From starting off as a coordinator for the Careers & Professional Development (CAPD) committee to becoming this year’s CAPD Co-Chair for the External portfolio, I am passionate about driving change by:\n\nPlatform Highlights:\n\n● CONNECT: Facilitate networking sessions and expose students to career opportunities via the bi-monthly Coffee Chats initiative and the annual career conference IGNITE\n● CONTRIBUTE: Build liaisons between community organizations and the undergraduate body by organizing Community Engagement Fair and enlarging accessibility of the Community Dinner initiative\n● COLLABORATE: Fortify community partnerships by expanding the SUS Blue Card program and grow the sponsorship network by showcasing local businesses\n● CULTIVATE: Celebrate student leaders and campus-wide breakthroughs by hosting the Science Student Recognition Awards Night\n\nI am always down to chat and I welcome your input and feedback. Check out my campaign on Instagram @catherine4vpexternal."
    },
    {
        name: "Jenny Lee",
        courses: "VP Student Life",
        image: "/images/2025-elections/jenny.png",
        description: "Hello, my name is Jenny Lee and I am running to be your next VP Student Life! Over the past two years, I have been dedicated to actively enhancing student experiences through my roles as Associate Vice President Internal and FYC Co-Chair within the Science Undergraduate Society. My involvement across various working groups have given me a well-rounded understanding of how to deliver engaging and impactful events for all.\n\nAs VP Student Life, I will aim towards:\n\nPlatform Highlights:\n\n● Community and Experiences: Whether relaxing animal therapy sessions, mini SUSports tournaments, or unforgettable nights out, I will create events that foster belonging, excitement, and lasting memories. Through collaborations, integrating feedback, and offering valuable experiences, I will drive towards high-turnout, high-impact events that reflect the diverse interests of our Science student body.\n● Accessibility and Affordability: Every student should experience student life without barriers. I will prioritize optimizing budgets, offering giveaways and prizes, and providing low-cost to free events that will be inclusive and budget-friendly for all.\n\nWith a student-first approach, I am committed to making Science Student Life more dynamic, inclusive, and exciting than ever before– leading with passion and a purpose.\n\nVisit @votejennylee on Instagram to learn more about my platform!"
    },
    {
        name: "Anika Lee",
        courses: "VP Finance",
        image: "/images/2025-elections/anika.png",
        description: "Hey UBC Science! I’m Anika Lee, a third-year neuroscience student, and I’m running to be your next VP Finance! With 3 years of experience in SUS - as First Year Committee Coordinator, Internal Committee Co-Chair and Associate Vice President Internal - I’ve gained a thorough understanding of the importance of an organized, transparent budgeting system to support science students. Following this, I aim to strengthen the finance portfolio by increasing financial literacy, expanding access to grants and making SUS spending transparent.\n\nPlatform Highlights:\n\n● INCREASE FINANCIAL LITERACY: Our education system does not equip us with the financial knowledge needed to survive as adults. I will host frequent workshops and events to help students navigate taxes and budgeting.\n● INCREASE ACCESS TO GRANTS: How much do you know about the grants and bursaries available to you? Through an online metric, I will compile funding resources for science students and increase awareness of both SUS and non-SUS funding opportunities through informative posts and events. I will also ensure grants are distributed fairly and equitably.\n● MAKE SUS SPENDING TRANSPARENT: I’ll implement bi-termly budget updates and spreadsheets breaking down SUS spending to the specific events funds are being used for.\n\nFollow @vote.anikalee to learn more about my plans!"
    },
];
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

                <ButtonHollowBlack><Link href="https://ams.simplyvoting.com/">Vote Here</Link></ButtonHollowBlack>

                <HalfBreak></HalfBreak>
                <HalfBreak></HalfBreak>
                <h1>Candidates Descriptions</h1>

                {tutors.map((tutor, index) => (
                        <ExecutiveCard key={index}>
                            <ExecutiveImage src={tutor.image} alt={tutor.name} />
                            <ExecutiveTextContainer>
                                <ExecutiveTitle>{tutor.name}</ExecutiveTitle>
                                <ExecutiveName><b>Position:</b> {tutor.courses}</ExecutiveName>
                                <ExecutiveDescription>{tutor.description}</ExecutiveDescription>
                            </ExecutiveTextContainer>
                        </ExecutiveCard>
                    ))}
                {/* <p>See information in this <a href="https://suselections.carrd.co/">link</a></p> */}
            
                <p>The SUS Elections are independently administered by the Elections Administrators. For any questions regarding the Spring 2025 Elections, contact them at <a href="mailto:elections@sus.ubc.ca">elections@sus.ubc.ca</a>
</p>
            </Content>
            <Footer />
        </Background>
    )
}

const ExecutiveCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: left;
  gap: 60px;
  margin-bottom: 40px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    height: auto;  // Set height to auto for smaller screens
    padding: 20px; // Add some padding to space things out a bit on small screens
    flex-direction: column;  // Stack the image and text vertically
    gap: 20px; // Adjust space between image and text on small screens
  }
`;

const ExecutiveTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 55%; 

  @media (max-width: 768px) {
    width: 100%; 
    margin-bottom: 50px;
  }
`;

const ExecutiveImage = styled.img`
  overflow: hidden;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  width: 200px;
  height: 200px;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;


const ExecutiveTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #001961;
`;

const ExecutiveName = styled.div`
  font-size: 16px;
`;

const ExecutiveDescription = styled.p`
  font-size: 15px;  
  margin-top: 10px;
  white-space: pre-line;  // This will handle newlines
`;

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
