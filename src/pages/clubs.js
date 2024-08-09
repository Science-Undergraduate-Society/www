import styled from "styled-components";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import NewFooter from "../../components/NewFooter";
import { useState } from "react";

export default function Clubs() {
  // State to manage the selected tab
  const [selectedTab, setSelectedTab] = useState("DEPARTMENTAL");

  return (
    <Background>
      <Navbar />
      <Content>
        <h1>Our Clubs</h1>
        <p>
          For the 2023/2024 academic year, the Science Undergraduate Society is
          proud to support 26 departmental and 26 non-departmental clubs.
        </p>
        <ClubsTable>
          <TabContainer>
            <TabActive
              isActive={selectedTab === "DEPARTMENTAL"}
              onClick={() => setSelectedTab("DEPARTMENTAL")}
            >
              DEPARTMENTAL
            </TabActive>
            <Tab
              isActive={selectedTab === "NON-DEPARTMENTAL"}
              onClick={() => setSelectedTab("NON-DEPARTMENTAL")}
            >
              NON-DEPARTMENTAL
            </Tab>
          </TabContainer>
          <TableContent>
            {selectedTab === "DEPARTMENTAL" && (
              <ColumnContainer>
                <Column>
                  <ClubRow
                    logoSrc="path_to_astronomy_club_logo"
                    clubName="Astronomy Club"
                    description="Astronomy Club focuses on exploring the universe through telescopes, discussions, and events."
                  />
                  <ClubRow
                    logoSrc="path_to_biochem_club_logo"
                    clubName="Biochemistry Student Association"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Biological Sciences Society (BIOSOC)"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Biotechnology Club"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Computer Science Students Society (CSSS)"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Data Science Club"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="International Genetically Engineered Machines (iGEM)"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Psychology Students’ Association (PSA)"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Physics Society (Physsoc)"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Science One Survivors "
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Undergraduate Mathematics Society (UMS)"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Women in Data Science (WiDS)"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                </Column>
                <Column>
                  <ClubRow
                    logoSrc="path_to_astronomy_club_logo"
                    clubName="Bachelor of Computer Science Students Association (BCSSA)"
                    description="Astronomy Club focuses on exploring the universe through telescopes, discussions, and events."
                  />
                  <ClubRow
                    logoSrc="path_to_biochem_club_logo"
                    clubName="Biochemistry Pharmacology Physiology Club (BPP)"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Biophysics Student Society (BPSS)"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Cognitive Systems Society (CSS)"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Combined Major in Science Student Association (CMSSA)"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Environmental Science Students Association (ESSA)"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Integrated Sciences Student Association (ISSA)"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Microbiology and Immunology Students Association (MISA)"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Pharmacology and CAPS Student Association"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Science Co-op Students Association (SCOOPS)"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Undergraduate Chemistry Society (UCS)"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Undergraduate Statistic Society (USS)"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                </Column>
              </ColumnContainer>
            )}
            {selectedTab === "NON-DEPARTMENTAL" && (
              <ColumnContainer>
                <Column>
                  <ClubRow
                    logoSrc="path_to_ams_autism"
                    clubName="AMS Autism Associates Club"
                    description="Astronomy Club focuses on exploring the universe through telescopes, discussions, and events."
                  />
                  <ClubRow
                    logoSrc="path_to_biochem_club_logo"
                    clubName="AMS Medical Genetics"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="AMS UBC Synapse"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="AMS Vaccine Literacy Club"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Canadian Liver Foundation (CLF)"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Friends of Medecins Sans Frontieres (FoMSF) UBC"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Humanities in Healthcare (HIH)"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Neuroscience Club"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Operation Smile"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Pre-Dental Club"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Pre-Optometry Club"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="STEM Fellowship"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Undergraduate Research Opportunities (URO)"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Women in Computer Science at UBC"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                </Column>
                <Column>
                  <ClubRow
                    logoSrc="path_to_astronomy_club_logo"
                    clubName="AMS Girls in STEAM"
                    description="Astronomy Club focuses on exploring the universe through telescopes, discussions, and events."
                  />
                  <ClubRow
                    logoSrc="path_to_biochem_club_logo"
                    clubName="AMS Spinal Cord Injury Association"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="AMS unboundED"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Blood for Life"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Cancer Association"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Heart and Stroke Foundation Club (HSF)"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Multiple Sclerosis Club"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="nwPlus"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="PATHS"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Pre-Medical Society"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Quantum Club"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Third World Eye Care Society"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Women in Science"
                    description="The Biochemistry Student Association provides resources and networking for biochem students."
                  />
                </Column>
              </ColumnContainer>
            )}
          </TableContent>
        </ClubsTable>
      </Content>
      <NewFooter />
    </Background>
  );
}

// Component for Each Club Row
function ClubRow({ logoSrc, clubName, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Row>
        <Logo src={logoSrc} alt={clubName} />
        <ClubName>{clubName}</ClubName>
        <Dropdown onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "▲" : "▼"}
        </Dropdown>
      </Row>
      {isOpen && <Description>{description}</Description>}
    </>
  );
}

const ColumnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  // height: 100vh; /* Ensure there's enough height to center items vertically */
  // border: 1px solid #000; /* For visual debugging */
`;
const Column = styled.div`
  flex: 1;
  padding: 8px;
  border-left: 1px solid #ccc;
  &:first-child {
    border-left: none;
  }
`;

// Styled Components for ClubsTable
const ClubsTable = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 20px auto;
  border: 1px solid #ccc;
  background-color: #f0f4ff;
  border-radius: 8px;
  overflow: hidden;
`;

const TabContainer = styled.div`
  display: flex;
  background-color: #f0f4ff;
  border-bottom: 2px solid #ccc;
`;

const Tab = styled.div`
  flex: 1;
  padding: 12px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  background-color: ${(props) => (props.isActive ? "#2c3e50" : "#ffffff")};
  color: ${(props) => (props.isActive ? "#ffffff" : "#333")};
`;

const TabActive = styled(Tab)``;

const TableContent = styled.div`
  display: flex;
  padding: 16px;
  background-color: #ffffff;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 16px;
`;

const ClubName = styled.span`
  flex: 1;
  font-weight: bold;
  color: #333;
`;

const Dropdown = styled.div`
  cursor: pointer;
  font-size: 16px;
  color: #333;
`;

const Description = styled.div`
  padding: 10px 16px;
  background-color: #f0f4ff;
  border-radius: 4px;
  margin-bottom: 16px;
  font-size: 14px;
  color: #333;
  border: 1px solid #ccc;
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

const Content = styled.div`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  padding: 650px 10px 20px;
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
  }
`;

const SpacingDiv = styled.div`
  margin-bottom: 55px;
`;
