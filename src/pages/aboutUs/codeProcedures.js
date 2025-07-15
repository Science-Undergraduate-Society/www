import styled from "styled-components";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Alssc() {
  return (
    <>
      <Navbar />
      <Content>
        <Header>
        <Title>CODE & PROCEDURE</Title>
          <HeaderDescription>
            The following document outlines how the SUS is organized, how the student fees are used, how decisions are made on behalf of Science Students and the responsibilities of elected officials.
          </HeaderDescription>
          <HeaderDescription>
            Last Revised: February 12, 2025
          </HeaderDescription>
          <ButtonGroup>
            <ButtonHollowBlack>
              <Link href="https://drive.google.com/drive/folders/16Tw9wtai_6c_poGPKkapX1JowegFBGBm?fbclid=IwZXh0bgNhZW0CMTEAAR2oRPQVmvC3lMXr_noJuyco0dbt-a3nZNpgILKzqG-z5EkqQ63U3GNl4aY_aem_yqAf1MSQoM23YGrK0ReiKQ">SUS Code & Procedure Document</Link>    
            </ButtonHollowBlack>
          </ButtonGroup>

          <Divider/>

          <Title>INQUIRIES OR CONCERNS?</Title>
          <ExecutiveImage src="/images/executive-images/alan-wei.jpg" />
          <HeaderDescription>
            Contact our VP Admin <b>Alan Wei</b>, at <a href="mailto:vpadministration@sus.ubc.ca">vpadministration@sus.ubc.ca</a>.
          </HeaderDescription>
        </Header>

        <Footer/>
      </Content>
    </>
  )
}

// =============== GENERAL =============== //
const ExecutiveImage = styled.img`
  overflow: hidden;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  width: 200px;
  height: 200px;
  margin: 2.5vh;
`;

const Content = styled.main`
  margin-top: 30vh;
  width: 100%;
  height: auto;
  overflow-y: auto; 
  scroll-behavior: smooth;
  position: relative; 
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
`

const Divider = styled.div`
  margin-top: 5vh;
  margin-bottom: 5vh;
  width: 90%;
  border-bottom: 1px solid black;
`

const ButtonGroup = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 20px;
  justify-content: left;
`;

const ButtonHollowBlack = styled.button`
  background-color: transparent;
  color: #222755;
  padding: 15px 35px;
  border-radius: 30px;
  border: 1px solid #222755;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;

  &:hover {
      color: #0052FF;
      border: 1px solid #0052FF;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`

// =============== HEADER =============== //

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;

  width: 50%;
  margin-bottom: 10vh;
`

const Title = styled.h2`
  color: black;
`

const HeaderDescription = styled.p`
  text-align: center;
`
