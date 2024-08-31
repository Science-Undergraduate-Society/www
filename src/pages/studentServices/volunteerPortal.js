import styled from "styled-components";
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function VolunteerPortal() {
    return (
        <Background>
            <Navbar />
            <Content>
                <Title>Volunteer Portal</Title>
            </Content>
            <Footer />
        </Background>
    )
}

const Title = styled.div`
    padding-top: 24px;
    font-size: 54px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
`

const Content = styled.div `
  color: #222755;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  width: 100%;
  padding: 150px 0 0 15%;
`

const Background = styled.div`
    height: 100vh;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const StyledButton = styled.div`
    display: inline-block;
    width: 210px;
    padding: 10px 20px;
    background-color: #0070f3;
    color: white;
    text-align: center;
    border-radius: 5px;
    text-decoration: none;
    margin-top: 20px;
    cursor: pointer;

    &:hover {
        background-color: #005bb5;
    }
`
