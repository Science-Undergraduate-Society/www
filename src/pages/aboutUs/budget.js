import styled from "styled-components";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Alssc() {
    const firstFloorItems = [
        'Printer – connected to UBCPayForPrint',
        'Study cubicles for silent study',
        'Meetings rooms (3) for meetings or smaller events',
        'Large tables for silent group study',
    ];
    const secondFloorItems = [
        'Large open area for studying and hosting events',
        'Bar-style kitchenette with fridges and microwaves',
        'Water dispenser (hot and cold water)',
        'Rolling tables (8) and chairs (40+)',
        'Audio Visual (AV) system with projector, speakers, and microphones',
        'Mens/Womens/Universal washrooms (all wheelchair accessible)',
    ];
    const thirdFloorItems = [
        'Couches and tables for studying and lounging',
        'Space for smaller/relaxed events'
    ];
    const buildingExteriorItems = [
        'Open space for boothing outside the front of the building',
        'We provide tables and tents to ensure that you can booth in any weather',
        'Microphone and speakers also available for events in this space'
    ];
    const accessibilityInformationItems = [
        'All floors are wheelchair accessible via elevator access',
        'Accessible washrooms',
        'Automatic door openers on main entrance and side entrance'
    ];
    const avSystemInfoItems = [
        'Multimedia Projector:',
        'Audio:',
        'Microphones:',
        'Touchscreen AV Control System:'
    ];
    const MultimediaProjectorItems = [
        'Wired Video and Audio Connection via HDMI',
        'Wireless Video and Audio Connection via AirMedia',
        'Retractable Screen',
        'Single Content Only – Not Dual-Content Capable'
    ]

    const Dropdown = ({ title, items }) => {
        const [isOpen, setIsOpen] = useState(false);
    
        return (
            <DropdownContainer>
                <DropdownHeader onClick={() => setIsOpen(!isOpen)}>
                    {title}
                </DropdownHeader>
                <DropdownBody isOpen={isOpen}>
                    {items.map((item, index) => (
                    <DropdownItem key={index}>{item}</DropdownItem>
                    ))}
                </DropdownBody>
                <br/>
            </DropdownContainer>
        );
    };

    const FloorPlansDropdown = ({ title, imageSource }) => {
        const [isOpen, setIsOpen] = useState(false);
    
        return (
            <DropdownContainer>
                <DropdownHeader onClick={() => setIsOpen(!isOpen)}>
                    {title}
                </DropdownHeader>
                {isOpen && <br/>}
                <DropdownBodyAV isOpen={isOpen} src={imageSource}>
                    <DropdownImage isOpen={isOpen} src={imageSource} />
                </DropdownBodyAV>
                <br/>
            </DropdownContainer>
        );
    };

    const [AVSystemInfoIsOpen, setAVSystemInfoIsOpen] = useState(false);

    return (
        <>
            <Navbar />
            <Content>
                <Header>
                <Title>BUDGET</Title>
                    <HeaderDescription>
                      The Science Undergraduate Society operates a $220k + budget and is governed by policies evoked by the AMS and the Science Student body. The following document outline how the student fees are used.
                    </HeaderDescription>
                    <ButtonGroup>
                        <ButtonHollowBlack>
                            <Link href="https://docs.google.com/spreadsheets/d/1wG0j87hcq3qMozuOmajBFcDe5VX3q59m-PKoudzG2Gg/edit?usp=sharing">2024/2025 Budget</Link>    
                        </ButtonHollowBlack>
                    </ButtonGroup>

                    <Divider/>

                    <Title>SUS BUDGET FEEDBACK FORM</Title>
                    <HeaderDescription>
                      Do you have any feedback or suggestions to the SUS budget? Please let us know using this form.
                    </HeaderDescription>
                    <ButtonGroup>
                        <ButtonHollowBlack>
                            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeivIN69w38fEwQVquDbYKhNVNQ2lcptngJBOgzS0oTgrmOtg/viewform">Budget Feedback Form</Link>    
                        </ButtonHollowBlack>
                    </ButtonGroup>

                    <Divider/>

                    <Title>QUESTIONS?</Title>
                    <ExecutiveImage src="/images/executive-images/Chloe-Chan.webp" />
                    <HeaderDescription>
                      Please contact our VP Finance at <a href="mailto:vpfinance@sus.ubc.ca">vpfinance@sus.ubc.ca</a>.
                    </HeaderDescription>
                </Header>


                <Footer/>
            </Content>
        </>
    )
}

// =============== GENERAL =============== //
const ExecutiveImage = styled.img`
  overflow: hidden;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  width: 200px;
  height: 200px;
`;

const ContactSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    width: 80%;
    margin-top: 5vh;
    margin-bottom: 5vh;
`

const Content = styled.main`
    margin-top: 30vh;
    width: 100%;
    height: auto;
    overflow-y: auto; 
    scroll-behavior: smooth;
    position: relative; 
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
`

const Divider = styled.div`
    margin-top: 5vh;
    margin-bottom: 5vh;
    width: 90%;
    border-bottom: 1px solid black;
`

const ButtonGroup = styled.div`
    margin-top: 1.5rem;
    display: flex;
    gap: 20px;
    justify-content: left;
`;

const ButtonHollowBlack = styled.button`
    background-color: transparent;
    color: #222755;
    padding: 15px 35px;
    border-radius: 30px;
    border: 1px solid #222755;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 600;
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;

    &:hover {
        color: #0052FF;
        border: 1px solid #0052FF;
    }
`;
const Link = styled.a`
    text-decoration: none;
    color: inherit;
`

const Section = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    width: 80%;

    margin-top: 5vh;
    margin-bottom: 5vh;
`

// =============== DROPDOWN STYLES =============== //

const DropdownContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const DropdownHeader = styled.div`
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  background-color: #f1f1f1;
  cursor: pointer;
  border-bottom: 1px solid #ddd;

  &:hover {
    background-color: #ddd;
  }
`;

const DropdownBody = styled.div`
    max-height: ${(props) => (props.isOpen ? '500px' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease;
`;

const DropdownBodyAV = styled.div`
    max-height: ${(props) => (props.isOpen ? 'none' : '0')};
    p {
        margin-top: 30px;
    }
    overflow: hidden;
    transition: max-height 0.3s ease;
    width: 100%;
    margin-left: 2rem;
`;

const DropdownItem = styled.li`
    padding: 15px;
    margin: 0 15px;
    border-bottom: 1px solid #ddd;
    font-size: 16px;
    
    &:last-child {
        border-bottom: none;
    }
    
    &:hover {
        background-color: #f9f9f9;
    }
`;

const DropdownImage = styled.img`
    max-height: ${(props) => (props.isOpen ? '500px' : '0')};
    object-fit: cover;
    width: auto;
    overflow: hidden;
    transition: max-height 0.3s ease;
    border: 1px solid grey;
`

// =============== HEADER =============== //

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;

    width: 50%;
    margin-bottom: 10vh;
`

const Title = styled.h2`
    color: black;
`

const HeaderDescription = styled.p`
    text-align: center;
`
