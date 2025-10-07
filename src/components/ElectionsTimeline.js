import styled from "styled-components";

// === Styles ===
const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 30px 0;
`;

const TimelineItem = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  align-items: start;
  gap: 20px;
  padding: 12px 16px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const DateText = styled.span`
  font-weight: 600;
  color: #004aad; /* blue like your screenshot */
  font-size: 0.95rem;
`;

const EventText = styled.span`
  font-size: 0.95rem;
  color: #333;
`;

// === Example Elections Timeline ===
export default function ElectionsTimeline() {
  return (
    <Timeline>
      <TimelineItem>
        <DateText>Friday, Sept 5, 12:00 AM</DateText>
        <EventText>Nominations open with a Qualtrics survey</EventText>
      </TimelineItem>

      <TimelineItem>
        <DateText>Friday, Sept 19, 11:59 PM</DateText>
        <EventText>Deadline for submission of completed nomination submissions</EventText>
      </TimelineItem>

      <TimelineItem>
        <DateText>Wednesday, Sept 24, 8:00 PM</DateText>
        <EventText>
          <strong>MANDATORY</strong> All Candidates Meeting (via Zoom), time will depend on availability of candidates
        </EventText>
      </TimelineItem>

      <TimelineItem>
        <DateText>Friday, Sept 26, 11:59 PM</DateText>
        <EventText>
          Deadline for sending in headshots & blurbs for voting platform to elections@sus.ubc.ca
        </EventText>
      </TimelineItem>

      <TimelineItem>
        <DateText>Monday, Sept 29, 12:00 AM</DateText>
        <EventText>Campaigning begins (paperless campaigning)</EventText>
      </TimelineItem>

      <TimelineItem>
        <DateText>Monday, Oct 6, 12:00 AM</DateText>
        <EventText>
          Voting opens at <a href="https://ams.simplyvoting.com" target="_blank" rel="noopener noreferrer">ams.simplyvoting.com</a>
        </EventText>
      </TimelineItem>

      <TimelineItem>
        <DateText>Wednesday, Oct 8, 6:00 PM</DateText>
        <EventText>All Candidates Forum for VP Academic, VP Finance, and AMS Reps</EventText>
      </TimelineItem>

      <TimelineItem>
        <DateText>Monday, Oct 13, 11:59 PM</DateText>
        <EventText>Campaigning ends AND Voting closes</EventText>
      </TimelineItem>

      <TimelineItem>
        <DateText>Thursday, Oct 23, 5:00 PM</DateText>
        <EventText>Councillor Orientation (in-person) – 5-7 PM</EventText>
      </TimelineItem>
      
      <TimelineItem>
        <DateText>Thursday, Nov 27, 5:00 PM</DateText>
        <EventText>Councillor Orientation (in-person) – 5-7 PM</EventText>
      </TimelineItem>
    </Timeline>
  );
}
