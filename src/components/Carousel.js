import { useEffect, useState } from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
  position: relative;
  width: 90%;
  margin: auto;
  overflow: hidden;
`;

const CarouselInner = styled.div.attrs((props) => ({
//   style: {
//     transform: `translateX(-${props.index * 100}%)`,
//     width: `${props.totalImages * 100}%`,
//   },
}))`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const CarouselImage = styled.img`
  width: auto; 
  height: 600px;
  object-fit: cover;
//   display: block;
  transition: transform 0.5s ease-in-out;
  flex: 0 0 100%; /* This ensures each image takes up 100% of the CarouselInner's width */
`;

const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
`;

const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
`;

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    console.log(currentIndex);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    console.log(currentIndex);
  };

  useEffect(() => {
    console.log("Current index changed:", currentIndex);
  }, [currentIndex]);

  return (
    <CarouselContainer>
      <CarouselInner index={currentIndex} totalImages={images.length}>
        {images.map((image, idx) => (
          <CarouselImage key={idx} src={image.src} alt={image.alt} />
        ))}
      </CarouselInner>
      <PrevButton onClick={prevSlide}>❮</PrevButton>
      <NextButton onClick={nextSlide}>❯</NextButton>
    </CarouselContainer>
  );
};

export default Carousel;
