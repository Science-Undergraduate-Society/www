import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Button } from "./Reusable";

const images = [
    "/images/Shop_files/Black-Crew-1.png",
    "/images/Shop_files/Black-Hoodie-1.png",
    "/images/Shop_files/Blue-Crew-1.png",
    "/images/Shop_files/Blue-Hoodie-1.png",
    "/images/Shop_files/Grey-Crew-1.png",
    "/images/Shop_files/Grey-Hoodie-1.png",
    "/images/Shop_files/Sand-Crew-1.png",
    "/images/Shop_files/Sand-Hoodie-1.png",
    "/images/Shop_files/White-Crew-1.png",
    "/images/Shop_files/White-Hoodie-1.png",
];

export default function Shop() {
    const [currentImages, setCurrentImages] = useState(images.slice(0, 6));

    useEffect(() => {
        const interval = setInterval(() => {
            const newImages = images
                .sort(() => 0.5 - Math.random())
                .slice(0, 6);
            setCurrentImages(newImages);
        }, 3000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <Background>
            <Title>Shop with SUS!</Title>
            <Description>
                 Every year, SUS provides science students with unique merch that isn't available at the bookstore! 
            </Description>

            <Collage>
                {currentImages.map((image, index) => (
                    <Graphic key={index} src={image} alt={`Collage Image ${index + 1}`} />
                ))}
            </Collage>

            <Description>
                Checkout the styles from Spring 2024 ↓↓↓ 
            </Description>
            <Button as="a" href="/shop">Shop Spring 2024</Button>
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

const Collage = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    margin-bottom: 2rem;
`;

const Graphic = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    position: relative;
    z-index: 2;
    border: none;
    border-radius: 0;
    transition: opacity 1s ease-in-out;
    box-shadow: 0 0 60px rgba(255, 255, 255, 0.5);
`;

const Title = styled.div`
    font-size: 37px;
    font-weight: bold;
    color: #001961;
    margin-bottom: 1rem`;

const Description = styled.div`
    font-size: 17px;
    line-height: 2;
    color: black;
    text-align: center;
    margin-bottom: 1rem;
`;

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