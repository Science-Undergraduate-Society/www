import styled from "styled-components";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function MeetingMinutes() {
  const [activeTab, setActiveTab] = useState("Presidential");

  const renderContent = () => {
    switch (activeTab) {
        case "Presidential":
        return (
          <TabContent>
            <ul>
              <li>
                <a href="https://drive.google.com/drive/folders/1HcNYhfI1OzK0asF3sKdBt_B1mPFU6hDq">
                  Projects Commission (PROJ)
                </a>
              </li>
              <li>
                <a href=" https://drive.google.com/drive/folders/1J3qhhw-F4T-i8xXDNRmUfdlPFPOEOjhR">
                  Human Resources (HR)
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/14QJRaZSH7OZ-etto8JUqDrDPhASviHez">
                  Science Caucus (SCIC)
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/10xGyvO4SIroabNsl8SOuwu56udDatPvu">
                  Equity, Diversity, and Inclusion (EDI)
                </a>
              </li>
            </ul>
          </TabContent>
        );
      case "Administration":
        return (
          <TabContent>
            <ul>
              <li>
                <a href="https://drive.google.com/drive/folders/1Tg6w_RoeTEn98e8mRyfl_IrSNzLXsyze">
                  Clubs (CC)
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/172JIrvNTaBp4s1ULCNB8gO5lJLnTiXfM">
                  Sustainability (SUST)
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/14JbVjI7A9s7Q3Dy87AklQlkuo7e7NaBh">
                  Building Management
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1uO7ZIzhdEakbxVtuMMlBrNwash17i6S4">
                  Code and Policy
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1Ks9-ooAccyJhh5dEJoKOMYf-zJvPhaOI">
                  Administrative Assistants
                </a>
              </li>
            </ul>
          </TabContent>
        );
      case "Academic":
        return (
          <TabContent>
            <ul>
              <li>
                <a href="https://drive.google.com/drive/folders/1Us_G_f8z3VKpfc3ly6YdXnXx94fk8fyQ">
                  Health and Wellness
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/192fVkE8z20INHv629tbGh-_MHkztpXZV">
                  Academic Experience
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1c5wUJB_1AqzxumwKn-kc5JP3Wprvpc3A">
                  Mental Health and Advocacy
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1ba-oUXfjtJhpQZLH-PoP1rIXiG4w98p2">
                  Academic Standing
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1fkFk36QsvzupapCk0CTzNrDsERiHdfUR">
                  Mentorship
                </a>
              </li>
            </ul>
          </TabContent>
        );
      case "Communication":
        return (
          <TabContent>
            <ul>
            <li>
                <a href="https://drive.google.com/drive/folders/1mdzhIur44fABSgBLKZ37z9wEGDHJHNOq">
                  AVP
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/19jipK9A-hA9JoVOh-bcm5eI1NtFByxVH">
                  Visual Media
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/14wDa0OIaJXns4MG4BzGotKAaefxIEsrB">
                  Marketing
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1TJBBUdCJ67u4v0WSmNdbC8RqgVIU9UHf">
                  Sales
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1nIbXRxf1hJG9s5KsX67G86atpNsUBG2B">
                  First Week
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1WjjlA3iP1IzNtnvVFYX9UEDtWSvb0-ed ">
                  Web
                </a>
              </li>
              <li>
                <a href=" https://drive.google.com/drive/folders/1GsLp8v7GgrSpNwMZ2Pnr3xmlI_9ChgE5">
                  Productions
                </a>
              </li>
            </ul>
          </TabContent>
        );
      case "External":
        return (
          <TabContent>
            <ul>
              <li>
                <a href="https://drive.google.com/drive/folders/1wx9a0m0iAw0-COiQzSfTEkUo44AWTxEt">
                  Student Benefits
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/113SFs8wDxcr1JdWH04riMDm3LdJLncE5">
                  Careers and Professional Development
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1LfWOZ_ZAN--kbdvHsLQ4_NfgIGXVu2MM">
                  Corporate Relations
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1Pe5_MgaEqDFM0pwluV6sQgW5CUjEhAsb">
                  Community Engagement
                </a>
              </li>
              <li>
                <a href=" https://drive.google.com/drive/folders/10a_EcZY2U7N4zCMGyP2pizfengdMAwAj">
                  External Standing
                </a>
              </li>
            </ul>
          </TabContent>
        );
      case "Finance":
        return (
          <TabContent>
            <ul>
              <li>
                <a href="https://drive.google.com/drive/folders/1pHuDCHQHN9OFutVuses_nLCZlf6KUBQB">
                  Finance
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1aq6ZX97bGrpxv_nNL6empJDmot_6x4ET">
                  Grants
                </a>
              </li>
            </ul>
          </TabContent>
        );
      case "Internal":
        return (
          <TabContent>
            <ul>
              <li>
                <a href="https://drive.google.com/drive/folders/1I_Gm7yhpvr2KwddwYAM0nV_sCH3cbNhz">
                  Internal Committee
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1lGrbjU0j2SGOxKliUvuQBHUh87Z2cZK0?usp=drive_link">
                  SSRAN
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1r9sAewRcWpUU6AYsV_MTZQcFOfkSfR90">
                  Elections Administration
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1ZbWUJHPTsRUyB1aO_SLQiHaz1bbxVmUj">
                  First Year Committee
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1DZwms1ujwEVvo2QY53XOKFl6aVlb7AYa">
                  Internal Coordinators
                </a>
              </li>
            </ul>
          </TabContent>
        );
      case "Student Life":
        return (
          <TabContent>
            <ul>
              <li>
                <a href="https://drive.google.com/drive/folders/1z4W7MZyre3KFVP2ZDXu1oJF0ZiDVqbZU">
                  Science Graduation
                </a>
              </li>
              <li>
                <a href=" https://drive.google.com/drive/folders/1NMMXn60ZQygR1_9dLFjKIwijf-fxCstO">
                  Science Week
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1cYehUdzK6FY3Twg0TSbHsHTJY7PwKqoq">
                  Science RXN
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1QesXbUK1S7xH7mfl7N4Uza0xPnUlbZA2">
                  Student Life Standing
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/126UrXYrvHDqpoc2caNUajvabv4J2NYzr">
                  Social
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1VF_Scvw3UQKR6is4J9cww6XdyjrMhmth">
                  Sports
                </a>
              </li>
            </ul>
          </TabContent>
        );
      // Add other cases as needed
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <Background>
        <Content>
          <h1>Meeting Minutes</h1>
          <p>
            All SUS meetings are open to Science students to attend unless
            otherwise stated. All meeting minutes on the present website are
            updated for the 2023/2024 academic year. If you wish to access the
            meeting minutes of previous years, please email our VP Admin
            at&nbsp;
            <Link href="mailto:vpadministration@sus.ubc.ca" passHref>
              vpadministration@sus.ubc.ca
            </Link>
            .
          </p>

          <h3>Council Meeting Minutes</h3>

          <p>
            Council normally runs every Tuesday on a bi-weekly schedule
            beginning from 6:30 PM at the Micheal Kingsmill Forum located at the
            4th floor of the AMS Nest. (With the exception of the summer, where
            they run monthly and the month of September, where no council
            meetings are held due to elections).
          </p>

          <p>
            The meeting minutes are being updated periodically, click&nbsp;
            <Link
              href="https://drive.google.com/drive/folders/1jw4LXwj2FEeMkmXGjA96YG99n_yPsJjS"
              passHref
            >
              here
            </Link>
            &nbsp;to view the meeting minutes.
          </p>

          <h3>Executive Meeting Minutes</h3>

          <p>
            Executive Meetings normally run every Tuesday on a bi-weekly
            schedule beginning from 5:00 pm in the Abdul Lahda Science Student
            Building, Meeting Room 103.
          </p>

          <p>
            The meeting minutes are being updated periodically, click&nbsp;
            <Link
              href="https://drive.google.com/drive/folders/1HK903ukA3FExwNjzvZU6oV9GcpxKJKCD"
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

          <TabTable>
            <TabHeaders>
              <li
                className={activeTab === "Presidential" ? "active" : ""}
                onClick={() => setActiveTab("Presidential")}
              >
                Presidential
              </li>
              <li
                className={activeTab === "Administration" ? "active" : ""}
                onClick={() => setActiveTab("Administration")}
              >
                Administration
              </li>
              <li
                className={activeTab === "Academic" ? "active" : ""}
                onClick={() => setActiveTab("Academic")}
              >
                Academic
              </li>
              <li
                className={activeTab === "Communication" ? "active" : ""}
                onClick={() => setActiveTab("Communication")}
              >
                Communication
              </li>
              <li
                className={activeTab === "External" ? "active" : ""}
                onClick={() => setActiveTab("External")}
              >
                External
              </li>
              <li
                className={activeTab === "Finance" ? "active" : ""}
                onClick={() => setActiveTab("Finance")}
              >
                Finance
              </li>
              <li
                className={activeTab === "Internal" ? "active" : ""}
                onClick={() => setActiveTab("Internal")}
              >
                Internal
              </li>
              <li
                className={activeTab === "Student Life" ? "active" : ""}
                onClick={() => setActiveTab("Student Life")}
              >
                Student Life
              </li>
            </TabHeaders>
            {renderContent()}
          </TabTable>
        </Content>
        <Footer />
      </Background>
    </>
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
  justify-content: flex-start;
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
  padding: 150px 10px 20px;
  width: 100%;
  max-width: 1100px;
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

const TabContent = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-top: none;
  background-color: #f8f8f8;

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 10px 0;
  }

  a {
    text-decoration: none;
    color: #0066cc;
  }
`;
const TabTable = styled.div`
  min-height:50px
  margin-top: 45px; /* Add some space above the tabs */
  width: 100%;
  border-collapse: collapse; /* Or use 'fixed' */
  overflow-x: auto;

  max-width: 100%;
  box-sizing: border-box; /* Include padding in width calculation */
  padding: 0 10px; /* Provide some padding for better appearance */

  /* Ensure that the inner table or content fits as well */
  table {
    width: 100%; /* Make sure the table takes full width */
    min-width: 600px; /* Set a minimum width to avoid collapsing */
    border-collapse: collapse; /* Keep borders clean */
    
    th, td {
      padding: 10px; /* Add padding for better usability */
      text-align: left; /* Align text to the left */
      border: 1px solid #ccc; /* Add borders to cells */
    }
  }

   @media (max-width: 600px) {
    padding: 0; /* Add padding for mobile */
  }
`;

const TabHeaders = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  border-bottom: 2px solid #ccc;

  li {
    padding: 10px 20px;
    cursor: pointer;
    font-weight: bold;
    color: #333;
    border: 1px solid transparent;
    border-radius: 4px 4px 0 0;
    transition:
      background-color 0.3s,
      box-shadow 0.3s; /* Smooth transitions */

    &.active {
      border-color: #ccc;
      border-bottom: none;
      background-color: #005bb5; /* More distinct active color */
      color: white; /* Change text color for better contrast */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow */
    }
    &:hover {
      background-color: #0073e6; /* Highlight color on hover */
      color: white; /* Change text color on hover */
    }
  }
  @media (max-width: 600px) {
    flex-direction: column; /* Stack headers vertically on mobile */
    li {
      padding: 10px 10px; /* Adjust padding for mobile */
    }
  }
`;
