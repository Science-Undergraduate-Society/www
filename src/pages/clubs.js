import styled from "styled-components";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import NewFooter from "../../components/NewFooter";
import { useState } from "react";

export default function Clubs() {
  // State to manage the selected tab
  const [selectedTab, setSelectedTab] = useState("DEPARTMENTAL");

  return (
    <Background>
      <Navbar />
      <Content>
        <h1>Our Clubs</h1>
        <p>
          For the 2023/2024 academic year, the Science Undergraduate Society is
          proud to support 26 departmental and 26 non-departmental clubs.
        </p>
        <ClubsTable>
          <TabContainer>
            <TabActive
              isActive={selectedTab === "DEPARTMENTAL"}
              onClick={() => setSelectedTab("DEPARTMENTAL")}
            >
              DEPARTMENTAL
            </TabActive>
            <Tab
              isActive={selectedTab === "NON-DEPARTMENTAL"}
              onClick={() => setSelectedTab("NON-DEPARTMENTAL")}
            >
              NON-DEPARTMENTAL
            </Tab>
          </TabContainer>
          <TableContent>
            {selectedTab === "DEPARTMENTAL" && (
              <ColumnContainer>
                <Column>
                  <ClubRow
                    clubName="Astronomy Club"
                    description="We are a group of students at UBC Vancouver who share a passion for astronomy. We welcome students of any discipline who want to meet others with like-minded interests. Let’s explore the universe together! We run various events, including: dark-sky observations, social activities, lecture series, and outreach initiatives. The UBC Astronomy Club is committed to being an open and inclusive club for everyone regardless of race, religion, gender identity, sexual orientation, age, or disability."
                    links={[
                      {
                        href: "https://www.ubcastronomyclub.com/",
                        text: "Website",
                      },
                      {
                        href: "mailto:ubcastronomyclub@gmail.com",
                        text: "ubcastronomyclub@gmail.com",
                      },
                      {
                        href: "https://www.instagram.com/ubcastronomyclub/",
                        text: "Instagram",
                      },
                      {
                        href: "https://www.facebook.com/UBCAstronomyClub/",
                        text: "Facebook",
                      },
                    ]}
                  />
                  <ClubRow
                    logoSrc="path_to_biochem_club_logo"
                    clubName="Biochemistry Student Association"
                    description="The BSA’s mission is to form an inclusive, fun, and supportive environment to help support undergraduate Biochemistry students at UBC. Planning socials, selling hoodies, sharing study tips, and letting students know about career and research opportunities are just a few of the things the BSA does! With the help of the Biochemistry faculty, BSA plans to strengthen the Biochemistry community at UBC!"
                    links={[]}
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Biological Sciences Society (BIOSOC)"
                    description="The UBC Biological Sciences Society (BIOSOC) is a student run organization that has been continuously growing for decades. What started as a small group of students who wanted to hold social events has become one of the largest science societies on campus. We always strive to provide resources to students in all years of their undergraduate studies that will further their education and career paths, while holding social events that will allow both students and staff a chance to meet outside a classroom setting."
                    links={[
                      {
                        href: "https://www.zoology.ubc.ca/biosoc/blog/",
                        text: "Website",
                      },
                      {
                        href: "mailto:bio.soc@ubc.ca",
                        text: "bio.soc@ubc.ca",
                      },
                      {
                        href: "https://www.instagram.com/ubc.biosoc",
                        text: "Instagram",
                      },
                    ]}
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Biotechnology Club"
                    description="The UBC Biotechnology Club supports the students of the Honours in Biotechnology program by hosting events that are catered towards networking, resume writing, and community engagement. As a team, we also collaborate with other clubs in order to bring our events to a larger audience."
                    links={[]}
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Computer Science Students Society (CSSS)"
                    description="The UBC Computer Science Student Society represents all Computer Science students. We work with the CS Department, industry partners, and affiliated clubs to deliver social events, networking opportunities, community spaces, and academic resources."
                    links={[
                      {
                        href: "https://ubccsss.org/",
                        text: "Website",
                      },
                      {
                        href: "mailto:president@ubccsss.org",
                        text: "president@ubccsss.org",
                      },
                      {
                        href: "https://www.instagram.com/ubc_csss",
                        text: "Instagram",
                      },
                      {
                        href: "https://www.instagram.com/ubc_csss",
                        text: "Facebook",
                      },
                      {
                        href: "https://discord.gg/xF3WbYDubF",
                        text: "Discord",
                      },
                      {
                        href: "https://linktr.ee/ubc_csss%22",
                        text: "Linktree",
                      },
                    ]}
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Data Science Club"
                    description="The aim of the data science club is to provide students with an opportunity to learn about data science by working together to solve difficult problems with data. We primarily focus on building team based projects, with a mentorship structure involving leads helping general members contribute to the projects and carry out development. Our recent projects include detection of deepfakes, human pose estimation in videos, and developing a reinforcement learning based agents to compete in agent-based competitions such as BattleSnake. In addition to projects, members of the club form small teams and enter data science competitions such as Google’s Landmark Retrieval Competition. To further promote learning, we host technical workshops for members and inform them about upcoming data science conferences and meetups. We also host panels and Q&A sessions with industry professionals. We aim to improve the educational lives of students and prepare them for positions in academia or in industry by providing avenues of learning such as these."
                    links={[
                      {
                        href: "https://www.ubcdsci.club/home",
                        text: "Website",
                      },

                      {
                        href: "https://www.instagram.com/ubcdatascienceclub",
                        text: "Instagram",
                      },
                      {
                        href: "https://www.facebook.com/ubcdatascience",
                        text: "Facebook",
                      },
                      {
                        href: "https://discord.com/invite/4AycB34acK",
                        text: "Discord",
                      },
                    ]}
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Geography Students' Association"
                    description="Hello! We are the Geography Students’ Association and we run events that range from lunches with the Department Head and professors to guest presentations with professionals working in sustainability to our infamous bzzr gardens & trivia nights. We also publish the undergraduate journal “Trail Six”, run the GeoGarden, and celebrate the end of the year with a bang with our annual Geogala"
                    links={[]}
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="International Genetically Engineered Machines (iGEM)"
                    description="The International Genetically Engineered Machines (iGEM) Competition is an annual research experience in which teams dedicate themselves to the goal of producing organisms with new or unusual properties to tackle modern problems and evolve the field of synthetic biology. This experience leads students to think creatively about modern biology while gaining a wide range of technical skills. Outside of the lab, teams are also expected to assess the ethical and societal implications of their technology, network with industry professionals and engage in outreach activities with the local community. Other components of the project include hardware, software, finance and design. UBC has been participating in iGEM since 2009 and has consistently received gold medal awards for their projects."
                    links={[
                      {
                        href: "mailto:ubcigem@gmail.com",
                        text: "ubcigem@gmail.com",
                      },
                      {
                        href: "https://www.ubcdsci.club/home",
                        text: "Website",
                      },
                      {
                        href: "https://www.instagram.com/ubcigem",
                        text: "Instagram",
                      },
                      {
                        href: "https://twitter.com/ubcigem",
                        text: "Twitter",
                      },
                      {
                        href: "https://ca.linkedin.com/company/ubcigem",
                        text: "LinkedIn",
                      },
                    ]}
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Psychology Students’ Association (PSA)"
                    description="The Psychology Students’ Association (PSA) of UBC is a student-run organization that seeks to enhance the personal, professional, and academic success of Arts and Science undergraduate students interested in psychology. With the support of the Psychology Department, the PSA provides its 300+ members with many events and services, such as our CV workshop, Hanging Out a Prof, Psychology Undergraduate Research Conference, and Year End Gala."
                    links={[
                      {
                        href: "https://psa.psych.ubc.ca/",
                        text: "Website",
                      },
                      {
                        href: "mailto:psa.president@psych.ubc.ca",
                        text: "psa.president@psych.ubc.ca",
                      },
                      {
                        href: "https://www.instagram.com/ubc.psa",
                        text: "Instagram",
                      },
                      {
                        href: "https://www.facebook.com/psa.of.ubc/",
                        text: "Facebook",
                      },
                      {
                        href: "https://twitter.com/PSA_UBC",
                        text: "Twitter",
                      },
                    ]}
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Physics Society (Physsoc)"
                    description="The UBC Physics Society (Physsoc) is social and academic society primarily serving students majoring in Physics and Astronomy programs since its inception in 1930. It’s the place to be for anyone who studies physics, enjoys physics or wants a cool place to spend their time with great company! We offer review sessions and exam packages for first and second-year physics courses, as well as hold a number of social events over the year, such as Wine and Cheese, BBQs, Sock Wars and Trivia. Come join us in our lounge in Hennings which has quiet study and group spaces (with blackboards), a fridge, microwave, couches and a foosball table!"
                    links={[
                      {
                        href: "https://physsoc.phas.ubc.ca/",
                        text: "Website",
                      },
                      {
                        href: "mailto:physsoc@phas.ubc.ca",
                        text: "physsoc@phas.ubc.ca",
                      },
                      {
                        href: "https://www.instagram.com/ubcphysicssociety",
                        text: "Instagram",
                      },
                      {
                        href: "https://www.facebook.com/ubcphyssoc/",
                        text: "Facebook",
                      },
                    ]}
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Science One Survivors "
                    description="Science One Survivors (SOS) is a club run by Science One alumni to help the current year of Science One students tackle the obstacles they may face in the challenging program. Our goal to make sure Science One students have a smooth transition from high school to university and to make their first year as enjoyable as possible."
                    links={[
                      {
                        href: "mailto:sosurvivors.ubc@gmail.com",
                        text: "sosurvivors.ubc@gmail.com",
                      },
                      {
                        href: "https://www.instagram.com/sosurvivors.ubc",
                        text: "Instagram",
                      },
                    ]}
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Undergraduate Mathematics Society (UMS)"
                    description="The UBC Undergraduate Mathematics Society (UMS) is one of the oldest student clubs at the University of British Columbia. Throughout the academic year, the UMS runs social events, academic seminars, and practice sessions for competition-level mathematics with the goal of supporting both the academic interests and the general well-being of the UBC mathematics student body. The purpose of the UMS is to ensure that students interested in mathematics at UBC have a place to connect with other like-minded individuals, engage intellectually, and develop a profound sense of camaraderie and community. "
                    links={[
                      {
                        href: "https://ums-ubc.com/",
                        text: "Website",
                      },
                      {
                        href: "mailto:ums.ubc@gmail.com",
                        text: "ums.ubc@gmail.com",
                      },
                      {
                        href: "https://www.instagram.com/ums.ubc",
                        text: "Instagram",
                      },
                      {
                        href: "https://discord.com/invite/J23DQyqZ6X",
                        text: "Discord",
                      },
                      {
                        href: "http://eepurl.com/h-ACrP",
                        text: "Mailchimp",
                      },
                    ]}
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Women in Data Science (WiDS)"
                    description="Women in Data Science @UBC (WiDS) is dedicated to represent talented women in data science, create and expand a network of women data scientists, inspire them to connect with others in the field, and propel them towards reaching their career goals as a data scientist. By providing mentorship, networking, as well as skill development opportunities (i.e. data science workshops, hackathons), our members can develop their data science skills and expand their connections."
                    links={[
                      {
                        href: "mailto:widsubc@gmail.com",
                        text: "widsubc@gmail.com",
                      },
                      {
                        href: "https://www.instagram.com/widsubc/",
                        text: "Instagram",
                      },
                      {
                        href: "https://ca.linkedin.com/company/widsubc/",
                        text: "LinkedIn",
                      },
                    ]}
                  />
                </Column>
                <Column>
                  <ClubRow
                    logoSrc="path_to_astronomy_club_logo"
                    clubName="Bachelor of Computer Science Students Association (BCSSA)"
                    description="The Bachelor of Computer Science Students Association (BCSSA) is a student club for students completing their second degree in the Bachelor of Computer Science (BCS) Program at UBC. The BCSSA provides its members with opportunities to accelerate their career transition and enhance their employability. Our goal is to empower our members with technical proficiency and strong interpersonal skills. Our mission is to provide as much support as possible through a challenging career transition. "
                    links={[
                      {
                        href: "mailto:ubc.bcsclub@gmail.com",
                        text: "ubc.bcsclub@gmail.com",
                      },
                    ]}
                  />
                  <ClubRow
                    logoSrc="path_to_biochem_club_logo"
                    clubName="Biochemistry Pharmacology Physiology Club (BPP)"
                    description="BPP is a student led club at UBC and is committed to informing students about the disciplines of Biochemistry, Pharmacology and Physiology, all of which are the fundamental basis of medicine. Throughout the school year, BPP hosts different events and mentorship programs to aid with informing current and prospective students in these majors. These events often focus on educating students about co-op and research opportunities, academics, as well as continuing to professional schools such as medicine, dentistry etc. Finally, BPP also collaborates with other clubs and the faculty of science to help host multiple events such as Three Minute Thesis and Life Science Research Night. Find more information in bppubc.com"
                    links={[]}
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Biophysics Student Society (BPSS)"
                    description="No blurb yet!"
                    links={[]}
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Cognitive Systems Society (CSS)"
                    description="The Cognitive Systems Society (CSS) is a student-run organization supporting students in the Cognitive Systems program, and those with an interest in COGS-related fields such as neuroscience, philosophy, linguistics, artificial intelligence, human-computer interfaces and robotics. Our goal at the CSS is to connect, support, and celebrate UBC’s COGS community through various social, academic and industry events. "
                    links={[
                      {
                        href: "mailto:cogsubc@gmail.com",
                        text: "cogsubc@gmail.com",
                      },
                      {
                        href: "https://www.instagram.com/cogsubc/",
                        text: "Instagram",
                      },
                    ]}
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Combined Major in Science Student Association (CMSSA)"
                    description="CMSSA is a student-led organization that aims to bring together students within the Combined Major in Science department through social, academic, and research events. Our goal is to enrich the undergraduate experience of CMS students by creating a community that takes pride in their program, while also providing an avenue for students to engage with each other over the course of their studies."
                    links={[
                      {
                        href: "mailto:cmssa.ubc@gmail.com",
                        text: "cmssa.ubc@gmail.com",
                      },
                      {
                        href: "https://www.instagram.com/ubc.cmssa",
                        text: "Instagram",
                      },
                      {
                        href: "https://www.facebook.com/ubccmssa/",
                        text: "Facebook",
                      },
                    ]}
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Environmental Science Students Association (ESSA)"
                    description="The Environmental Sciences Students’ Association (ESSA) is a student club representing the Environmental Sciences program at UBC. We are dedicated to bringing together people with a passion for the environment. We organize social events for students to get to know each other, host alumni nights and career conferences with professionals, organize study sessions for the program’s core courses, and take part in events promoting public awareness of environmental issues."
                    links={[]}
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Integrated Sciences Student Association (ISSA)"
                    description="UBC ISSA represents the community of students and alumni of the Integrated Sciences specialization in the Faculty of Science. We are dedicated to bringing Integrated Sciences students a rewarding social experience as well as providing available resources to any prospective Integrated Science students. Throughout the year we host events to help ISCI students academically, professionally and socially, creating connections within our diverse community!"
                    links={[
                      {
                        href: "http://ubc-issa.weebly.com/",
                        text: "Website",
                      },
                      {
                        href: "mailto:president.ubcissa@gmail.com",
                        text: "president.ubcissa@gmail.com",
                      },
                      {
                        href: "https://www.instagram.com/ubcissa",
                        text: "Instagram",
                      },
                    ]}
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Microbiology and Immunology Students Association (MISA)"
                    description="The UBC Microbiology and Immunology Students’ Association (MISA) is an active student-led organization that represents undergraduate students within the MBIM and BIOT programs. We organize social, academic and research events that provide mentorship and networking opportunities for students. By serving as a liaison, we advocate for the interests of students and strive to close the gap between students and faculty, creating an inclusive environment that fosters academic growth and personal development. MISA strives to build and maintain a fun and welcoming culture for all students in order to create a positive and memorable undergraduate experience!"
                    links={[
                      {
                        href: "mailto:ubcmisa.contact@gmail.com",
                        text: "ubcmisa.contact@gmail.com",
                      },
                      {
                        href: "https://www.instagram.com/ubc.misa",
                        text: "Instagram",
                      },
                      {
                        href: "https://www.facebook.com/ubcmisa",
                        text: "Facebook",
                      },
                    ]}
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Pharmacology and CAPS Student Association"
                    description="We are a passionate group of students dedicated to supporting students who are in, wanting to get in, or just interested in learning about pharmacology and CAPS through both academic and social resources. Throughout the year, we will be hosting social, mentorship, research, and speaker events. Our diverse team consists of students from all years, so please reach out if you have any questions and we will be happy to help you answer them."
                    links={[]}
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Science Co-op Students Association (SCOOPS)"
                    description="No blurb yet!"
                    links={[]}
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Undergraduate Chemistry Society (UCS)"
                    description="The Undergraduate Chemistry Society is a student-run organization that aims to build community within the UBC Chemistry undergraduates and promote campus-wide chemistry engagement. We strive to enhance the undergraduate experience for chemistry students by hosting various social, academic, and outreach events such as the Chemistry Forum, the Chemistry Undergraduate Research Conference, Final Exam Package Sales, Locker Rentals, Professional Communications Workshops, Professor Meet & Greets, and 2-Bucks-a-Beaker."
                    links={[
                      {
                        href: "mailto:ucspresident@gmail.com",
                        text: "ucspresident@gmail.com",
                      },
                      {
                        href: "https://www.instagram.com/ubc_ucs",
                        text: "Instagram",
                      },
                    ]}
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Undergraduate Statistic Society (USS)"
                    description="The Undergraduate Statistics Society (USS) is a student-led group with a mission to actively encourage the study and application of statistics within our campus and community. Our primary objective is to enrich the academic journey of undergraduate students majoring in statistics and data science by organizing a diverse range of events. These include informative DSCI 100 Review sessions, engaging career nights, and enjoyable social gatherings such as games nights and themed events like Halloween night. Our aim is to create a supportive and vibrant environment that enhances the overall undergraduate experience for students interested in statistics and data science."
                    links={[
                      {
                        href: "mailto:team.ubcuss@gmail.com",
                        text: "ucspresident@gmail.com",
                      },
                      {
                        href: "https://www.instagram.com/ubc.uss",
                        text: "Instagram",
                      },
                    ]}
                  />
                </Column>
              </ColumnContainer>
            )}
            {selectedTab === "NON-DEPARTMENTAL" && (
              <ColumnContainer>
                <Column>
                  <ClubRow
                    logoSrc="path_to_ams_autism"
                    clubName="AMS Autism Associates Club"
                    description="Welcome to the Autism Associates Club! Here, we gather and pursue our learning about the field of autism spectrum disorder, along with the current research and events related to it! We learn through seminars and presentations enacted by each member (yes, you included!) but also medical students with current research topics in regards to ASD! In junction with organizations such as AutismBC and VASS, we plan events for the ASD community, so come join now!"
                    links={[]}
                  />
                  <ClubRow
                    logoSrc="path_to_biochem_club_logo"
                    clubName="AMS Medical Genetics"
                    description="Welcome to the AMS Medical Genetic Club! We’re a community dedicated to staying up to date with the latest advancements in medical genetics. Our objectives include discussing current topics, presenting cutting-edge research, and fostering ethical awareness. Previous events include Science Trivia Night for Charity, National Genetics Symposium, and Genetics Career Panel. Join us as we explore the exciting world of medical genetics together!"
                    links={[
                      {
                        href: "mailto:ams.medgen.ubc@gmail.com",
                        text: "ams.medgen.ubc@gmail.com",
                      },
                      {
                        href: "https://www.instagram.com/ubcmedgen",
                        text: "Instagram",
                      },
                    ]}
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="AMS UBC Synapse"
                    description="AMS UBC Synapse is a club that targets neurodegenerative disease through three lenses: promoting awareness, fundraising for related research and organizations, and connecting students with the neurodegenerative disease community. Recent initiatives include hosting arts and crafts workshops at senior homes, film screening to raise awareness on dementia, and creating short video interviews that feature the individual experience of living with a neurodegenerative disease."
                    links={[
                      {
                        href: "mailto:ubcsynapse@gmail.com",
                        text: "ams.medgen.ubc@gmail.com",
                      },
                      {
                        href: "https://www.instagram.com/ubcmedgen",
                        text: "Instagram",
                      },
                      {
                        href: "https://www.facebook.com/ubcsynapse/",
                        text: "Instagram",
                      },
                    ]}
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="AMS Vaccine Literacy Club"
                    description="The UBC Vaccine Literacy Club (UBC VLC) disseminates accurate age-appropriate and culturally relevant information on vaccinations to communities in British Columbia, building capacity to overcome vaccine hesitancy and promote vaccine acceptance. We share information on the safety and effectiveness of vaccines to communities and groups through social media, infographics, webinars, panel events, workshops, and we are in the process of publishing a children’s book on the science behind vaccinations. We produce engaging materials to encourage vaccine confidence, the adoption of public health measures, and evidence-based decision-making."
                    links={[
                      {
                        href: "mailto:ubcvaccineliteracy@gmail.com",
                        text: "ubcvaccineliteracy@gmail.com",
                      },
                      {
                        href: "https://www.instagram.com/ubcvaccineliteracy",
                        text: "Instagram",
                      },
                    ]}
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Canadian Liver Foundation (CLF)"
                    description="No Blurb Yet!"
                    links={[]}
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Friends of Medecins Sans Frontieres (FoMSF) UBC"
                    description="FoMSF is an official student support organization for MSF (Doctors Without Borders) and operates independently of MSF. MSF is an international medical humanitarian non-profit organization that provides free healthcare in conflict zones and in countries affected by endemic diseases or natural disasters. FoMSF supports MSF by raising funds to contribute to MSF’s programs and administration and by raising awareness of the important work that MSF does around the world through our events on UBC campus."
                    links={[
                      {
                        href: "mailto:fomsfubc@gmail.com",
                        text: "fomsfubc@gmail.com",
                      },
                      {
                        href: "https://www.instagram.com/friendsofmsfubc",
                        text: "Instagram",
                      },
                    ]}
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Humanities in Healthcare (HIH)"
                    description="UBC Humanities in Healthcare (HIH) is an interdisciplinary undergraduate UBC club with interests in health care at large. Through an exploration of the humanities and social sciences, we hope to educate future healthcare professionals and foster discussion on patient-centred care. UBC HIH hopes to spark discussion on the often overlooked aspects of medicine and bring together a wide variety of backgrounds and experiences all in pursuit of healthcare as a profession."
                    links={[
                      { href: "https://www.ubchih.com/", text: "Website" },
                      {
                        href: "mailto:ubc.hih@gmail.com",
                        text: "ubc.hih@gmail.com",
                      },
                      {
                        href: "https://www.instagram.com/friendsofmsfubc",
                        text: "Instagram",
                      },
                      {
                        href: "https://www.facebook.com/HumanitiesInHealthcare",
                        text: "Facebook",
                      },
                    ]}
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Neuroscience Club"
                    description="The UBC Neuroscience Club (UNC) is a multidisciplinary group of undergraduate students striving to better understand the mysteries of the brain through research, academic and career development, and community. From basic laboratory techniques to critical analyses of data, we offer our members the chance to learn and be a part of the process behind the scientific research being done in the field through activities such as journal club, workshops, and mentorship. We create a social environment for students where they can discuss neuroscience-related topics and integrate knowledge from an array of disciplines, and simply have fun with people who share the same passion through socials such as a neuroscience formal. Lastly, we emphasize projects aimed at benefiting professional development through academic and career workshops."
                    links={[
                      {
                        href: "https://ubcneuroscienceclub.wixsite.com/uncweb",
                        text: "Website",
                      },
                      {
                        href: "mailto:ubcneuroscienceclub@gmail.com",
                        text: "ubcneuroscienceclub@gmail.com",
                      },
                      {
                        href: "https://www.instagram.com/ubcneuroscienceclub",
                        text: "Instagram",
                      },
                      {
                        href: "https://www.facebook.com/UBCneuroscienceclub/",
                        text: "Facebook",
                      },
                    ]}
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Operation Smile"
                    description="Every three minutes, a child is born with a cleft lip and/or cleft palate. But you can make a difference. UBC Operation Smile is dedicated to educating the community about the importance of access to safe surgery and the basic right to healthcare while increasing awareness of the prevalence of cleft lip and cleft palate among children in lower-to-middle income countries. In partnership with the global non-profit organization, Operation Smile Canada, we organize service projects such as making smile dolls to accompany children who will be undergoing cleft lip and cleft palate surgery and hosting speaker symposiums for the community to participate and learn more about cleft palate and safe surgery while also interacting with medical and dental professionals. Join Us in Changing Lives One Smile at a Time!"
                    links={[
                      {
                        href: "mailto:ubcoperationsmileclub@gmail.com",
                        text: "ubcoperationsmileclub@gmail.com",
                      },
                      {
                        href: "https://www.instagram.com/ubcopsmile",
                        text: "Instagram",
                      },
                    ]}
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Pre-Dental Club"
                    description="The UBC Pre-Dental Club hosts weekly meetings from September–April. We help provide guidance to students pursuing the dental field and provide a pre-dental network that students can rely on. Our meetings include presentations from a variety of guest speakers and information on several North American, Australian, and European dental schools. We also provide information on both the Canadian and American Dental Aptitude Test (DAT), as well as practice questions to illustrate the format of the exam. If you miss a meeting, do not fret! Our members get weekly e-mails on meeting slides and past recorded meetings, to make sure they are all caught up with our newest info! Our club strives to fortify and expand our connections with our local community by opening up volunteer and leadership positions for our members and collaborating with other UBC Clubs or local organizations. Be sure to always check our Instagram and Facebook for updates!."
                    links={[
                      {
                        href: "https://ubcpredent.wixsite.com/home",
                        text: "Website",
                      },
                      {
                        href: "mailto:ubcpredent@gmail.com",
                        text: "ubcpredent@gmail.com",
                      },
                      {
                        href: "https://www.instagram.com/ubcpredent",
                        text: "Instagram",
                      },
                      {
                        href: "https://www.facebook.com/groups/5799807069/",
                        text: "Facebook",
                      },
                    ]}
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Pre-Optometry Club"
                    description="We are the group of people who LOVE eyes! Since 1994 we have been connecting students to Optometry schools across North America through info sessions"
                    links={[]}
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="STEM Fellowship"
                    description="STEM Fellowship is a student-run, national organization that provides a platform for students interested in STEM fields to connect with one another and with professionals, engage in research and improve skills in scholarly writing. We seek to enable students to learn collaboratively, express their passion and love for science, and expand the scope of human knowledge through scientific, multidisciplinary inquiry."
                    links={[
                      {
                        href: "mailto:ubc@stemfellowship.org",
                        text: "ubc@stemfellowship.org",
                      },
                      {
                        href: "https://www.instagram.com/ubcstemfellowship",
                        text: "Instagram",
                      },
                    ]}
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Undergraduate Research Opportunities (URO)"
                    description="We are a student-led club dedicated to connecting undergraduate students with multidisciplinary research opportunities. We offer programs, events, and research-related services for students of all faculties and experience levels. Some of our most popular events and programs include the Research EXperience mentorship program, Life Sciences Research Night, and Canadian Journal of Undergraduate Research. Whether it’s getting your foot in the door, finding a summer lab job, or getting a manuscript published, we’re here to help!"
                    links={[]}
                  />
                  <ClubRow
                    logoSrc="path_to_"
                    clubName="Women in Computer Science at UBC"
                    description="Women in Computer Science (WiCS) aims to build a strong community of women in computer science field at UBC. We provide opportunities for building lasting connections with fellow women in tech, industry professionals, and offer support to one another during our time at UBC."
                    links={[]}
                  />
                </Column>
                <Column>
                  <ClubRow
                    logoSrc="path_to_girls_in_steam_logo"
                    clubName="AMS Girls in STEAM"
                    description="Girls in STEAM supports women and gender-diverse people in STEAM fields through education, networking, and professional development."
                    links={[
                      { href: "http://girlsinsteam.org/", text: "Website" },
                      {
                        href: "mailto:ubc@girlsinsteam.org",
                        text: "ubc@girlsinsteam.org",
                      },
                      {
                        href: "https://www.instagram.com/gis.ubc/",
                        text: "Instagram",
                      },
                    ]}
                  />
                  <ClubRow
                    logoSrc="path_to_scia_logo"
                    clubName="AMS Spinal Cord Injury Association"
                    description="AMS SCIA connects students with the spinal cord injury community through education, research, and service opportunities."
                    links={[]}
                  />
                  <ClubRow
                    logoSrc="path_to_unbounded_logo"
                    clubName="AMS unboundED"
                    description="AMS unboundED provides science and arts workshops to elementary schools to spark curiosity and reduce uncertainty in career paths."
                    links={[]}
                  />
                  <ClubRow
                    logoSrc="path_to_blood_for_life_logo"
                    clubName="Blood for Life"
                    description="Blood for Life aims to diversify and expand Canada's blood and stem cell donor registry, guiding students through the donation process."
                    links={[
                      {
                        href: "mailto:info.ubcbloodforlife@gmail.com",
                        text: "info.ubcbloodforlife@gmail.com",
                      },
                      {
                        href: "https://www.instagram.com/ubcbloodforlife",
                        text: "Instagram",
                      },
                      {
                        href: "https://www.facebook.com/ubcbloodclub/",
                        text: "Facebook",
                      },
                      {
                        href: "https://www.tiktok.com/@ubcbloodforlife",
                        text: "TikTok",
                      },
                    ]}
                  />
                  <ClubRow
                    logoSrc="path_to_cancer_association_logo"
                    clubName="Cancer Association"
                    description="The Cancer Association promotes cancer awareness, organizes events, and supports those affected by cancer at UBC."
                    links={[]}
                  />
                  <ClubRow
                    logoSrc="path_to_hsf_logo"
                    clubName="Heart and Stroke Foundation Club (HSF)"
                    description="HSF promotes cardiovascular health and wellness through volunteering, fundraising, and awareness campaigns at UBC."
                    links={[]}
                  />
                  <ClubRow
                    logoSrc="path_to_multiple_sclerosis_club_logo"
                    clubName="Multiple Sclerosis Club"
                    description="The UBC Multiple Sclerosis Club raises awareness of MS through volunteering, social, and fundraising opportunities."
                    links={[]}
                  />
                  <ClubRow
                    logoSrc="path_to_nwplus_logo"
                    clubName="nwPlus"
                    description="nwPlus organizes UBC's largest hackathons, fostering innovation, inclusivity, and learning in the tech community."
                    links={[
                      { href: "https://nwplus.io/", text: "Website" },
                      { href: "mailto:info@nwplus.io", text: "info@nwplus.io" },
                      {
                        href: "https://www.instagram.com/nwplusubc",
                        text: "Instagram",
                      },
                      {
                        href: "https://www.facebook.com/nwplusubc/",
                        text: "Facebook",
                      },
                      {
                        href: "https://linktr.ee/nwplusubc",
                        text: "Linktree",
                      },
                      {
                        href: "https://medium.com/nwplusubc",
                        text: "Medium",
                      },
                      {
                        href: "https://ca.linkedin.com/company/nwplus",
                        text: "LinkedIn",
                      },
                      {
                        href: "https://twitter.com/nwplusubc",
                        text: "Twitter",
                      },
                      {
                        href: "https://www.tiktok.com/@nwplusubc",
                        text: "TikTok",
                      },
                      {
                        href: "https://www.youtube.com/c/nwplusubc",
                        text: "Youtube",
                      },
                    ]}
                  />
                  <ClubRow
                    logoSrc="path_to_paths_logo"
                    clubName="PATHS"
                    description="UBC PATHS supports the Parkinson’s and Alzheimer’s community through philanthropy, outreach, and educational initiatives."
                    links={[
                      {
                        href: "mailto:ubcprojectpaths@gmail.com",
                        text: "ubcprojectpaths@gmail.com",
                      },
                      {
                        href: "https://www.instagram.com/ubc_paths",
                        text: "Instagram",
                      },
                      {
                        href: "https://www.facebook.com/ubcpaths/",
                        text: "Facebook",
                      },
                    ]}
                  />
                  <ClubRow
                    logoSrc="path_to_pre_medical_society_logo"
                    clubName="Pre-Medical Society"
                    description="The UBC Pre-Medical Society supports students interested in medical school through networking, information sessions, and involvement opportunities."
                    links={[]}
                  />
                  <ClubRow
                    logoSrc="path_to_quantum_club_logo"
                    clubName="Quantum Club"
                    description="The UBC Quantum Club introduces students to quantum computing through seminars, workshops, and mentorship opportunities."
                    links={[
                      {
                        href: "https://discord.gg/m8Z2Jwss9m",
                        text: "Discord",
                      },
                      {
                        href: "mailto:ubcquantum@gmail.com",
                        text: "ubcquantum@gmail.com",
                      },
                      {
                        href: "https://www.instagram.com/ubcquantum/",
                        text: "Instagram",
                      },
                      {
                        href: "https://www.facebook.com/ubcquantumclub",
                        text: "https://www.facebook.com/ubcquantum/",
                      },
                    ]}
                  />
                  <ClubRow
                    logoSrc="path_to_twecs_logo"
                    clubName="Third World Eye Care Society"
                    description="TWECS is a volunteer organization that collects and distributes eyeglasses to individuals in developing countries."
                    links={[
                      {
                        href: "mailto:ubctwecs@gmail.com",
                        text: "ubctwecs@gmail.com",
                      },
                      {
                        href: "https://www.instagram.com/ubctwecs",
                        text: "Instagram",
                      },
                    ]}
                  />
                  <ClubRow
                    logoSrc="path_to_women_in_science_logo"
                    clubName="Women in Science"
                    description="The UBC Women in Science Club provides mentorship, networking, and professional development for female undergraduates in science fields."
                    links={[]}
                  />
                </Column>
              </ColumnContainer>
            )}
          </TableContent>
        </ClubsTable>
      </Content>
      <NewFooter />
    </Background>
  );
}

// Component for Each Club Row
function ClubRow({ logoSrc, clubName, description, links }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Row>
        {/* <Logo src={logoSrc} alt={clubName} /> */}
        <ClubName>{clubName}</ClubName>
        <Dropdown onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "▲" : "▼"}
        </Dropdown>
      </Row>
      {isOpen && (
        <Description>
          <p>{description}</p>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </Description>
      )}
    </>
  );
}

const ColumnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  // height: 100vh; /* Ensure there's enough height to center items vertically */
  // border: 1px solid #000; /* For visual debugging */
`;
const Column = styled.div`
  flex: 1;
  padding: 8px;
  border-left: 1px solid #ccc;
  &:first-child {
    border-left: none;
  }
`;

// Styled Components for ClubsTable
const ClubsTable = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 20px auto;
  border: 1px solid #ccc;
  background-color: #f0f4ff;
  border-radius: 8px;
  overflow: hidden;
`;

const TabContainer = styled.div`
  display: flex;
  background-color: #f0f4ff;
  border-bottom: 2px solid #ccc;
`;

const Tab = styled.div`
  flex: 1;
  padding: 12px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  background-color: ${(props) => (props.isActive ? "#2c3e50" : "#ffffff")};
  color: ${(props) => (props.isActive ? "#ffffff" : "#333")};
`;

const TabActive = styled(Tab)``;

const TableContent = styled.div`
  display: flex;
  padding: 16px;
  background-color: #ffffff;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  flex-shrink: 0;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 16px;
`;

const ClubName = styled.span`
  flex: 1;
  font-weight: bold;
  color: #333;
`;

const Dropdown = styled.div`
  cursor: pointer;
  font-size: 16px;
  color: #333;
`;

const Description = styled.div`
  padding: 10px 16px;
  background-color: #f0f4ff;
  border-radius: 4px;
  margin-bottom: 16px;
  font-size: 14px;
  color: #333;
  border: 1px solid #ccc;
`;

const Background = styled.div`
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
`;

const Content = styled.div`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  padding: 150px 10px 20px;
  width: 100%;
  max-width: 1100px;
  line-height: 2.6;
  overflow-y: auto; /* Allow scrolling */
  p {
    line-height: 1.6; /* Adjust this value as needed */
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 40px; /* Adjust this value as needed */
  }
`;

const SpacingDiv = styled.div`
  margin-bottom: 55px;
`;
