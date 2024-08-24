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
                            <BCInfoImgRight src="/images/index-images/main2.png" alt="Logo" />
                        </ImgGradientRight>
                    </Right>
                </BCInfo>
                <StyledLink id="eligibility"></StyledLink>
                <Eligibility>
                    <Left>
                        <ImgGradientLeft>
                            <BCInfoImgLeft src="/images/index-images/main2.png" alt="Logo" />
                        </ImgGradientLeft>
                    </Left>
                    <Right>
                        <Title>Eligibility</Title>
                        <All>All UBC students in the Faculty of Science are eligible for the Blue Card.</All>
                    </Right>
                </Eligibility>
                <StyledLink id="partners"></StyledLink>
                <Partners>
                    <Title>Our Partners</Title>
                    <PartnersBox>
                        <IndivPartnerInfo
                            partnerName="Arbutus Station Dental"
                            logoSrc="/images/bluecard-images/arbutus station dental.png"
                            description="Free take-home teeth whitening kit with the completion 
                            of a new patient exam and cleaning."
                            location="Valid only at 2184 W Broadway #560, Vancouver, BC V6K 2E1"
                        />
                        <IndivPartner>
                            <PartnerImgThin src="/images/bluecard-images/BAKD_Cookies_Logo.webp" /> 
                            <PartnerNameThin>Bak'd</PartnerNameThin>
                            <Description>10% off</Description>
                        </IndivPartner>
                        <IndivPartnerInfo
                            partnerName="Chatime"
                            logoSrc="/images/bluecard-images/chatime-logo.webp"
                            description="10% off"
                            location="Valid only at 5998 University Blvd #4, Vancouver, V6T 2A1"
                        />
                        <IndivPartnerInfo
                            partnerName="Delhi 6 Indian Bistro"
                            logoSrc="/images/bluecard-images/delhi 6 indian bistro.png"
                            description="15% off"
                            location="Valid only at 1766 W 7th Ave"
                        />
                        <IndivPartner>
                            <PartnerImgThin src="/images/bluecard-images/EYELAB.png" /> 
                            <PartnerNameThin>Eyelab, Doctors of Optometry</PartnerNameThin>
                            <Description>10% discount on contacts</Description>
                            <Location>Valid only at 2369 W 41st Ave, Vancouver, BC V6M 2A3</Location>
                        </IndivPartner>
                        <IndivPartnerInfo
                            partnerName="Gold's Gym"
                            logoSrc="/images/bluecard-images/gold_s gym logo.png"
                            description="35% off standard rate"
                            location="Valid only at 709 W Broadway, Vancouver, BC V5Z 1J5 2155 Allison Rd, Vancouver, BC V6T 1T5 1950 Oxford Connector, Port Coquitlam, BC V3B 4H3 19989 81a Ave, Langley Twp, BC V2Y 0C7"
                        />
                        <IndivPartnerInfo
                            partnerName="Hinbor"
                            logoSrc="/images/bluecard-images/hinbor_logo.jpeg"
                            description="Special weekly discounts for Science students!"
                            location="Email Rachel at info@hinbor.ca with your Hinbor app username to be included into exclusive science student discounts"
                        />
                        <IndivPartnerInfo
                            partnerName="Kung Fu Tea"
                            logoSrc="/images/bluecard-images/KUNG FU TEA [BLACK].png"
                            description="15% discount on all items"
                            location="Valid only at 2855 W Broadway, Vancouver, BC V6K 2G6"
                        />
                        <IndivPartnerInfo
                            partnerName="Majestic Maven"
                            logoSrc="/images/bluecard-images/majestic-maven-14.jpg"
                            description="25% off on all services for September then 20% for the rest of the year."
                            location=""
                        />
                        <IndivPartnerInfo
                            partnerName="Milano Casa Riistorante"
                            logoSrc="/images/bluecard-images/milano casa logo.jpg"
                            description="10% off on the dinner menu. Note: dinner menu starts from 6 pm"
                            location="Valid only at 4397 W 10th Ave, Vancouver, BC V6R 2H6"
                        />
                        <IndivPartnerInfo
                            partnerName="Pita Pit"
                            logoSrc="/images/bluecard-images/PitaPit_logo.jpg"
                            description="5% off"
                            location="Valid only at 5717 Dalhousie Rd, Vancouver, BC V6T 2H9"
                        />
                        <IndivPartnerInfo
                            partnerName="Steve's Poke Bar"
                            logoSrc="/images/bluecard-images/Steve_s Poke Bar Logo.png"
                            description="$5 off"
                            location="Valid at www.stevespokebar.ca"
                        />
                        <IndivPartnerInfo
                            partnerName="Wizeprep"
                            logoSrc="/images/bluecard-images/wizeprep logo.png"
                            description="15% discount on Study Pass + Live Prep sessions + MCAT"
                            location="Valid at wizeprep.com"
                        />
                        </PartnersBox>
                </Partners>
            </MainInfo>
            <Footer></Footer>
        </Background>
    )
}

// partner's boxes
function IndivPartnerInfo({ partnerName, logoSrc, description, location }) {
    return (
        <>
        <IndivPartner>
            <PartnerImg src={logoSrc} /> 
            <PartnerName>{partnerName}</PartnerName>
            <Description>{description}</Description>
            <Location>{location}</Location>
        </IndivPartner>
        </>
    );
}

const breakpoints = {
    mobile: '768px',
    tablet: '1024px',
};

const PartnerName = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-top: 24px;
`

const PartnerNameThin = styled(PartnerName)`
    margin-top: 53px;
`

const PartnerImg = styled.img`
    max-width: 75%;
    height: auto;
`

const PartnerImgThin = styled(PartnerImg)`
    margin-top: 24px;
`

const Description = styled.div`
    font-size: 12px;
    margin-top: 3%;
`
const Location = styled.div`
    font-size: 10px;
    font-style: italic;
    margin-top: 4%;
    color: #0173be;
`

const Heading = styled.div`
    padding-top: 126px;
    padding-left: 15%;
    color: white;
    min-height: 400px;
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
    flex-wrap: wrap;

    @media (max-width: ${breakpoints.tablet}) {
        padding: 12px;
        flex-direction: column;
    }
`

const Partners = styled(BCInfo)`
    margin: 0 2% 2% 2%;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    background-color: white;
    border-color: #e7edf7;
    border-width: 10px;
`
const Eligibility = styled(BCInfo) `
    margin: 0 2%;
    justify-content: center;
    align-items: center;

    @media (max-width: ${breakpoints.mobile}) {
        text-align: right;
    }
`

const SmItem = styled.div`
    font-size: 18px;
    text-align: center;
`

const InfoP = styled.div `
    font-size: 18px;
    color: #222755;
    text-align: left;
    padding: 24px 0;
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
    height: 100%;
    width: 100%;
    padding: 24px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
    row-gap: 50px;
    justify-content: center;
`
const IndivPartner = styled.div`
    color: #222755;
    padding: 2%;
    max-width: 23%;
    height: auto;
    justify-content: center;
    align-items: center;

       @media (max-width: ${breakpoints.mobile}) {
        max-width: 48%;
    }
`

const Left = styled.div`
    max-width: 50%;
    align-items: center;
    justify-content: center;

    @media (max-width: ${breakpoints.mobile}) {
        max-width: 100%;
    }
        @media (max-width: ${breakpoints.tablet}) {
        max-width: 100%;
    }
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
const BCInfoImgRight = styled.img`
  min-width: 50%;
  height: auto;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  display: block;

  @media (max-width: ${breakpoints.mobile}) {
        width: 100%;
    }
 `

 const BCInfoImgLeft = styled(BCInfoImgRight)`
 `
const ImgGradientLeft = styled.div``
const ImgGradientRight = styled(ImgGradientLeft)`
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
    margin: 20px 0;
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
