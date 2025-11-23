import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

// Local images list
const pastEvents = [
  {
    title: "Science RXN",
    description: "Our flagship welcome event for first year students!",
    date: "September 13-14, 2025",
    images: [
      { src: "/images/events-images/rxn/5.JPG", alt: "Science RXN 1" },
      { src: "/images/events-images/rxn/4.JPG", alt: "Science RXN 2" },
      { src: "/images/events-images/rxn/rxn3_main.JPG", alt: "Science RXN 3" },
      { src: "/images/events-images/rxn/rxn2_main.JPG", alt: "Science RXN 4" },
      { src: "/images/events-images/rxn/3.JPG", alt: "Science RXN 5" },
      { src: "/images/events-images/rxn/rxn1_main.JPG", alt: "Science RXN 6" },
      
    ],
  },
  {
    title: "SUS First Week Events",
    description: "An annual week long series of events to kickoff the first week of classes!",
    date: "September 2-5, 2025",
    images: [
      { src: "/images/events-images/fw/fw_main1.png", alt: "First Week 1" },
      { src: "/images/events-images/fw/fw_main5.png", alt: "First Week 2" },
      { src: "/images/events-images/fw/fw_main6.png", alt: "First Week 6" },
      { src: "/images/events-images/fw/fw_main3.JPG", alt: "First Week 3" },
      { src: "/images/events-images/fw/fw_main4.png", alt: "First Week 4" },
      { src: "/images/events-images/fw/fw_main2.jpg", alt: "First Week 2" },
    ],
  },
  {
    title: "Student Recognition Awards Night",
    description: "A formal evening to celebrate the achievements of our amazing science students!",
    images: [
      { src: "/images/events-images/ssran/8.JPG", alt: "Awards Night 8" },
      { src: "/images/events-images/ssran/9.JPG", alt: "Awards Night 9" },
      { src: "/images/events-images/ssran/10.JPG", alt: "Awards Night 10" },
      { src: "/images/events-images/ssran/11.JPG", alt: "Awards Night 11" },
      { src: "/images/events-images/ssran/7.JPG", alt: "Awards Night 7" },
      { src: "/images/events-images/ssran/ssran1.jpg", alt: "Awards Night 1" },
      
    ],
  },
  {
    title: "Come out for Brunch",
    description: "A celebration of National Coming Out Day! Hosted by SUS EDI, KUS Pride, and LFSUS.",
    date: "October 10, 2025",
    images: [
      // Add images here when available
    ],
  },
  {
    title: "FYC Haunted Carnival",
    description: "A spooky series of Halloween events with costumes, activities, and prizes!",
    date: "October 30, 2025",
    images: [
      // Add images here when available
    ],
  },
  {
    title: "Pizza N' Profs",
    description: "A night where professors share their journeys, research, and advice during an interactive panel and Q&A, followed by small-group networking over pizza. Gain insights, ask questions, and connect with professors.",
    date: "November 17, 2025",
    images: [
      // Add images here when available
    ],
  },
  {
    title: "Ignite Conference",
    description: "Ignite is the Science Undergraduate Society's annual career conference, offering students interactive workshops, industry panels, and networking opportunities with professionals. Explore diverse science careers and gain insights to shape your professional journey.",
    date: "November 22, 2025",
    images: [
      // Add images here when available
    ],
  },
];

// Reusable Event Section
const EventSection = ({ title, description, date, images }) => (
  <Section>
    <SectionHeader>
      <EventTitle>{title}</EventTitle>
      {date && <EventDate>{date}</EventDate>}
      <EventDescription>{description}</EventDescription>
    </SectionHeader>

  <CollageContainer>
    {images.map((image, idx) => (
      <CollageImage 
        key={idx}
        src={image.src}
        alt={image.alt}
        width={500} 
        height={300}
        $span={2}
      />
    ))};
  
  </CollageContainer>
    
  </Section>
);

export default function PastEvents() {
  return (
    <div>
      <Navbar />

      <Hero>
        <Overlay />
        <HeroContent>
          <HeroTitle>Our Past Events</HeroTitle>
          <HeroSubtitle>
            Moments that brought us together, made us laugh, and created lasting memories!
          </HeroSubtitle>
        </HeroContent>
      </Hero>

      <Main>
        {pastEvents.map((event, i) => (
          <EventSection
            key={i}
            title={event.title}
            description={event.description}
            date={event.date}
            images={event.images}
          />
        ))}

        <PhotosWrapper>
          <ButtonSeeAllPhotos
            href="https://drive.google.com/drive/folders/13uokLlZpCwrf1Ow0q93_MgGnRhKnoiO5"
          >
            🌟 See All Photos
          </ButtonSeeAllPhotos>
        </PhotosWrapper>
      </Main>

      <Footer color="#ffffff" background="#222755" />
    </div>
  );
}

//
// Styled Components
//

const CollageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: masonry;
    gap: 15px;
    margin: 20px 0;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const CollageImage = styled(Image)`
    border-radius: 12px;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
    object-fit: cover;
    width: 100%;
    height: auto;
    grid-column: span ${(props) => props.$span || 3};
    transform: rotate(${() => Math.random() * 4 - 2}deg);
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05) rotate(0deg);
        z-index: 10;
    }
`;

const Hero = styled.div`
  position: relative;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/images/events-images/past.jpg');
  background-size: cover;
  background-position: center;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    rgba(34, 39, 85, 0.6),
    rgba(34, 39, 85, 0.8)
  );
`;

const HeroContent = styled.div`
  position: relative;
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 20px;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 15px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  line-height: 1.6;
  opacity: 0.9;
`;

const Main = styled.div`
  background: #f8f9fc;
  padding: 60px 20px;
`;

const Section = styled.div`
  margin-bottom: 80px;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const EventTitle = styled.h2`
  font-size: 2.5rem;
  color: #222755;
  margin-bottom: 10px;
`;

const EventDate = styled.p`
  font-size: 1.2rem;
  color: #222755;
  font-weight: 600;
  margin-bottom: 10px;
`;

const EventDescription = styled.p`
  font-size: 1.1rem;
  color: #444;
  max-width: 600px;
  margin: 0 auto;
`;

const CarouselSlide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselImage = styled.img`
  width: 100%;
  max-width: 420px;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
`;

const PhotosWrapper = styled.div`
  text-align: center;
  margin-top: 40px;
`;

const ButtonSeeAllPhotos = styled.a`
  background-color: #222755;
  text-decoration: none;
  color: white;
  border: none;
  padding: 12px 28px;
  font-size: 18px;
  border-radius: 30px;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    background-color: #2f35a0;
    transform: translateY(-2px);
  }
`;
