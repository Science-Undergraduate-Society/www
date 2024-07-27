import styled from "styled-components";
import Link from 'next/link';
import Navbar from "../../components/Navbar";

export default function HealthAndWellness() {
    return (
        <Background>
            <BackgroundGradient />
            <Navbar />
            <Hero>
                <LeftHero>
                    <Title>Health & Wellness</Title>
                    <Description>
                        Services and resources to help balance physical 
                        health, nutrition and mental well-being to keep 
                        patients happy and healthy.
                    </Description>
                </LeftHero>
                <RightHero>
                    <Graphic src="/images/main1.jpg"/>
                </RightHero>
            </Hero>
        </Background>
    )
}

const Background = styled.div`
    height: 100vh;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const BackgroundGradient = styled.div`
    background-color: rgb(34, 39, 85);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
`

const Hero = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const LeftHero = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    background-color: red;
    padding: 30px, 0;
`

const RightHero = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
`

const Graphic = styled.img`
    width: 65%;
    height: auto;
    object-fit: cover;
    position: relative;
    z-index: 2;
    border: none;
    border-radius: 0;
    transition: opacity 1s ease-in-out;
`

const Title = styled.div`
    color: #e7edf7;
    font-size: 37px;
    font-weight: bold;
    text-align: left;
`

const Description = styled.div`
    color: #e7edf7;
    font-size: 20px;  
    margin-bottom: 3rem;
    text-align: left;
`