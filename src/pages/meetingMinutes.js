import styled from "styled-components";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import NewFooter from "../../components/NewFooter";

export default function MeetingMinutes() {
  return (
    <Background>
      <Navbar />
      <Content>
        <h1>Meeting Minutes</h1>
        <p>
          All SUS meetings are open to Science students to attend unless
          otherwise stated. All meeting minutes on the present website are
          updated for the 2023/2024 academic year. If you wish to access the
          meeting minutes of previous years, please email our VP Admin at&nbsp;
          <Link href="mailto:vpadministration@sus.ubc.ca" passHref>
            vpadministration@sus.ubc.ca
          </Link>
          .
        </p>

        <h3>Council Meeting Minutes</h3>

        <p>
          Council normally runs every Tuesday on a bi-weekly schedule beginning
          from 6:30 PM at the Micheal Kingsmill Forum located at the 4th floor
          of the AMS Nest. (With the exception of the summer, where they run
          monthly and the month of September, where no council meetings are held
          due to elections).
        </p>

        <p>
          The meeting minutes are being updated periodically, click&nbsp;
          <Link
            href="https://drive.google.com/drive/folders/15BWKf35JbSQ89E5jgRA6qY0zdco-iJtU?usp=sharing"
            passHref
          >
            here
          </Link>
          &nbsp;to view the meeting minutes.
        </p>

        <h3>Executive Meeting Minutes</h3>

        <p>
          Executive Meetings normally run every Tuesday on a bi-weekly schedule
          beginning from 5:00 pm in the Abdul Lahda Science Student Building,
          Meeting Room 103.
        </p>

        <p>
          The meeting minutes are being updated periodically, click&nbsp;
          <Link
            href="https://drive.google.com/drive/folders/1ZE8GxRhwcguAxVW3JUkaGG3XEJuwgffa?usp=drive_link"
            passHref
          >
            here
          </Link>
          &nbsp;to view the meeting minutes.
        </p>

        <h3>Working Group Meeting Minutes</h3>

        <p>
          All working groups have different meeting schedules based on team
          members’ availability. The meeting time and location can be found on
          the meeting minutes.
        </p>
      </Content>
      <NewFooter />
    </Background>
  );
}

const Title = styled.div`
  color: black;
`;

const Background = styled.div`
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const StyledButton = styled.div`
  display: inline-block;
  width: 240px;
  padding: 10px 20px;
  background-color: #0173be;
  color: white;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;

const Content = styled.div`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  padding: 200px 10px 20px;
  width: 100%;
  max-width: 1200px;
  p {
    line-height: 1.6; /* Adjust this value as needed */
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 40px; /* Adjust this value as needed */
    // margin-bottom: 20px; /* Adjust this value as needed */
  }
`;

const SpacingDiv = styled.div`
  margin-bottom: 55px; /
`;
