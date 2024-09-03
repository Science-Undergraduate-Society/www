import { useState } from "react";
import styled from "styled-components";
import { Button } from "../../components/Reusable";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import alssc from "../../../public/images/booking-images/alssc.jpg"


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
                    <br></br>
                    <br></br>
                              <FullWidthImageContainer>
            <FullWidthImage src={alssc} alt="Abdul Ladha Science Student Centre" width={1200} height={800} />
          </FullWidthImageContainer>
                    <br></br>
                    <IntroText>
                        The Abdul Ladha Science Student Centre (ALSSC) exists as a social space to encourage both informal and organized academic, club, and social activities and interactions.
                        See the ‘Frequently Asked Questions’ section below for answers to the most common questions about event bookings at the ALSSC. For any outstanding questions, please contact the Building Manager of Bookings at <a href="mailto:bmanager.bookings@sus.ubc.ca">bmanager.bookings@sus.ubc.ca</a>.
                    </IntroText>
                
                    <h1>The Booking <Span>Process</Span></h1>

                    <StepTitle>Before Submitting a Booking Request:</StepTitle>
                    <ul>
                        <li>Determine if the ALSSC is a suitable venue for your event. Visit the <Link href="https://sus.ubc.ca/alssc/about">About the ALSSC page</Link> to view building amenities and floor plans.</li>
                        <li>Check the <Link href="https://sus.ubc.ca/alssc/events/#booking-information">Building Availability Calendar</Link> to ensure the date and time you would like to book is available.</li>
                        <li>See below for important details about events at the ALSSC, including <Link href="https://sus.ubc.ca/alssc/events/#booking-information">Booking Policies</Link> and the <Link href="https://sus.ubc.ca/alssc/events/#fees">Fees</Link> associated with booking.</li>
                    </ul>

                    <StepTitle>Submit a Booking Request:</StepTitle>
                    <ul>
                        <li>Fill out the <Link href="https://sus.ubc.ca/alssc/events/#booking-request">Booking Request Form</Link>.</li>
                        <li>Ensure your request is being submitted within the applicable <Link href="https://sus.ubc.ca/alssc/events/#booking-information">Deadlines</Link>.</li>
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
                                <StyledIframe2 
  src="https://calendar.google.com/calendar/embed?src=bmanager.bookings%40sus.ubc.ca&ctz=America%2FVancouver"
  width="800"
  height="600"
//   style={{ border: "none" }}
></StyledIframe2>

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
                            <p><strong>What is the maximum capacity for events?</strong> Events can have no more than 133 attendees, including event organizers.</p>

<p><strong>How do I know if the date I want is available?</strong> Please refer to the Building Availability Calendar above.</p>

<p><strong>Do you have to be a UBC student to book the building?</strong> The ALSSC is available for booking by anyone. However, the building is financed by all science students at UBC, so science organizations will receive a discount. See the Fees above for details.</p>

<p><strong>Is food allowed in the building?</strong> Yes, but please make sure to clean up after the event.</p>

<p><strong>Is external catering allowed?</strong> Yes, but please make sure to clean up after the event. You will need to provide the contact information of your caterer in the booking request form.</p>

<p><strong>Is alcohol allowed in the building?</strong> Yes, but further approval is required. Events that serve alcohol must submit a booking request by the deadlines indicated above.</p>

<p><strong>Is security required?</strong> For any Events With Alcohol, SUS will provide 2+ security guards. At the discretion of the Building Manager of Bookings, security may also be required for dances/parties. In such cases, a Security Fee may apply. See the Fees above for more details.</p>

<p><strong>Will there be someone to help us with setup/takedown?</strong> There will be a Building Supervisor present during the duration of your booking should you have any questions, concerns, or technical issues during your event. They will help set up the AV system, additional seating, and any other equipment provided by SUS. All other setup/takedown (including rearranging furniture, adding decorations, and sweeping up after the event) are the responsibility of the booking group.</p>

                            </AccordionContent>
                        </AccordionSection>
                    </AccordionContainer>

                    <h1>Fees</h1>
                    <StepTitle>Booking Fees & Damage Deposit</StepTitle>
                    
                    <FeesTable>
      <thead>
        <tr>
          <TableHeader>Category</TableHeader>
          <TableHeader>Main Floor (2F)</TableHeader>
          <TableHeader>Mezzanine (3F)</TableHeader>
          <TableHeader>Main Floor & Mezzanine (2F/3F)</TableHeader>
          <TableHeader>Full Building (1F/2F/3F)</TableHeader>
          <TableHeader>Front Porch (Area outside of the ALSSC)</TableHeader>
          <TableHeader>Damage Deposit</TableHeader>
        </tr>
      </thead>
      <tbody>
        <TableRow>
          <TableCell>SUS Internal</TableCell>
          <TableCell>Free</TableCell>
          <TableCell>Free</TableCell>
          <TableCell>Free</TableCell>
          <TableCell>Free</TableCell>
          <TableCell>Free</TableCell>
          <TableCell>Free (2)</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>SUS Clubs</TableCell>
          <TableCell>Free</TableCell>
          <TableCell>Free</TableCell>
          <TableCell>Free</TableCell>
          <TableCell>Free</TableCell>
          <TableCell>Free</TableCell>
          <TableCell>Free (2)</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Science Clubs/Organizations</TableCell>
          <TableCell>Free</TableCell>
          <TableCell>Free</TableCell>
          <TableCell>Free</TableCell>
          <TableCell>Free</TableCell>
          <TableCell>Free</TableCell>
          <TableCell>$100</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>UBC Organizations</TableCell>
          <TableCell>$50/hr</TableCell>
          <TableCell>$30/hr</TableCell>
          <TableCell>$70/hr</TableCell>
          <TableCell>$80/hr</TableCell>
          <TableCell>$30/hr</TableCell>
          <TableCell>$100</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>External Organizations</TableCell>
          <TableCell>$60/hr</TableCell>
          <TableCell>$40/hr</TableCell>
          <TableCell>$90/hr</TableCell>
          <TableCell>$100/hr</TableCell>
          <TableCell>$40/hr</TableCell>
          <TableCell>$200</TableCell>
        </TableRow>
      </tbody>
    </FeesTable>

                    <h5>(1): All front porch (Area outside of the ALSSC) bookings include access to tables and a tent.
                        <br/>
                        (2): Any repairs for damages caused during bookings by these groups will be funded through a budget deduction from the offending group</h5>
                    <p>If you are unsure which Category is applicable for your club/organization, see the <Link href="https://sus.ubc.ca/alssc/events/#booking-information">Booking Group Categories</Link> above for full descriptions.</p>

                    <StepTitle>Ancillary Fees</StepTitle>

                    <FeesTable>
      <thead>
        <tr>
          <TableHeader>Applicable Categories</TableHeader>
          <TableHeader>Description</TableHeader>
          <TableHeader>Fee</TableHeader>
        </tr>
      </thead>
      <tbody>
        <TableRow>
          <TableCell>UBC Organizations, External Organizations</TableCell>
          <TableCell>Hours After 8pm on Weekdays</TableCell>
          <TableCell>$25/hr</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>UBC Organizations, External Organizations</TableCell>
          <TableCell>Weekend Hours</TableCell>
          <TableCell>$35/hr</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>UBC Organizations, External Organizations</TableCell>
          <TableCell>Overtime Hours (3)</TableCell>
          <TableCell>$25/hr</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>UBC Organizations, External Organizations</TableCell>
          <TableCell>Use of Audio-Visual (AV) System</TableCell>
          <TableCell>$30/event</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>SUS Clubs, Science Clubs/Organizations, UBC Organizations, External Organizations</TableCell>
          <TableCell>Cleaning Fee for Dances/Parties/Large Events (4)</TableCell>
          <TableCell>$100/event</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>SUS Clubs, Science Clubs/Organizations, UBC Organizations, External Organizations</TableCell>
          <TableCell>Security Fee for Dances/Parties/Large Events (4)</TableCell>
          <TableCell>$100/event</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>SUS Clubs, Science Clubs/Organizations, UBC Organizations, External Organizations</TableCell>
          <TableCell>Service Fee for Events with Alcohol</TableCell>
          <TableCell>$200/event</TableCell>
        </TableRow>
      </tbody>
    </FeesTable>
                <h5>(3) Overtime eligibility is at the discretion of the Building Supervisor for the event. Payment is applied at the beginning of each hour that a booking group occupies the ALSSC after the designated end time of their booking. <br/>
(4): The Cleaning Fee and Security Fee are applied at the discretion of the Building Manager of Bookings. These fees are not applicable for Events with Alcohol – the Service Fee for Events with Alcohol is automatically applied to such events.</h5>
            <br></br>
            <h1>Submit a <Span>Booking Request</Span></h1>
<StyledIframe
      id="JotFormIFrame-231152118073041"
      title="Abdul Ladha Event Bookings"
      allowtransparency="true"
      allowfullscreen="true"
      src="https://form.jotform.com/231152118073041"
      scrolling="no"
    ></StyledIframe>
    <script type="text/javascript">
      {`
        var ifr = document.getElementById("JotFormIFrame-231152118073041");
        if (ifr) {
          var src = ifr.src;
          var iframeParams = [];
          if (window.location.href && window.location.href.indexOf("?") > -1) {
            iframeParams = iframeParams.concat(window.location.href.substr(window.location.href.indexOf("?") + 1).split('&'));
          }
          if (src && src.indexOf("?") > -1) {
            iframeParams = iframeParams.concat(src.substr(src.indexOf("?") + 1).split("&"));
            src = src.substr(0, src.indexOf("?"));
          }
          iframeParams.push("isIframeEmbed=1");
          ifr.src = src + "?" + iframeParams.join('&');
        }
        window.handleIFrameMessage = function(e) {
          if (typeof e.data === 'object') {
            return;
          }
          var args = e.data.split(":");
          if (args.length > 2) {
            iframe = document.getElementById("JotFormIFrame-" + args[(args.length - 1)]);
          } else {
            iframe = document.getElementById("JotFormIFrame");
          }
          if (!iframe) {
            return;
          }
          switch (args[0]) {
            case "scrollIntoView":
              iframe.scrollIntoView();
              break;
            case "setHeight":
              iframe.style.height = args[1] + "px";
              if (!isNaN(args[1]) && parseInt(iframe.style.minHeight) > parseInt(args[1])) {
                iframe.style.minHeight = args[1] + "px";
              }
              break;
            case "collapseErrorPage":
              if (iframe.clientHeight > window.innerHeight) {
                iframe.style.height = window.innerHeight + "px";
              }
              break;
            case "reloadPage":
              window.location.reload();
              break;
            case "loadScript":
              if( !window.isPermitted(e.origin, ['jotform.com', 'jotform.pro']) ) {
                break;
              }
              var src = args[1];
              if (args.length > 3) {
                src = args[1] + ':' + args[2];
              }
              var script = document.createElement('script');
              script.src = src;
              script.type = 'text/javascript';
              document.body.appendChild(script);
              break;
            case "exitFullscreen":
              if (window.document.exitFullscreen) window.document.exitFullscreen();
              else if (window.document.mozCancelFullScreen) window.document.mozCancelFullScreen();
              else if (window.document.mozCancelFullscreen) window.document.mozCancelFullScreen();
              else if (window.document.webkitExitFullscreen) window.document.webkitExitFullscreen();
              else if (window.document.msExitFullscreen) window.document.msExitFullscreen();
              break;
          }
          var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false;
          if(isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) {
            var urls = {"docurl":encodeURIComponent(document.URL),"referrer":encodeURIComponent(document.referrer)};
            iframe.contentWindow.postMessage(JSON.stringify({"type":"urls","value":urls}), "*");
          }
        };
        window.isPermitted = function(originUrl, whitelisted_domains) {
          var url = document.createElement('a');
          url.href = originUrl;
          var hostname = url.hostname;
          var result = false;
          if( typeof hostname !== 'undefined' ) {
            whitelisted_domains.forEach(function(element) {
              if( hostname.slice((-1 * element.length - 1)) === '.'.concat(element) || hostname === element ) {
                result = true;
              }
            });
            return result;
          }
        };
        if (window.addEventListener) {
          window.addEventListener("message", handleIFrameMessage, false);
        } else if (window.attachEvent) {
          window.attachEvent("onmessage", handleIFrameMessage);
        }
      `}
    </script>
                <StepTitle>Contact Us</StepTitle>
                <p>Booking Inquiries: <a href="mailto:manager.bookings@sus.ubc.ca"> bmanager.bookings@sus.ubc.ca</a>
                    <br></br>
Operations and Maintenance: <a href="mailto:bmanager.operations@sus.ubc.ca">bmanager.operations@sus.ubc.ca</a></p>
                </Content>
                <Footer />
            </Background>
        </>
    );
}

const StyledIframe = styled.iframe`
  width: 100%;
  height:4500px;
  border: none;
  min-width: 500px;
  max-width: 100%;
  border: none;
`;

const StyledIframe2 = styled.iframe`
  width: 100%;
  border: none;
`;
const FeesTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 15px;
  text-align: left;
`;

const TableHeader = styled.th`
  background-color: #001961;
  color: #fff;
  padding: 10px;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr`
  border: 1px solid #ddd;
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 13px;
  border: 1px solid #ddd;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;

  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #f4f4f4;
    font-weight: bold;
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }
`;
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

const FullWidthImageContainer = styled.div`
  width: 100%;
  overflow: hidden; 
`;

const FullWidthImage = styled(Image)`
  width: 100%;
  height: auto; 
  border-radius: 20px;
`;