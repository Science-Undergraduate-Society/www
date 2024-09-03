import styled from "styled-components";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Carousel } from "react-responsive-carousel";
import alsscGallery from "@/utility/alsscGallery";

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
                    <Title>THE ABDUL LADHA SCIENCE STUDENT CENTRE</Title>
                    <HeaderDescription>
                        The Abdul Ladha Science Student Centre (ALSSC) is the home of the Science Undergraduate Society. 
                        It exists as a social space to encourage both informal and organized academic, club, and 
                        social activities and interactions for those students enrolled in the Faculty of Science at 
                        UBC Vancouver.
                    </HeaderDescription>
                    <ButtonGroup>
                        <ButtonHollowBlack>
                            <Link href="/scienceStudentCentre/eventBooking">Event Bookings</Link>    
                        </ButtonHollowBlack>
                        <ButtonHollowBlack>
                            <Link href="/scienceStudentCentre/meetingBooking">Meeting Room Bookings</Link>
                        </ButtonHollowBlack>
                    </ButtonGroup>
                </Header>

                <Divider/>

                {/* Hours Section */}
                <Section>
                    <Title>Hours</Title>
                    <HoursContainer>
                        <Hours><HoursSpan>Monday - Thursday: </HoursSpan>8AM - 8PM</Hours>
                        <Hours><HoursSpan>Fridays: </HoursSpan>8AM - 6PM</Hours>
                        <Hours><HoursSpan>Weekends: </HoursSpan>Closed</Hours>
                    </HoursContainer>

                    <HoursDescription>
                        The ALSSC is open during the first and second terms of the winter session only. 
                        The building is unavailable during the summer academic terms. The ALSSC will be 
                        closed during all university closures (including, but not limited to reading break, 
                        Christmas holidays, and any holidays). 
                    </HoursDescription>
                </Section>
                
                <Divider/>

                {/* Building Features & Information */}
                <Section>
                    <Title>Building Features & Information</Title>
                    <Dropdown title="First Floor (1F)" items={firstFloorItems} />
                    <Dropdown title="Second Floor (2F/Main Floor)" items={secondFloorItems} />
                    <Dropdown title="Third Floor (3F/Mezzanine)" items={thirdFloorItems} />
                    <Dropdown title="Building Exterior (Front Porch)" items={buildingExteriorItems} />
                    {/* this one had subtitles so had to hardcode */}
                    <DropdownContainer>
                        <DropdownHeader onClick={() => setAVSystemInfoIsOpen(!AVSystemInfoIsOpen)}>
                            Audio-Visual (AV) System Information
                        </DropdownHeader>
                        <DropdownBodyAV isOpen={AVSystemInfoIsOpen}>
                            <p>The ALSSC is equipped with a state-of-the-art AV system. Specifically, the system has the following features and capabilities:</p>
                            
                            <h4>Multimedia Projector:</h4>
                            <DropdownItem>Wired Video and Audio Connection via HDMI</DropdownItem>
                            <DropdownItem>Wireless Video and Audio Connection via AirMedia</DropdownItem>
                            <DropdownItem>Retractable Screen</DropdownItem>
                            <DropdownItem>Single Content Only – Not Dual-Content Capable</DropdownItem>

                            <h4>Audio:</h4>
                            <DropdownItem>4x Speakers – 2 front facing; 2 rear</DropdownItem>
                            <DropdownItem>Wired Audio Connection via 3.5mm jack</DropdownItem>
                            <DropdownItem>Wireless Audio Connection via AirMedia</DropdownItem>

                            <h4>Microphones:</h4>
                            <DropdownItem>1x Wireless Lapel Microphone</DropdownItem>
                            <DropdownItem>1x Wireless Handheld Microphone</DropdownItem>

                            <h4>Touchscreen AV Control System:</h4>
                            <DropdownItem>Select Video and Audio Connections</DropdownItem>
                            <DropdownItem>Independently Adjust Microphone and Audio Levels</DropdownItem>
                            <DropdownItem>Full System Mute and Volume Adjustment</DropdownItem>
                        </DropdownBodyAV>
                        <br/>
                    </DropdownContainer>
                    <Dropdown title="Accessibility Information" items={accessibilityInformationItems} />
                </Section>

                <Divider/>

                {/* Floor Plans Section */}
                <Section>
                    <Title>Floor Plans</Title>
                    <FloorPlansDropdown title='First Floor (1F)' imageSource='/images/aboutAlsscImages/first-floor-plan.webp'/>
                    <FloorPlansDropdown title='Second Floor (2F / Main Floor)' imageSource='/images/aboutAlsscImages/second-floor-plan.webp'/>
                    <FloorPlansDropdown title='Third Floor (3F / Mezzanine)' imageSource='/images/aboutAlsscImages/third-floor-plan.webp'/>
                </Section>

                <Divider/>

                {/* Gallery Section */}
                
                {/* <Section>
                    <Title>Gallery</Title>
                    <Carousel
                        showThumbs={false}
                        showStatus={false}
                        infiniteLoop={true}
                        emulateTouch={true}
                        centerMode={true}
                        centerSlidePercentage={30}
                        swipeable={true}
                    >
                        {alsscGallery.map((image, index) => (
                        <CarouselSlide key={index}>
                            <CarouselImage
                            src={image.src}
                            alt={image.alt}
                            />
                        </CarouselSlide>
                        ))}
                    </Carousel>
                </Section>

                <Divider/> */}

                {/* Contact Us Section */}
                <ContactSection>
                    <Title>Contact Our ALSSC Team</Title>
                    <h4>Booking Inquires: <a href='mailto:bmanager.bookings@sus.ubc.ca' target="_blank" rel="noreferrer">bmanager.bookings@sus.ubc.ca</a></h4>
                    <h4>Operations & Maintenance: <a href='mailto:bmanager.operations@sus.ubc.ca' target="_blank" rel="noreferrer">bmanager.operations@sus.ubc.ca</a></h4>
                </ContactSection>

                <Footer/>
            </Content>
        </>
    )
}

// =============== GENERAL =============== //

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

// =============== HOURS =============== //

const HoursContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const Hours = styled.div`
    display: flex;
    align-items: center; 
`
const HoursSpan = styled.span`
    font-weight: bold;
    margin-right: 20px;
`
const HoursDescription = styled.div`
    margin-top: 3rem;
`

// =============== GALLERY =============== //

const CarouselSlide = styled.div`
  display: flex;
  flex-direction: row; // Ensure content inside each slide is laid out in a row
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const CarouselImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 20px;
`;