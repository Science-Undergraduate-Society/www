import styled from "styled-components";
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// const partnerData = [
//     {
//         partnerName: "Arbutus Station Dental",
//         logoSrc: "/images/bluecard-images/partner-logos/arbutus station dental.png",
//         description: "Free take-home teeth whitening kit with the completion of a new patient exam and cleaning.",
//         location: "Valid only at 2184 W Broadway #560, Vancouver, BC V6K 2E1"
//     },
//     {
//         partnerName: "Bak'd",
//         logoSrc: "/images/bluecard-images/partner-logos/BAKD_Cookies_Logo.webp",
//         description: "10% off",
//         location: "" // No location specified in original
//     },
//     {
//         partnerName: "Chatime",
//         logoSrc: "/images/bluecard-images/partner-logos/chatime-logo.webp",
//         description: "10% off all products",
//         location: "Valid only at 5998 University Blvd #4, Vancouver, V6T 2A1"
//     },
//     {
//         partnerName: "Eyelab, Doctors of Optometry",
//         logoSrc: "/images/bluecard-images/partner-logos/EYELAB.png",
//         description: "10% discount on contacts",
//         location: "Valid only at 2369 W 41st Ave, Vancouver, BC V6M 2A3"
//     },
//     {
//         partnerName: "Killer Ice Cream",
//         logoSrc: "/images/bluecard-images/partner-logos/Killer Ice Cream Logo.png",
//         description: "$2 off regular sized cones",
//         location: "Valid only at 3659 W 4th Ave, Vancouver, BC V6R 1P2"
//     },
//     {
//         partnerName: "Majestic Maven",
//         logoSrc: "/images/bluecard-images/partner-logos/majestic-maven-14.jpg",
//         description: "25% off all services during September, then 20% discount on all services until August 2025",
//         location: "Valid only at 1236 Richards St, Vancouver, BC V6B 6M6"
//     },
//     {
//         partnerName: "Mosa",
//         logoSrc: "/images/bluecard-images/partner-logos/Mosa logo.jpg",
//         description: "Use code SUS20 for 20% off all products",
//         location: "Valid only at www.wearemosa.com"
//     },
//     {
//         partnerName: "Steve's Poke Bar",
//         logoSrc: "/images/bluecard-images/partner-logos/Steve_s Poke Bar Logo.png",
//         description: "Use code SCHOOLSPB for $5 off first time app purchases",
//         location: "Valid at www.stevespokebar.ca"
//     },
//     {
//         partnerName: "StorageHotel",
//         logoSrc: "/images/bluecard-images/partner-logos/Storagehotel Logo - Green Small.png",
//         description: "Mention SUS when signing up for the Summer 2025 waitlist for VIP Early Booking Access, including a code to skip the waitlist queue and a $50 discount.",
//         location: "Valid at www.storagehotel.ca"
//     },
//     {
//         partnerName: "Wizeprep",
//         logoSrc: "/images/bluecard-images/partner-logos/wizeprep logo.png",
//         description: "Free access to Wizeprep's Monthly Subscription for September, then 15% off until August 2025. 15% off Wizeprep's MCAT Elite 515 Course and Self-Paced Program.",
//         location: "Valid at wizeprep.com"
//     },
//     {
//         partnerName: "Susgrainable",
//         logoSrc: "/images/bluecard-images/partner-logos/susgrainable.png",
//         description: "Use code BLUECARD to get 20% off their Banana Bread Mix, Chocolate Chip Cookie Mix, Pancake & Waffle Mix, and Starter Bundle on their online store, or get $2 off the Banana Bread Mix, Chocolate Chip Cookie Mix, and Pancake & Waffle Mix at their offline store",
//         location: "Valid at https://susgrainable.com/"
//     }
// ];

export default function BlueCard() {
    return (
        <Background>
            <Navbar></Navbar>
            <Heading>
                <MainTitle>The Blue Card</MainTitle>
                <SubInfo>The UBC Student Discount Card</SubInfo>
                <SecondaryMenu>
                    <TopLink href="#eligibility">
                        <SmItem>Eligibility</SmItem>
                    </TopLink>
                    <TopLink href="#partners">
                        <SmItem>Partners</SmItem>
                    </TopLink>
                </SecondaryMenu>
                <Link href="https://susbluecard.firebaseapp.com/auth">
                    <StyledButton>Sign In/Up</StyledButton>
                </Link>
            </Heading>
            <MainInfo>
                <ColourBackground>
                    <BCTitle>What is Blue Card?</BCTitle>
                    <BCInfoP>Welcome to Bluecard -- Your FREE Virtual Discount Program for all UBC Science Students! 
                            Discover exclusive benefits at local restaurants and shops by simply presenting your Blue Card.
                            To get started, follow the register link at the top of the page. <br /> <br />
                            Submit specific requests for places you want to enjoy discounts using the feedback function at the bottom of our page! 
                            Our SUS student benefits team will do our best to secure the desired discount for you.
                    </BCInfoP>  
                </ColourBackground>                     
                <StyledLink id="eligibility"></StyledLink>
                <ImgSec>
                    <ImgBackground src="/images/bluecard-images/eligibility.jpg" alt="Logo" />
                    <EligibilityTitle>Eligibility</EligibilityTitle>
                    <InfoP>All UBC students in the Faculty of Science are eligible for the Blue Card.</InfoP>
                </ImgSec>
                <StyledLink id="partners"></StyledLink>
                <Partners>
                    <PartnerTitle>Our Partners</PartnerTitle>
                    <PartnersBox>
                    <IndivPartnerInfo
                            partnerName="Susgrainable"
                            logoSrc="/images/bluecard-images/partner-logos/susgrainable.png"
                            description="Use code BLUECARD for 20% off online orders."
                            location="Valid at https://susgrainable.com/"
                            website="https://susgrainable.com/"
                        />
                        <IndivPartnerInfo
                            partnerName="Prestige Optical"
                            logoSrc="/images/bluecard-images/partner-logos/prestigeOptical.jpg"
                            description="Get 10% off prescription eyeglasses and sunglasses."
                            location="2950 West Broadway, Vancouver, BC V6K 2G8"
                            website="https://www.prestigeoptical.ca/"
                        />
                        <IndivPartnerInfo
                            partnerName="Pita Pit"
                            logoSrc="/images/bluecard-images/partner-logos/pitaPit.jpeg"
                            description="Get 10% off menu items."
                            location="5717 Dalhousie Rd, Vancouver, BC V6T 2H9"
                            website="https://pitapit.ca/"
                        />
                        <IndivPartnerInfo
                            partnerName="Sushi Nova"
                            logoSrc="/images/bluecard-images/partner-logos/sushiNova.png"
                            description="Get 10% off all menu items except alcohol."
                            location="2059 W 4th Ave Vancouver, BC V6J 1N3"
                            website="https://sushinova.ca/"
                        />
                        <IndivPartnerInfo
                            partnerName="Chatime"
                            logoSrc="/images/bluecard-images/partner-logos/chatime-logo.webp"
                            description="Get 10% off all products."
                            location="Valid only at 5998 University Blvd #4, Vancouver, V6T 2A1"
                            website="https://chatime.ca/"
                        />
                        <IndivPartnerInfo
                            partnerName="Eyelab, Doctors of Optometry"
                            logoSrc="/images/bluecard-images/partner-logos/EYELAB.png"
                            description="Get 10% off all products."
                            location="Valid only at 2369 W 41st Ave, Vancouver, BC V6M 2A3"
                            website="https://helloeyelab.com/"
                        />
                        <IndivPartnerInfo
                            partnerName="Killer Ice Cream"
                            logoSrc="/images/bluecard-images/partner-logos/Killer-ice-cream.png"
                            description="Get $2 off regular sized cones."
                            location="Valid only at 3659 W 4th Ave, Vancouver, BC V6R 1P2"
                            website="https://killericecream.ca/"
                        />
                        <IndivPartnerInfo
                            partnerName="Majestic Maven"
                            logoSrc="/images/bluecard-images/partner-logos/majestic-maven-14.jpg"
                            description="Get 20% off all lash and brow services."
                            location="Valid only at 1236 Richards St, Vancouver, BC V6B 6M6"
                            website="https://majesticmaven.ca/"
                        />
                        <IndivPartnerInfo
                            partnerName="Mosa"
                            logoSrc="/images/bluecard-images/partner-logos/Mosa logo.jpg"
                            description="Use code SUS20 for 20% off all products."
                            location="Valid only at www.wearemosa.com"
                            website="https://wearemosa.com/?srsltid=AfmBOorLe6OPrpA1PMSqzv8JKXdnSz_OIz_n3xuQXFg5vdn7TyR-1viq"
                        />
                        <IndivPartnerInfo
                            partnerName="Steve's Poke Bar"
                            logoSrc="/images/bluecard-images/partner-logos/Steve_s Poke Bar Logo.png"
                            description="Use code SCHOOLSPB for $5 off first time mobile app orders."
                            location="Valid at www.stevespokebar.ca"
                            website="https://www.stevespokebar.ca/"
                        />
                        <IndivPartnerInfo
                            partnerName="Storagehotel"
                            logoSrc="/images/bluecard-images/partner-logos/Storagehotel Logo - Green Small.png"
                            description="Use code SUS to save $50 and skip the Summer 2025 waitlist."
                            location="Valid at www.storagehotel.ca"
                            website="https://www.storagehotel.ca/"
                        />
                        <IndivPartnerInfo
                            partnerName="Wizeprep"
                            logoSrc="/images/bluecard-images/partner-logos/wizeprep logo.png"
                            description="Get 15% off UBC-specific and MCAT courses."
                            location="Valid at wizeprep.com"
                            website="https://www.wizeprep.com/"
                        />
                        <IndivPartnerInfo
                            partnerName="Delhi 6 Indian Bistro"
                            logoSrc="/images/bluecard-images/partner-logos/delhi.png"
                            description="Get 15% off all food items (not applicable to drinks)."
                            location="1766 W 7th Ave, Vancouver, BC V6J 4T3"
                            website="https://www.delhi6.ca/"
                        />
                        <IndivPartnerInfo
                            partnerName="Pearl Fever"
                            logoSrc="/images/bluecard-images/partner-logos/pearl.png"
                            description="Get 10% off mobile app purchases using their mailing list: https://forms.gle/osEaqy5TrsLAKKiT7."
                            location="2182 Western Pkwy, Vancouver, BC V6T 1W6"
                            website="https://pearlfever.ca/"
                        />
                        <IndivPartnerInfo
                            partnerName="Hullo Ferries"
                            logoSrc="/images/bluecard-images/partner-logos/hullo.svg"
                            description="Use code UBCSUS10 for 10% off regular fare sailings."
                            location="Valid at hullo.com"
                            website="https://hullo.com/"
                        />
                        <IndivPartnerInfo
                            partnerName="MYST Asian Fusion"
                            logoSrc="/images/bluecard-images/partner-logos/myst-asian-fusion-logo.jpg"
                            description="Get 10% off all in-person store purchases,
                            15% off event orders (50+), and 
                            20% off event orders (100+)."
                            location="6400 Kingsway, Burnaby"
                            website="https://myst6400.com/"
                        />
                        <IndivPartnerInfo
                            partnerName="Freshslice UBC Nest"
                            logoSrc="/images/bluecard-images/partner-logos/freshslice.png"
                            description="$7.00 for 2XL Classic & Pop Combo,
                            $7.90 for 2XL Feast & Pop Combo
                            $4.90 for Cheesy Breads."
                            location="UBC AMS Student Nest"
                            website="https://www.freshslice.com/"
                        />
                        </PartnersBox>
                </Partners>
            </MainInfo>
            <Footer color="white" background="#222755"/>
        </Background>
    )
}

// partner's boxes
function IndivPartnerInfo({ partnerName, logoSrc, description, location, website }) {
    return (
        <IndivPartner>
            <a href={website}><PartnerImg src={logoSrc} /></a>
            <PartnerName>{partnerName}</PartnerName>
            <Description>
                {partnerName === "Pearl Fever" ? (
                    <>
                        Get 10% off mobile app purchases using their <StyledLink href="https://forms.gle/osEaqy5TrsLAKKiT7">mailing list</StyledLink>.
                    </>
                ) : (
                    description
                )}
            </Description>
            <Location>{location}</Location>
        </IndivPartner>
    );
}

const breakpoints = {
    mobile: '768px',
    tablet: '1024px',
};

const Heading = styled.div`
    padding-top: 126px;
    padding-left: 15%;
    color: white;
    min-height: 400px;
    
    @media (max-width: ${breakpoints.mobile}) {
        padding-left: 10%;
    }
`
const Title = styled.div`
    font-size: 54px;
    font-weight: 700;
    position: absolute;
    letter-spacing: 5px;
    text-transform: uppercase;
    z-index: 100;
`

const BCTitle = styled(Title)  `
    top: 10%;
    padding: 2%;
    position: relative;

      @media (max-width: ${breakpoints.mobile}) {
        width: 100%;
        min-height: 100%;
        top: 5%;
        font-size: 45px;
    }
`

const PartnerTitle = styled(Title)`
    position: relative;

    @media (max-width: ${breakpoints.mobile}) {
        width: 100%;
        min-height: 100%;
        top: 5%;
        font-size: 35px;
    }
`

const MainTitle = styled(Title)`
    position: relative;
    top: 20px;
`

const EligibilityTitle = styled(Title) `
    font-size: 54px;
    font-weight: 700;
    position: absolute;
    letter-spacing: 5px;
    text-transform: uppercase;
    z-index: 100;
    top: 30%;
    padding: 2%;
    text-align: center;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 35px;
    }
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

const Partners = styled.div`
    margin: 0 2% 2% 2%;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    background-color: white;
    border-color: #e7edf7;
    border-width: 10px;
    width: 96%;
    height: auto;
    padding: 24px;
    border-style: solid;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;

    @media (max-width: ${breakpoints.mobile}) {
        margin-top: -2%;
    }
`
const ImgSec = styled.div `
    justify-content: center;
    align-items: center;
    margin: 2% 2%;
    flex-direction: column;
    gap: 5px;
    position: relative;
    width: 96%;
    height: 500px;
    overflow: hidden;

    @media (max-width: ${breakpoints.mobile}) {
    height: 300px;
    margin-top: -75px;
    margin-bottom: -75px;
    }
`

const SmItem = styled.div`
    font-size: 18px;
    text-align: center;
`

const InfoP = styled.div`
    font-size: 30px;
    letter-spacing: 3px;
    width: 100%;
    font-weight: 300; 
    position: absolute;
    top: 42%;
    z-index: 100;
    padding: 2%; 
    
    @media (max-width: ${breakpoints.mobile}) {
        font-size: 20px;
    }

`

const BCInfoP = styled(InfoP) `
    font-size: 25px;
    text-align: left;
    padding: 2%;
    position: relative;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 20px;
        top: 30%;
        padding: 1%;
    }
`

const MainInfo = styled.div`
    color: #222755;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background: white;
    justify-content: center;
    align-items: center;

    @media (max-width: ${breakpoints.mobile}) {
        gap: 50px;
    }
`
const IndivPartner = styled.div`
    width: 250px; // Fixed width for consistency
    height: 350px; // Fixed height to ensure boxes are the same size
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #f7f7f7;
    border: 1px solid #ddd;
    border-radius: 8px;
    text-align: center;
    margin: 10px;
`;

const Background = styled.div`
    height: 100%;
    background-size: cover;
    display: flex;
    flex-direction: column;
    background-color: #222755;
`
// images
const ImgBackground = styled.img`
    width: 100%;
    height: 500px;
    position: relative;
    border-radius: 10px;
    display: block;
    z-index: 2;
    opacity: 35%;
    object-fit: cover;

  @media (max-width: ${breakpoints.mobile}) {
        width: 100%;
        height: 300px;
    }
 `

 const ColourBackground = styled.div`
    width: 96%;
    height: %;
    position: relative;
    border-radius: 10px;
    background-color: #e7edf7;
    padding: 24px;
    margin-top: 24px;


  @media (max-width: ${breakpoints.mobile}) {
    }
 
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
    color: #0070f3;
    text-decoration: underline;
    &:hover {
        color: #0050c3;
    }
`;


const TopLink = styled.a`
    color: white;
    text-decoration: none;
`

const PartnerImg = styled.img`
    width: 100px;
    height: auto;
    margin-bottom: 15px;
`;

const PartnerName = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
`;

const Description = styled.div`
    font-size: 16px;
    margin-top: 10px;
`;

const Location = styled.div`
    font-size: 14px;
    color: #666;
    margin-top: 10px;
`;

// Add a flex container for all partner boxes to wrap and align them
const PartnersBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;
`;