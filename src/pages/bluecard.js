import styled from "styled-components";
import Link from 'next/link';
import Navbar from "../../components/Navbar";

export default function BlueCard() {
    return (
        <Background>
            <Navbar></Navbar>
            <Heading>
                <Title>The Blue Card</Title>
                <SubInfo>The UBC Student Discount Card</SubInfo>
                <SecondaryMenu>
                    <SmItem>Blue Card</SmItem>
                    <SmItem>Eligibility</SmItem>
                    <SmItem>Partners</SmItem>
                </SecondaryMenu>
                <Link href="">
                    <StyledButton>Sign In/Up</StyledButton>
                </Link>
            </Heading>
            <BCInfo>
                <Title>What is Blue Card?</Title>
            </BCInfo>
        </Background>
    )
}

const Heading = styled.div`
    padding-top: 150px;
    color: white;
`
const Title = styled.div`
    font-size: 54px;
    font-weight: 700;
    position: relative;
    letter-spacing: 3px;
    text-transform: uppercase;
`

const SubInfo = styled.div`
    font-size: 24px;
    font-weight: 400;
    margin-top: 12px;
    letter-spacing: 4px;
    font-style: italic;
`
const SecondaryMenu = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 24px;
    width: 100%;
`

const BCInfo = styled.div`
    background-color: #e7edf7;
    color: #222755;
    width: 100%;
    height: auto;
    margin-top: 24px;
`

const SmItem = styled.div`
    font-size: 18px;
    text-align: center;
`

const Background = styled.div`
    height: 100vh;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #222755;
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
