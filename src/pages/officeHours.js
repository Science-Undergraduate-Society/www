import styled from "styled-components";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import NewFooter from "../../components/newFooter";

export default function OfficeHours() {
  return (
    <Background>
      <Navbar />
      <Content>
        <h1>Office Hours</h1>
        <p>
          Each executive is required to sit on 2 hours of office hours every
          week. Their office hours can be found listed below.
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
  margin-bottom: 75px; /
`;
