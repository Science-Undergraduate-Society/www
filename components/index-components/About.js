import React, { useState, useEffect } from "react";
import styled from "styled-components";

const images = [
    "/images/index-images/main2.png",
    "/images/index-images/main3.webp",
    "/images/index-images/scigrad.webp",
    "/images/index-images/scirxn.webp",
    "/images/index-images/scirxn2.webp",
    "/images/index-images/sciweek1.webp",
    "/images/index-images/sciweek2.webp"
];

export default function About() {
    const [currentImages, setCurrentImages] = useState(images.slice(0, 3));

    useEffect(() => {
        const interval = setInterval(() => {
            const newImages = images
                .sort(() => 0.5 - Math.random())
                .slice(0, 3); // Display 3 random images
            setCurrentImages(newImages);
        }, 3000); // Change images every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <Background>
            <Section1>
                <Title>What Is SUS?</Title>
                <Description>
                    Founded in 1961, the Science Undergraduate Society (or SUS) aims to promote the academic, 
                    physical, & social wellbeing of Science Students. Supporting over 9700+ Science 
                    Students and over 50 Science clubs, every science student is a member of SUS. 
                    Through SUS, we aim to create and foster a sense of science community and 
                    continually promote good relations with other communities on campus.
                </Description>
            </Section1>

            <Section2>
                <Collage>
                    {currentImages.map((image, index) => (
                        <Graphic key={index} src={image} alt={`Collage Image ${index + 1}`} />
                    ))}
                </Collage>
            </Section2>
        </Background>
    );
}

const Background = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
`;

const Section1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Section2 = styled.div`
`;

const Collage = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    border-radius: 20px;
`;

const Graphic = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    position: relative;
    z-index: 2;
    border: none;
    border-radius: 0;
    transition: opacity 1s ease-in-out;
    box-shadow: 0 0 60px rgba(0, 25, 97, 0.5); /* Subtle border glow */
`;

const Title = styled.div`
    font-size: 37px;
    font-weight: bold;
    color: #001961;
    margin-bottom: 2rem`;

const Description = styled.div`
    font-size: 17px;
    line-height: 2;
    color: black;
    margin-bottom: 3rem;
    text-align: center;
`;
