import styled from "styled-components";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import ElectionsTimeline from "@/components/ElectionsTimeline";

export default function Elections() {
    return (
        <Background>
            <Navbar />
            <Content>
                <Title>Fall Elections 2025</Title>
                <Subtitle>SUS is made up of <strong>7 portfolios</strong> and over <strong>200+ volunteers</strong> working together to build an amazing student experience for all science students.</Subtitle>
                <MiniTitle>🌟 Run in the SUS Elections! 🌟</MiniTitle>
                <Paragraph>Want to make a difference and shape the student experience in UBC Science? Right now, we’re looking for passionate students to join our team! Open positions include Department Representatives, First-Year Representatives, VP Academic, VP Finance, and AMS Representative. Whether you want to represent your department, your year, or the entire science community, now’s your chance, run in the elections today!</Paragraph>

                <br/>

                <h1>Elections Documentation</h1>
                <p>Click the links below to learn more:</p>
                <ul>
                    <li>
                        <strong>
                            <a href="https://docs.google.com/document/d/1Asc6-fL0ZPhHeM16rD2pdw6_HWKaiUogrxm6xP4I3iI/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Fall 2025 Elections Brochure</a>
                        </strong>: To view available positions.
                    </li>
                    <HalfBreak/>
                    <li>
                        <strong>
                            <a href="https://docs.google.com/document/d/1xevZu2TWQ6xp8ykssXN2Gg0D6EnncT8smAmX5whFoaw/edit?tab=t.0" target="_blank" rel="noopener noreferrer">Fall 2025 Elections Guidelines</a>
                        </strong>: For elections guidelines.
                    </li>
                </ul>

                <br/>

                <CollageContainer>
                    <CollageImage
                    src="/images/elections-images/1.JPG"
                    alt="Students campaigning"
                    width={500}
                    height={400}
                    $span={2}
                    />
                    <CollageImage
                    src="/images/elections-images/3.JPG"
                    alt="Council event"
                    width={500}
                    height={400}
                    $span={2}
                    />
                    <CollageImage
                    src="/images/elections-images/2.JPG"
                    alt="Voting booth"
                    width={500}
                    height={400}
                    $span={2}
                    />
                </CollageContainer>

                <br/>
                
                <ElectionsTimeline/>
            </Content>
            <Footer />
        </Background>
    );
}
const Background = styled.div`
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const Content = styled.div`
    flex: 1;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    padding: 200px 10px 20px;
    width: 100%;
    max-width: 1200px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 20px;
  color: #4b2e83;
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-top: 40px;
  margin-bottom: 20px;
  color: #333;
`;

const MiniTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-top: 40px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const Timeline = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;

const TimelineItem = styled.li`
  margin-bottom: 15px;
  font-size: 1rem;
  font-weight: 500;

  span {
    font-weight: 700;
    color: #4b2e83;
  }
`;

const HalfBreak = styled.div`
    height: 0.5em;
    margin: 0;
`;


const CollageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 15px;
  margin: 30px 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

    margin-bottom: 3rem;
`;

const CollageImage = styled(Image)`
  border-radius: 12px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.15);
  object-fit: cover;
  width: 100%;
  height: auto;
  grid-column: span ${(props) => props.$span || 2};
  transform: rotate(${() => Math.random() * 4 - 2}deg);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05) rotate(0deg);
    z-index: 10;
  }
`;