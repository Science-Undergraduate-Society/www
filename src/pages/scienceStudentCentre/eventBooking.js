import { useState } from "react";
import styled from "styled-components";
import { Button } from "../../components/Reusable";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Bookings() {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <>
            <Background>
                <Navbar />
                <Content>
                    <BookingTitle>Event Bookings at the <Span>ALSSC</Span></BookingTitle>
                    <IntroText>
                        The Abdul Ladha Science Student Centre (ALSSC) exists as a social space to encourage both informal and organized academic, club, and social activities and interactions.
                        See the ‘Frequently Asked Questions’ section below for answers to the most common questions about event bookings at the ALSSC. For any outstanding questions, please contact the Building Manager of Bookings at <a href="mailto:bmanager.bookings@sus.ubc.ca">bmanager.bookings@sus.ubc.ca</a>.
                    </IntroText>
                
                    <h1>The Booking <Span>Process</Span></h1>

                    <StepTitle>Before Submitting a Booking Request:</StepTitle>
                    <ul>
                        <li>Determine if the ALSSC is a suitable venue for your event. <Link href="#">Visit the About the ALSSC page</Link> to view building amenities and floor plans.</li>
                        <li>Check the <Link href="#">Building Availability Calendar</Link> to ensure the date and time you would like to book is available.</li>
                        <li>See below for important details about events at the ALSSC, including Booking Policies and the Fees associated with booking.</li>
                    </ul>

                    <StepTitle>Submit a Booking Request:</StepTitle>
                    <ul>
                        <li>Fill out the <Link href="#">Booking Request Form</Link>.</li>
                        <li>Ensure your request is being submitted within the applicable Deadlines.</li>
                        <li>Remember that the booking includes the time for setup/takedown as managed by your organization. Ensure you are requesting enough time to properly set up and take down the materials needed for your event.</li>
                    </ul>

                    <StepTitle>After Submitting a Booking Request:</StepTitle>
                    <ul>
                        <li>The Building Manager of Bookings will review your booking request within 2-3 business days.</li>
                        <li>If your booking request is accepted, forms will be provided via email to sign and return. You will also be issued an invoice and provided details on how to pay associated booking fees.</li>
                        <li>Sign and return all forms by the indicated deadlines to confirm your booking.</li>
                    </ul>
                    
                    <NoteBox>
                        <strong><Span>NOTE:</Span></strong> Due to the high volume of booking requests that we receive, you may not receive a response if you request a date that is unavailable or if the booking request is submitted after the relevant deadlines. To ensure your booking request can be accepted, check the Building Availability Calendar and Booking Deadlines before submitting the request.
                    </NoteBox>  

                    <h1>Booking <Span>Information</Span></h1>

                    <AccordionContainer>
                        <AccordionSection>
                            <AccordionTitle onClick={() => toggleSection(1)}>Deadlines</AccordionTitle>
                            <AccordionContent isOpen={openSection === 1}>
                                <p><strong>Booking Request Submission Deadline:</strong></p>
                                <ul>
                                    <li>Events With Alcohol: 60 days before the event</li>
                                    <li>All other events: 3 weeks (21 days) before the event</li>
                                </ul>
                                <p><strong>Deadline to Return Signed Booking Forms:</strong> 2 weeks (14 days) before the event</p>
                                <p><strong>Deadline to Pay Damage Deposit:</strong> 2 weeks (14 days) before the event</p>
                                <p><strong>Deadline to Pay Booking Fees:</strong> 1 week (7 days) before the event</p>
                                
                                <p><strong>Cancellation Deadlines:</strong></p>
                                <ul>
                                    <li>Full Refund: Notice provided 2 weeks (14 days) before the event</li>
                                    <li>Booking Fees Returned & Damage Deposit Retained: Notice provided 13 days to 1 week (7 days) before the event</li>
                                    <li>No Refund: Notice provided less than 7 days before the event</li>
                                </ul>
                            </AccordionContent>
                        </AccordionSection>

                        <AccordionSection>
                            <AccordionTitle onClick={() => toggleSection(2)}>Building Availability Calendar</AccordionTitle>
                            <AccordionContent isOpen={openSection === 2}>
                                <ContentText>Click an event to determine which parts of the building are being used. We can accommodate bookings inside the building at the same time as Front Porch bookings.</ContentText>
                            </AccordionContent>
                        </AccordionSection>

                        <AccordionSection>
                            <AccordionTitle onClick={() => toggleSection(3)}>Booking Policy & Terms</AccordionTitle>
                            <AccordionContent isOpen={openSection === 3}>
                                <ContentText>Setup/Takedown: The booked time slot includes setup and takedown time. Setup/takedown are the responsibility of the booking organization.</ContentText>
                                <ContentText>Printing Services: SUS does not offer printing services for any events in the ALSSC. If printing is required, booking groups can use the UBC PayForPrint system – the printer in the ALSSC is attached to the system.</ContentText>
                                <ContentText>...</ContentText> {/* Add remaining Booking Policy & Terms content here */}
                            </AccordionContent>
                        </AccordionSection>

                        <AccordionSection>
                            <AccordionTitle onClick={() => toggleSection(4)}>Booking Group Categories</AccordionTitle>
                            <AccordionContent isOpen={openSection === 4}>
                                <ContentText>SUS Groups: internal groups in SUS, such as the Health & Wellness Working Group or the First Year Council.</ContentText>
                                <ContentText>...</ContentText> {/* Add remaining Booking Group Categories content here */}
                            </AccordionContent>
                        </AccordionSection>

                        <AccordionSection>
                            <AccordionTitle onClick={() => toggleSection(5)}>Information for Events With Alcohol</AccordionTitle>
                            <AccordionContent isOpen={openSection === 5}>
                                <ContentText>If you are considering hosting an event at the ALSSC that serves alcohol, here are a few important details you should consider...</ContentText>
                                <ContentText>...</ContentText> {/* Add remaining Information for Events With Alcohol content here */}
                            </AccordionContent>
                        </AccordionSection>

                        <AccordionSection>
                            <AccordionTitle onClick={() => toggleSection(6)}>Equipment for Events</AccordionTitle>
                            <AccordionContent isOpen={openSection === 6}>
                                <ContentText>In addition to the equipment already located in the ALSSC, booking groups can request access to the following items for event bookings...</ContentText>
                                <ContentText>...</ContentText> {/* Add remaining Equipment for Events content here */}
                            </AccordionContent>
                        </AccordionSection>

                        <AccordionSection>
                            <AccordionTitle onClick={() => toggleSection(7)}>FAQs</AccordionTitle>
                            <AccordionContent isOpen={openSection === 7}>
                                <ContentText>What is the maximum capacity for events?: Events can have no more than 133 attendees, including event organizers.</ContentText>
                                <ContentText>...</ContentText> {/* Add remaining FAQs content here */}
                            </AccordionContent>
                        </AccordionSection>
                    </AccordionContainer>
                </Content>
                <Footer />
            </Background>
        </>
    );
}

// Styled Components for Accordion
const AccordionContainer = styled.div`
  margin: 20px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
`;

const AccordionSection = styled.div`
  border-bottom: 1px solid #ddd;
`;

const AccordionTitle = styled.button`
  background-color: white;
  color: #003366;
  cursor: pointer;
  padding: 10px 15px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  font-size: 16px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #e0f4ff;
  }
`;

const AccordionContent = styled.div`
  padding: 15px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  background-color: #f9f9f9;
  color: #333;
`;

const ContentText = styled.p`
  margin: 0 0 10px;
`;

const NoteBox = styled.div`
  border: 1px solid #e0f4ff;
  background-color: #e0f4ff;
  padding: 15px;
  margin: 20px 0;
  border-left: 5px solid #001961;
  font-size: 16px;
  line-height: 1.5;
`;

const Span = styled.a`
    color: #0052FF;
    cursor: pointer;
    text-decoration: none;
`;

const BookingTitle = styled.div`
  font-size: 35px;
  font-weight: 700;
`;

const Content = styled.div`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  padding: 200px 10px 20px;
  width: 100%;
  max-width: 1200px;
`;

const IntroText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h1`
  font-size: 30px;
  color: #001961;
  margin-bottom: 1.5rem;
`;

const Link = styled.a`
  color: #0052FF;
  text-decoration: underline;
  cursor: pointer;
`;

const Background = styled.div`
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const BookingsButton = styled(Button)`
  margin-bottom: 1rem;
  background-color: #222755;
  color: #fff;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #1a1e4b;
  }
`;

const StepTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #003366;
  margin-bottom: 1rem;
`;
