import styled from "styled-components";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SearchBar } from "@/components/volunteerPortal-components/SearchBar"

export default function VolunteerPortal() {
    return (
        <Background>
            <Navbar />
            <Heading>
                <SecondHeader>Volunteer Portal</SecondHeader>
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

const Heading = styled.div`
  color: #222755;
  text-align: center; /* Align text within the component */
  margin-top: 25vh;
`;

const SecondHeader = styled.div`
    color: #222755;
    font-size: 40px;
    text-align: center;
    background-color: #fff;
    padding-top: 24px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: bold;
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
