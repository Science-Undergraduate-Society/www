import styled from "styled-components";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MeetingRoomBookings() {
    return(
        <>
            <Navbar />
            <Content>
                <Header>
                    <Title>MEETING ROOMS AT THE ALSSC</Title>
                    <Description>
                        As a Science student, you are entitled to book the meeting rooms 
                        of the ALSSC for your own personal use (studying, group work, meetings).
                    </Description>
                </Header>   

                <Divider/>

                <Section>
                    <Title>Meeting Room Policies</Title>
                    <PoliciesContent>
                        <p>Please observe the following policies when making a booking:</p>  
                        <ul>
                            <li>A group (not each member of a group) may book a room for up to 2 hours per day, 3 times a week, up to 2 weeks in advance.</li>
                            <li>Rooms are only available during regular Abdul Ladha Science Student Centre hours.</li>
                            <li>Groups that are more than 10 minutes late forfeit their booking.</li>
                            <li>Try to reduce noise as much as possible to avoid disturbing users of other meeting rooms.</li>
                            <li>Booking times are ultimately the property of the Science Undergraduate Society (SUS) and are subject to cancellation or pre-emption without warning.</li>
                        </ul>
                        <p>For more information, please contact <a href='mailto:bmanager.bookings@sus.ubc.ca' target="_blank" rel="noreferrer">bmanager.bookings@sus.ubc.ca</a></p>
                    </PoliciesContent>
                </Section>

                <Divider/>

                <Section>   
                    <Title>Make a Booking</Title>
                    <ButtonsContainer>
                        <ButtonGroup>
                            <H3>Room 103</H3>
                            <ButtonHollowBlack>
                                <Link href="https://alsscroom103.youcanbook.me/">Book Room 103</Link>    
                            </ButtonHollowBlack>
                        </ButtonGroup>

                        <ButtonGroup>
                            <H3>Room 104</H3>
                            <ButtonHollowBlack>
                                <Link href="https://alsscroom104.youcanbook.me/">Book Room 104</Link>    
                            </ButtonHollowBlack>
                        </ButtonGroup>

                        <ButtonGroup>
                            <H3>Room 105</H3>   
                            <ButtonHollowBlack>
                                <Link href="https://alsscroom105.youcanbook.me/">Book Room 105</Link>    
                            </ButtonHollowBlack>
                        </ButtonGroup> 
                    </ButtonsContainer> 
                </Section>

                <Divider/>

                <Section>       
                    <Title>Meeting Room Features</Title>
                    <RoomDescriptionContainer>
                        <Room>
                            <Image src="/images/meetingBookingImages/room-103-2.jpg"></Image>
                            <h3>Rooms 103 & 104</h3>
                            <ul>
                                <li>8 Chairs</li>
                                <li>Whiteboard</li>
                                <li>Outlets for Laptop Charging</li>
                                <li>TV with HDMI Connection</li>
                                <li>Large Windows & Lots of Natural Light!</li>
                            </ul>
                        </Room>
                        <Room>
                            <Image src="/images/meetingBookingImages/room-105-2.jpg"></Image>
                            <h3>Room 105</h3>
                            <ul>
                                <li>5 Chairs</li>
                                <li>Whiteboard</li>
                                <li>Outlets for Laptop Charging</li>
                                <li>Good</li>
                                <li>Personality</li>
                            </ul>
                        </Room>
                    </RoomDescriptionContainer>
                </Section>

                <Divider/>

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

const Title = styled.h2`
    color: black;
`

const Description = styled.p`
    text-align: center;
`

const Divider = styled.div`
    margin-top: 5vh;
    margin-bottom: 5vh;
    width: 90%;
    border-bottom: 1px solid black;
`

const Link = styled.a`
    text-decoration: none;
    color: inherit;
`

const H3 = styled.h3`
    text-align: center;
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;

    margin-top: 5vh;
    margin-bottom: 5vh;

    @media (max-width: 768px) {
        width: 95%;
    }
`

const Image = styled.img`
    height: auto;
    width: 400px;
    object-fit: cover;

    @media (max-width: 768px) {
        width: 100%;
    }
`


// =============== HEADER =============== //

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;

    width: 50%;

    @media (max-width: 768px) {
        width: 80%;
    }
`

const PoliciesContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    width: 70%;

    @media (max-width: 768px) {
        width: 90%;
    }
`;

// =============== MAKE A BOOKING =============== //

const ButtonsContainer = styled.div`    
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin-bottom: 10vh;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
    }
`

const ButtonGroup = styled.div`
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: left;
`;

const ButtonHollowBlack = styled.button`
    background-color: transparent;
    color: #222755;
    padding: 15px 50px;
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

    @media (max-width: 768px) {
        padding: 10px 30px;
        font-size: 0.7rem;
    }
`;

// =============== ROOM FEATURES ============= //

const RoomDescriptionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    margin-top: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
    }
`

const Room = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

// =============== Contact Us ============= //

const ContactSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    width: 80%;

    margin-top: 5vh;
    margin-bottom: 5vh;

    @media (max-width: 768px) {
        width: 95%;
    }
`
