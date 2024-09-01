import styled from "styled-components";
import Link from 'next/link';
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function VolunteerPortal() {
    return (
        <Background>
            <Navbar />
            <Heading>
                <Title>Volunteer Portal</Title>
            </Heading>

            <SearchBar />
            <Footer />
        </Background>
    )
}

const VolunteerJobs = [
    { id: 1, title: 'YNOTFORTOTS Volunteer Tutor', company: 'YNOTFORTOTS', location: 'Vancouver', type: 'In-Person', logo: '/images/bluecard-images/partner-logos/milano casa logo.jpg'},
    { id: 2, title: 'Wildlife Rescue Association of BC', company: 'Wildlife Rescue Association of BC', location: 'BC', type: 'Virtual', logo: `/images/bluecard-images/partner-logos/milano casa logo.jpg`},
    // More jobs…
    ];

{/*
const JobList = () => {
    return (
        <JobSec>
          {VolunteerJobs.map(job => (
            <JobItem key={job.id} job={job}>
                <LeftSide>
                    <JobLogo src = {job.logo} />
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
        );
    };
*/}

{/* Search Bar */}
const SearchBar = () => {
    const [query, setQuery] = useState("");
    
  return (
    <Search>
        <SearchBox>
            <SearchInput
            placeholder="Keywords"
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />
            <SearchInput
            placeholder="Location"
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />
            <SearchButton>Search Jobs</SearchButton>
        </SearchBox>
      <JobSec>
        {VolunteerJobs.filter((job) =>
          job.title.toLowerCase().includes(query)
        ).map((job) => (
        <JobItem key={job.id}>
            <LeftSide>
                <JobLogo src = {job.logo} />
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

const Search = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
`

const SearchBox = styled.div`
    background-color: #DCDCDC;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2px;

    width: 82%;
    height: 100%;
    margin-left: 11%;
    padding: 10px;
`

const SearchInput = styled.input`
    min-height: 25px;
    width: 30%;
    border-style: solid;
    border-radius: 5px;
    border-width: 1px;

    font-size: 20px;
    padding: 10px;
`

const SearchButton = styled.button`
    margin-top: 24px;
    width: 50%;
    height: 100%;
    color: #ffffff;
    font-size: 16px;
    padding: 10px;
    border-radius: 10px;
    border-style: none;
    background-color: #0173be;
`
const Title = styled.div`
    padding-top: 24px;
    font-size: 54px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
`


const Heading = styled.div `
  color: #222755;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  width: 100%;
  padding: 150px 0 0 15%;
`

const JobSec = styled.ul`
    width: 100%;
    height: 100%;
    margin: 24px 0;
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

const Background = styled.div`
    height: 100%;
    background-size: cover;
    display: flex;
    flex-direction: column;
`

const StyledButton = styled.div`
    display: inline-block;
    width: 210px;
    padding: 10px 20px;
    background-color: #0070f3;
    color: white;
    text-align: center;
    border-radius: 5px;
    text-decoration: none;
    margin-top: 20px;
    cursor: pointer;

    &:hover {
        background-color: #005bb5;
    }
`
