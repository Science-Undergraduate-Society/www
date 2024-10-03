import styled from "styled-components";
import Link from 'next/link';
import Navbar from "../../components/Navbar";

export default function HealthAndWellness() {
  return (
    <>
      <Navbar />
      <Container>
        <MainTitleContainer>
          <HeweImage src="/images/health-images/wellness_hub_logo.png" />
        </MainTitleContainer>
        <Section>
          <SubTitle>CRISIS SUPPORT</SubTitle>

          <Text>
            If you or someone you know is in imminent danger, call {' '}
            <Link href="tel:911">911</Link>.
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

          <SubTitle>OTHER IMMEDIATE RESOURCES</SubTitle>

          <Text>
            Here2Talk: Accessible 24/7 to all students in BC who are registered in a post-secondary institution{' '}
            <Link href="tel:18778573397">1 877 857 3397</Link>.
          </Text>

          <Text>
            Call{' '}
            <Link href="tel:3106789">310-6789 </Link>
            for emotional support, information and resources specific to mental health.
          </Text>

          <Text>
            For the Alcohol, Drug Information and Referral Services call{' '}
            <Link href="tel:18006631441">1-800-663-1441 </Link>
            to find resources and support.
          </Text>
        </Section>

        <Section>
          <SubTitle>UBC SERVICES & RESOURCES</SubTitle>
          <Text>
            Student Services Health and Wellbeing: <Link href="https://students.ubc.ca/health">https://students.ubc.ca/health</Link>
          </Text>

          <Text>
            UBC Human Resources Health and Wellbeing: <Link href="https://hr.ubc.ca/health-and-wellbeing">https://hr.ubc.ca/health-and-wellbeing</Link>
          </Text>

          <Text>
            AMS/GSS Health & Dental: <Link href="https://www.ams.ubc.ca/support-services/health-dental">https://www.ams.ubc.ca/support-services/health-dental/</Link>
          </Text>

          <Text>
            AMS Peer Support: <Link href="https://www.ams.ubc.ca/support-services/student-services/peer-support/">https://www.ams.ubc.ca/support-services/student-services/peer-support/</Link>
          </Text>

          <Text>
            UBC Counseling Services: <Link href="https://students.ubc.ca/health/counselling-services#:~:text=Call%20Counselling%20Services%20at%20604,come%2C%20first%2Dserved%20basis">https://students.ubc.ca/health/counselling-services</Link>
          </Text>

          <Text>
            UBC Wellness Centre: <Link href="https://students.ubc.ca/health/wellness-centre">https://students.ubc.ca/health/wellness-centre</Link>
          </Text>
        </Section>

        <Section>
          <Title>VANCOUVER/BC SERVICES & RESOURCES</Title>
          <HeweImage />
          <SubTitle>Health-Link BC Well-being</SubTitle>
          <Text>
            Visit <Link href="https://www.healthlinkbc.ca/mental-health-substance-use/well-being">Health-Link BC</Link> for information and resources on well-being and mental health.
          </Text>
          <SubTitle>Vancouver Coastal Health Wellness</SubTitle>
          <Text>
            Access resources and support through the <Link href="https://www.vch.ca/en/health-topics/health-wellness">Vancouver Coastal Health Wellness</Link> program.
          </Text>
          <SubTitle>Local Therapists/Organizations</SubTitle>
          <Text>
            Search for registered psychologists, counsellors, and therapists in Vancouver through{' '}
            <Link href="https://www.counsellingbc.com/">Counseling BC</Link>.
          </Text>
          <Text>
            Use the <Link href="https://www.psychologists.bc.ca/">BC Psychological Association</Link> to find a psychologist by city, client type, area of practice, therapy method, and language.
          </Text>
        </Section>

        <Section>
          <Title>PHYSICAL WELLNESS</Title>
          <SubTitle>UBC Recreation</SubTitle>
          <Text>
            Visit <Link href="https://recreation.ubc.ca/get-moving/">UBC Recreation</Link> for numerous drop-in options for fitness and sports. Check out their{' '}
            <Link href="https://recreation.ubc.ca/2020/12/01/recorded-virtual-fitness-classes/">virtual fitness classes</Link> if you’re on a tight schedule.
          </Text>
          <Text>
            The <Link href="https://sportfacilities.ubc.ca/src/">Student Recreation Centre (SRC)</Link> offers various gyms and free drop-in programs like basketball, badminton, volleyball, swimming, and skating.
          </Text>
          <SubTitle>Free Physical Wellness Apps</SubTitle>
          <Text>
            Download the <Link href="https://www.nike.com/ntc-app">Nike Train Club App</Link> for free guided workouts and fitness plans.
          </Text>
        </Section>

        <Section>
          <Title>NUTRITION</Title>
          <SubTitle>Healthy Meal Recipes for College Students</SubTitle>
          <Text>
            Explore budget-friendly and meal-prep friendly recipes on{' '}
            <Link href="https://fitfoodiefinds.com/best-healthy-recipes-for-college-kids-budget-friendly-and-meal-prep/">Fit Foodie Finds</Link>.
          </Text>
          <SubTitle>UBC Campus Nutrition</SubTitle>
          <Text>
            Access campus nutrition resources at <Link href="https://campusnutrition.ca">campusnutrition.ca</Link>.
          </Text>
          <Text>
            For students living in residence, contact the residence dietician at <Link href="https://food.ubc.ca/contact-the-dietitian/">UBC Food Services</Link>. Non-residents can connect with a dietician by calling 811 or visiting the{' '}
            <Link href="https://www.healthlinkbc.ca/">BC Dieticians website</Link>.
          </Text>
          <SubTitle>Affordable Food on Campus</SubTitle>
          <Text>
            Check out Sprouts in the Life Building basement, the AMS Food Bank in Life 0023, and The Delly after 5 pm for half-off meals.
          </Text>
        </Section>

        <Section>
          <Title>MENTAL WELLNESS</Title>
          <SubTitle>AMS/GSS Student Health</SubTitle>
          <Text>
            Students can get up to 80% coverage of psychotherapy services from licensed professionals through the AMS/GSS Student Health plan.
          </Text>
          <SubTitle>Virtual Resources</SubTitle>
          <Text>
            Explore apps like <Link href="https://insighttimer.com/">Insight Timer</Link>, <Link href="https://medito.app/">Medito Meditation</Link>, and <Link href="https://www.zenapp.org/">Zen: Guided Meditation and Sleep</Link> for mental wellness support.
          </Text>
          <SubTitle>Counseling</SubTitle>
          <Text>
            Use <Link href="https://www.7cups.com/">7 Cups</Link> for free emotional support with trained counselors and listeners. Access the{' '}
            <Link href="https://foundrybc.ca/virtual/">Foundry Provincial Virtual Service</Link> for various support services.
          </Text>
          <SubTitle>Interactive Mental Health Programs</SubTitle>
          <Text>
            <Link href="https://bouncebackbc.ca/">BounceBack</Link> is a free skill-building program designed to help adults and youth manage low mood, mild to moderate depression, anxiety, stress, or worry.
          </Text>
          <Text>
            <Link href="https://livinglifetothefull.ca/">Life to the Full</Link> is an interactive course to help you understand and manage your feelings, thoughts, and behaviors.
          </Text>
        </Section>

        <Section>
          <Title>SUPPORT FOR INDIGENOUS PEOPLE</Title>
          <SubTitle>Hope for Wellness Helpline</SubTitle>
          <Text>
            Call <Link href="tel:1-855-242-3310">1-855-242-3310</Link> for 24/7 support for Indigenous people across Canada.
          </Text>
          <SubTitle>Indian Residential School Crisis Line</SubTitle>
          <Text>
            Call <Link href="tel:1-866-925-4419">1-866-925-4419</Link> for support for anyone experiencing distress due to their residential school experience.
          </Text>
          <SubTitle>KUU-US Crisis Response Service</SubTitle>
          <Text>
            Call <Link href="tel:1-800-588-8717">1-800-588-8717</Link> for culturally-aware crisis support for Indigenous peoples in B.C.
          </Text>
          <SubTitle>Métis Crisis Line</SubTitle>
          <Text>
            Call <Link href="tel:1-833-638-4722">1-833-638-4722</Link> for Métis-specific crisis support available 24/7 in B.C.
          </Text>
          <SubTitle>Other Resources</SubTitle>
          <Text>
            Explore the <Link href="https://www.fnha.ca/">First Nations Health Authority</Link> and the <Link href="https://www.irsss.ca/">Indian Residential School Survivors Society (IRSSS)</Link> for more support services.
          </Text>
        </Section>

        <Section>
          <Title>SUPPORT FOR 2SLGBTQ+ PEOPLE</Title>
          <SubTitle>Qmunity Counselling Program</SubTitle>
          <Text>
            Access low-cost counselling with trained professionals through the <Link href="https://qmunity.ca/services/counselling/">
              Qmunity Counselling Program
            </Link>.
          </Text>
          <SubTitle>QMUNITY’s Trans ID Clinic</SubTitle>
          <Text>
            Get support with name and gender marker changes through the <Link href="https://qmunity.ca/services/trans-id-clinic/">QMUNITY Trans ID Clinic</Link>.
          </Text>
          <SubTitle>Trans Care BC</SubTitle>
          <Text>
            Connect with Trans Care BC for information, education, training, and support for trans people and their loved ones.
          </Text>
        </Section>

        <Section>
          <Title>FREE RECREATION</Title>
          <SubTitle>Museums</SubTitle>
          <Text>
            Visit UBC&apos;s free museums such as the <Link href="https://beatymuseum.ubc.ca/">Beaty Biodiversity Museum</Link>, <Link href="https://moa.ubc.ca/">Museum of Anthropology</Link>, and the <Link href="https://pacificmuseumofflight.org/">Museum of Earth</Link>.
          </Text>
          <SubTitle>Art and Culture</SubTitle>
          <Text>
            Enjoy free art exhibits at the <Link href="https://belkin.ubc.ca/">Morris and Helen Belkin Art Gallery</Link>, the <Link href="https://ahva.ubc.ca/galleries/ahva-gallery/">AHVA Gallery</Link>, and performances at the <Link href="https://chancentre.com/">Chan Centre for the Performing Arts</Link>.
          </Text>
          <SubTitle>Nature</SubTitle>
          <Text>
            Explore UBC&apos;s beautiful outdoor spaces such as the <Link href="https://botanicalgarden.ubc.ca/visit/nitobe-memorial-garden/">Nitobe Memorial Garden</Link>, the <Link href="https://www.ubc.ca/about/campus_landmarks/rose_garden.html">Rose Garden</Link>, and the iconic <Link href="https://www.wreckbeach.org/">Wreck Beach</Link>.
          </Text>
        </Section>
      </Container>
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
  font-size: 20px;
  color: #222755;
  margin-bottom: 15px;

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
  margin-bottom: 40px;

  @media (max-width: 768px) {
    height: 150px;
  }
`;