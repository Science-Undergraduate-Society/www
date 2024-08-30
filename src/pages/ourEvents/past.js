import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from "../../components/Navbar";
import Footer from '@/components/Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import pastEvents from "@/utility/pastEvents";

const BackgroundContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/images/events-images/past.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.5;
    z-index: -1;
  }
`;

const OverlayText = styled.div`
  position: relative;
  color: #222755;
  font-size: 5rem;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  margin-top: 90px;
`;

const SubtitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 60px;
`;

const Line = styled.hr`
  flex-grow: 1;
  border: none;
  border-top: 3px solid #222755;
  margin: 0;
`;

const EventSubtitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 10px;
  color: #222755;
  margin: 0;
  padding-right: 10px;
  text-align: center;
  padding-left: 10px;
`;

const CarouselSlide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 20px;
`;

const ButtonSeeAllPhotos = styled.a`
  background-color: #222755;
  text-decoration: none;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 25px;
  transition: background-color 0.3s ease;
  margin-left: 4rem;

  &:hover {
    background-color: #222890;
  }
`;
  
export default function PastEvents() {
    const [images, setImages] = useState(pastEvents);

    return (
        <div>
            <Navbar />

            <BackgroundContainer>
                <OverlayText><b>Our Past Events</b></OverlayText>
            </BackgroundContainer>

            {/* Science RXN */}
            <SubtitleContainer>
                <Line />
                <EventSubtitle><b>Science RXN</b></EventSubtitle>
                <Line />
            </SubtitleContainer>

            <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                emulateTouch={true}
                centerMode={true}
                centerSlidePercentage={30}
                swipeable={true}
            >
                {images.slice(0, 7).map((image, index) => (
                <CarouselSlide key={index}>
                    <CarouselImage
                    src={image.src}
                    alt={image.alt}
                    />
                </CarouselSlide>
                ))}
            </Carousel>

            {/* Welcome Back BBQ */}
            <SubtitleContainer>
                <Line />
                <EventSubtitle><b>Welcome Back BBQ</b></EventSubtitle>
                <Line />
            </SubtitleContainer>

            <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                emulateTouch={true}
                centerMode={true}
                centerSlidePercentage={30}
                swipeable={true}
            >
                {images.slice(7, 14).map((image, index) => (
                <CarouselSlide key={index}>
                    <CarouselImage
                    src={image.src}
                    alt={image.alt}
                    />
                </CarouselSlide>
                ))}
            </Carousel>

            {/* Student Recognition Awards Night */}
            <SubtitleContainer>
                <Line />
                <EventSubtitle><b>Student Recognition Awards Night</b></EventSubtitle>
                <Line />
            </SubtitleContainer>

            <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                emulateTouch={true}
                centerMode={true}
                centerSlidePercentage={30}
                swipeable={true}
            >
                {images.slice(15, 21).map((image, index) => (
                <CarouselSlide key={index}>
                    <CarouselImage
                    src={image.src}
                    alt={image.alt}
                    />
                </CarouselSlide>
                ))}
            </Carousel>

            <br />
            <br />
            <br />

            <div className="text-center mt-4">
                <ButtonSeeAllPhotos
                href="https://drive.google.com/drive/folders/13uokLlZpCwrf1Ow0q93_MgGnRhKnoiO5"
                >
                See all photos
                </ButtonSeeAllPhotos>
            </div>
            <Footer color="#ffffff" background="#222755"/>
        </div>
  );
}
