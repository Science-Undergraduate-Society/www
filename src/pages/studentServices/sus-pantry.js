import styled from "styled-components";
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function susPantry() {
    return (
        <Background>
            <Navbar />
            <Content>
                <Title>SUS Pantry</Title>
                <InformationBox>
                    <Information>In September 2024, the Community Engagement and Student Benefits working groups founded SUStainable Eats and SUStenance Food Pantry. Averaging 90+ attendees at each event in 2024-25, the SUS Community Engagement team hopes to emphasize the importance of nutrition and student wellness while bringing more opportunities to bridge the gap in food resources on-campus.</Information>
                </InformationBox>
                <StatsGrid>
                    <StatItem>30-40% of UBC students face challenges of food insecurity</StatItem>
                    <StatItem>24% of new Greater Vancouver Food Bank registrants in 2022 were post-secondary students, and this number is expected to grow</StatItem>
                    <StatItem>According to Campus Nutrition, a shocking 40 per cent of UBC students are food insecure</StatItem>
                </StatsGrid>

                <InfoSection>
                    <InfoTitle>SUStainable Eats</InfoTitle>
                    <InfoDescription>A series of Community Dinners hosted at the Abdul Ladha Building where free, nutritious meals are prepared live and handed out to students. Please follow our instagram for more information for our upcoming SUS Eat’s initiative!</InfoDescription>
                </InfoSection>

                <InfoSection>
                    <InfoTitle>SUStenance Food Pantry</InfoTitle>
                    <InfoDescription>The Food Pantry is located on the second floor of the Abdul Ladha Building near the stairwell and is restocked on a bi-weekly basis. The Pantry features a diverse range of food items and non-perishables you can select from.</InfoDescription>
                </InfoSection>

                <EducationSection>
                    <EducationTitle>Food Education Resources</EducationTitle>
                    <EducationLink href="https://docs.google.com/spreadsheets/d/1CY7LgAQdAoL4SF5hAM0WXEXp7YyjSkIVVSw0e7cHjxU/edit?gid=0#gid=0" target="_blank" rel="noopener noreferrer">
                        📊 View Food Education Sheet
                    </EducationLink>
                </EducationSection>
            </Content>
            <Footer />
        </Background>
    )
}

const Background = styled.div`
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 200px 20px 50px;
    width: 100%;
    max-width: 1200px;
    gap: 30px;
`;

const Title = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    color: #001961;
    text-align: center;
    margin-bottom: 20px;

    @media only screen and (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

const InformationBox = styled.div`
    background-color: #f5f5f5;
    border-left: 5px solid #001961;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
`;

const Information = styled.p`
    font-size: 1.1rem;
    line-height: 1.8;
    color: #333;
    text-align: justify;
`;

const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    width: 100%;
    margin: 20px 0;
`;

const StatItem = styled.div`
    background: linear-gradient(135deg, #001961 0%, #003399 100%);
    color: white;
    padding: 25px 30px;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.6;
    box-shadow: 0 4px 15px rgba(0, 25, 97, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 20px rgba(0, 25, 97, 0.3);
    }
`;

const InfoSection = styled.div`
    width: 100%;
    margin: 20px 0;
`;

const InfoTitle = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    color: #001961;
    margin-bottom: 15px;
`;

const InfoDescription = styled.p`
    font-size: 1.1rem;
    line-height: 1.7;
    color: #555;
`;

const EducationSection = styled.div`
    width: 100%;
    background: linear-gradient(135deg, #f0f4ff 0%, #e6eeff 100%);
    padding: 40px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    margin: 30px 0;
`;

const EducationTitle = styled.h3`
    font-size: 1.8rem;
    font-weight: bold;
    color: #001961;
    margin-bottom: 20px;
`;

const EducationLink = styled.a`
    display: inline-block;
    background-color: #001961;
    color: white;
    padding: 15px 40px;
    border-radius: 30px;
    font-size: 1.1rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 25, 97, 0.3);

    &:hover {
        background-color: #003399;
        transform: translateY(-3px);
        box-shadow: 0 6px 15px rgba(0, 25, 97, 0.4);
    }
`;