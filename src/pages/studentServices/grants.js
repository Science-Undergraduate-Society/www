import styled, { keyframes } from "styled-components";
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { AmpStateContext } from "next/dist/shared/lib/amp-context.shared-runtime";

export default function Grants() {

    return (
        <Background>
            <Navbar />
            <Heading>
                <Title>SUS Grants & Subsidies</Title>
                <Subinfo>$48,250 for individuals and clubs</Subinfo>
                <Link href="https://ubc.ca1.qualtrics.com/jfe/form/SV_8H3fBJPZNU0GTFc">
                </Link>
                <SubText>
                    *Applications MUST be submitted to the Qualtrics form above to be considered
                </SubText>
            </Heading>
            <StuSec>
                <SecondHeader>Application Information</SecondHeader>
                    <ThirdHeader>GRANT AND SUBSIDY APPLICATIONS FOR THE ‘24/’25 ACADEMIC YEAR ARE NOW CLOSED</ThirdHeader>
                    <ForthHeader>Applications for ‘25/’26 Grant and Subsidies will open in Early October 2025!</ForthHeader>
                    <InfoSec>Applications for Grants & Subsidies will  <strong>open on October 7, 2024</strong> and will be reviewed on a first-submitted, first-reviewed basis. SUS will be accepting applications
                    <strong>until March 10, 2025, or until funds run out.</strong> Please utilize the following resources and submission link to put forth your application. 
                    </InfoSec>
                    <InfoSec>To read more about the 2024/2025 available grants and subsidies, as well as to view the application form, 
                        see below and click on the name of the grant/subsidy you are interested in. 
                    </InfoSec>
                    <InfoSec>
                        <strong>TO APPLY:</strong> please submit your application package by emailing <a href="mailto:vpfinance@sus.ubc.ca">vpfinance@sus.ubc.ca</a> and cc-ing <a href="mailto:avp.finance@sus.ubc.ca">avp.finance@sus.ubc.ca</a>. 
                        You will receive a confirmation email upon receipt of your application. 
                    </InfoSec>
                    <InfoSec>
                        <strong>NOTE:</strong> all grant & subsidy applications have a checklist at the bottom of the document which details the required documentation that is necessary to be considered for a given grant/subsidy. 
                        Best of luck to all applicants! 
                    </InfoSec>
                <SecondHeader>Grants</SecondHeader>
                    <SciSec>
                    <Accordion 
                        title="Clubs Operations Grant"
                        grant="https://docs.google.com/document/d/1pNsqp4S9Db460IAVU1dNPCo8V15NP_DJK8KbzX5ftww/edit?usp=drive_link"
                        for_club="for SUS Clubs"
                        content="The Club Operations Grant is meant to supplement existing club membership fees and to help 
                                facilitate day-to-day operations of the club. The maximum allocation per Club Operations Grant
                                is $1750.00."
                        link="https://docs.google.com/spreadsheets/d/1l80bQhhRTl8o6Ylz5ihR92qE5iIdrXjYIaurQjo_EYg/edit?usp=drive_link"
                    />
                    <Accordion 
                        title="Special Projects Grant"
                        grant="https://docs.google.com/document/d/13cFYPuC1btrfxtV8FvuXfrsj4_asuWnJb-7Nb4v9N-Y/edit?usp=drive_link"
                        for_club="for SUS Clubs"
                        content="The Special Projects Grant is intended to help facilitate any new or special projects undertaken 
                                by SUS Clubs. The Special Project Grants can only be used towards new events/projects or new additions
                                to annual or existing activities that benefit a sizable portion of the science student body. 
                                The maximum allocation of the Special Projects Grant is 50% of relevant fees to a maximum of $500."
                        link="https://docs.google.com/spreadsheets/d/1uGe_JO6J9AP8NybmjySjf5scxKWkKvVY_pPGVX38gCk/edit?usp=drive_link"
                    />
                    <Accordion
                        title="EDI Grant"
                        grant="https://docs.google.com/document/d/1yJJLi_Tuhm4yVBvsTkHEdWRceNlD3BiwuYvdsgGTTEI/edit?usp=drive_link"
                        for_club="for SUS Clubs & Science Students"
                        content="The EDI Grant is intended to create initiatives to support and centre communities with folks who identify 
                                as Black, Indigenous, and People of Colour, or 2SLGBTQIA+, have disabilities, or have been and continue to be systemically-made 
                                marginalized. The grant may also be used for providing services that support communities made marginalized, or for 
                                conducting community-led research focused on these groups in ways that are respectful, non-extractive, and non-performative. 
                                The maximum allocation of the Grant is 50% of relevant fees with a limit of $500. 
"
                        link="https://docs.google.com/spreadsheets/d/1MICyCxMJU4cbUFXF0_LsLN-HkXobP0EerCE-oVKfe6c/edit?usp=drive_link"
                     />
                     <Accordion
                        title="Student Initiative Grant"
                        grant="https://docs.google.com/document/d/1k0Bjzn4QqTfslWozrngnH9lqT_KPfvBebS1Wk-620LA/edit?usp=drive_link"
                        for_club="for Science Students & new SUS clubs"
                        content="The Student Initiative Grant is intended to provide financial support to encourage and promote the facilitation of projects,
                                 activities and events run by science students that are not affiliated with existing SUS Clubs. The grant aims to encourage 
                                 students to provide demonstrable service for current science students or new SUS Clubs to fulfill unmet needs. The Student 
                                 Initiative Grant may also be used to support students who require financial assistance for personal research projects. 
                                 The maximum allocation of the Grant is 50% of relevant fees with a limit of $250."
                        link="https://docs.google.com/spreadsheets/d/1pAtWcwi6-aJxlEo22mb3_tbkySHxu1DQsok0hSpyKSw/edit?usp=drive_link"
                        />
                    <Accordion
                        title="Professional Development Grant"
                        grant="https://docs.google.com/document/d/1jrXYT4_q_xmgKc2b8e4JoF3n9Im8u8481AQVC1p1l6E/edit?usp=drive_link"
                        for_club="for Science Students"
                        content="The Professional Development Grant is intended to alleviate financial burdens relating to the attendance of events that 
                                further one’s professional careers such as relevant events, conferences, and seminars. The maximum allocation of the Grant is 50% 
                                of related fees with a limit of $300."
                        link="https://docs.google.com/spreadsheets/d/1rfKh6a6ILiMv4v9qcJW-e8PSS6Pe3NTNjlTqzELsSkc/edit?usp=sharing"
                    />
                       
                    </SciSec>
            </StuSec>
            <ClubSec>
                <SecondHeader>Subsidies</SecondHeader>
                <SciSec>
                    <Accordion
                        title="AMS & Affiliates Event Subsidy"
                        grant="https://docs.google.com/document/d/15s0q0SeeM56yT4bCf6cGKYgR5WpwlKC2qgKM75-nijg/edit?usp=drive_link"
                        for_club="for Science Students"
                        content="The AMS & Affiliated clubs (AMS Clubs) Events Subsidy is intended to alleviate personal financial burdens by providing a subsidy that 
                                students can use to attend events hosted for UBC students. This includes all ticketed events hosted by clubs with AMS club standing. A list of 
                                these clubs can be found on UBC Campus Base.  The maximum allocation of the subsidy is 50% of paid ticket price with a limit of $15."
                        link=""
                        />
                    <Accordion
                        title="SUS Events Subsidy"
                        grant="https://docs.google.com/document/d/1N8NQM-SAR7O5H3SANldGNDaIl9i4--dOrxXSOEvnZKA/edit?usp=drive_link"
                        for_club="for Science Students"
                        content="The SUS Events Subsidy is intended to alleviate personal financial burdens by providing a subsidy that students can use to attend SUS events. 
                                This includes all ticketed events hosted by the Science Undergraduate Society (SUS). The maximum allocation of the subsidy is 75% of paid ticket 
                                price with a limit of $60."
                        link=""
                    />
                    <Accordion
                        title="Club Membership Fee Subsidy"
                        grant="https://docs.google.com/document/d/1Tjr9mwroBjir2A2RtOLfj8TQv1P_vTiaia6IPc7gjtU/edit?usp=drive_link"
                        for_club="for Science Students"
                        content="The Club Membership Fee Subsidy hopes to increase participation of students in AMS clubs to encourage participation in the UBC community. 
                                This subsidy aims to cover the baseline membership fee to all AMS clubs and can be applied retroactively. The maximum allocation of the subsidy is $5."
                        link=""
                    />
                    <Accordion
                        title="Course Materials Subsidy"
                        grant="https://docs.google.com/document/d/1a_p9JaNP0v-2pi7WxCsNHDuzj-DXlZcjXKYiCetBCAc/edit?usp=drive_link"
                        for_club="for Science Students"
                        content="The Course Materials Subsidy is intended to alleviate financial burdens related to the purchase of course-related materials. The materials purchased 
                                using this subsidy can be redeemed for any academic course material required or recommended by courses taken by Faculty of Science students. 
                                The maximum allocation of the subsidy is $50."
                        link=""
                    />
                    <Accordion
                        title="UBC Recreation Subsidy"
                        grant="https://docs.google.com/document/d/1uK4GnXh_zs2jFAZgFtf6BdKkxuSbcKK0Lh_LbUB6BRo/edit?usp=drive_link"
                        for_club="for Science Students"
                        content="The UBC Recreation Subsidy is intended to alleviate personal financial burdens by providing a subsidy that students can use to engage in activities 
                                that promote physical health and wellness. This includes, but is not limited to, relevant events, competitions and recreational intramural league costs. 
                                The maximum allocation of the subsidy is 50% of the cost with a limit of $250."
                        link=""
                    />
                </SciSec>
            </ClubSec>
            <ButtonContainer>
                <StyledButton href="https://drive.google.com/open?id=10IOyK3iQT9NZMmGeMr5C6I6umKnYtuP7"><b>Grants Information 24/25</b></StyledButton>
                <StyledButton href="https://drive.google.com/open?id=1qJldIJrrRcPXTXhdPitiryMFsFKS34Y6"><b>Grants Rubrics 24/25</b></StyledButton>
                <StyledButton href="https://drive.google.com/drive/folders/1Wh8PZTiKSlZcphLSQyc1oEbir2ag-JuB?usp=share_link"><b>Subsidies Information 24/25</b></StyledButton>
            </ButtonContainer>
            <Footer color="white" background="#222755"/>
        </Background>
    )
}

function Accordion({ title, grant, for_club, content, link }) {
    const [isActive, setIsActive] = useState(false);
    return (
        <IndivInfo>
            <TitleSec onClick={() => setIsActive(!isActive)}>
                <BoxTitle>
                    <InfoTitle href={grant}>{title}</InfoTitle>
                    <ForTitle>{for_club}</ForTitle>
                </BoxTitle>
                <h2>{isActive ? '-' : '+'}</h2>
            </TitleSec>
            {isActive && <InfoP>{content}</InfoP>}
            {isActive && link !== "" && <Link href={link}>
                <Rubric>Adjudication Rubric</Rubric>
            </Link>}
        </IndivInfo>
    );
}

const breakpoints = {
    mobile: '768px',
    tablet: '1024px',
};

const TitleSec = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
`

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

const ThirdHeader = styled.div`
    font-size: 24px;
    text-align: center;
    background-color: #fff;
    padding-top: 24px;
    padding-bottom: 24px;
    text-transform: uppercase;
    font-weight: bold;
`

const ForthHeader = styled.div`
    font-size: 18px;
    text-align: center;
    background-color: #fff;
    padding-bottom: 24px;
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
    row-gap: 25px;
    justify-content: center;

    @media (max-width: ${breakpoints.mobile}) {
        flex-direction: column;
    }
`

const InfoSec = styled.div`
    height: 100%;
    width: 100%;
    background-color: #fff;
    padding: 1% 10%;
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
    width: 28%;
    min-height: 100%;
    color: #222755;

    @media (max-width: ${breakpoints.mobile}) {
        width: 98%;
        min-height: auto;
        text-align: center;
    }
`

const BoxTitle = styled.div`
    display: flex;
    flex-direction: column;
`

const InfoTitle = styled.a`
    font-size: 19px;
    font-weight: bold;
    text-align: left;
    color: #222755;

    @media (max-width: ${breakpoints.mobile}) {
        size: 15px;
        padding: 0 15px;
    }
`

const ForTitle = styled.p`
    font-size: 18px;
    text-align: left;
    margin-top: -2px;


    @media (max-width: ${breakpoints.mobile}) {
            size: 15px;
            padding: 0 15px;
        }
`

const InfoP = styled.p`
    font-size: 15px;
    text-align: left;
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

const StyledButton = styled.a`
    display: inline-block;
    width: 210px;
    padding: 10px 20px;
    background-color: white;
    color: #222755;
    text-align: center;
    border-radius: 5px;
    text-decoration: none;
    margin-top: 20px;
    cursor: pointer;
    font-size: 18px;

    &:hover {
        background-color: #e7edf7;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px; /* Adjusts space between buttons */
    margin-top: 20px; /* Space above the button container */
`;