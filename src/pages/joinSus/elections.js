import styled from "styled-components";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const candidates = [
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
        name: "Nicholas Samuelson",
        courses: "VP Academics",
        image: "/images/2025-elections/nick.png",
        description: "Hey, UBC Science! I'm Nick, a 4th-year CAPS student and your current Associate Vice-President Academic; I'm excited and honoured to be running to be your next VP Academic. This year, our portfolio has made significant strides to support science students at UBC, including:\n\n● Lobbying for hiring a faculty-embedded counsellor to enhance student mental and physical well-being.\n● Launching the SUS Tutoring Program, providing free, accessible support for popular science courses.\n● Collaborating with multiple constituencies to distribute a survey to gather student feedback on Workday, driving our advocacy efforts.\n\nNext year, I’m committed to building on these initiatives by continuing to push for meaningful change at the faculty level, while creating events and programs that truly enhance your academic experience at UBC.\n\nKey Focus Areas of My Platform:\n● Informed Advocacy: Using student survey data to guide and amplify advocacy efforts.\n● Expanded Access: Connecting students to more research opportunities and academic resources.\n● Policy Improvement: Strengthening the exam hardship policy and developing a progressive AI-use policy.\n● Better Facilities & Recorded Lectures: Securing 24-hour student access to faculty buildings and pushing for universal recorded lectures.\n\nFor a full breakdown of my campaign, visit https://nickvpacademic.my.canva.site/. I appreciate your consideration!"
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
    {
        name: "Bardia Mohammadizadeh",
        courses: "AMS Representative",
        image: "/images/2025-elections/bardia.png",
        description: "Hey Science Students! I’m Bardia, studying second-year Neuroscience. For the past two years, I’ve been advocating for Science representation in student government, and I hope to now represent you as your next AMS representative!\n\nI have previously campaigned for various positions within the AMS, such as the SLFS, UBC Senate, and UBC Board of Governors, with the primary goal of addressing the underrepresentation of Science students and standing up for our needs.\n\nWithin AMS council, I will focus on initiatives like more workshops and support for students looking for undergraduate research opportunities and financial aid. Additionally, to combat the $5-6m that is left unused in financial aid every year, I will be advocating for the creation of a brand new easy-to-use financial aid portal, making those resources more accessible to us students.\n\nI run on a platform of transparency and communication. I will post regular updates on AMS Council activities, including summaries and more, accessible for all to see on social media.\n\nI have made sure to make our voices heard, and will continue to do so! Vote Bardia for AMS rep!\n\nFollow me on IG to learn more, @votebardia"
    },
    {
        name: "Yolanda Yang",
        courses: "AMS Representative",
        image: "/images/2025-elections/yolanda.png",
        description: ""
    },
];

export default function Elections() {
    return (
        <Background>
            <Navbar />
            <Content>
                <Title>Spring Elections Results <Span>2025</Span></Title>
                <CandidateGrid>
                    {candidates.map((candidate, index) => (
                        <CandidateCard key={index}>
                            <CandidateImage src={candidate.image} alt={candidate.name} />
                            <CandidateInfo>
                                <CandidateTitle>{candidate.name}</CandidateTitle>
                                <CandidatePosition><b>Position:</b> {candidate.courses}</CandidatePosition>
                                {/* Uncomment below to include descriptions */}
                                {/* <CandidateDescription>{candidate.description}</CandidateDescription> */}
                            </CandidateInfo>
                        </CandidateCard>
                    ))}
                </CandidateGrid>

                {/* The rest of your code for Elections Documentation, links, etc. */}
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
                
                <h1>Candidates Descriptions</h1>
                <p>The SUS Elections are independently administered by the Elections Administrators. For any questions regarding the Spring 2025 Elections, contact them at <a href="mailto:elections@sus.ubc.ca">elections@sus.ubc.ca</a></p>
            </Content>
            <Footer />
        </Background>
    );
}

const Background = styled.div`
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const Content = styled.div`
    flex: 1;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    padding: 200px 10px 20px;
    width: 100%;
    max-width: 1200px;
`;

const Title = styled.div`
    font-size: 35px;
    font-weight: 700;
    margin-bottom: 3rem;
`;

const Span = styled.a`
    color: #001961;
    cursor: pointer;
    text-decoration: none;
`;

// New Grid Container for candidate cards
const CandidateGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    margin-bottom: 3rem;
`;

// Updated candidate card styling for grid display
const CandidateCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    transition: box-shadow 0.3s ease;
    
    &:hover {
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
`;

const CandidateImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
`;

const CandidateInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const CandidateTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: #001961;
    margin-bottom: 10px;
`;

const CandidatePosition = styled.div`
    font-size: 16px;
    margin-bottom: 10px;
`;

const CandidateDescription = styled.p`
    font-size: 15px;
    white-space: pre-line;
`;

const HalfBreak = styled.div`
    height: 0.5em;
    margin: 0;
`;
