import React, { useState } from "react";
import styled from "styled-components";
// import { VolunteerJobs } from "@/pages/studentServices/volunteerPortalFiles/jobData";
// import { checkBoxesList } from "@/pages/studentServices/volunteerPortalFiles/jobData";

const VolunteerJobsReverse = [
    { 
        id: 1, 
        title: 'YNOTFORTOTS Volunteer Tutor', 
        company: 'YNOTFORTOTS', 
        location: 'Vancouver', 
        type: 'In-Person', 
        logo: ''
        },
    { 
        id: 2, 
        title: 'Wildlife Rescue Association of BC', 
        company: 'Wildlife Rescue Association of BC', 
        location: 'BC', 
        type: 'Virtual', 
        logo: ''
    },
    {
        id: 3,
        title: 'Volunteer with Shelter Movers',
        company: 'Shelter Movers',
        location: 'Vancouver',
        type: 'Off Campus',
        logo: '',
    },
    {
        id: 4,
        title: 'Volunteer Drivers for Food Deliveries',
        company: 'Refood Food Rescue Foundation',
        location: 'Vancouver',
        type: 'Off Campus',
        logo: '',
    },
    {
        id: 5,
        title: 'Vancouver Emergency Management Agency',
        company: 'Vancouver Emergency Management Agency',
        location: 'Vancouver',
        type: 'Off Campus',
        logo: '',
    },
    {
        id: 6,
        title: 'UBC Third World Eye Care Society',
        company: 'UBC Third World Eye Care Society',
        location: 'Vancouver',
        type: 'Off Campus',
        logo: '',
    },
    {
        id: 7,
        title: 'UBC SPIHC Volunteer',
        company: 'UBC Students for Partners in Health Canada',
        location: 'Anywhere',
        type: 'On Campus',
        logo: '',
    },
    {
        id: 8,
        title: 'UBC Red Cross Club Volunteer',
        company: 'UBC Red Cross Club',
        location: 'Vancouver',
        type: 'On Campus',
        logo: '',
    },
    {
        id: 9,
        title: 'UBC Music for Mentak Health',
        company: 'UBC Music for Mentak Health',
        location: 'UBC',
        type: 'On Campus',
        logo: '',
    },
    {
        id: 10,
        title: 'UBC Mental Health Awareness Club Volunteer',
        company: 'UBC Mental Health Awareness Club',
        location: 'Vancouver',
        type: 'On Campus',
        logo: '',
    },
    {
        id: 11,
        title: 'UBC HSF Volunteer',
        company: 'UBC Heart and Stroke Foundation',
        location: 'Vancouver',
        type: 'On Campus',
        logo: '',
    },
    {
        id: 12,
        title: 'UBC Blood for Life Volunteer',
        company: 'UBC Blood for Life',
        location: 'Vancouver',
        type: 'On Campus',
        logo: '',
    },
    {
        id: 13,
        title: 'The Reading Bear Society Volunteer',
        company: 'The Reading Bear',
        location: 'Vancouver',
        type: 'Off Campus',
        logo: '',
    },
    {
        id: 14,
        title: 'Swim Drink Fish Volunteer',
        company: 'Swim Drink Fish',
        location: 'Vancouver',
        type: 'Off Campus',
        logo: '',
    },
    {
        id: 15,
        title: 'Stanley Park Ecology Society',
        company: 'Stanley Park Ecology Society',
        location: 'Vancouver',
        type: 'Off Campus',
        logo: '',
    },
    {
        id: 16,
        title: 'School Breakfast Volunteer',
        company: 'Breakfast Club of Canada',
        location: 'Vancouver',
        type: 'Off Campus',
        logo: '',
    },
    {
        id: 17,
        title: 'Public Education Volunteer',
        company: 'Seniors First BC',
        location: 'Vancouver',
        type: 'Off Campus, Virtual',
        logo: '',
    },
    {
        id: 18,
        title: 'Peer Support Program Volunteer',
        company: 'MS Society of Canada',
        location: 'Anywhere',
        type: 'Virtual',
        logo: '',
    },
    {
        id: 19,
        title: 'Mentors for Indigenous Youth',
        company: 'Urban Native Youth Association',
        location: 'Vancouver',
        type: 'Off Campus',
        logo: '',
    },
    {
        id: 20,
        title: 'Learning Buddies Network',
        company: 'Learning Buddies Network',
        location: 'Greater Vancouver',
        type: 'Off Campus, Virtual',
        logo: '',
    },
    {
        id: 21,
        title: 'Lead Inbstructor',
        company: 'Canada Learning Code',
        location: 'Vancouver',
        type: 'Off Campus, Virtual',
        logo: '',
    },
    {
        id: 22,
        title: 'KidSafe Volunteer',
        company: 'KidSafe Project Society',
        location: 'Vancouver',
        type: 'Off Campus',
        logo: '',
    },
    {
        id: 23,
        title: 'Habitat for Humanity Volunteer',
        company: 'Habitat for Humanity Greater Vancouver',
        location: 'Vancouver',
        type: 'Off Campus',
        logo: '',
    },
    {
        id: 24,
        title: 'Growing Chefs Volunteer',
        company: 'Growing Chefs',
        location: 'Vancouver',
        type: 'Off Campus',
        logo: '',
    },
    {
        id: 25,
        title: 'Greater Vancouver Food Bank Volunteer',
        company: 'Greater Vancouver Food Bank',
        location: 'Vancouver',
        type: 'Off Campus',
        logo: '',
    },
    {
        id: 26,
        title: 'Girls to the Power of Math Volunteer',
        company: 'Girls to the Power of Math',
        location: 'Anywhere',
        type: 'Off Campus, Virtual',
        logo: '',
    },
    {
        id: 27,
        title: 'Fraser Health Crisis Line',
        company: 'Fraser Health Crisis Line',
        location: 'Surrey',
        type: 'Off Campus',
        logo: '',
    },
    {
        id: 28,
        title: 'Digital Learning Assistant Volunteer',
        company: 'MOSAIC',
        location: 'Anywhere',
        type: 'Off Campus, Virtual',
        logo: '',
    },
    {
        id: 29,
        title: 'CUBS Volunteer',
        company: 'CUBS',
        location: 'Vancouver',
        type: 'Off Campus, Virtual',
        logo: '',
    },
    {
        id: 30,
        title: 'CityReach Care Society Volunteer',
        company: 'CityReach Care Society',
        location: 'Vancouver',
        type: 'Off Campus',
        logo: '',
    },
    {
        id: 31,
        title: 'Cassie + Friends Volunteer',
        company: 'Cassie and Friends',
        location: 'Vancouver',
        type: 'Off Campus',
        logo: '',
    },
    {
        id: 32,
        title: 'Canuck Place Volunteer',
        company: 'Canuck Place',
        location: 'Vancouver',
        type: 'Off Campus',
        logo: '',
    },
    {
        id: 33,
        title: 'Canadian Blood Services Volunteer',
        company: 'Canadian Blood Services',
        location: 'Vancouver',
        type: 'Off Campus',
        logo: '',
    },
    {
        id: 34,
        title: 'Big Brothers of Greater Vancouver',
        company: 'Big Brothers of Greater Vancouver',
        location: 'Vancouver',
        type: 'Off Campus, Virtual',
        logo: '',
    },
    {
        id: 35,
        title: 'Ask An Undergrad',
        company: 'Ask An Undergrad',
        location: 'Canada',
        type: 'Virtual',
        logo: '',
    },
    {
        id: 36,
        title: 'AIDS Vancouver Volunteer',
        company: 'AIDS Vancouver',
        location: 'Vancouver',
        type: 'Off Campus',
        logo: '',
    },
    // More jobs…
];

const VolunteerJobs = VolunteerJobsReverse.reverse();

const checkBoxesList = [ 
    {
        "id": 1,
        "name": "Off Campus"
    },
    {
        "id": 2,
        "name": "On Campus"
    },
    {
        "id": 3,
        "name": "Virtual"
    },
]

export const SearchBar = () => {
    const [keywords, setKeywords] = useState("");
    const [list, setList] = useState(VolunteerJobs);
    const [location, setLocation] = useState("");


    // filters jobs based on inputs (keywords and location)
    function handleSearchJobs() {
        let keywordsJob = VolunteerJobs.filter((job) => job.title.toLowerCase().includes(keywords));
        var locationList = keywordsJob.filter((job) => job.location.toLowerCase().includes(location));

        setList(locationList);
    }

    //checkboxes
    const [selectedItems, setSelectedItems] = useState([])
	

	function checkboxHandler(e){
		let isSelected = e.target.checked;
		let value = parseInt(e.target.value);
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

            <ButtonHollowBlack onClick={handleSearchJobs}
            title='Search Jobs'>
                Search Jobs
            </ButtonHollowBlack>
            <br></br>
            {/*
            <Checkboxes>
                {checkBoxesList.map((checkbox, index) => (
                    <label key={index}>
                        {checkbox.name} <input type="checkbox" name={checkbox.name} value={checkbox.id} defaultChecked={true} onChange={checkboxHandler} checked={ selectedItems.includes( checkbox.id ) }  />
                    </label>
                ))}
            </Checkboxes>
            */}
        </SearchBox>
      <JobSec>
        {list.map((job) => (
        <JobItem key={job.id}>
            <LeftSide>
                {/*
                <JobLogo src = {job.logo} />
                */}
                <JobHeading>
                    <JobTitle>{job.title}</JobTitle>
                    <Company>{job.company}</Company>
                </JobHeading>
            </LeftSide>
            <RightSide>
                <Type>{job.type}</Type>
                <Location>{job.location}</Location>
            </RightSide>
        </JobItem>
        ))}
      </JobSec>
    </Search>
  );
}


const breakpoints = {
    mobile: '768px',
    tablet: '1024px',
};

{/* Search header */}

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
`
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

`
const Inputs = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2px;

    justify-content: center;
    align-items: center;
`

const SearchInput = styled.input`
    min-height: 25px;
    width: 45%;
    border-style: solid;
    border-radius: 20px;
    border-width: 1px;
    margin: 1px;
    margin-right: 15px;
    font-size: 15px;
    padding: 16px;
`

const SearchButton = styled.button`
    display: inline-block;
    margin-top: 24px;
    width: 50%;
    height: 100%;
    color: #ffffff;
    font-size: 16px;
    padding: 10px;
    border-radius: 10px;
    border-style: none;
    background-color: #0173be;

     &:hover {
        background-color: #005bb5;
    }
`

const Checkboxes = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    gap: 40px;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: ${breakpoints.mobile}) {
        flex-direction: column;
        gap: 0;
    }
`

{/* Job list display */}
const JobSec = styled.ul`
    width: 100%;
    height: 100%;
    margin-top: 0;
`

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

    &:hover {
        background-color: #8A8984;
    }
`

const LeftSide = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
`

const JobLogo = styled.img`
    max-width: 100px;
    max-height: 100px; 
`

const JobHeading = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0;
    text-align: left;
    justify-content: flex-start;
    align-item: center;
    padding: 10px;

`

const JobTitle = styled.h1`
    font-size: 20px;
    color: #222755;
`

const Company = styled.p`
    font-size: 16px;
    color: #222755;
    opacity: 80%;
    margin-top: 0;
    text-transform: uppercase;
`

const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    text-align: right;
`

const Location = styled.div`
    opacity: 80%;
    color: #222755;
    font-size: 18px;
    margin-top: -5px;
`

const Type = styled.p`
    font-size: 20px;
    color: #0173be;
    float: right;
    font-weight: bold;
`
