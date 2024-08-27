import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/index-components/Hero";
import About from "../components/index-components/About";
import Alssc from "../components/index-components/Alssc";
import GetInvolved from "../components/index-components/GetInvolved";
import Podcast from "../components/index-components/Podcast"
import Shop from "../components/index-components/Shop";

const Home = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.1, // Adjust as needed
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) { // Check if the section is a valid DOM element
        observer.observe(section);
      }
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) { // Check if the section is a valid DOM element
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <>
      <Background>
        <BackgroundImage />

        <Navbar />

        <Content>
          <Section ref={(el) => (sectionRefs.current[0] = el)}>
            <Hero />
          </Section>

          <Section ref={(el) => (sectionRefs.current[1] = el)} style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}>
            <About />
          </Section>

          <Section ref={(el) => (sectionRefs.current[2] = el)}>
            <Alssc />
          </Section>

          <Section ref={(el) => (sectionRefs.current[3] = el)} style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}>
            <GetInvolved />
          </Section>

          <Section ref={(el) => (sectionRefs.current[4] = el)}>
            <Podcast />
          </Section>

          <Section ref={(el) => (sectionRefs.current[5] = el)} style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}>
            <Shop /> 
          </Section>

          <Footer />
        </Content>
      </Background>
    </>
  );
};

export default Home;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Section = styled.div`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
    animation: ${fadeInUp} 0.5s ease-out forwards;
  }

  height: 80vh; 
  margin-top: 10vh;
  margin-bottom: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

const Background = styled.main`
  width: 100%;
  height: auto;
  overflow-y: auto; 
  scroll-behavior: smooth;
  position: relative; 
`;

const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/index-images/main1.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  z-index: -1;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(5px);
    pointer-events: none;
  }
`;

const Content = styled.div`
  position: relative; 
  z-index: 1;
`;
