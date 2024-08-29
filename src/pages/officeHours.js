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
          <Title>Office Hours</Title>
          <p>
            Each executive is required to sit on 2 hours of office hours every
            week. Their office hours can be found listed below.
          </p>
          <Timetable>
            <Day>
              <DayTitle>Monday</DayTitle>
              <TimeSlot>
                <Name>Jenny</Name>
                <PersonTitle>VP Internal</PersonTitle>
                <Time>11:00am - 12:00pm</Time>
              </TimeSlot>
              <TimeSlot>
                <Name>Brandon</Name>
                <PersonTitle>President</PersonTitle>
                <Time>12:00pm - 1:00pm</Time>
              </TimeSlot>
              <TimeSlot>
                <Name>Haolin</Name>
                <PersonTitle>Building Supervisor</PersonTitle>
                <Time>1:00pm - 3:30pm</Time>
              </TimeSlot>
              <TimeSlot>
                <Name>Allyssa</Name>
                <PersonTitle>VP Communications</PersonTitle>
                <Time>3:00pm - 4:00pm</Time>
              </TimeSlot>
              <TimeSlot>
                <Name>Emily L</Name>
                <PersonTitle>VP Admin</PersonTitle>
                <Time>4:00pm - 5:00pm</Time>
              </TimeSlot>
            </Day>
            <Day>
              <DayTitle>Tuesday</DayTitle>
              <TimeSlot>
                <Name>Grace</Name>
                <PersonTitle>Building Supervisor</PersonTitle>
                <Time>10:00am - 11:00am</Time>
              </TimeSlot>
              <TimeSlot>
                <Name>Emily S.</Name>
                <PersonTitle>VP Finance</PersonTitle>
                <Time>12:00pm - 1:00pm</Time>
              </TimeSlot>
              <TimeSlot>
                <Name>Huge</Name>
                <PersonTitle>Building Supervisor</PersonTitle>
                <Time>1:00pm - 3:30pm</Time>
              </TimeSlot>
            </Day>

            <Day>
              <DayTitle>Wednesday</DayTitle>
              <TimeSlot>
                <Name>Haolin</Name>
                <PersonTitle>Building Supervisor</PersonTitle>
                <Time>11:00am - 12:30pm</Time>
              </TimeSlot>
              <TimeSlot>
                <Name>Robbie</Name>
                <PersonTitle>
                  Building Supervisor, Bookings and Building Staff
                </PersonTitle>
                <Time>12:30pm - 2:00pm</Time>
              </TimeSlot>
              <TimeSlot>
                <Name>Mona</Name>
                <PersonTitle>Building Supervisor</PersonTitle>
                <Time>2:00pm - 5:00pm</Time>
              </TimeSlot>
            </Day>

            <Day>
              <DayTitle>Thursday</DayTitle>
              <TimeSlot>
                <Name>Yvette</Name>
                <PersonTitle>Building Supervisor</PersonTitle>
                <Time>10:00am - 11:00am</Time>
              </TimeSlot>
              <TimeSlot>
                <Name>David</Name>
                <PersonTitle>Building Supervisor</PersonTitle>
                <Time>11:00am - 12:30pm</Time>
              </TimeSlot>
              <TimeSlot>
                <Name>Grace</Name>
                <PersonTitle>Building Supervisor</PersonTitle>
                <Time>11:00am - 12:00pm</Time>
              </TimeSlot>
              <TimeSlot>
                <Name>Grace</Name>
                <PersonTitle>Building Supervisor</PersonTitle>
                <Time>2:00pm - 3:00pm</Time>
              </TimeSlot>
              <TimeSlot>
                <Name>Simrat</Name>
                <PersonTitle>Building Supervisor</PersonTitle>
                <Time>3:00pm - 4:00pm</Time>
              </TimeSlot>
              <TimeSlot>
                <Name>Kaitlin</Name>
                <PersonTitle>VP Student Life</PersonTitle>
                <Time>4:00pm - 5:00pm</Time>
              </TimeSlot>
            </Day>

            <Day>
              <DayTitle>Friday</DayTitle>
              <TimeSlot>
                <Name>Jessica</Name>
                <PersonTitle>Building Supervisor</PersonTitle>
                <Time>10:00am - 11:00am</Time>
              </TimeSlot>
              <TimeSlot>
                <Name>Grace</Name>
                <PersonTitle>Building Supervisor</PersonTitle>
                <Time>11:00am - 12:00pm</Time>
              </TimeSlot>
              <TimeSlot>
                <Name>Manik</Name>
                <PersonTitle>VP External</PersonTitle>
                <Time>12:00pm - 1:00pm</Time>
              </TimeSlot>
              <TimeSlot>
                <Name>Trushaan</Name>
                <PersonTitle>Building Supervisor</PersonTitle>
                <Time>1:00pm - 3:00pm</Time>
              </TimeSlot>
              <TimeSlot>
                <Name>Jessica</Name>
                <PersonTitle>Building Supervisor</PersonTitle>
                <Time>3:00pm - 5:00pm</Time>
              </TimeSlot>
            </Day>
          </Timetable>
        </Content>
        <Footer color="white" background="#222755"/>
      </Background>
    </>
  );
}

const Title = styled.h1`
  color: black;
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
  margin: 30px 0;
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
