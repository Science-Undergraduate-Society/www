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
                <a href="https://drive.google.com/drive/folders/1NWWoe0UXD0zE-mXYW-AfSBlT6vtf75dy?usp=drive_link">
                  Advocacy 
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1kxPtQSeZ0BNpae69Oah4S_gx9huksmnB?usp=drive_link">
                  Human Resources (HR)
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/13mhYgFKqPjShS8grRed0U6ISzUJ_hvRj?usp=drive_link">
                  Elections 
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1caFd8f5YL6OLw_Dhf0j6Xezit13UdaSu?usp=drive_link">
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
                <a href="https://drive.google.com/drive/folders/1Cs9fzS754LZcplRK4TFI8o29YF7zPFMM?usp=drive_link">
                  Clubs (CC)
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1xue3ghZBw9cMighT5Xwv6Vhg-x6cLwyk?usp=drive_link">
                  Sustainability (SUST)
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/12t--jSzaJFEIWl2tFx_7uimrErb6N7vl?usp=drive_link">
                  Building Management (BMC)
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1A2MMlncfqT9rwXkrekflQuH2wL2707um?usp=drive_link">
                  Code and Policy (CAPC)
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
                <a href="https://drive.google.com/drive/folders/1BQPuxGW_VskKu9jKnfX0YaMonWF-S-KB?usp=drive_link">
                  Wellness (WELL)
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1MP8v-wb172vjBglYsgR7tnprOBlH6y0z?usp=drive_link">
                  Academic Experience (ACAX)
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1f6yToHgYx9p3h5ebMaX89ikKAa-BaIjW?usp=drive_link">
                  Tutoring (T)
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1FR3NqZ1vrHoWdmMF4nn4zwy9kHHJVgtG?usp=drive_link">
                  Mentorship (MENT)
                </a>
              </li>
            </ul>
          </TabContent>
        );
      case "Communications":
        return (
          <TabContent>
            <ul>
              <li>
                <a href="https://drive.google.com/drive/folders/1C6D100bM86sqWnR8ZNe_ofpZxsZt0ZIe?usp=drive_link">
                  First Week (FW)
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1H6e0B1qx5Qmrcyq8yt1uUYdfsVDabxRz?usp=drive_link">
                  Marketing (MKTG)
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/19xEJrWYceRueUfb2tMZoiX23WYG07McC?usp=drive_link">
                  Productions (PRODS)
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1LcplWcstEOvq0Anli69ILa-s1VU77COZ?usp=drive_link">
                  Sales (SALE)
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1BI2v-tmlZPgS-K9B0fmFKT0DckdFNE5k?usp=drive_link">
                  Web Developer (WEB)
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1G5d6RKz5-xy5BTQ-fHDGbbh-cA0tof43?usp=drive_link">
                  Hackathon (HACK)
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
                <a href="https://drive.google.com/drive/folders/1aCOtwl6-C7LnYfYqn5UwLAY8AGXrK9-N?usp=drive_link">
                  Careers and Professional Development (CAPD)
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1eAU4FpLzgoL7CjbNYNwaIqdal85h6qxI?usp=drive_link">
                  Community Engagement (COMME)
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/11Ro-DKKInsmtZpfzLlYREWnMQxkSbzxP?usp=drive_link">
                  Sponsorship (SPSR)
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/10vGkIVnb4vC3qNZ1bk4c2beumnNS-dhm?usp=drive_link">
                Science Student Recognition Award Night (SSRAN)
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
                <a href="https://drive.google.com/drive/folders/1LT6arf73onq1gkb6AQ7DNxXU7ANmmabd?usp=drive_link">
                  Finance
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1xk0eNmW0DnVa2UtYtzx0Rpd73R0e1FJ-?usp=drive_link">
                  Grants
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
                <a href="https://drive.google.com/drive/folders/1zHz9y0guoXjDGGl_y8wJOMuYtX1yn5k4?usp=drive_link">
                  First Year Committee (FYC)
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1IMGF8f0fmIWhgThPdLhHqXKOvFN-8Uwf?usp=drive_link">
                  Flagship Experience (FLEX)
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1Yaev7HKCXH9zOrMDg88Y3M-rGOd-SkOh?usp=drive_link">
                  Social
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1ZAFdbO30q7dJcDgVH3U_4Ca7kyAmEU46?usp=drive_link">
                  Sports
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1o_eTQTh4jBmP1STxMf8c7qdHOkjCpK8S?usp=drive_link">
                  Science Celebration Committee 
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
          <StyledH1>Meeting Minutes</StyledH1>
          <p>
            All SUS meetings are open to Science students to attend unless
            otherwise stated. All meeting minutes on the present website are
            updated for the 2025/2026 academic year. If you wish to access the
            meeting minutes of previous years, please email our VP Admin
            at&nbsp;
            <Link href="mailto:vpadministration@sus.ubc.ca" passHref>
              vpadministration@sus.ubc.ca
            </Link>
            .
          </p>

          <StyledH3>Council Meeting Minutes</StyledH3>
          <p>
            The meeting minutes are being updated periodically, click&nbsp;
            <Link
              href="https://drive.google.com/drive/folders/1-PVBSWfZlZPP7NPNQT3oZn8dIP7jsXa1?usp=sharing"
              passHref
            >
              here
            </Link>
            &nbsp;to view the meeting minutes.
          </p>

          <StyledH3>Executive Meeting Minutes</StyledH3>

          <p>
          Executive Meetings run every Thursday on a weekly schedule from 5:00 pm in the Abdul Lahda Science Student Building, Meeting Room 103.
          </p>

          <p>
            The meeting minutes are being updated periodically, click&nbsp;
            <Link
              href="https://drive.google.com/drive/folders/1lJJ4gWDYDzz1B4FDpwPFL5Jo10TjwFKR?usp=sharing"
              passHref
            >
              here
            </Link>
            &nbsp;to view the meeting minutes.
          </p>

          <StyledH3>Working Group Meeting Minutes</StyledH3>

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
                className={activeTab === "Communications" ? "active" : ""}
                onClick={() => setActiveTab("Communications")}
              >
                Communications
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

const StyledH1 = styled.h1`
  color: #222755;
`;

const StyledH3 = styled.h3`
  color: #222755;
`;
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
      background-color: #222755; /* More distinct active color */
      color: white; /* Change text color for better contrast */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow */
    }
    &:hover {
      background-color: #222755; /* Highlight color on hover */
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
