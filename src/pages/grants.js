import styled, { createGlobalStyle, keyframes } from "styled-components";
import Link from 'next/link';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"

export default function Grants() {
    return (
        <Background>
            <Navbar></Navbar>
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
            <StuSec>
                <SecondHeader>Science Students</SecondHeader>
                    <SciSec>
                        <IndivInfo>
                            <InfoTitle>Professional Development Grant</InfoTitle>
                            <InfoP>
                                A subsidy that students can use to attend events to further one’s professional careers 
                                such as relevant events, conferences, seminars and all associated prices. 
                            </InfoP>
                        </IndivInfo>
                        <IndivInfo>
                            <InfoTitle>Student Initiative Grant</InfoTitle>
                            <InfoP>
                                The grant aims to encourage students to provide demonstrable service for current 
                                science students to fulfill unmet needs. It may also be used to support students who 
                                require financial assistance for personal research projects. The maximum allocation of 
                                the Student Initiatives Grant is $250.
                            </InfoP>
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
                </IndivInfoBlue>
                <IndivInfoBlue>
                    <InfoTitle>Special Projects Grant</InfoTitle>
                        <InfoP>
                            The Special Projects Grant is intended to help facilitate any new or special projects undertaken 
                            by SUS Clubs. The Special Project Grants can only be used towards new events/projects or new additions
                            to annual or existing activities that benefit a sizable portion of the science student body. 
                            The maximum allocation of the Special Projects Grant is 50% of relevant fees to a maximum of $500.
                        </InfoP>
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
                </IndivInfoBlue>
                </SciSec>
            </ClubSec>
            <Footer />
        </Background>
    )
}

const GlobalStyle = createGlobalStyle`
    :root {
    --susblue: #222755;
    --logoblue: #0173be;
    --greyblue: #e7edf7;
    --black: #000000;
    --white: #ffffff;

}`;

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
    background-color: #e7edf7;
    padding-top: 24px;
    text-transform: uppercase;
    letter-spacing: 3px;
`

const SciSec = styled.div`
    height: 100%;
    width: 100%;
    background-color: #e7edf7;
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
    background-color: #222755;
    border-style: solid;
    border-radius: 20px;
    border-width: 0;
    border-color: none;
    padding: 2%;
    max-width: 23%;
    height: auto;
`
const IndivInfoBlue = styled(IndivInfo)`
    background-color: #0173be;
    opacity: 50%;
`

const InfoTitle = styled.h2`
    font-size: 18px;
    color: white;
    font-weight: bold;
    opacity: 100%;
`

const InfoP = styled.p`
    font-size: 15px;
    color: white;
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

const breakpoints = {
    mobile: '768px',
    tablet: '1024px',
};
