import styled from "styled-components";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import NewFooter from "../../components/NewFooter";

export default function Budget() {
  return (
    <Background>
      <Navbar />
      <Content>
        <h1>Budget</h1>
        <p>
          The Science Undergraduate Society operates a $220k + budget and is
          governed by policies evoked by the AMS and the Science Student body.
          The following document outline how the student fees are used.
        </p>

        <Link
          href="https://docs.google.com/spreadsheets/d/1gMAKiTjGMW_h-NAvXkJO8jjM-l7KqC1J0xCP1hdRW80/edit?gid=233773177#gid=233773177"
          passHref
        >
          <StyledButton>2023/2024 Budget</StyledButton>
        </Link>

        <SpacingDiv></SpacingDiv>

        <h2>SUS Budget Feedback Form</h2>
        <p>
          Do you have any feedback or suggestions to the SUS budget? Please let
          us know using this form.
        </p>

        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSeivIN69w38fEwQVquDbYKhNVNQ2lcptngJBOgzS0oTgrmOtg/viewform"
          passHref
        >
          <StyledButton>Budget Feedback Form</StyledButton>
        </Link>

        <SpacingDiv></SpacingDiv>
        <SpacingDiv></SpacingDiv>

        <p>
          For further inquires/concerns, please contact our VP Finance at&nbsp;
          <Link href="mailto:vpfinance@sus.ubc.ca" passHref>
            vpfinance@sus.ubc.ca
          </Link>
          .
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
  margin-bottom: 55px; /
`;
