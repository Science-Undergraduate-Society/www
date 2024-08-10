import { useEffect, useState } from 'react';
import Navbar from "../../components/Navbar";
import Image from 'next/image';
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
 
      <div className='subtitle-container'>
        <hr className='line' />
        <h2 className='event-subtitle'><b>Science RXN</b></h2>
        <hr className='line' />
      </div>

      <div className="image-container">
        {images.map((image, index) => (
          <Image 
            key={index}
            src={image.src} 
            alt={image.alt}
            className="eventimage"
            width={500}  // Adjust width as needed
            height={300} // Adjust height as needed
          />
        ))}
      </div>
    </div>
  );
}
