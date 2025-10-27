import styled from "styled-components";
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HealthAndWellness() {
  return (
    <>
      <Navbar />
      <Container>
        <MainTitleContainer>
          <HeweImage src="/images/health-images/wellness_hub_logo.png" />
          <SubTitle>Feeling stuck? It doesn’t have to be this way. Prioritize your mental health today!</SubTitle>
        </MainTitleContainer>
        <Section>
          <Title>If you are in danger of hurting yourself or others:</Title>
          <Text>
            If you or someone you know is in imminent danger, call {' '}
            <Link href="tel:911">911</Link>.
          </Text>

          <Text>
            Visit the <Link href="https://www.vch.ca/your-care/emergency-care">nearest emergency room</Link> at the nearest hospital.
          </Text>

          <Text>
            If you or someone you know is contemplating suicide, call the{' '}
            <Link href="tel:988">988 Suicide Crisis Helpline</Link>.
          </Text>

          <Text>
            If you are someone you know is at risk of self-harm, call BC&apos;s Crisis line at{' '}
            <Link href="tel:18007842433">1 800 784 2433</Link>.
          </Text>

          <Text>
            If you need immediate, free and confidential emtional support, crisis intervention, or community resource information, call the Fraser Health Crisis Line at{' '}
            <Link href="tel:18778207444">1 877 820 7444</Link>.
          </Text>
          
          <Text>
            You can connect with the <Link href="https://www.vch.ca/en/location-service/access-and-assessment-centre-aac-vancouver-general-hospital">Access and Assessment Centre</Link> between 7:30 am and 9:30 pm for walk-in services, or call 604-675-3700 between 7:30 am and 10:00 pm. If you live outside of Vancouver but in British Columbia, you can visit a <Link href="https://www.fraserhealth.ca/Service-Directory/Services/mental-health-and-substance-use/mental-health---community-services/rapid-access-clinic">Rapid Access Clinic</Link>.
          </Text>
        </Section>

        <Section>
          <Title>When & why would you seek support?</Title>
          <SubSub>You may feel anxious, overwhelmed, or notice your mental health declining. Counselling Services can help with:</SubSub>

          <ul>
            <li>Decision-making and relationship challenges</li>
            <li>Coping with grief, loss, or life changes</li>
            <li>Adjusting to new cultures, understanding identity, or managing discrimination</li>
            <li>Struggling with focus, organization, or test anxiety</li>
            <li>Recovering from burnout</li>
            <li>Tangible wellness strategies for preventing burnout</li>          
          </ul>
        </Section>

        <br/>

        <SubTitle>Short-Term Counselling</SubTitle>

        <Section>
          <Title>UBC Counselling Services</Title>
          <SubSub>In-person, online, or over the phone. Call 604-822-3811 to book – no walk-ins available.</SubSub>
          <ul>
            <li>Opening hours:</li>
            <ul>
              <li>Monday: 8:30 am to 4:30 pm</li>
              <li>Tuesday: 8:30 am to 4:30 pm</li>
              <li>Wednesday: 8:30 am to 6:30 pm</li>
              <li>Thursday: 8:30 am to 4:30 pm</li>
              <li>Friday: 8:30 am to 4:30 pm</li>
            </ul>
            <br/>
            <li>Check <Link href="https://students.ubc.ca/health/counselling-services/">here</Link> for up-to-date clinic locations & closures</li>
            <li>You will be asked to choose from two types of same-day, single session drop-in appointments:</li>
            <ol>
              <li>Mental health counselling (therapy appointment)</li>
              <li>Wellness advising session (wellness resources, creating a plan of support, triaging to other support services)</li>
            </ol>
          </ul>

          <SubSub>Specialized services</SubSub>
          <ul>
            <li><Link href="https://students.ubc.ca/health/counselling-services/indigenous-mental-health-wellbeing-program/">Indigenous Mental Health and Wellbeing Program</Link></li>
            <li><Link href="https://students.ubc.ca/health/counselling-services/meet-counselling-services-team/#dia">Queer and Gender Affirming Counselling Program</Link></li>
            <li><Link href="https://students.ubc.ca/health/counselling-services/group-counselling-programs/">Group Counselling Programs</Link></li>
          </ul>
        </Section>

        <Section>
          <Title>Science Embedded Counsellor (New!)</Title>
          <ul>
            <li>Science embedded counselling tailors wellbeing support specifically targeting concerns that science students experience</li>
            <li>Book a drop-in appointment with UBC Counselling Services at 604-822-3811 and ask about embedded counselling</li>
            <li>New offering as of 2025!</li>
          </ul>
        </Section>

        <Section>
          <Title>Here2Talk</Title>
          <ul>
            <li>Free, confidential 24/7 support line in over 200 languages</li>
            <li>Call or chat online with experienced professionals</li>
            <li>Download the Here2Talk app for texting options</li>
            <li>No appointment needed: <Link href="https://here2talk.ca/home">Here to Talk</Link> or call: 604-642-5212</li>
          </ul>
        </Section>

        <br/>

        <SubTitle>Private Counselling</SubTitle>

        <Section>
          <Title>Private Counsellors</Title>
            <li>$1250.00 covered by the AMS/GSS Health and Dental Plan!</li>
            <li>This covers appointments with a private mental health practitioner, such as a licensed psychologist, registered clinical counsellor, or therapist with a Master’s degree in Social Work</li>
            <li>Find a counsellor for your specific needs - filter by specialty, availability, and in-person/virtual options</li>
            <li>Search with BC Association of Clinical Counsellors or PsychologyToday</li>
            <li>More on how to find a <Link href="https://students.ubc.ca/health/counselling-services/finding-private-counsellor/">private mental health professional here</Link>.</li>
        </Section>

        <Section>
          <Title>Tips for finding the right private counsellor</Title>
          <ul>
            <li>Request a 15 minute consultation</li>
            <li>Make a list of many possible counsellors</li>
            <li>Ensure it is financially feasible - do they accept your insurance or offer a sliding scale or students?</li>
          </ul>
        </Section>
        
        <Section>
          <Title>UBC AMS/GSS Health and Dental Plan</Title>
          <ul>
            <li>Unless you opted out, the <Link href="https://www.ams.ubc.ca/support-services/health-dental/">AMS/GSS Health and Dental plan</Link> covers all UBC students!</li>
            <li>Covers <strong>$1250.00</strong> in counselling services (100% of the cost for each session!) for the 2025/2026 academic year for these practitioners:  <Link href="https://studentcare.ca/rte/en/UniversityofBritishColumbiaAMSGSS_Health_HealthCoverage_HealthPractitioners_Psychologists">Mental Health Practitioners</Link></li>
          </ul>
        </Section>

        <br/>

        <SubTitle>Find more information here: <Link href="https://science.ubc.ca/students/wellbeing">Mental Health and Wellbeing</Link>, or call 604-822-3811</SubTitle>

      </Container>
      <Footer/>
    </>
  );
};

// =============== GENERAL =============== //

const Container = styled.div`
  color: #222755;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 20vh;
`;

const SubSub = styled.p`
  font-weight: bold
`

const Section = styled.div`
  margin-bottom: 40px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
    margin-bottom: 30px;
  }
`;

const MainTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h2`
  font-size: 24px;
  color: #008000;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

const SubTitle = styled.h3`
  font-size: 26px;
  color: #222755;
  margin-bottom: 15px;
  text-align: center;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.5;
  }
`;

const HeweImage = styled.img`
  width: 60%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  margin: 40px auto;

  @media (max-width: 768px) {
    height: auto;
    width: 90%;
  }
`;