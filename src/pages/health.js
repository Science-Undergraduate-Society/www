import styled from "styled-components";
import Link from 'next/link';
import Navbar from "../components/Navbar";

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
                        health, nutrition and mental well-being.
                    </Description>
                </LeftHero>
                <RightHero>
                    <Graphic src="/images/health-images/health-main.jpg"/>
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
    background-image: linear-gradient(to right, #0173be, #e7edf7);
    // background-image: url('/images/index-images/main1.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
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
    margin-top: 10vh;
`

const LeftHero = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    padding-left: 150px;
`

const RightHero = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
`

const Graphic = styled.img`
    width: 50%;
    object-fit: cover;
    position: relative;
    z-index: 2;
    border: none;
    border-radius: 0;
    transition: opacity 1s ease-in-out;
`

const Title = styled.div`
    color: #e7edf7;
    font-size: 50px;
    font-weight: bold;
    text-align: left;
    width: 100%;
    margin-bottom: 2rem;
`

const Description = styled.div`
    color: #e7edf7;
    font-size: 20px;  
    margin-bottom: 3rem;
    text-align: left;
`