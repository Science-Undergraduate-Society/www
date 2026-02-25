import { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Modal } from "@/components/aboutUs-components/Modal";

// Candidate Component (kept for future use)
const Candidate = ({ name, position, imagePath, blurb }) => {
  const [modalClose, setModalClose] = useState(true);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setModalClose(true);
      }
    };

    if (!modalClose) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalClose]);

  const setCloseModal = () => {
    setModalClose(!modalClose);
  };

  return (
    <>
      <Modal
        modalClose={modalClose}
        setCloseModal={setCloseModal}
        name={name}
        role={position}
        imagePath={imagePath}
        description={blurb}
      />

      <CandidateCard onClick={setCloseModal}>
        <CandidateImage src={imagePath} />
        <CandidateTextContainer>
          <CandidatePosition>{position}</CandidatePosition>
          <CandidateName>{name}</CandidateName>
        </CandidateTextContainer>
      </CandidateCard>
    </>
  );
};

export default function Elections() {
  return (
    <Background>
      <Navbar />

      <Content>

        {/* PAGE TITLE */}
        <Title>Spring Elections 2026</Title>

        <Subtitle>
          SUS is made up of <strong>7 portfolios</strong> and over{" "}
          <strong>200+ volunteers</strong> working together to build an amazing
          student experience for all science students.
        </Subtitle>

        <Paragraph>
          All information stated here is up to date as of February 12th, 2026.
          If there are any inconsistencies or you believe you have an old copy,
          please contact the Elections Team immediately.
        </Paragraph>

        {/* DOCUMENTATION */}
        <SectionTitle>Elections Documentation</SectionTitle>

        <Paragraph>
          Click the links below to access the Spring 2026 Elections information:
        </Paragraph>

        <List>

          <li>
            <strong>
              <a
                href="https://docs.google.com/document/d/1imwZP-_LZTZSwtwTGRXgrcM6J3ngryNEoR4yKmYcvYQ/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spring 2026 Elections Brochure
              </a>
            </strong>
          </li>

          <li>
            <strong>
              <a
                href="https://docs.google.com/document/d/1g2NkYzeiXozFcICgTMnB8d95ula4vNmI2c5i2cTk5ms/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spring 2026 Elections Guidelines
              </a>
            </strong>
          </li>

          <li>
            <strong>
              <a
                href="https://ubc.ca1.qualtrics.com/jfe/form/SV_0DikAIZUfq28z6S"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nomination Submission Form
              </a>
            </strong>
          </li>

        </List>

        {/* TIMELINE */}
        <SectionTitle>Elections Timeline</SectionTitle>

        <Timeline>

          <TimelineItem>
            <span>Friday, February 13th, 12:00 AM</span> — Nomination submissions open
          </TimelineItem>

          <TimelineItem>
            <span>Sunday, March 1st, 11:59 PM</span> — Deadline for nomination submissions
          </TimelineItem>

          <TimelineItem>
            <span>Wednesday, March 4th, 6:00 – 8:00 PM</span> — Mandatory All Candidates Meeting (Abdul Ladha)
          </TimelineItem>

          <TimelineItem>
            <span>Saturday, March 7th, 11:59 PM</span> — Deadline for headshots, blurbs, and IG handles
          </TimelineItem>

          <TimelineItem>
            <span>Monday, March 9th, 12:00 AM</span> — Campaigning begins
          </TimelineItem>

          <TimelineItem>
            <span>Friday, March 13th, 10:00 AM – 8:00 PM</span> — All Candidates Forum
          </TimelineItem>

          <TimelineItem>
            <span>Monday, March 16th, 12:00 AM</span> — Voting opens
            <br/>
            <a
              href="https://amsvoting.as.it.ubc.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to vote
            </a>
          </TimelineItem>

          <TimelineItem>
            <span>Wednesday, March 25th, 11:59 PM</span> — Voting closes and campaigning ends
          </TimelineItem>

        </Timeline>


        {/* CONTACT */}
        <SectionTitle>Contact Information</SectionTitle>

        <Paragraph>
          Elections Chairs: <strong>Katelyn Milan and Kelly Park</strong>
        </Paragraph>

        <Paragraph>
          Email:{" "}
          <a href="mailto:elections@sus.ubc.ca">
            elections@sus.ubc.ca
          </a>
        </Paragraph>

        <Paragraph>
          All contact with Elections Administrators must be done through email.
        </Paragraph>


        {/* CANDIDATES COMING SOON */}
        <SectionTitle>Candidates</SectionTitle>

        <Paragraph>
          Candidate profiles will appear here once nominations close and submissions are finalized.
        </Paragraph>


      </Content>

      <Footer />

    </Background>
  );
}

/* STYLES */

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  padding: 200px 20px 40px;
  width: 100%;
  max-width: 1200px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 20px;
  color: #4b2e83;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-top: 50px;
  margin-bottom: 20px;
  color: #001961;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  margin-bottom: 15px;
`;

const List = styled.ul`
  margin-bottom: 30px;
`;

const Timeline = styled.ul`
  list-style: none;
  padding: 0;
`;

const TimelineItem = styled.li`
  margin-bottom: 15px;

  span {
    font-weight: bold;
    color: #4b2e83;
  }
`;

const CandidateCard = styled.div`
  cursor: pointer;
`;

const CandidateTextContainer = styled.div``;

const CandidatePosition = styled.div``;

const CandidateName = styled.div``;

const CandidateImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;
