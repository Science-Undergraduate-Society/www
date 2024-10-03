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
                <a href="https://drive.google.com/drive/folders/1iJU8EJFKXZh4y4qGg5LtjWPfsexRiQZq">
                  Projects Commission (PROJ)
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1G__WjNx1VGMmKAh2NBqrSLUk4Fmx5IZK?usp=drive_link">
                  Human Resources (HR)
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1mmeWUmQQOL9Mdnqpnuq1NdStPWqkpB_Z?usp=drive_link">
                  Science Caucus (SCIC)
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1FATV57_csp5cOiJOEiPuz3omRXMTRMKU?usp=drive_link">
                  Extraordinary (EDI)
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
                <a href="https://drive.google.com/drive/folders/13YA3z-MVwxXzVcYKVsL8Yk7O257UvvoK?usp=drive_link">
                  Clubs (CC)
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1lMYRaGKjcfNfwcOwjDEyDmTZZ3hw7ceI?usp=drive_link">
                  Sustainability (SUST)
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1hAEB4VQj0aa_jSo1mklfU651n4CYmfRC?usp=drive_link">
                  Building Management
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1-SX9FnLvePHHejy_YlLttuNtvC2GC3vN?usp=drive_link">
                  Code and Policy
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
                <a href="https://drive.google.com/drive/folders/1-Pqt5xs4g5bpAD8HcQ6-qkZSuIvN2kQA?usp=drive_link">
                  Health and Wellness
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1BPjxYmbxrTK8GvtD-ADuOvbhYrmU7McB?usp=drive_link">
                  Academic Experience
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1sUOyZqGTPhMIeBG0dzmKGNj_5jmisQcF?usp=drive_link">
                  Mental Health and Advocacy
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1LXHnwm7QN5WO5LoakzZpS7NUKE5a50VM?usp=drive_link">
                  Academic Standing
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/11WJ1lgX2ROe-WStSy74ptm6R9iiF0oFh?usp=drive_link">
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
                <a href="https://drive.google.com/drive/folders/1ephHmD1Fli36vS4OR-8nzupgSwSwe49e?usp=drive_link">
                  Visual Media
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1xiGLePKChqy13RYo74zMv2168q5TR6bs?usp=drive_link">
                  Marketing
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1pu06CWB2dg4xKoCsi7HzCv0kPadyuXNC?usp=drive_link">
                  Sales
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1nwx3lUw1qtMATWwiITBubIz0gwsJvHBa?usp=drive_link">
                  First Week
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1TjcwjtiX-b01f1sc3GKwlNnSmcUOZwZp?usp=drive_link">
                  Web
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/19wjb1fUCnqgt2UST0BBXEulfVSQ7IhHy?usp=drive_link">
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
                <a href="https://drive.google.com/drive/folders/1X2uYpo2EFkSEGaNg6GnNzZhho8xp39R2?usp=drive_link">
                  Student Benefits
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1vp0pMpTt5ALhnOxLnp2HvZb4P8JJs9cH?usp=drive_link">
                  Careers and Professional Development
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1jai5KaOCLdqodkVEPAupub9LiTrAmSXL?usp=drive_link">
                  Corporate Relations
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1C2JurgKFWTfF-7IRKgwZmHs-dkvMG3To?usp=drive_link">
                  Community Engagement
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1BAOHQv7sxzj7D7KdYjCuVPnVn6O5a43P?usp=drive_link">
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
                <a href="https://drive.google.com/drive/folders/1aSYIntStgwzN1ePRQ8QRorBfVsEfA3bK?usp=drive_link">
                  Finance
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/167Es2bhAlxASbp-UR81qdAQS_2IQM-L2?usp=drive_link">
                  Budget
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/14tXQT5upSw8uYf3oXobfBSGsKuSxtR3p?usp=drive_link">
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
                <a href="https://drive.google.com/drive/folders/1aGzeqRSq_V_z4uP20NFrm3KE6i1g1nDD?usp=drive_link">
                  Internal
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1lGrbjU0j2SGOxKliUvuQBHUh87Z2cZK0?usp=drive_link">
                  SSRAN
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1GjnmfvxJRt3-aUkxRD-2IYMvN5CRikm8?usp=drive_link">
                  Elections Administration
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1EpDXMKGeNbaEZtBBk1TUAbti7B7naKXF?usp=drive_link">
                  First Year Committee
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/17wZ7A81I9_Mx8VrR33IPcMzqCkjTEhGr?usp=drive_link">
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
                <a href="https://drive.google.com/drive/folders/1htL2iQRrxN9bOZSl8evegd_sMLd1Uu0B?usp=drive_link">
                  Science Graduation
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1qvzs_7T8TNCzE448F2IiqlPENG1iecTr?usp=drive_link">
                  Science Week
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1wh4sviWehS8eHy3ybFNFgYWm_h8YVE33?usp=drive_link">
                  Science RXN
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1IoRdu7CCh1Iwq_HIfZ7rEaFzTU5OosF1?usp=drive_link">
                  Student Life Standing
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/19O4fmdGXoMlTctR3myNUmbkIY9fZ6v3g?usp=drive_link">
                  Social
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1813Ukgly6wyum_jU115_8BcdLFucx-ds?usp=drive_link">
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
              href="https://drive.google.com/drive/folders/15BWKf35JbSQ89E5jgRA6qY0zdco-iJtU?usp=sharing"
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
