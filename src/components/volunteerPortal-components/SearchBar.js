import React, { useState } from "react";
import styled from "styled-components";

const VolunteerJobsReverse = [
  {
    "id": 1,
    "title": "CAGIS Volunteer",
    "company": "Canadian Association for Girls In Science (CAGIS)",
    "location": "Vancouver",
    "type": "In-Person/Virtual",
    "logo": "https://girlsinscience.ca/sites/girlsinscience.ca/wp-content/uploads/elementor/thumbs/cropped-CAGIS_Logo-qpi7qcww0sd82lulhj34l896s3zze2kv464ehxpv82.png ",
    "description": "CAGIS Volunteers (18+) are science, technology, trades, engineering, and mathematics (STEM) professionals, parents, teachers, apprentices, post-secondary students, and other interested members of the community of all genders. They help in a number of ways, both at in-person events or through our Virtual program.",
    "website": "https://girlsinscience.ca/get-involved/#volunteer",
    "industry": "Non-profit, Education"
  },
  {
    "id": 2,
    "title": "Canadian Blood Services Volunteer",
    "company": "Canadian Blood Services",
    "location": "Vancouver",
    "type": "In-Person/Virtual",
    "logo": "https://www.blood.ca/themes/custom/cbs_bootstrap_sass/CBS_Logo_descriptors_CMYK.svg",
    "description": "Canadian Blood Services offers opportunities to volunteer in our refreshment areas, watching over the health and safety of our donors, and providing them with snacks. We have locations throughout the lower mainland, including on campus.\n\nWe have also made a return to in-community events, where we are looing for people to join the STEM cell network, and help promote all things Canadian Blood Services at events in your local community!\n\nVisit www.blood.ca under ways to donate – become a volunteer to sign up!",
    "website": "https://www.blood.ca/en/ways-donate/volunteer",
    "industry": "Healthcare"
  },
  {
    "id": 3,
    "title": "Canuck Place Volunteer",
    "company": "Canuck Place Children's Hospice",
    "location": "Vancouver, Abbotsford",
    "type": "In-Person",
    "logo": "https://www.canuckplace.org/wp-content/uploads/2022/07/logo.svg",
    "description": "Canuck Place accepts applications from prospective volunteers on an ongoing basis, and recruitment cycles are held on a quarterly basis (Winter, Spring, Summer, Fall). Volunteers are required to commit to a minimum of a biweekly shift for 1 year of service.",
    "website": "https://www.canuckplace.org/how-to-give/volunteer/",
    "industry": "Non-profit"
  },
  {
    "id": 4,
    "title": "City Park Stewards Volunteer",
    "company": "City of North Vancouver",
    "location": "North Vancouver",
    "type": "In-Person",
    "logo": "https://www.cnv.org/-/media/City-of-North-Vancouver/Images/Icons-and-Logos/City-Park-Stewards-logo.png",
    "description": "The Park Stewardship Program started in 2001 and aims to restore the City’s parks, natural areas, and biodiversity. This program helps rejuvenate degraded natural areas that are affected by invasive plants, eroding stream banks, and intensive recreational use. Stewardship is a satisfying and rewarding way to experience the natural habitat while improving the ecological health of these areas.\n\nTo get involved, join one of public stewardship and restoration activities happening throughout the City, including invasive removal events, native tree and shrub planting events, and educational park workshops.",
    "website": "https://www.cnv.org/community-environment/help-environment/city-park-stewards",
    "industry": "Environment"
  },
  {
    "id": 5,
    "title": "CityReach Care Society Volunteer",
    "company": "CityReach Care Society",
    "location": "Vancouver",
    "type": "In-Person",
    "logo": "https://cdn.prod.website-files.com/65566c7e615c838424757101/655672704b3f77e0b0ef0774_CR.svg",
    "description": "The CityReach Care Society requires hundreds of volunteers to run the Food for Families Program. Volunteers help to prepare fresh, healthy, and wholesome food hampers that include fruits, vegetables, dairy, proteins, and grains. Training and support are provided to assist volunteers in being successful in their role. There are four different shifts available each week: Tuesdays – 9:30am-1:30pm & 2:00pm-6:00pm, and Thursdays – 8:30am-12:30pm & 2:00pm-6:00pm.",
    "website": "https://www.cityreach.org/volunteer",
    "industry": "Non-profit"
  },
  {
    "id": 6,
    "title": "Field Trips Volunteer",
    "company": "Fresh Roots Urban Farm Society",
    "location": "Vancouver",
    "type": "In-Person",
    "logo": "https://freshroots.ca/fresh/uploads/2014/06/freshroots-logo.png",
    "description": "Do you love working with kids and want to help them grow on farms? Whether you're looking to gain experience or put your years of wisdom to good use, our Experiential Learning Team would love to have you!  \n\nInspire students with the wonders of our ecosystem and urban food systems with our Experiential Learning team.",
    "website": "https://form-can.keela.co/volunteer-registration-field-trip",
    "industry": "Non-profit, Farming"
  },
  {
    "id": 7,
    "title": "Food Services Volunteer",
    "company": "Covenant House Vancouver",
    "location": "Vancouver",
    "type": "In-Person",
    "logo": "https://www.covenanthousebc.org/wp-content/themes/wp-framework-child-theme/assets/img/logo.png",
    "description": "The Food Services department serves 3 meals per day to the youth that stay at Covenant House. We are looking for individuals ages 26 and over who can assist the Food Services team with food preparation and general kitchen operations, such as slicing bread, preparing fruit and vegetables, washing dishes, and serving meals. FOODSAFE certificate and kitchen experience is preferred but not essential. Recruiting for morning, afternoon, and evening mealtimes, throughout the week and weekends. ",
    "website": "https://www.covenanthousebc.org/take-action/volunteer-with-us/",
    "industry": "Non-profit, Housing"
  },
  {
    "id": 8,
    "title": "Greater Vancouver Food Bank Volunteer",
    "company": "Greater Vancouver Food Bank",
    "location": "Vancouver",
    "type": "In-Person",
    "logo": " https://foodbank.bc.ca/wp-content/uploads/2021/09/main-logo-2.svg",
    "description": "The Greater Vancouver Food Bank (GVFB) is a non-profit organization, committed to creating healthy communities through fair and effective food systems. Volunteering with the GVFB is an impactful way to provide healthy food to those in need.\n\n\nWe make volunteering easy and rewarding with flexible scheduling, reference letters, and a range of exciting roles. Whether you’re handing out food, sorting donations, restocking the community market, or spreading the word at events, every shift is a chance to make a meaningful impact and connect with the community.\n\n\nVisit the GVFB website to learn more about our volunteer opportunities!",
    "website": "https://foodbank.bc.ca/volunteer/",
    "industry": "Non-profit, Emergency food relief"
  },
  {
    "id": 9,
    "title": "MONOVA Volunteer",
    "company": "Museum & Archives of North Vancouver",
    "location": "North Vancouver",
    "type": "In-Person",
    "logo": "https://monova.ca/wp-content/uploads/2023/09/monova-ca-logo-2309-300x36.png",
    "description": "The MONOVA volunteer program welcomes new volunteers.\n\nOur mission-based volunteer program is designed to engage a diverse group of motivated and enthusiastic volunteers in a collaborative work environment.",
    "website": "https://monova.ca/volunteer/",
    "industry": "Art & Museum"
  },
  {
    "id": 10,
    "title": "Plane Pull for Sight Volunteer",
    "company": "Orbis Canada",
    "location": "Vancouver",
    "type": "In-Person",
    "logo": "https://can.orbis.org/assets/images/orbis-logo.svg",
    "description": "Plane Pull for Sight is an annual event that takes place in Vancouver in June. Plane Pull for Sight challenges teams of up to 20 people to work together to pull a 60-tonne FedEx 757 cargo plane a distance of 20 feet. Teams are required to fundraise a minimum of $3,750 for the opportunity to take part in this awesome challenge. Volunteers support the event on the day in various roles such as challenge supervisors, check-in support and more. ",
    "website": "https://can.orbis.org/en/how-you-can-help/plane-pull-for-sight",
    "industry": "Non-profit"
  },
  {
    "id": 11,
    "title": "Rainbow Refugee Volunteer",
    "company": "Rainbow Refugee",
    "location": "Vancouver",
    "type": "In-Person/Virtual",
    "logo": " https://lirp.cdn-website.com/7b5b4a9f/dms3rep/multi/opt/RRS_Logo_Horizontal-38d8f3e0-1920w.jpg",
    "description": "Rainbow Refugee encourages and welcomes volunteers who support our mission, vision, and values. We have volunteer opportunities for interpretation, settlement and system navigation support, fundraising, grant writing, event planning, member support, and facilitation.",
    "website": "https://app.betterimpact.com/Application?OrganizationGuid=12117f7a-7665-4a2f-862d-d800c7141e95&ApplicationFormNumber=1",
    "industry": "Non-profit"
  },
  {
    "id": 12,
    "title": "Shelter Movers Volunteer",
    "company": "Shelter Movers",
    "location": "Vancouver",
    "type": "In-Person",
    "logo": "https://www.sheltermovers.com/wp-content/uploads/2022/12/cropped-SM-logo-transitsecours-183x52.png",
    "description": "Shelter Movers is a national volunteer-powered charity providing free moving and storage services to individuals and families fleeing abuse. Since November 2018, our Vancouver chapter has assisted over 1,000 survivors across the Lower Mainland. We collaborate with local businesses and community agencies to support people, primarily women and children, as they transition to a life free of violence.\n\nVolunteering with Shelter Movers means making a meaningful impact on families experiencing abuse and playing a role in ending gender-based violence. Movers and Drivers are the backbone of our organization, helping to transport clients' belongings to safety. Volunteers work in teams of 2-7, following a detailed itinerary. Rental vehicles are provided, and volunteers with a valid driver's license can register as drivers. Each move typically lasts 4-4.5 hours. This role is ideal for those looking to make a significant impact through hands-on volunteering.",
    "website": "https://www.sheltermovers.com/volunteer/",
    "industry": "Non-profit, Housing"
  },
  {
    "id": 13,
    "title": "Thank-A-Thon Volunteer",
    "company": "Covenant House Vancouver",
    "location": "Vanouver",
    "type": "In-Person",
    "logo": "https://www.covenanthousebc.org/wp-content/themes/wp-framework-child-theme/assets/img/logo.png",
    "description": "Volunteers take part in a thank-a-thon calls to call and thank our donors who financially support or donate to Covenant House. This is usually a 4 x two-hour session planned around the academic year that take place every month or so depending on our organization's needs. Students will use CHV phones and will be briefed on how to conduct the call. All information required for each call is given beforehand so no student will be left in the dark not knowing what to do! A certificate of volunteer hours is given upon completion of the course. ",
    "website": "https://www.covenanthousebc.org/take-action/volunteer-with-us/",
    "industry": "Non-profit, Housing"
  },
  {
    "id": 14,
    "title": "Vancouver Garden Helper",
    "company": "Fresh Roots Urban Farm Society",
    "location": "Vancouver",
    "type": "In-Person",
    "logo": "https://freshroots.ca/fresh/uploads/2014/06/freshroots-logo.png",
    "description": "Whether it’s weeding or prepping beds, no task is too small! We would love to have you support our Farm Team with the smaller gardening tasks around the schoolyard farms in Vancouver (David Thompson Secondary School and Vancouver Technical Secondary School).\n\nFor 2024, we will be having Trowel Tuesdays – starting June 5th\n\nMORNINGS at David Thompson (9-11am)\nAFTERNOONS at Van Tech (1:30-3:30pm)",
    "website": "https://form-can.keela.co/volunteer-registration-vancouver-farm",
    "industry": "Non-profit, Farming"
  },
  {
    "id": 15,
    "title": "Vancouver Virology Centre Volunteer",
    "company": "Vancouver Virology Centre Society",
    "location": "Vnacouver",
    "type": "In-Person",
    "logo": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar.png",
    "description": "The Vancouver Virology Centre is looking for volunteers to greet patients, file charts and other related paper work, prepare for next day clinic, help new patients complete forms and surveys, run clinic related errands in the immediate neighbourhood, fax, copy, format letters and other office duties and help in on-site and off-site events and functions.\n\nSince we are in the early stages, you will get to see our clinic evolve and grow, you will learn everything about working and running a research facility, you will have the chance to share ideas and even implement your inputs and suggestions as a valued member of the team. You will also learn about the daily running of a doctor’s clinic and you will get to interact with large number of patients from all walks of life.\n\nWe are looking for volunteers who are professional, motivated, enthusiastic, mature, patient, compassionate, someone who can handle stress and can work in a fast paced environment, hard-working, culturally sensitive, LGBTQ friendly, love to help others and have a good sense of humour.\n",
    "website": "https://www.vvcsociety.ca/volunteering",
    "industry": "Healthcare"
  },
  {
    "id": 16,
    "title": "Volunteer",
    "company": "Lookout Housing and Health Society",
    "location": "Vancouver",
    "type": "In-Person",
    "logo": "https://lookoutsociety.ca/wp-content/themes/lookout/images/lookout-logo.png",
    "description": "Volunteering at the Lookout is a satisfying way to give back. Our volunteers get a chance to see the direct results of their volunteer work and commitment. For many, it can be an eye-opening experience to see how homelessness doesn’t discriminate and can affect anyone, regardless of background.\n\nSome possible tasks include: Spring cleaning, painting, landscape and garden cleanup, seasonal decorating, preparation of meals, and special events.",
    "website": "https://lookoutsociety.ca/get-involved/volunteer/",
    "industry": "Non-profit, Housing"
  },
  {
    "id": 17,
    "title": "Volunteer Coordinator",
    "company": "UBC Heart & Stroke Foundation",
    "location": "Vancouver",
    "type": "In-Person",
    "logo": "https://amsclubs.ca/heart-and-stroke-foundation/wp-content/uploads/sites/435/2024/04/UBCHSF_NarrowSig_Colour-1.png",
    "description": "The UBC Heart & Stroke foundation is a unique club at UBC, that has historically focused on education and fundraising efforts to support the Heart & Stroke foundation at large. We aim to continue increasing our presence on campus and dedicate our efforts to run engaging events for the UBC student body to educate and fundraise for the Heart & Stroke Foundation. Within our eight committees: 1) Internal 2) Sports & Recreation 3) Initiatives 4) Outreach 5) Marketing 6) Sponsorship 7) Administration 8) Education, we have Coordinator positions open for any UBC undergraduate student to apply for! We also have General Membership available for anyone to join and gain perks such as discounts on services like BeMo Academic Consulting, internal and external mentorship, volunteer experience, campus engagement, and more! Follow our Instagram @ubchsf and visit our AMS Clubs website for further information and updates! ",
    "website": "https://amsclubs.ca/heart-and-stroke-foundation/",
    "industry": "Non-profit"
  },
  {
    "id": 18,
    "title": "Volunteer Tutor",
    "company": "Covenant House Vancouver",
    "location": "Vancouver",
    "type": "In-Person",
    "logo": "https://www.covenanthousebc.org/wp-content/themes/wp-framework-child-theme/assets/img/logo.png",
    "description": "Students and professionals are paired with a youth at Covenant House Vancouver (CHV) to take part in 1:1 tutoring sessions. Most sessions are run once per week and last 2 hours. They take place on site at our downtown Vancouver locations. Volunteers are welcome to share their subjects of expertise and are matched with a youth who is interested in learning this subject. Sessions are volunteer and youth lead, meaning that volunteers are given the independence and flexibility of organizing the sessions and preparing study materials as needed, and youth are given the choice to participate in the ways that suit their comfort levels, abilities, and needs most. There is also a volunteer lead tutoring group that takes place once per month where volunteers share their experiences, challenges, and supports with one another. ",
    "website": "https://www.covenanthousebc.org/take-action/volunteer-with-us/",
    "industry": "Non-profit, Housing, Education"
  },
  {
    "id": 19,
    "title": "Volunteer Tutor",
    "company": "Children with Undergraduate Buddies Society",
    "location": "Vancouver",
    "type": "In-Person/Virtual",
    "logo": "https://ugc.production.linktr.ee/MwskVL5sQSKSKd3cDiCg_Do845RvUe2pMdDu1?io=true&size=avatar-v3_0",
    "description": "CUBS is a student-run non-profit organization based in Vancouver. We offer free tutoring and mentoring to children from the Downtown Eastside, and are also involved in fundraising efforts in order to support our students financially. We are looking for patient, dedicated, and empathetic individuals to join our tutoring team! Our tutoring programs offer support for a variety of grade levels and subjects, including but not limited to Math, English, Social Studies, Science, Mandarin, and Spanish.",
    "website": "https://linktr.ee/cubsvan?utm_source=linktree_profile_share&ltsid=b718c146-6c83-4fcc-aa54-30bed920182a",
    "industry": "Non-profit, Education"
  },
  {
    "id": 20,
    "title": "Wildlife Rescue Volunteer",
    "company": "Wildlife Rescue Association of BC",
    "location": "Vancouver",
    "type": "In-Person",
    "logo": "https://www.wildliferescue.ca/wp-content/themes/wra/images/wildlife-rescue-logo.png",
    "description": "The Wildlife Rescue Association of BC offers a number of volunteer roles in areas such as animal care, admissions, helpline, and transport.",
    "website": "https://www.wildliferescue.ca/what-we-do/volunteering/",
    "industry": "Non-profit"
  }
 ];


const VolunteerJobs = VolunteerJobsReverse;

export const SearchBar = () => {
    const [keywords, setKeywords] = useState("");
    const [list, setList] = useState(VolunteerJobs);
    const [location, setLocation] = useState("");
    const [selectedJob, setSelectedJob] = useState(null); // To track the selected job for modal

    // filters jobs based on inputs (keywords and location)
    function handleSearchJobs() {
        let keywordsJob = VolunteerJobs.filter((job) => job.title.toLowerCase().includes(keywords));
        var locationList = keywordsJob.filter((job) => job.location.toLowerCase().includes(location));

        setList(locationList);
    }

    // Open the modal when a job is clicked
    function openJobDetails(job) {
        setSelectedJob(job);
    }

    // Close the modal
    function closeModal() {
        setSelectedJob(null);
    }

    return (
        <Search>
            <SearchBox>
                <Inputs>
                    <SearchInput
                        placeholder="Keywords"
                        onChange={(e) => setKeywords(e.target.value.toLowerCase())}
                    />

                    <SearchInput
                        placeholder="Location"
                        onChange={(e) => setLocation(e.target.value.toLowerCase())}
                    />
                </Inputs>

                <br></br>

                <ButtonHollowBlack onClick={handleSearchJobs} title="Search Jobs">
                    Search Jobs
                </ButtonHollowBlack>
            </SearchBox>

            <br></br>
            <JobSec>
                {list.map((job) => (
                    <JobItem key={job.id} onClick={() => openJobDetails(job)}>
                        
                        <LeftSide>
                            <JobLogo src={job.logo} />
                            <JobHeading>
                                <JobTitle>{job.title}</JobTitle>
                                <Company>{job.company}</Company>
                            </JobHeading>
                        </LeftSide>
                        <RightSide>
                            <Type>{job.type}</Type>
                            <Location>{job.location}</Location>
                            <Industry>{job.industry}</Industry>
                            <br></br>
                        </RightSide>
                    </JobItem>
                ))}
            </JobSec>

            {/* Modal to show job details */}
            {selectedJob && (
                <ModalOverlay onClick={closeModal}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <ModalHeader>
                            <JobTitle>{selectedJob.title}</JobTitle>
                            <button onClick={closeModal}>Close</button>
                        </ModalHeader>
                        <ModalBody>
                            <p>{selectedJob.description}</p>
                            <a href={selectedJob.website} target="_blank" rel="noopener noreferrer">
                                Visit Website
                            </a>
                        </ModalBody>
                    </ModalContent>
                </ModalOverlay>
            )}
        </Search>
    );
}

const breakpoints = {
    mobile: '768px',
    tablet: '1024px',
};

const ButtonHollowBlack = styled.button`
    background-color: transparent;
    color: #222755;
    padding: 15px 40px;
    border-radius: 30px;
    border: 1px solid #222755;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 600;
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;

    &:hover {
        color: #0052FF;
        border: 1px solid #0052FF;
    }
`;

const Search = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
`;

const SearchBox = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
    justify-content: center;
    max-width: 79%;
    height: 100%;
    margin-left: 11%;
    padding: 10px;
`;

const Inputs = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2px;
    justify-content: center;
    align-items: center;
`;

const SearchInput = styled.input`
    min-height: 25px;
    width: 45%;
    border-style: solid;
    border-radius: 20px;
    border-width: 1px;
    margin: 1px;
    margin-right: 15px;
    font-size: 15px;
    padding: 13px;
`;

const JobSec = styled.ul`
    width: 100%;
    height: 100%;
    margin-top: 0;
`;

const JobItem = styled.li`
    height: 100%;
    width: 85%;
    border-style: none;
    border-radius: 5px;
    margin-top: 5px;
    margin-left: 8%;
    padding: 0 20px;
    background-color: #e7edf7;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: #8A8984;
    }
`;

const LeftSide = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
`;

const JobLogo = styled.img`
    max-width: 100px;
    max-height: 100px;
    margin-right: 10px;
`;

const JobHeading = styled.div`
    flex-direction: column;
    gap: 0;
    text-align: left;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
`;

const JobTitle = styled.h1`
    font-size: 20px;
    color: #222755;
`;

const Company = styled.p`
    font-size: 16px;
    color: #222755;
    opacity: 80%;
    margin-top: 0;
    text-transform: uppercase;
`;

const Location = styled.div`
    opacity: 80%;
    color: #222755;
    font-size: 18px;
    margin-top: -5px;
`;

const Industry = styled.div`
    opacity: 80%;
    color: #000080;
    font-size: 18px;
    margin-top: -5px;
`;

const Type = styled.p`
    font-size: 20px;
    color: #0173be;
    float: right;
    font-weight: bold;
`;

const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    text-align: right;
`;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    width: 60%;
    max-width: 600px;
`;

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        background-color: transparent;
        border: none;
`     

const ModalBody = styled.div`
    margin-top: 15px;
    font-size: 16px;
    color: #333;
    line-height: 1.6;
    max-height: 400px; /* Limits the height of the modal content */
    overflow-y: auto; /* Allows scrolling if content exceeds the limit */
    
    a {
        color: #0052FF;
        text-decoration: none;
        font-weight: bold;
        margin-top: 15px;
        display: inline-block;
    }

    a:hover {
        text-decoration: underline;
    }
`;
