import styled, { keyframes } from "styled-components";
import Link from 'next/link';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";

export default function Grants() {

    return (
        <Background>
            <Navbar />
            <Heading>
                <Title>SUS Grants & Subsidies</Title>
                <Subinfo>$53,000 for individuals and clubs</Subinfo>
                <Link href="https://ubc.ca1.qualtrics.com/jfe/form/SV_8H3fBJPZNU0GTFc">
                    <StyledButton>Apply Now</StyledButton>
                </Link>
                <SubText>
                    *Applications MUST be submitted to the Qualtrics form above to be considered
                </SubText>
            </Heading>
            <StuSec>
                <SecondHeader>Science Students</SecondHeader>
                    <SciSec>
                        <Accordion
                            title="Professional Development Grant"
                            content="A subsidy that students can use to attend events to further one’s professional careers 
                                such as relevant events, conferences, seminars and all associated prices. "
                            link="https://docs.google.com/spreadsheets/d/1rfKh6a6ILiMv4v9qcJW-e8PSS6Pe3NTNjlTqzELsSkc/edit?usp=sharing"
                        />
                        <Accordion
                            title="Student Initiative Grant"
                            content="The grant aims to encourage students to provide demonstrable service for current 
                                science students to fulfill unmet needs. It may also be used to support students who 
                                require financial assistance for personal research projects. The maximum allocation of 
                                the Student Initiatives Grant is $250."
                            link="https://docs.google.com/spreadsheets/d/1pAtWcwi6-aJxlEo22mb3_tbkySHxu1DQsok0hSpyKSw/edit?usp=drive_link"
                        />
                        <Accordion
                            title="AMS & Affiliates Event Subsidy"
                            content="The AMS & Affiliated clubs (AMS Clubs) Events Subsidy is intended to alleviate personal 
                                financial burdens by providing a subsidy that students can use to attend events hosted 
                                for UBC students. This includes all ticketed events hosted by clubs with AMS club standing.
                                A list of these clubs can be found on UBC Campus Base. "
                            link=""
                        />
                        <Accordion
                            title="Course Materials Subsidy"
                            content="This is a subsidy that students can use to purchase related materials. The materials 
                                purchased using this subsidy can be redeemed for any academic course material required 
                                or recommended by courses taken by Faculty of Science students."
                            link=""
                        />
                        <Accordion
                            title="Events Subsidy"
                            content="The SUS Events Subsidy is intended to alleviate personal financial burdens by providing a 
                                subsidy that students can use to attend SUS events. This includes all ticketed events hosted 
                                by the Science Undergraduate Society (SUS). "
                            link=""
                        />
                        <Accordion
                            title="Club Membership Fee Subsidy"
                            content="The club membership fee subsidy hopes to increase participation of students in AMS clubs to 
                                encourage participation in the UBC community. This subsidy aims to cover the baseline membership 
                                fee to all AMS clubs and can be applied retroactively. "
                            link=""
                        />
                        <Accordion
                            title="UBC Rec Events Subsidy"
                            content="UBC Recreation subsidy is intended to alleviate personal financial burdens by providing a 
                                subsidy that students can use to engage in activities that promote physical health and wellness. 
                                This includes, but is not limited to, relevant events, competitions and recreational intramural 
                                league costs. "
                            link=""
                        />
                    </SciSec>
            </StuSec>
            <ClubSec>
                <SecondHeader>SUS Clubs</SecondHeader>
                <SciSec>
                    <Accordion 
                        title="Clubs Operations Grant"
                        content="The Club Operations Grant is meant to supplement existing club membership fees and to help 
                                facilitate day-to-day operations of the club. The maximum allocation per Club Operations Grant
                                is $1750.00."
                        link="https://docs.google.com/spreadsheets/d/1l80bQhhRTl8o6Ylz5ihR92qE5iIdrXjYIaurQjo_EYg/edit?usp=drive_link"
                    />
                    <Accordion 
                        title="Special Projects Grant"
                        content="The Special Projects Grant is intended to help facilitate any new or special projects undertaken 
                                by SUS Clubs. The Special Project Grants can only be used towards new events/projects or new additions
                                to annual or existing activities that benefit a sizable portion of the science student body. 
                                The maximum allocation of the Special Projects Grant is 50% of relevant fees to a maximum of $500."
                        link="https://docs.google.com/spreadsheets/d/1uGe_JO6J9AP8NybmjySjf5scxKWkKvVY_pPGVX38gCk/edit?usp=drive_link"
                    />
                    <Accordion
                        title="EDI Grant"
                        content="This grant is intended to create initiatives to support and centre communities with folks who 
                                identify as Black, Indigenous, and People of Colour, or 2SLGBTQIA+, have disabilities, or have
                                been and continue to be systemically-made marginalized. The grant may also be used for providing 
                                services that support communities made marginalized, or for conducting community-led research focused
                                on these groups in ways that are respectful, non-extractive, and non-performative. 
                                The maximum allocation of the Inclusivity Grant is 50% of relevant fees to a maximum of $500."
                        link="https://docs.google.com/spreadsheets/d/1MICyCxMJU4cbUFXF0_LsLN-HkXobP0EerCE-oVKfe6c/edit?usp=drive_link"
                    />
                </SciSec>
            </ClubSec>
            <Footer />
        </Background>
    )
}

function Accordion({ title, content, link }) {
    const [isActive, setIsActive] = useState(false);
    return (
        <IndivInfo>
            <TitleSec onClick={() => setIsActive(!isActive)}>
                <InfoTitle>{title}</InfoTitle>
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
    width: 23%;
    min-height: 100%;
    color: #222755;

    @media (max-width: ${breakpoints.mobile}) {
        width: 98%;
        min-height: auto;
        text-align: center;
    }
`

const InfoTitle = styled.h2`
    font-size: 18px;
    font-weight: bold;

    @media (max-width: ${breakpoints.mobile}) {
        size: 15px;
        padding: 15px;
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
