import styled from "styled-components";
import Link from 'next/link';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"

//import images
import BCImg from "../public/images/health-images/health-main.jpg";

export default function BlueCard() {
    return (
        <Background>
            <Navbar></Navbar>
            <Heading>
                <Title>The Blue Card</Title>
                <SubInfo>The UBC Student Discount Card</SubInfo>
                <SecondaryMenu>
                    <TopLink href="#eligibility">
                        <SmItem>Eligibility</SmItem>
                    </TopLink>
                    <TopLink href="#partners">
                        <SmItem>Partners</SmItem>
                    </TopLink>
                </SecondaryMenu>
                <Link href="">
                    <StyledButton>Sign In/Up</StyledButton>
                </Link>
            </Heading>
            <MainInfo>
                <BCInfo>
                    <Left>
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
                    </Left>
                    <Right>
                        <BCInfoImg src={BCImg} />
                    </Right>
                </BCInfo>
                <Eligibility>
                    <StyledLink id="eligibility"></StyledLink>
                    <Left>
                    </Left>
                    <Right>
                        <Title>Eligibility</Title>
                        <All>All UBC students in the Faculty of Science are eligible for the Blue Card.</All>
                    </Right>
                </Eligibility>
                <Partners>
                    <StyledLink id="partners"></StyledLink>
                    <Title>Our Partners</Title>
                    <PartnersBox>
                        <IndivPartner></IndivPartner>
                    </PartnersBox>
                </Partners>
            </MainInfo>
            <Footer></Footer>
        </Background>
    )
}

const Heading = styled.div`
    padding-top: 126px;
    padding-left: 15%;
    color: white;
    height: 400px;
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
    margin-top: 20px;
    letter-spacing: 4px;
    font-style: italic;
`

const SecondaryMenu = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 24px;
    width: 100%;
`

const BCInfo = styled.div`
    background-color: #e7edf7;
    width: 96%;
    height: auto;
    margin: 2% 2% 0 2%;
    padding: 24px;
    border-style: solid;
    border-radius: 20px;
    border-width: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

const Partners = styled(BCInfo)`
    margin: 0 2% 2% 2%;
`
const Eligibility = styled(BCInfo) `
    margin: 0 2%;
`

const SmItem = styled.div`
    font-size: 18px;
    text-align: center;
`

const InfoP = styled.div `
    font-size: 18px;
    color: #222755;
    text-align: left;
    width: 100%;
    padding: 12px 0;
`

const All = styled.div`
    font-size: 36px;
    letter-spacing: 3px;
    width: 70%;
    font-weight: 300; 
`

const MainInfo = styled.div`
    color: #222755;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background: white;
    gap: 15px;
    justify-content: center;
    align-items: center;
`

const PartnersBox = styled.div`
    display = flex;
`

const IndivPartner = styled.div`
    color: #222755;
`

const Left = styled.div`
`
const Right = styled(Left)`
`

const BCInfoImg = styled.img`
    width: 100%;
    position: relative;
    z-index: 0;
`
const Background = styled.div`
    height: 100%;
    background-size: cover;
    display: flex;
    flex-direction: column;
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
    visibility: hidden;
`

const TopLink = styled.a`
    color: white;
    text-decoration: none;
`
