import styled, { keyframes } from "styled-components";
import Link from 'next/link';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";

export default function Grants() {
    // State to manage the selected tab
    const [selectedTab, setSelectedTab] = useState("STUDENT");

    return (
        <Background>
            <Navbar />
            <Heading>
                <Title>SUS Grants & Subsidies</Title>
                <Subinfo>$53,000 for individuals and clubs</Subinfo>
                <Link href="">
                    <StyledButton>Apply Now</StyledButton>
                </Link>
                <SubText>
                    *Applications MUST be submitted to the Qualtrics form above to be considered
                </SubText>
            </Heading>
            {/*
            <TabContainer>
                <TabActive
                isActive={selectedTab === "STUDENTS"}
                onClick={() => setSelectedTab("STUDENTS")}
                >
                SCIENCE STUDENTS
                </TabActive>
                <Tab
                isActive={selectedTab === "CLUBS"}
                onClick={() => setSelectedTab("CLUBS")}
                >
                SUS CLUBS
                </Tab>
            </TabContainer>
          <TableContent>
          {selectedTab === "STUDENTS" && (
            <ColumnContainer>
                <Column>
                  <ClubRow
                    grantName="Professional Development Grant"
                    description="A subsidy that students can use to attend events to further one’s professional careers 
                                such as relevant events, conferences, seminars and all associated prices."
                    links={[
                      {
                        href: "https://www.ubcastronomyclub.com/",
                        text: "Website",
                      },
                      {
                        href: "mailto:ubcastronomyclub@gmail.com",
                        text: "ubcastronomyclub@gmail.com",
                      },
                      {
                        href: "https://www.instagram.com/ubcastronomyclub/",
                        text: "Instagram",
                      },
                      {
                        href: "https://www.facebook.com/UBCAstronomyClub/",
                        text: "Facebook",
                      },
                    ]}
                  />
                </Column>
            </ColumnContainer>)}
                {selectedTab === "CLUBS" && (
                <ColumnContainer>
                    <Column>
                        <ClubRow
                        grantName="Astronomy Club"
                        description="We are a group of students at UBC Vancouver who share a passion for astronomy. We welcome students of any discipline who want to meet others with like-minded interests. Let’s explore the universe together! We run various events, including: dark-sky observations, social activities, lecture series, and outreach initiatives. The UBC Astronomy Club is committed to being an open and inclusive club for everyone regardless of race, religion, gender identity, sexual orientation, age, or disability."
                        links={[
                        {
                            href: "https://www.ubcastronomyclub.com/",
                            text: "Website",
                        },
                        {
                            href: "mailto:ubcastronomyclub@gmail.com",
                            text: "ubcastronomyclub@gmail.com",
                        },
                        {
                            href: "https://www.instagram.com/ubcastronomyclub/",
                            text: "Instagram",
                        },
                        {
                            href: "https://www.facebook.com/UBCAstronomyClub/",
                            text: "Facebook",
                        },
                        ]}
                        />
                    </Column>
                </ColumnContainer> )}
            </TableContent>
            */}
            <StuSec>
                <SecondHeader>Science Students</SecondHeader>
                    <SciSec>
                        <IndivInfo>
                            <InfoTitle>Professional Development Grant</InfoTitle>
                            <InfoP>
                                A subsidy that students can use to attend events to further one’s professional careers 
                                such as relevant events, conferences, seminars and all associated prices. 
                            </InfoP>
                            <Link href="https://docs.google.com/spreadsheets/d/1rfKh6a6ILiMv4v9qcJW-e8PSS6Pe3NTNjlTqzELsSkc/edit?usp=sharing">
                                <Rubric>Adjudication Rubric</Rubric>
                            </Link>
                        </IndivInfo>
                        <IndivInfo>
                            <InfoTitle>Student Initiative Grant</InfoTitle>
                            <InfoP>
                                The grant aims to encourage students to provide demonstrable service for current 
                                science students to fulfill unmet needs. It may also be used to support students who 
                                require financial assistance for personal research projects. The maximum allocation of 
                                the Student Initiatives Grant is $250.
                            </InfoP>
                            <Link href="https://docs.google.com/spreadsheets/d/1pAtWcwi6-aJxlEo22mb3_tbkySHxu1DQsok0hSpyKSw/edit?usp=drive_link">
                                <Rubric>Adjudication Rubric</Rubric>
                            </Link>
                        </IndivInfo>
                        <IndivInfo>
                            <InfoTitle>AMS & Affiliates Event Subsidy</InfoTitle>
                            <InfoP>
                                The AMS & Affiliated clubs (AMS Clubs) Events Subsidy is intended to alleviate personal 
                                financial burdens by providing a subsidy that students can use to attend events hosted 
                                for UBC students. This includes all ticketed events hosted by clubs with AMS club standing.
                                A list of these clubs can be found on UBC Campus Base.  
                            </InfoP>
                        </IndivInfo>
                        <IndivInfo>
                            <InfoTitle>Course Materials Subsidy</InfoTitle>
                            <InfoP>
                                This is a subsidy that students can use to purchase related materials. The materials 
                                purchased using this subsidy can be redeemed for any academic course material required 
                                or recommended by courses taken by Faculty of Science students.  
                            </InfoP>
                        </IndivInfo>
                        <IndivInfo>
                            <InfoTitle>Events Subsidy</InfoTitle>
                            <InfoP>
                                The SUS Events Subsidy is intended to alleviate personal financial burdens by providing a 
                                subsidy that students can use to attend SUS events. This includes all ticketed events hosted 
                                by the Science Undergraduate Society (SUS).   
                            </InfoP>
                        </IndivInfo>
                        <IndivInfo>
                            <InfoTitle>Club Membership Fee Subsidy</InfoTitle>
                            <InfoP>
                                The club membership fee subsidy hopes to increase participation of students in AMS clubs to 
                                encourage participation in the UBC community. This subsidy aims to cover the baseline membership 
                                fee to all AMS clubs and can be applied retroactively.   
                            </InfoP>
                        </IndivInfo>
                        <IndivInfo>
                            <InfoTitle>UBC Rec Events Subsidy</InfoTitle>
                            <InfoP>
                                UBC Recreation subsidy is intended to alleviate personal financial burdens by providing a 
                                subsidy that students can use to engage in activities that promote physical health and wellness. 
                                This includes, but is not limited to, relevant events, competitions and recreational intramural 
                                league costs.  
                            </InfoP>
                        </IndivInfo>
                    </SciSec>
            </StuSec>
            <ClubSec>
                <SecondHeader>SUS Clubs</SecondHeader>
                <SciSec>
                <IndivInfoBlue>
                    <InfoTitle>Clubs Operations Grant</InfoTitle>
                        <InfoP>
                            The Club Operations Grant is meant to supplement existing club membership fees and to help 
                            facilitate day-to-day operations of the club. The maximum allocation per Club Operations Grant
                            is $1750.00. 
                        </InfoP>
                        <Link href="https://docs.google.com/spreadsheets/d/1l80bQhhRTl8o6Ylz5ihR92qE5iIdrXjYIaurQjo_EYg/edit?usp=drive_link">
                            <Rubric>Adjudication Rubric</Rubric>
                        </Link>
                </IndivInfoBlue>
                <IndivInfoBlue>
                    <InfoTitle>Special Projects Grant</InfoTitle>
                        <InfoP>
                            The Special Projects Grant is intended to help facilitate any new or special projects undertaken 
                            by SUS Clubs. The Special Project Grants can only be used towards new events/projects or new additions
                            to annual or existing activities that benefit a sizable portion of the science student body. 
                            The maximum allocation of the Special Projects Grant is 50% of relevant fees to a maximum of $500.
                        </InfoP>
                        <Link href="https://docs.google.com/spreadsheets/d/1uGe_JO6J9AP8NybmjySjf5scxKWkKvVY_pPGVX38gCk/edit?usp=drive_link">
                            <Rubric>Adjudication Rubric</Rubric>
                        </Link>
                </IndivInfoBlue>
                <IndivInfoBlue>
                    <InfoTitle>EDI Grant</InfoTitle>
                        <InfoP>
                            This grant is intended to create initiatives to support and centre communities with folks who 
                            identify as Black, Indigenous, and People of Colour, or 2SLGBTQIA+, have disabilities, or have
                            been and continue to be systemically-made marginalized. The grant may also be used for providing 
                            services that support communities made marginalized, or for conducting community-led research focused
                            on these groups in ways that are respectful, non-extractive, and non-performative. 
                            The maximum allocation of the Inclusivity Grant is 50% of relevant fees to a maximum of $500.
                        </InfoP>
                        <Link href="https://docs.google.com/spreadsheets/d/1MICyCxMJU4cbUFXF0_LsLN-HkXobP0EerCE-oVKfe6c/edit?usp=drive_link">
                            <Rubric>Adjudication Rubric</Rubric>
                        </Link>
                </IndivInfoBlue>
                </SciSec>
            </ClubSec>
            <Footer />
        </Background>
    )
}

const breakpoints = {
    mobile: '768px',
    tablet: '1024px',
};

const Heading = styled.div`
    background-size: cover;
    height: 100%; 
    padding: 150px 0 0 15%;
    color: white;
`
const Title = styled.div`
    font-size: 54px;
    font-weight: 700;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 3px;
`

const Subinfo = styled.div`
    font-size: 24px;
    margin-top: 20px;
    letter-spacing: 4px;
`

const SubText = styled.div`
    font-style: italic;
    padding: 20px 0;
    font-size: 12px;
`

const SecondHeader = styled.div`
    color: #222755;
    font-size: 36px;
    text-align: center;
    background-color: #fff;
    padding-top: 24px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: bold;
`

const SciSec = styled.div`
    height: 100%;
    width: 100%;
    background-color: #fff;
    padding: 24px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
`

const StuSec = styled.div`
`

const ClubSec = StuSec;

const IndivInfo = styled.div`
    background-color: #e7edf7;
    border-style: solid;
    border-radius: 20px;
    border-width: 0;
    border-color: none;
    padding: 2%;
    max-width: 23%;
    height: auto;
    color: #222755;
`
const IndivInfoBlue = styled(IndivInfo)`
`

const InfoTitle = styled.h2`
    font-size: 18px;
    font-weight: bold;

    @media (max-width: ${breakpoints.mobile}) {
        size: 15px;
    }
`

const InfoP = styled.p`
    font-size: 15px;
`

const Rubric = styled.div`
    padding: 30px 0;
    height: 100%;
    text-align: center;
    display: inline-block;
    color: #0070f3;
    text-decoration: underline;
`
const Background = styled.div`
    height: 100%;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #222755;
`

const StyledButton = styled.div`
    display: inline-block;
    width: 210px;
    padding: 10px 20px;
    background-color: #046bd2;
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

const pulse = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
`

// Tab Content, from Sahib
// const TabContainer = styled.div`
//   display: flex;
//   background-color: #f0f4ff;
//   border-bottom: 2px solid #ccc;
//   padding-top: 24px;
// `;

// const Tab = styled.div`
//   flex: 1;
//   padding: 12px;
//   text-align: center;
//   cursor: pointer;
//   font-weight: bold;
//   background-color: ${(props) => (props.isActive ? "#2c3e50" : "#ffffff")};
//   color: ${(props) => (props.isActive ? "#ffffff" : "#333")};
// `;

// const TableContent = styled.div`
//   display: flex;
//   padding: 16px;
//   background-color: #ffffff;
// `;

// const ColumnContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   // height: 100vh; /* Ensure there's enough height to center items vertically */
//   // border: 1px solid #000; /* For visual debugging */
// `;
// const Column = styled.div`
//   flex: 1;
//   padding: 8px;
//   border-left: 1px solid #ccc;
//   &:first-child {
//     border-left: none;
//   }
// `;

// const Row = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 16px;
//   flex-shrink: 0;
// `;

// const Logo = styled.img`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   margin-right: 16px;
// `;

// const GrantName = styled.span`
//   flex: 1;
//   font-weight: bold;
//   color: #333;
// `;

// const Dropdown = styled.div`
//   cursor: pointer;
//   font-size: 16px;
//   color: #333;
// `;

// const Description = styled.div`
//   padding: 10px 16px;
//   background-color: #f0f4ff;
//   border-radius: 4px;
//   margin-bottom: 16px;
//   font-size: 14px;
//   color: #333;
//   border: 1px solid #ccc;
// `;

// const TabActive = styled(Tab)``;

// // Component for Each Grant Row
// function ClubRow({ logoSrc, grantName, description, links }) {
//     const [isOpen, setIsOpen] = useState(false);
  
//     return (
//       <>
//         <Row>
//           {/* <Logo src={logoSrc} alt={grantName} /> */}
//           <GrantName>{grantName}</GrantName>
//           <Dropdown onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? "▲" : "▼"}
//           </Dropdown>
//         </Row>
//         {isOpen && (
//           <Description>
//             <p>{description}</p>
//             <ul>
//               {links.map((link, index) => (
//                 <li key={index}>
//                   <Link href={link.href}>{link.text}</Link>
//                 </li>
//               ))}
//             </ul>
//           </Description>
//         )}
//       </>
//     );
//   }
