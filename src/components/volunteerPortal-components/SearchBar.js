import React, { useState } from "react";
import styled from "styled-components";
import { VolunteerJobs } from "@/pages/studentServices/volunteerPortalFiles/jobData";
import { checkBoxesList } from "@/pages/studentServices/volunteerPortalFiles/jobData";


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

            <SearchButton onClick={handleSearchJobs}
            title='Search Jobs'>
                Search Jobs
            </SearchButton>
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
const Search = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
`
const SearchBox = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #DCDCDC;
    align-items: center;
    justify-content: center;

    max-width: 82%;
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
    border-radius: 5px;
    border-width: 1px;

    font-size: 20px;
    padding: 10px;
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
