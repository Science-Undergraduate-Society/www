import styled from "styled-components";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tutors = [
    {
        name: "Isabella Byrne",
        courses: "MICB 211, MICB 212, BIOL 112, BIOL 121",
        image: "/images/tutors/Isabella Byrne.jpeg",
        description: "Hey I'm Isabella! I'm currently studying Microbiology and Immunology. I'm tutoring for SUS because I love finding the new ways to explain concepts and help students better understand their course material. A fun fact about myself is that I did a Study Abroad program in Sweden!"
    },
    {
        name: "Alexi Manning",
        courses: "BIOL 112, CPSC 110, CPSC 121, CPSC 210, CHEM 123",
        image: "/images/tutors/Alexi Manning.jpg",
        description: "I am a Cognitive Systems (Computational Intelligence and Design) major who enjoys crocheting and listening to music. I want to help other students maximize their academic potential by tutoring with SUS!"
    },
    {
        name: "Andy Wang",
        courses: "BIOL 200, BIOL 201, BIOL 112, BIOL 121, MICB 211, MICB 212",
        image: "/images/tutors/IMG 0065 from Andy Wang.jpg",
        description: "Hi, my name is Andy and I am currently a 3rd year in the microbiology and immunology program. I'm tutoring for SUS because I think it's a great way for me to go over old material and keep it fresh in my mind while also being able to help others. A fun fact about me is I have 4 titanium screws in my shoulders."
    },
    {
        name: "Bardia Mohammadizadeh",
        courses: "MATH 100, BIOL 112, BIOL 121 ",
        image: "/images/tutors/Bardia M.jpeg",
        description: "I'm currently a second-year Neuroscience student. I wanted to become a tutor not just to help others, but also to deepen my own understanding of the material. Outside of school, I like to play the piano, exercise, and watch films and TV."
    },
    {
        name: "Felix Chan",
        courses: "MATH 101, CHEM 123, PHYS 118",
        image: "/images/tutors/IMG 1317 from Felix Chan.jpeg",
        description: "Hi everyone! I'm Felix and I'm currently a second-year in Honours Chemical Physics. I decided to tutor for SUS because I wanted to support struggling undergraduate students in their learning and provide a resource for the SUS community. Fun fact about me: I love to bake and make music in my spare time :)"
    },
    {
        name: "Hope Luo",
        courses: "CHEM 121, CHEM 123, BIOL 112, BIOL 121",
        image: "/images/tutors/Hope Luo IMG 0598.jpeg",
        description: "Hope is currently studying Cellular and Physiological Sciences. As a SUS tutor, she hopes to expand her passion for teaching by supporting students with different learning styles. She is excited to share her experiences, both inside and outside of school. A fun fact about Hope is that her nickname is hopeless!"
    },
    {
        name: "Mehdi Naami",
        courses: "MATH 101",
        image: "/images/tutors/Mehdi N.jpeg",
        description: "Hello! My name is Mehdi, and I'm currently studying mathematics. I chose to be a tutor for SUS to aid students like my past self who needed help but couldn't access it due to inconvenient office hours. On the weekends, I love to play soccer with my friends after work."
    },
    {
        name: "Nicholas Jeremy",
        courses: "MATH 100, MATH 101",
        image: "/images/tutors/Nicholas Jeremy.JPG",
        description: "Hi! I'm a second-year student majoring in computer science. I'm a tutor for SUS because I enjoy teaching math to other students and I want to help other students succeed in their math courses. I enjoy listening to classical music and playing the piano :)"
    },
    {
        name: "Nitya Goel",
        courses: "CHEM 123, BIOL 112, BIOL 121",
        image: "/images/tutors/Nitya Goel Headshot.png",
        description: "My name is Nitya Goel and I'm a second-year Microbiology and Immunology student. I joined SUS Tutoring because I love to share knowledge and am excited to support anyone struggling with their courses. I am passionate about life sciences, teaching, and learning! Outside of university, I enjoy doing anything creative, like dance and crochet."
    },
    {
        name: "Norinne",
        courses: "CPSC 121, DSCI 100, CPSC 210, STAT 201",
        image: "/images/tutors/Norinne.jpg",
        description: "Hello! I'm Norinne, I'm a second-year student studying computer science and data science. I became a SUS tutor to help people understand complex concepts and gain confidence in their learning. When I'm not deep in code, you’ll probably find me drawing or painting—getting creative is my favourite way to unwind!"
    },
    {
        name: "Kyle Yeung",
        courses: "PHYS 118, MICB 212, CHEM 123, CHEM 233, BIOL 112, BIOL 121",
        image: "/images/tutors/kyle.png",
        description: "Hi! My name is Kyle Yeung, and I'm a second-year Microbiology and Immunology student. I became a tutor for SUS because I love helping students build confidence in their learning. A fun fact about me is that I recently started training for a marathon—I’d love to hear any tips you have!"
    },
    {
        name: "Jane Shu",
        courses: "BIOL 121, CHEM 123",
        image: "/images/tutors/Jane Shu.jpg",
        description: "Hello!! I'm currently a second year majoring in Biochemistry and Forensic Science. I tutor for SUS because it's a great way to get involved and meet new people :D In my free time, you'll usually find me drawing, reading, or baking."
    },
    {
        name: "Lucas Tousignant",
        courses: "PHYS 118, MATH 101",
        image: "/images/tutors/Lucas Tousignant.jpeg",
        description: "1) I am currently my bachelor’s degree in  Honours Physics. 2) I am a tutor because I enjoy teaching others about topics I am passionate about. It also is a great way to challenge my knowledge and keep me on my feet about what I know. 3) Some fun facts about me: I am involved in the UBC competition wrestling team and war gamers club. I love to cook. I am from the Boston area."
    },
    {
        name: "Sarah Song",
        courses: "BIOL 112, BIOL 121, CHEM 123",
        image: "/images/tutors/Sarah Song Image 0244.jpeg",
        description: "Sarah is currently a second year CAPS major, and is tutoring for SUS in order to help others in their learning journey and prevent her own knowledge from going stale. Fun fact: Sarah never presses snooze after the alarm rings in the morning."
    },
    {
        name: "Claire Li",
        courses: "BIOL 112, CHEM 123, BIOL 200, CHEM 233",
        image: "/images/tutors/Image from Claire Li.jpg",
        description: "Hi! My name is Claire, and I am a 3rd year Biology Honours student. I became a tutor for SUS because I enjoy tutoring and helping other students. Outside of school I enjoy yoga and binge watching my favorite shows!"
    }
];

export default function MeetingRoomBookings() {
    return(
        <>
            <Navbar />
            <Content>
                <ContactSection>
                    <TitleBig>SUS Drop-in Tutoring Program</TitleBig>
                    <Description>
                        Free online and in-person tutoring sessions led by upper-year science students. Sign-up or drop-in today.
                    </Description>
                </ContactSection>   

                <ButtonsContainer>
                        <ButtonGroup>
                            <ButtonHollowBlack>
                                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdYp_R2zjCXjJt6QllqJlAp-e93V92bcnHcdqnoZBnAu9wB_Q/viewform?usp=header">Sign-up for a Session</Link>    
                            </ButtonHollowBlack>
                        </ButtonGroup>

                        <ButtonGroup>
                            <ButtonHollowBlack>
                                <Link href="https://ubc.ca1.qualtrics.com/jfe/form/SV_819lrEKFVQYxxwW">Session Feedback Form</Link>    
                            </ButtonHollowBlack>
                        </ButtonGroup>

                        <ButtonGroup>
                            <ButtonHollowBlack>
                                <Link href="https://ubc.ca1.qualtrics.com/jfe/form/SV_42Pc5f3nlXgEch8">Request a Course</Link>    
                            </ButtonHollowBlack>
                        </ButtonGroup> 

                        <ButtonGroup>
                            <ButtonHollowBlack>
                                <Link href="#meet-the-tutors">Meet the Tutors</Link>    
                            </ButtonHollowBlack>
                        </ButtonGroup>


                        <ButtonGroup> 
                            <ButtonHollowBlack>
                                <Link href="https://ubc.ca1.qualtrics.com/jfe/form/SV_08p8gd08sSBVuWq">Apply to be a Tutor</Link>    
                            </ButtonHollowBlack>
                        </ButtonGroup> 
                    </ButtonsContainer> 

                    <ContactSection>
                        <Title>Interested in attending one of our sessions? Check out the monthly schedule:</Title>
                    </ContactSection>

                    <iframe 
                        src="https://calendar.google.com/calendar/embed?src=c_32f20f05029df4d6db2492274c65cc2a479da5ff5efb2850444ed8db87b139eb%40group.calendar.google.com&ctz=America%2FVancouver" 
                        style={{ border: '0', width: '100%', maxWidth: '1030px' }} 
                        height="600" 
                        frameBorder="0" 
                        scrolling="no">
                    </iframe>

                    <Divider></Divider>

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
                            </ExecutiveTextContainer>
                        </ExecutiveCard>
                    ))}
                <Footer/>
            </Content>
        </>
    )
}

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
    padding: 12px 30px; /* Adjusted for a more consistent size */
    width: 180px; /* Fixed width */
    height: 60px; /* Fixed height */
    border-radius: 30px;
    border: 1px solid #222755;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 600;
    text-align: center;
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;

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
