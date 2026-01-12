import styled from "styled-components";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tutors = [
    {
        name: "Mia Boguslavsky",
        courses: "CHEM 123, PHYS 131",
        image: "/images/tutors/Mia Boguslavsky.jpg",
        description: "Hi! I'm Mia, a second-year neuroscience student. I find helping fellow students with their homework so fulfilling, and as such I am chemistry and physics tutor for SUS. Outside of academics, I love sailing, and have been active in the BC sailing community for the past ten years.",
        koalaLink: "https://koalendar.com/e/team-meetings-with-mia-boguslavsky"
    },
    {
        name: "Maya Boyd",
        courses: "BIOL 112, BIOL 121",
        image: "/images/tutors/Maya Boyd.jpg",
        description: "Hey! My name is Maya and I am a second year biochemistry student. I love biology and am super excited to share that through tutoring both Biol 112 and Biol 121 this academic year. Outside of school I love taking dance classes and running.",
        koalaLink: "https://koalendar.com/e/maya-boyd-sus-tutor"
    },
    {
        name: "Maggie Cao",
        courses: "BIOL 112, MICB 211",
        image: "/images/tutors/Maggie Cao.jpg",
        description: "Hi! I'm a 3rd year CAPS student. I am a tutor for SUS because I want to boost other peoples confidence and help them succeed. A fun fact about myself is that I have a vast collection of beanie boos.",
        koalaLink: "https://koalendar.com/e/maggie-cao-sus-tutoring"
    },
    {
        name: "Felix Chan",
        courses: "CHEM 121/123/233/203/213, MATH 100/101/215, PHYS 117/118",
        image: "/images/tutors/Felix Chan.jpeg",
        description: "Hi everyone! My name is Felix and I’m starting my third year in combined chemical physics. I tutored for SUS last year and I found it so rewarding to offer support to first year students. I think this program is important because the adjustment period for first years can be quite tough and there can never be enough resources for them. A fun fact about it me is that I just did a summer abroad at Yonsei University in South Korea. Feel free to ask me about that!",
        koalaLink: "https://koalendar.com/e/felix-chan-sus-tutor"
    },
    {        
        name: "Kate Chen",
        courses: "BIOL 111/112/121, CHEM 121/123, PHYS 100/131, DSCI 100, MATH 101",
        image: "/images/tutors/Kate_Chen.jpg",
        description: "Hey! I'm Katherine (or Kate), a second year studying pharmacology. I'm tutoring for SUS because I want to meet new students and help you guys thrive, even in difficult uni classes. I love music and food, so feel free to ask me about either (or both!) and I'll yap for hours ;)",
        koalaLink: "https://koalendar.com/e/katherine-chen-sus-tutoring"
    },
    {        name: "Rudra Dave",
        courses: "DSCI 100",
        image: "/images/tutors/Placeholder.jpg",
        description: "I am currently a third-year CS major at UBC. I am a tutor for SUS because I enjoy helping fellow students succeed and gain confidence in their studies. A fun fact about me is that I am really passionate about playing and watching soccer!",
        koalaLink: "https://koalendar.com/e/dsci100-coaching-session"
    },
    {
        name: "Gursimran Garcha",
        courses: "CHEM 123, CHEM 233",
        image: "/images/tutors/Gursimran Garcha.jpg",
        description: "Hi everyone! My name is Gursimran, and I am a second-year CAPS student at UBC. I became a SUS tutor because I believe the transition from high school to university can feel a lot less daunting with a bit of guidance, and I hope to be a friendly face students feel comfortable approaching. Fun fact about me: I've been playing soccer for more than 14 years!",
        koalaLink: "https://koalendar.com/e/gursimran-garcha-sus-tutor"
    },
    {
        name: "Aasha Gill",
        courses: "BIOL 121, BIOL 112, CHEM 121/141, CHEM 123, PHYS 131, BIOL 260",
        image: "/images/tutors/Aasha_Gill.jpg",
        description: "Hi, my name is Aasha, I am a second-year biology student! I am tutoring for SUS to help make fellow students lives a little bit easier by giving them the guidance and support I wish I had when taking difficult classes. I have been playing soccer for most my life and like to spend my free time with friends, listening to music, or being outside.",
        koalaLink: "https://koalendar.com/e/AashaGill"
    },
    {
        name: "Jisong Han",
        courses: "PHYS 117/118, BIOL 112",
        image: "/images/tutors/Jisong_Han.jpg",
        description: "Hello! I'm Jisong, and I am currently a 2nd year pharmacology student. I am a tutor for SUS because I enjoy tutoring and want to help other students with studying. A fun fact about me is that I like to watch random tv shows.",
        koalaLink: "https://koalendar.com/e/jisong-han-sus-tutoring"
    },
    {
        name: "Mutsumi Ito",
        courses: "MATH 100, BIOL 112, BIOL 121, CHEM 123",
        image: "/images/tutors/Mutsumi_Ito.jpg",
        description: "Hi, my name is Mutsumi and I'm currently a second year biochemistry student. I became a SUS tutor because I enjoy helping others learn and succeed in their courses. Outside of classes, I enjoy listening to music and practicing flute.",
        koalaLink: "https://koalendar.com/e/Mutsumi"
    },
    {
        name: "Sheena Jiang",
        courses: "BIOL 112, BIOL 121, BIOL 200, BIOC 202, MICB 212, CPSC 103, DSCI 100",
        image: "/images/tutors/Sheena_Jiang.JPG",
        description: "Hey! I'm a fourth-year Honours CAPS student currently on co-op. I became a SUS tutor because I love communicating science to other students! A fun fact about me is that I LOVE the colour pink",
        koalaLink: "https://koalendar.com/e/sheena-jiang-sus-tutoring"
    },
    {
        name: "Mehdi Naami",
        courses: "MATH 100, MATH 101, MATH 215",
        image: "/images/tutors/Mehdi N.jpeg",
        description: "Hello! My name is Mehdi, and I'm currently studying mathematics. I chose to be a tutor for SUS to aid students like my past self who needed help but couldn't access it due to inconvenient office hours. On the weekends, I love to play soccer with my friends after work.",
        koalaLink: "https://koalendar.com/e/mehdi-naami-sus-tutor"
    },
    {
        name: "William Lee",
        courses: "CHEM 121, CHEM 123",
        image: "/images/tutors/William Lee.jpg",
        description: "Hi, my name is William, and I am a second-year pharmacology student. I became a SUS tutor because I like sharing my knowledge and helping other students. Outside of school, I enjoy playing soccer.",
        koalaLink: "https://koalendar.com/e/william-lee-sus-tutoring"
    },
    {
        name: "Kiah Nirmal",
        courses: "MATH 101, BIOL 112",
        image: "/images/tutors/Kiah Nirmal.png",
        description: "Hi, I’m Kiah, a second-year Cellular, Anatomical, and Physiological Sciences student. I’m tutoring for SUS because I find teaching rewarding, love sharing knowledge, and enjoy helping peers gain confidence in challenging subjects. A fun fact about me is that I love singing (mostly to myself) and listening to music.",
        koalaLink: "https://koalendar.com/e/book-a-meeting-with-kiah-nirmal"
    },
    {
        name: "Hamin Park",
        courses: "CHEM 121, PHYS 117, PHYS 131",
        image: "/images/tutors/Hamin Park.jpg",
        description: "Hi! I'm currently a 2nd-year pharmacology student. I'm tutoring for SUS because I love to teach and want to help others succeed in their courses. In my free time I either read or play video games :)",
        koalaLink: "https://koalendar.com/e/hamin-park-sus-tutoring"
    },
    {
        name: "Buvan Bhaskara Reddy",
        courses: "MATH 100, MATH 101, CPSC 103",
        image: "/images/tutors/Buvan_Reddy.jpg",
        description: "Hi! I am a 3rd Year Statistics and Economics student. I'm a tutor because I find teaching rewarding and want to help students with their courses outside the classroom. A fun fact about me is that I have met Manny Pacquiao at Ferrari World.",
        koalaLink: "https://koalendar.com/e/buvan-bhaskara-reddy-sus-tutoring"
    },
    {
        name: "Tanraj Sekhon",
        courses: "BIOL 112, BIOL 121",
        image: "/images/tutors/Tanraj_Sekhon.jpg",
        description: "Hi! My name is Tanraj, and I'm a second year neuroscience student. I became a SUS Tutor because I love helping others understand challenging concepts. Outside of school, I love to play sports and watch TV shows!",
        koalaLink: "https://koalendar.com/e/tanraj-sekhon-sus-tutor"
    },
    {
        name: "Melody Wu",
        courses: "BIOL 121",
        image: "/images/tutors/Melody Wu.jpg",
        description: "Hi! My name is Melody and I'm a fourth year Honours CAPS student. I became a SUS tutor because I enjoy helping other students succeed. A fun fact about me is that I love action movies and TV shows.",
        koalaLink: "https://koalendar.com/e/melody-wu-sus-tutoring"
    },
    {
        name: "Karen Xiao",
        courses: "BIOL 200, MICB 211",
        image: "/images/tutors/Karen Xiao.jpeg",
        description: "Hi! I’m Karen, and I’m a fourth-year student in Microbiology and Immunology. I’m a tutor for SUS because I want to help students build a strong foundation for success in upper-level science courses. Outside of classes, I enjoy staying active and trying out new restaurants!",
        koalaLink: "https://koalendar.com/e/karen-xiao-sus-tutoring"
    },
    {
        name: "Nathan Yang",
        courses: "BIOL 200, CHEM 233",
        image: "/images/tutors/Nathan Yang.jpeg",
        description: "Hi! I’m Nathan, and I am a third-year neuroscience student. I’m a tutor for SUS because I want to help other students study and learn. Outside of school, I enjoy playing the guitar and working out.",
        koalaLink: "https://koalendar.com/e/nathan-yang-team-meetings"
    },
    {
        name: "Kavi Balsara",
        courses: "BIOL 121/112, CPSC 103",
        image: "/images/tutors/Kavi Balsara.jpg",
        description: "Hi, I am a second year neuroscience student. I became a tutor for SUS because I believe that tutoring can be an excellent way to fully grasp concepts outside of the classroom. I really enjoy playing soccer and watching movies.",
        koalaLink: ""
    },
];

export default function MeetingRoomBookings() {
    return(
        <>
            <Navbar />
            <Content>
                <ContactSection>
                    <TitleBig>SUS Tutoring Program</TitleBig>
                    <Description>
                        Free online and in-person tutoring sessions led by upper-year science students. Sign-up or drop-in today.
                    </Description>
                </ContactSection>   

                <ButtonsContainer>
                        {/* <ButtonGroup>
                            <ButtonHollowBlack>
                                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdYp_R2zjCXjJt6QllqJlAp-e93V92bcnHcdqnoZBnAu9wB_Q/viewform?usp=header">Sign-up for a Session</Link>    
                            </ButtonHollowBlack>
                        </ButtonGroup> */}

                        <ButtonGroup>
                            <ButtonHollowBlack>
                                <Link href="https://docs.google.com/forms/d/e/1FAIpQLScrWKMQdnIMJ-3BHrc0-am6yvtoyZ4LtOmniwqDJGwZsin9vw/viewform">Session Feedback Form</Link>    
                            </ButtonHollowBlack>
                        </ButtonGroup>

                        {/* <ButtonGroup>
                            <ButtonHollowBlack>
                                <Link href="https://ubc.ca1.qualtrics.com/jfe/form/SV_42Pc5f3nlXgEch8">Request a Course</Link>    
                            </ButtonHollowBlack>
                        </ButtonGroup>  */}

                        <ButtonGroup>
                            <ButtonHollowBlack>
                                <Link href="#meet-the-tutors">Meet the Tutors</Link>    
                            </ButtonHollowBlack>
                        </ButtonGroup>


                        {/* <ButtonGroup> 
                            <ButtonHollowBlack>
                                <Link href="https://ubc.ca1.qualtrics.com/jfe/form/SV_08p8gd08sSBVuWq">Apply to be a Tutor</Link>    
                            </ButtonHollowBlack>
                        </ButtonGroup>  */}
                    </ButtonsContainer> 

                    <DividerSmall></DividerSmall>
                

                {/* How It Works Section */}
                <ContactSection>
                    <TitleBig>How Our Tutoring Works</TitleBig>
                    <Description>
                        Struggling with a tough science course? The SUS Academic Tutoring Working Group is here to help! 
                        To ease the transition from high school to university, we provide free tutoring sessions for popular 
                        first and second-year Science courses. <strong>Tutoring sessions are offered through both in-person 
                        drop-in sessions and online appointment-based sessions.</strong>
                    </Description>
                </ContactSection>

                
                <TutoringOptionsContainer>
                    <TutoringOption>
                        <OptionTitle>Weekly Drop-ins</OptionTitle>
                        <OptionDescription>
                            Join us for weekly sessions! Drop by to work on practice questions and get your questions answered by experienced tutors.
                        </OptionDescription>
                        <ScheduleList>
                            <ScheduleItem>
                                <strong>Mondays: 4-6 PM, BIOL 1001</strong>
                                <CourseList>For courses: BIOL 112/121, BIOL 200, and CHEM 233</CourseList>
                            </ScheduleItem>
                            <ScheduleItem>
                                <strong>Wednesdays: 4-6 PM, Abdul Ladha Science Student Centre, Room 105</strong>
                                <CourseList>For courses: CHEM 121, PHYS 117/131</CourseList>
                            </ScheduleItem>
                        </ScheduleList>
                    </TutoringOption>

                    <TutoringOption>
                        <OptionTitle>Appointment-based</OptionTitle>
                        <OptionDescription>
                            Want personalized support? You can book a 30 minute 1-on-1 tutoring session with an experienced tutor.
                        </OptionDescription>
                        
                        <InstructionsBox>
                            <InstructionsTitle>Instructions for Booking Appointments:</InstructionsTitle>
                            <InstructionsList>
                                <li>Click on the Koalendar profile link for the tutor you would like to book a session with</li>
                                <li>Pick a time from the availability listed</li>
                                <li>Fill out your name and email, and a Google Meet link will automatically be sent to your email</li>
                                <li><strong>Note:</strong> Please put the course you are booking a session for in brackets in addition to your name</li>
                            </InstructionsList>
                            <ImportantNote>
                                If you decide to reschedule or cancel a session, please email <strong>tutoringdirector@sus.ubc.ca</strong> at least <strong>24 hours in advance</strong> with your name, tutor, and course.
                            </ImportantNote>
                        </InstructionsBox>
                    </TutoringOption>
                </TutoringOptionsContainer>

                <DividerSmall></DividerSmall>


                    <ContactSection id="meet-the-tutors">
                        <TitleBig>Meet our tutors:</TitleBig>
                    </ContactSection>

                    <DividerSmall></DividerSmall>

                    {tutors.map((tutor, index) => (
                        <ExecutiveCard key={index}>
                            <ExecutiveImage src={tutor.image} alt={tutor.name} />
                            <ExecutiveTextContainer>
                                <ExecutiveTitle>{tutor.name}</ExecutiveTitle>
                                <ExecutiveName><b>Courses Tutoring:</b> {tutor.courses}</ExecutiveName>
                                <ExecutiveDescription>{tutor.description}</ExecutiveDescription>
                                {tutor.koalaLink && (
                                    <ButtonGroup>
                                    <ButtonsContainer>
                                        <ButtonHollowBlack as="a" href={tutor.koalaLink} target="_blank" rel="noopener noreferrer">
                                            Book with {tutor.name.split(" ")[0]}
                                        </ButtonHollowBlack>
                                    </ButtonsContainer>
                                    </ButtonGroup>
                                    
                            )}
                            </ExecutiveTextContainer>
                        </ExecutiveCard>
                        
                    ))}

                    <Divider></Divider>

                    {/* Contact Section */}
                            <Description>
                                If you have any questions, please feel free to contact us at tutoringdirector@sus.ubc.ca! 
                                We look forward to seeing you at our sessions 😊
                            </Description>
                <Footer/>
            </Content>
        </>
    )
}


const TutoringOptionsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    width: 80%;
    margin: 2rem 0;
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        width: 95%;
    }
`;

const TutoringOption = styled.div`
    background-color: #ffffff;
    border: 2px solid #e1e5e9;
    border-radius: 15px;
    padding: 2rem;
`;

const OptionTitle = styled.h3`
    color: #222755;
    margin-bottom: 1rem;
    font-size: 1.3rem;
`;

const OptionDescription = styled.p`
    color: #555;
    margin-bottom: 1.5rem;
    line-height: 1.6;
`;

const ScheduleList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const ScheduleItem = styled.div`
    background-color: #f0f7ff;
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #0052FF;
`;

const CourseList = styled.p`
    margin-top: 0.5rem;
    color: #666;
    font-size: 0.9rem;
`;

const InstructionsBox = styled.div`
    background-color: #f0f7ff;
    padding: 1.5rem;
    border-radius: 10px;
    margin-top: 1rem;
    border: 1px solid #0052FF;
`;

const InstructionsTitle = styled.h4`
    color: #222755;
    margin-bottom: 1rem;
`;

const InstructionsList = styled.ol`
    color: #555;
    margin-bottom: 1rem;
    padding-left: 1.2rem;
    
    li {
        margin-bottom: 0.5rem;
        line-height: 1.5;
    }
`;

const ImportantNote = styled.p`
    background-color: #fff3cd;
    border-radius: 5px;
    padding: 1rem;
    color: #856404;
    font-size: 0.9rem;
    margin-top: 1rem;
`;

const ExecutiveCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: left;
  gap: 30px;
  height: 350px;
  margin-top: -15px;
  margin-bottom: -60px;

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
`;

// const ExecutiveImage = styled.img`
//   overflow: hidden;
//   border-radius: 50%;
//   aspect-ratio: 1 / 1;
//   object-fit: cover;
//   width: 200px;
//   height: 200px;
// `;


// =============== GENERAL =============== //

const Content = styled.main`
    margin-top: 24vh;
    width: 100%;
    height: auto;
    overflow-y: auto; 
    scroll-behavior: smooth;
    // position: relative; 
    display: flex;
    flex-direction: column;
    align-items: center; 
    // justify-content: center;
`

const Title = styled.h2`
    color: #222755;
`;

const TitleBig = styled.h1`
    color: #222755;
`;


const Description = styled.p`
    text-align: left;
    position: relative; 
    display: flex;
    flex-direction: column;
    font-style: italic;
    margin-top: -1vh;
`

const Divider = styled.div`
    margin-top: 5vh;
    margin-bottom: 2vh;
    width: 90%;
    // border-bottom: 1px solid black;
`
const DividerSmall = styled.div`
    margin-bottom: -2vh;
`

const Link = styled.a`
    text-decoration: none;
    color: inherit;
`

const H3 = styled.h3`
    text-align: center;
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;

    margin-top: 5vh;
    margin-bottom: 5vh;

    @media (max-width: 768px) {
        width: 95%;
    }
`

const Image = styled.img`
    height: auto;
    width: 400px;
    object-fit: cover;

    @media (max-width: 768px) {
        width: 100%;
    }
`


// =============== HEADER =============== //

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;

    width: 50%;

    @media (max-width: 768px) {
        width: 80%;
    }
`

const PoliciesContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    width: 70%;

    @media (max-width: 768px) {
        width: 90%;
    }
`;

// =============== MAKE A BOOKING =============== //

const ButtonsContainer = styled.div`    
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin-bottom: 7vh;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
    }
`

const ButtonGroup = styled.div`
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: left;
`;

const ButtonHollowBlack = styled.button`
    background-color: #d4ebf2;
    color: #222755;
    padding: 0; /* Adjusted for a more consistent size */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px; /* Fixed width */
    height: 60px; /* Fixed height */
    border-radius: 30px;
    border: 1px solid #222755;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 600;
    // text-align: center;
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
    text-decoration: none;

    &:hover {
        color: #0052FF;
        border: 1px solid #0052FF;
    }

    @media (max-width: 768px) {
        width: 150px; /* Smaller width on mobile */
        height: 60px; /* Adjusted height for smaller screen */
        font-size: 0.7rem;
    }
`;

// =============== ROOM FEATURES ============= //

const RoomDescriptionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    margin-top: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
    }
`

const Room = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

// =============== Contact Us ============= //

const ContactSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    width: 70%;

    // margin-top: 5vh;
    // margin-bottom: 5vh;

    @media (max-width: 768px) {
        width: 95%;
    }

    @media (max-width: 1300px) {
        width: 80%;
    }
`
