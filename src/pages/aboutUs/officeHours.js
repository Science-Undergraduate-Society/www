import styled from "styled-components";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function OfficeHours() {
  return (
    <>
      <Navbar />
      <Background>
        <Content>
          <Day>
            <Title>Office Hours</Title>
            <p>
              Each executive is required to sit on 2 hours of office hours every
              week. Their office hours can be found listed below.
            </p>
          </Day>

          <Timetable>
            <Day>
              <ButtonHollowBlack>Monday</ButtonHollowBlack>
              <TimeSlot>
                <Name>Kaitlin Law</Name>
                <PersonTitle>President</PersonTitle>
                <Time>11:00am - 12:00pm</Time>
              </TimeSlot>
              <TimeSlot>
                <Name>Insha Majeed</Name>
                <PersonTitle>VP Communications</PersonTitle>
                <Time>12:00pm - 1:00pm</Time>
              </TimeSlot>
              <TimeSlot>
                <Name>Rachel Dong</Name>
                <PersonTitle>VP External</PersonTitle>
                <Time>1:00pm - 2:00pm</Time>
              </TimeSlot>
              <TimeSlot>
                <Name>Thomas McIlwraith</Name>
                <PersonTitle>VP Admin</PersonTitle>
                <Time>2:00pm - 3:00pm</Time>
              </TimeSlot>
              <TimeSlot>
                <Name>Katie</Name>
                <PersonTitle>Building Supervisor</PersonTitle>
                <Time>3:00pm - 4:00pm</Time>
              </TimeSlot>
              <TimeSlot>
                <Name>Salva Sherif</Name>
                <PersonTitle>Science Senator</PersonTitle>
                <Time>4:00pm - 5:00pm</Time>
              </TimeSlot>
            </Day>

            <Day>
              <ButtonHollowBlack>Tuesday</ButtonHollowBlack>
              <TimeSlot>
                <Name>Chloe Chan</Name>
                <PersonTitle>VP Finance</PersonTitle>
                <Time>11:00am - 12:00pm</Time>
              </TimeSlot>
              <TimeSlot>
                <Name>Robbie Yang</Name>
                <PersonTitle>Building Supervisor</PersonTitle>
                <Time>2:30pm - 4:30pm</Time>
              </TimeSlot>
            </Day>

            <Day>
              <ButtonHollowBlack>Wednesday</ButtonHollowBlack>
              <TimeSlot>
                <Name>Chloe Chang</Name>
                <PersonTitle>VP Finance</PersonTitle>
                <Time>11:00am - 12:00pm</Time>
              </TimeSlot>
              <TimeSlot>
                <Name>Insha Majeed</Name>
                <PersonTitle>VP Communications</PersonTitle>
                <Time>12:00pm - 1:00pm</Time>
              </TimeSlot>
              <TimeSlot>
                <Name>Rachel Dong</Name>
                <PersonTitle>VP External</PersonTitle>
                <Time>1:00pm - 2:00pm</Time>
              </TimeSlot>
              <TimeSlot>
                <Name>Thomas McIlwraith</Name>
                <PersonTitle>VP Admin</PersonTitle>
                <Time>2:00pm - 3:00pm</Time>
              </TimeSlot>
              <TimeSlot>
                <Name>Savreen Sohi</Name>
                <PersonTitle>VP Student Life</PersonTitle>
                <Time>3:00pm - 4:00pm</Time>
              </TimeSlot>
            </Day>

            <Day>
              <ButtonHollowBlack>Thursday</ButtonHollowBlack>
              <TimeSlot>
                <Name>Katie</Name>
                <PersonTitle>Building Supervisor</PersonTitle>
                <Time>12:30pm - 1:30pm</Time>
              </TimeSlot>
            </Day>

            <Day>
              <ButtonHollowBlack>Friday</ButtonHollowBlack>
              <TimeSlot>
                <Name>Sarveen Sohi</Name>
                <PersonTitle>VP Student Life</PersonTitle>
                <Time>1:00pm - 2:00pm</Time>
              </TimeSlot>
              <TimeSlot>
                <Name>Christianah Soneye</Name>
                <PersonTitle>VP Academic</PersonTitle>
                <Time>2:00pm - 4:00pm</Time>
              </TimeSlot>
            </Day>
          </Timetable>
        </Content>
        <Footer color="white" background="#222755"/>
      </Background>
    </>
  );
}

const ButtonHollowBlack = styled.button`
    background-color: transparent;
    color: #222755;
    padding: 15px;
    border-radius: 30px;
    border: 1px solid #222755;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 600;
    width: 180px;
`;
const Title = styled.h1`
  color: #222755;
`;

const Background = styled.div`
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
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

const Timetable = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack columns vertically on smaller screens */
  }
`;

const Day = styled.div`
  // background-color: #f5f5f5;
  padding: 20px;
`;

const DayTitle = styled.h2`
  color: #fff;
  font-weight: 500;
  background-color: #0066cc;
  padding: 9px;
  text-align: center;
  border-radius: 4px;
`;

const TimeSlot = styled.div`
  margin: 30px;
  color: black;
  display: flex;
  flex-direction: column;
`;

const Role = styled.span`
  font-weight: bold;
`;

const Time = styled.span`
  margin-top: 5px;
  color: gray;
`;

const PersonTitle = styled.span`
  font-style: italic;
  margin-top: 2px;
  margin-bottom: 5px;
`;

const Name = styled.span`
  font-weight: bold;
`;
