import styled, { createGlobalStyle, keyframes } from "styled-components";
import Link from 'next/link';
import Navbar from "../../components/Navbar";

export default function Grants() {
    return (
        <Background>
            <Navbar></Navbar>
            <Heading>
                <Title>SUS Grants & Subsidies</Title>
                <Subinfo>$53,000 for individuals and clubs</Subinfo>
                <Link href="">
                    <StyledButton>Apply Now</StyledButton>
                </Link>
                <SubText>
                    *Applications MUST be submitted to the Qualtrics form above to be considered
                </SubText>
            </Heading>
            <SciSec>
                <SecondHeader>Science Students</SecondHeader>

            </SciSec>
            <SciSec>
                <SecondHeader>SUS Clubs</SecondHeader>

            </SciSec>
        </Background>
    )
}

const GlobalStyle = createGlobalStyle`
    :root {
    --susblue: #222755;
    --logoblue: #0173be;
    --greyblue: #e7edf7;
    --black: #000000;
    --white: #ffffff;

}`;

const Heading = styled.div`
    background-size: cover;
    width: 100wh;
    height: 100vh; 
    padding-top: 150px;
    color: white;
`
const Title = styled.div`
    font-size: 54px;
    font-weight: 700;
    position: relative;
`

const Subinfo = styled.div`
    font-size: 36px;
    font-weight: 400;
    margin-top: 12px;
`

const SubText = styled.div`
    font-style: italic;
    padding: 20px;
    font-size: 12px;
`

const SecondHeader = styled.div`
    color: #222755;
    font-size: 36px;
`

const SciSec = styled.div`
    height: 100vh;
    width: 100%;
    align-text: left;
    background-color: white;
    padding: 24px;
`

const Background = styled.div`
    height: 100vh;
    background-size: cover;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: #222755;
`

const StyledButton = styled.div`
    display: inline-block;
    width: 210px;
    padding: 10px 20px;
    background-color: #e7edf7;
    color: #222755;
    text-align: center;
    border-radius: 5px;
    text-decoration: none;
    margin-top: 20px;
    cursor: pointer;

    &:hover {
        background-color: #005bb5;
    }
`

const pulse = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
`

const breakpoints = {
    mobile: '768px',
    tablet: '1024px',
};
