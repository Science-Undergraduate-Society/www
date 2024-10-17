import styled from "styled-components";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Abdul() {
    return (
        <>
            <Navbar />
            <Content>
                <Header>
                    <Title>ABOUT ABDUL LADHA</Title>
                    <HeaderDescription>
                    Abdul Ladha, an Honours graduate in Electrical Engineering from UBC, has made significant contributions across business, philanthropy, and education. As CEO of Ableauctions.com Inc., he pioneered live online auction technology, making it a global leader serving platforms like eBay. He also founded SPARK, a philanthropic foundation supporting youth initiatives and providing care for thousands of children in Africa. Abdul’s achievements have earned him awards such as the Great Trekker and Entrepreneur of the Year. A dedicated supporter of UBC, he holds the distinction of having the Science Student Centre named in his honour. Additionally, he is a key benefactor of Lions Gate Hospice and a founding director of The Canadian Institute for Technological Advancement.
                    </HeaderDescription>
                    <ButtonGroup>
                        <ButtonHollowBlack>
                            <Link href="https://www.abdulladha.com/">Click Here to Learn More</Link>    
                        </ButtonHollowBlack>
                    </ButtonGroup>
                </Header>

                <Image src="/images/abdulLadha/abdul.jpg" alt="Abdul Ladha" />

                <Divider/>
                
                <Footer/>
            </Content>
        </>
    )
}

// =============== GENERAL =============== //

const ContactSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    width: 80%;
    margin-top: 5vh;
    margin-bottom: 5vh;
`

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

const Section = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    width: 80%;

    margin-top: 5vh;
    margin-bottom: 5vh;
`

// =============== DROPDOWN STYLES =============== //

const DropdownContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const DropdownHeader = styled.div`
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  background-color: #f1f1f1;
  cursor: pointer;
  border-bottom: 1px solid #ddd;

  &:hover {
    background-color: #ddd;
  }
`;

const DropdownBody = styled.div`
    max-height: ${(props) => (props.isOpen ? '500px' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease;
`;

const DropdownBodyAV = styled.div`
    max-height: ${(props) => (props.isOpen ? 'none' : '0')};
    p {
        margin-top: 30px;
    }
    overflow: hidden;
    transition: max-height 0.3s ease;
    width: 100%;
    margin-left: 2rem;
`;

const DropdownItem = styled.li`
    padding: 15px;
    margin: 0 15px;
    border-bottom: 1px solid #ddd;
    font-size: 16px;
    
    &:last-child {
        border-bottom: none;
    }
    
    &:hover {
        background-color: #f9f9f9;
    }
`;

const DropdownImage = styled.img`
    max-height: ${(props) => (props.isOpen ? '500px' : '0')};
    object-fit: cover;
    width: auto;
    overflow: hidden;
    transition: max-height 0.3s ease;
    border: 1px solid grey;
`

// =============== HEADER =============== //

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;

    width: 50%;
    margin-bottom: 5vh;
`

const Title = styled.h2`
    color: black;
`

const HeaderDescription = styled.p`
    text-align: center;
`

// =============== HOURS =============== //

const HoursContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const Hours = styled.div`
    display: flex;
    align-items: center; 
`
const HoursSpan = styled.span`
    font-weight: bold;
    margin-right: 20px;
`
const HoursDescription = styled.div`
    margin-top: 3rem;
`

// =============== GALLERY =============== //

const CarouselSlide = styled.div`
  display: flex;
  flex-direction: row; // Ensure content inside each slide is laid out in a row
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const CarouselImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 20px;
`;
const Image = styled.img`
  width: 80%;
  max-width: 500px;
  height: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  border-radius: 25px;
  margin-bottom: 3rem;
`;