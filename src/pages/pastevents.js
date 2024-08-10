import { useEffect, useState } from 'react';
import Navbar from "../../components/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Events() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/events.json')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  return (
    <div>
      <Navbar />

      <div className="background-container">
        <div className="overlay-text"><b>Our Past Events</b></div>
      </div>

      {/* Science RXN */}
      <div className='past-subtitle-container'>
        <hr className='past-line' />
        <h2 className='pastevent-subtitle'><b>Science RXN</b></h2>
        <hr className='past-line' />
      </div>

      <div>
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
            <div className="carousel-slide" key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className="carousel-image"
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Welcome Back BBQ */}
      <div className='past-subtitle-container'>
        <hr className='past-line' />
        <h2 className='pastevent-subtitle'><b>Welcome Back BBQ</b></h2>
        <hr className='past-line' />
      </div>

      <div>
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
            <div className="carousel-slide" key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className="carousel-image"
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Student Recognition Awards Night */}
      <div className='past-subtitle-container'>
        <hr className='past-line' />
        <h2 className='pastevent-subtitle'><b>Student Recognition Awards Night</b></h2>
        <hr className='past-line' />
      </div>

      <div>
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
            <div className="carousel-slide" key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className="carousel-image"
              />
            </div>
          ))}
        </Carousel>
      </div>

      <br></br>

      <div className="text-center mt-4">
        <a href="https://drive.google.com/drive/folders/13uokLlZpCwrf1Ow0q93_MgGnRhKnoiO5" 
        className="btn btn-see-all-photos">See all photos</a>
      </div>

      <br></br>
      <br></br>
    </div>
  );
}
