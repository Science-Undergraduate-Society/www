import styled from "styled-components";
import {
    faSpotify,
    faYoutube,
    faFacebook,
    faInstagram,
    faTiktok,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import sponsors from "@/utility/sponsors";

export default function Footer({color}) { // TODO
    return (
      <FooterContainer color={color}>
        <SocialMediaIcons color={color}>
            <a
                href='https://www.instagram.com/susubc'
                target='_blank'
                rel='noreferrer'
            >
                <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
                href='https://www.linkedin.com/company/susubc/posts/?feedView=all'
                target='_blank'
                rel='noreferrer'
            >
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            
            <a
                href='https://open.spotify.com/show/6LvV59dTsORiXSn4z28Zon?si=0f45da7172b94df9'
                target='_blank'
                rel='noreferrer'
            >
                <FontAwesomeIcon icon={faSpotify} />
            </a>
            <a
                href='https://www.youtube.com/user/SUSUBC1915'
                target='_blank'
                rel='noreferrer'
            >
                <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
                href='https://www.tiktok.com/@sus_ubc'
                target='_blank'
                rel='noreferrer'
            >
                <FontAwesomeIcon icon={faTiktok} />
            </a>

            <a
                href='https://www.facebook.com/susubc'
                target='_blank'
                rel='noreferrer'
            >
                <FontAwesomeIcon icon={faFacebook} />
            </a>
        </SocialMediaIcons>
        <Links color={color}>
          <a href='mailto:vpexternal@sus.ubc.ca' target='_blank' rel='noreferrer'>
            Email Us
          </a>
        </Links>
        <div>Copyright &copy; 2024 UBC Science Undergraduate Society</div>
        <SponsorSectionWrapper>
          <div>Thank you to our amazing sponsors!</div>
          <SponsorSectionContent>
            {sponsors.map((sponsor, index) =>
              sponsor.logo !== "" ? (
              <SponsorIcon
                key={index}
                sponsorName={sponsor.name}
                link={sponsor.link}
                logo={sponsor.logo}
                index={index}
              />
              ) : null
            )}
          </SponsorSectionContent>
        </SponsorSectionWrapper>
      </FooterContainer>
    );
  }

const SponsorIcon = ({ sponsorName, link, logo }) => (
  <Sponsor>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <SponsorImage src={logo} alt={sponsorName} />
    </a>
  </Sponsor>
);


const FooterContainer = styled.footer`
  margin-top: 30vh;  
  background-size: cover;
  color: ${props => props.color};
  text-align: center;
  padding: 64px 0;
  width: 100%;
  
  background-color: #222755;
`;

const SocialMediaIcons = styled.div`
  font-size: 32px;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: ${props => props.color};
    width: 30px;
    height: 19%;
    margin: 0 32px;
    transition: color 200ms;
    font-size: 1em; // Adjust the icon size here
  }
`;

const Links = styled.div`
  display: flex;
  gap: 1em;
  justify-content: center;
  margin-bottom: 32px;

  a {
    color: ${props => props.color};
    transition: color 200ms;
    text-decoration: underline;
  }
`;

const Sponsor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 20px;
`;

const SponsorImage = styled.img`
  padding: 10px;
  width: 45px;
  height: auto;
  object-fit: cover;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
`;

const SponsorSectionContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; /* Allows wrapping to the next row */
  gap: 10px; /* Adjust the spacing between images */
  margin-top: 1rem;
`;

const SponsorSectionWrapper = styled.div`
  width: 100%;
  background-color: rgba(34, 39, 85, 0.8);;
  margin: 50px 0;
  margin-bottom: 4rem;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;