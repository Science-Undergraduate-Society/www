import styled from "styled-components";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SearchBar } from "@/components/volunteerPortal-components/SearchBar"

export default function VolunteerPortal() {
    return (
        <Background>
            <Navbar />
            <Heading>
                <Title>Volunteer Portal</Title>
            </Heading>
            <SearchBar />
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

const Heading = styled.div `
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
    height: 100%;
    background-size: cover;
    display: flex;
    flex-direction: column;
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
