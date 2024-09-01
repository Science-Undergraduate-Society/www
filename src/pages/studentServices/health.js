import styled from "styled-components";
import Link from 'next/link';
import Navbar from "../../components/Navbar";

export default function HealthAndWellness() {
    return (
        <>
            <Navbar/>

            <HeweContainer>
                <HeweHeading>
                    {/* <SUSLogo></SUSLogo> */}
                    <Title>Wellness Hub</Title>
                </HeweHeading>
            </HeweContainer>
        </>
    )
}

// ============== Heading ==============

const HeweContainer = styled.div`
    margin-top: 20vh;
    padding: 20px;
`;

const HeweHeading = styled.div`

`

const Title = styled.h1`
  color: #222755;
  text-align: center;
  margin-bottom: 40px;
`;


// ============== Health & Wellness Resources ==============


const SectionTitle = styled.h2`
  color: #333333;
  margin-top: 30px;
  border-bottom: 2px solid grey;
  padding-bottom: 10px;
`;

const SubSectionTitle = styled.h3`
  color: #34495e;
  margin-top: 20px;
`;

const ListContainer = styled.div`
background-color: white:
width: 100%;
`

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 5rem;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const ResourceLink = styled.a`
  color: #0052FF;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;