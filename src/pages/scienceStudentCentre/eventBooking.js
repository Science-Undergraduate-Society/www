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
                                <p>Click an event to determine which parts of the building are being used. We can accommodate bookings inside the building at the same time as Front Porch bookings.</p>
                            </AccordionContent>
                        </AccordionSection>

                        <AccordionSection>
                            <AccordionTitle onClick={() => toggleSection(3)}>Booking Policy & Terms</AccordionTitle>
                            <AccordionContent isOpen={openSection === 3}>
                                <p><strong>Setup/Takedown:</strong> The booked time slot includes setup and takedown time. Setup/takedown are the responsibility of the booking organization.</p>
                                <p><strong>Printing Services:</strong> SUS does not offer printing services for any events in the ALSSC. If printing is required, booking groups can use the UBC PayForPrint system – the printer in the ALSSC is attached to the system.</p>
                                <p><strong>Equipment Rentals:</strong> Equipment will not be rented out to events outside of the ALSSC. All building furniture or equipment are to remain within the building unless given permission from the Building Manager.</p>
                                <p><strong>Charity Events:</strong> Events hosted to fundraise for a charity will have relevant booking fees waived.</p>
                                <p><strong>Payments:</strong> Payments can be made in cash, cheque, or via AMS Journal Voucher. SUS does not accept credit/debit card or e-transfer payments.</p>
                                <p><strong>Damage Deposit:</strong> The Balance Due (i.e. booking fees) is exclusive of the Damage Deposit. The Damage Deposit (paid separate) must be received by the Building Manager at least two weeks prior to the event, unless stated otherwise by the Building Manager. This Deposit includes, but is not limited to cancellation, damages, and other penalty charges. The Deposit is refunded only when all conditions are met.</p>
                                <p><strong>Payment Due Dates:</strong> Payment is due by the deadlines as indicated in the invoice, unless stated otherwise by the Building Manager. In the case that the Balance Due is not paid on time, the Damage Deposit will not be returned and will be considered a portion of the payment of the fees. No additional bookings can be made if fees are still outstanding. The Building Management Commission (BMC) reserves the right to cancel future events if outstanding fees are unpaid.</p>
                            </AccordionContent>
                        </AccordionSection>

                        <AccordionSection>
                            <AccordionTitle onClick={() => toggleSection(4)}>Booking Group Categories</AccordionTitle>
                            <AccordionContent isOpen={openSection === 4}>
                                <p><strong>SUS Groups:</strong> internal groups in SUS, such as the Health & Wellness Working Group or the First Year Council.</p>
                                <p><strong>SUS Clubs:</strong> departmental and non-departmental clubs supported by SUS. For a complete list of SUS Clubs, see here.</p>
                                <p><strong>Science Organizations and Science Clubs:</strong> groups which are not supported directly by SUS, but are of interest to students in the Faculty of Science (including, but not limited to SCI Team, Science Peer Academic Coaches, UBC Cancer Association). At least 60% of students contributing to the planning and execution of the event must be in the Faculty of Science in order to qualify for this rate.</p>
                                <p><strong>UBC Organizations:</strong> groups who either have an address on the University Endowment Lands, or are affiliated in some way with UBC (including, but not limited to Regent College, UBC VP Students’ Office, groups from other UBC campuses).</p>
                                <p><strong>External Organizations:</strong> organizations that are unaffiliated with UBC.</p>
                                <p>The Building Management Commission (BMC) reserves the right to verification from the respective parties.</p>
                            </AccordionContent>
                        </AccordionSection>

                        <AccordionSection>
                            <AccordionTitle onClick={() => toggleSection(5)}>Information for Events With Alcohol</AccordionTitle>
                            <AccordionContent isOpen={openSection === 5}>
                                <p>If you are considering hosting an event at the ALSSC that serves alcohol, here are a few important details you should consider. This list is not definitive – it is just a few key details that will help you decide whether alcohol is appropriate for your event:</p>
                                <ul>
    <li>Booking Requests for Events with Alcohol must be submitted at least 60 days before the event.</li>
    <li>The maximum capacity of ALSSC is 133 people, including event organizers.</li>
    <li>You must use a ticket system with tickets sold before the event. Tickets cannot be available at the event, and non-ticketholders cannot enter the event venue.</li>
    <li>Minors cannot be present at Events With Alcohol.</li>
    <li>SUS will provide 2+ professional security guards for the duration of the event.</li>
    <li>You cannot advertise the availability of alcohol at an event, so terms like “Beer Garden” or “Wine and Cheese” are prohibited.</li>
    <li>There are multiple deliverables required for approval of alcohol service. You should plan to put in consistent effort towards planning the event starting as soon as your Booking Request is submitted.</li>
    <li>At least one event organizer must complete the Wellness Centre & SVPRO’s “Safer Partying Workshop,” which is offered in-person. You should make sure the course is being offered before your event.</li>
    <li>The maximum price you can charge for alcohol is mandated by the provincial government – you should not expect to make a profit on alcohol sales.</li>
    <li>The Faculty of Science requires that a system is in place to ensure drinks are provided at a rate not exceeding one standard drink per person per hour.</li>
    <li>Multiple costs are associated with approval of alcohol service. You will need to cover these costs as part of your event budget. Some of the costs include:
        <ul>
            <li>Venue booking fees</li>
            <li>Special Event Server exam fee (required for each event organizer)</li>
            <li>Special Event Permit application fee</li>
            <li>Purchasing alcohol</li>
        </ul>
    </li>
</ul>
                            </AccordionContent>
                        </AccordionSection>

                        <AccordionSection>
                            <AccordionTitle onClick={() => toggleSection(6)}>Equipment for Events</AccordionTitle>
                            <AccordionContent isOpen={openSection === 6}>
                                <p>In addition to the equipment already located in the ALSSC, booking groups can request access to the following items for event bookings:</p>
                                <ul>
    <li>AV System</li>
    <li>Portable Speakers – best used for parties or bookings on the Front Porch. The AV system includes its own speakers.</li>
    <li>Additional Tables (4) + Chairs (80+)</li>
    <li>Coat Racks</li>
    <li>Utility Cart</li>
    <li>Canopy Tents</li>
    <li>Crowd Control Ropes</li>
    <li>Digital Signage – displayed on TV in the ALSSC foyer before/during an event</li>
    <li>SUS Photographer present at the event</li>
</ul>

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
  font-size: 17px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #e0f4ff;
  }
`;

const AccordionContent = styled.div`
  padding: 15px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
//   background-color: #f9f9f9;
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
