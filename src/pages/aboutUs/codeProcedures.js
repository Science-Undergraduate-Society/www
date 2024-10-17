import styled from "styled-components";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CodeProcedures() {
  return (
    <>
      <Navbar />
      <Background>
        <Content>
          <h1>Code & Procedure</h1>
          <p>
            The following document outlines how the SUS is organized, how the
            student fees are used, how decisions are made on behalf of Science
            Students and the responsibilities of elected officials.
          </p>
          <Link
            href="https://drive.google.com/file/d/1nVFR-Y6f0pY5AbsMVOsDDDdGxrPYMoq9/view"
            passHref
          >
            <StyledButton>SUS Code & Procedure Document</StyledButton>
          </Link>

          <SpacingDiv></SpacingDiv>

          <p>Last Revised: March 14, 2024</p>

          <p>
            For further inquiries/concerns please contact our VP Admin at&nbsp;
            <Link href="mailto:vpadministration@sus.ubc.ca" passHref>
              vpadministration@sus.ubc.ca
            </Link>
            .
          </p>
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
  width: 350px;
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

// const Content = styled.div`
//   position: relative;
//   z-index: 1;
//   align-items: flex-start;
//   justify-content: flex-start;
//   text-align: left;
// `;
const Content = styled.div`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  padding: 200px 10px 20px;
  width: 100%;
  max-width: 1200px;
`;

const SpacingDiv = styled.div`
  margin-bottom: 75px;
`;
