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
                        <ImgGradientRight>
                            <BCInfoImg src="/images/index-images/main2.png" alt="Logo" />
                        </ImgGradientRight>
                    </Right>
                </BCInfo>
                <Eligibility>
                    <StyledLink id="eligibility"></StyledLink>
                    <Left>
                        <ImgGradientLeft>
                            <BCInfoImg src="/images/index-images/main2.png" alt="Logo" />
                        </ImgGradientLeft>
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
    gap: 10px;
`

const Partners = styled(BCInfo)`
    margin: 0 2% 2% 2%;
    text-align: center;
    justify-content: center;
    align-items: center;
`
const Eligibility = styled(BCInfo) `
    margin: 0 2%;
    justify-content: center;
    align-items: center;
`

const SmItem = styled.div`
    font-size: 18px;
    text-align: center;
`

const InfoP = styled.div `
    font-size: 18px;
    color: #222755;
    text-align: left;
    padding: 12px 0;
`

const All = styled.div`
    font-size: 30px;
    letter-spacing: 3px;
    width: 100%;
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
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
`

const IndivPartner = styled.div`
    color: #222755;
`

const Left = styled.div`
    width: 50%;
    align-items: center;
    justify-content: center;
`
const Right = styled(Left)`
`

const Background = styled.div`
    height: 100%;
    background-size: cover;
    display: flex;
    flex-direction: column;
    background-color: #222755;
`
// images
const BCInfoImg = styled.img`
  min-width: 50%;
  height: auto;
  position: relative;
  z-index: 1;
  border-radius: 10px;
  display: block;
 `

const ImgGradientRight = styled.div`
    float: right;
    &::after {
    display: block;
    z-index: 10;
    position: relative;
    background-image: linear-gradient(to right, #e7edf7 0, transparent 100%);
    margin-top: -375px;
    height: 375px;
    width: 100%;
    content:  '';}
`

const ImgGradientLeft = styled.div`
    &::after {
    display: block;
    z-index: 10;
    position: relative;
    background-image: linear-gradient(to right, transparent 0, #e7edf7 100%);
    margin-top: -375px;
    height: 375px;
    width: 90%;
    content:  '';}

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
