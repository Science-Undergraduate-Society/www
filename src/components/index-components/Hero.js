import styled from 'styled-components';

const Hero = () => {
    return (
        <BackgroundContainer>
            <Logo src="/images/logos/white-logo-full.png" alt="Logo" />
            <Subtitle>Representing 9,900+ UBC Science undergrads<br/> and 50 Science clubs.⁣</Subtitle>
            <Subtitle2>~ est. 1961 ~</Subtitle2>
        </BackgroundContainer>
    );
};

const breakpoints = {
    mobile: '768px',
    tablet: '1024px',
};

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  position: relative;
  padding: 2rem;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem;
  }
`;

const Subtitle = styled.div`
  color: white;
  font-size: 1.9rem;  
  text-align: center;
  z-index: 2;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

const Subtitle2 = styled.div`
  color: white;
  font-size: 1.2rem;  
  font-weight: normal;
  text-align: center;
  z-index: 2;
  margin-top: 2rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
    margin-top: 1rem;
  }
`;

const Logo = styled.img`
  width: 600px;
  height: auto;
  position: relative; /* Ensures the logo is above the filter */
  z-index: 2;
  margin-top: 10rem;
  margin-bottom: 3rem;

  @media (max-width: ${breakpoints.mobile}) {
    width: 80%;
    margin-top: 5rem;
    margin-bottom: 2rem;
  }
`;

export default Hero;
