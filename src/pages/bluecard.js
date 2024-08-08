import styled from "styled-components";
import Link from 'next/link';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"

export default function BlueCard() {
    return (
        <Background>
            <Navbar></Navbar>
            <Heading>
                <Title>The Blue Card</Title>
                <SubInfo>The UBC Student Discount Card</SubInfo>
                <SecondaryMenu>
                    <StyledLink href="#eligibility">
                        <SmItem>Eligibility</SmItem>
                    </StyledLink>
                    <StyledLink href="#partners">
                        <SmItem>Partners</SmItem>
                    </StyledLink>
                </SecondaryMenu>
                <Link href="">
                    <StyledButton>Sign In/Up</StyledButton>
                </Link>
            </Heading>
            <BCInfo>
                <Title>What is Blue Card?</Title>
                <InfoP>
                    Welcome to Bluecard -- Your FREE Virtual Discount Program for all UBC Science Students! 
                    Discover exclusive benefits at local restaurants and shops by simply presenting your Blue Card.
                    To get started, follow the register link at the top of the page. 
                </InfoP>
                <InfoP>
                    Submit specific requests for places you want to enjoy discounts using the feedback function at the bottom of our page! 
                    Our SUS student benefits team will do our best to secure the desired discount for you.
                </InfoP>
            </BCInfo>
            <Eligibility>
                <StyledLink id="eligibility"></StyledLink>
                <Title>Eligibility</Title>
                <All>All UBC students in the Faculty of Science are eligible for the Blue Card.</All>
            </Eligibility>
            <Partners>
                <StyledLink id="partners"></StyledLink>
                <Title>Our Partners</Title>
                <PartnersBox>
                    <IndivPartner></IndivPartner>
                </PartnersBox>
            </Partners>
            <Footer></Footer>
        </Background>
    )
}

const Heading = styled.div`
    padding-top: 126px;
    color: white;
`
const Title = styled.div`
    font-size: 54px;
    font-weight: 700;
    position: relative;
    letter-spacing: 5px;
    text-transform: uppercase;
    margin-top: 24px;
`

const SubInfo = styled.div`
    font-size: 24px;
    font-weight: 400;
    margin-top: 12px;
    letter-spacing: 4px;
    font-style: italic;
`

const SecondaryMenu = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 24px;
    width: 100%;
`

const BCInfo = styled.div`
    background-color: #e7edf7;
    color: #222755;
    width: 100%;
    height: auto;
    margin-top: 24px;
    padding: 24px;
`

const SmItem = styled.div`
    font-size: 18px;
    text-align: center;
`

const InfoP = styled.div `
    font-size: 18px;
    color: #222755;
    text-align: left;
    width: 70%;
    margin-left: 15%;
    padding: 24px;
`

const Eligibility = styled.div`
    color: white;
    width: 100%;
    height: 100%;
    padding: 24px;
`

const All = styled.div`
    font-size: 36px;
    color: white; 
    letter-spacing: 3px;
    width: 70%;
    margin-left: 15%;
    margin-top: 24px;
    font-weight: 300;
`

const Partners = styled.div`
    background-color: #e7edf7;
    color: #222755;
    width: 100%;
    height: auto;
    margin-top: 24px;
    padding: 24px;
`

const PartnersBox = styled.div`
    display = flex;
`

const IndivPartner = styled.div`
    color: #222755;
`

const Background = styled.div`
    height: 100%;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
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

const StyledLink = styled.a`
    text-decoration: none;
    color: white;
`
