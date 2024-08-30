import styled from "styled-components";
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function StudySphere() {
    return (
        <Background>
            <Navbar />
            <Content>
                <Title>Study Sphere</Title>
                <SubTitle>Our new notes sharing platform!</SubTitle>
                <p>Share and use course specific study materials with your peers.</p>
                <Buttons>
                    <Link href="https://ubcca-my.sharepoint.com/:f:/g/personal/njpv02_student_ubc_ca/ElDWP5sexdVFs1c6Hdzit2oBu9tFuMKhKGQqWSV8kdpVtQ?e=EFv22E" passHref>
                    <StyledButton>Share Your Notes</StyledButton>
                    </Link>
                    <Link href="https://ubcca-my.sharepoint.com/:f:/g/personal/njpv02_student_ubc_ca/EgiE8oZ-X65JgP65CyeH350BzhtYdmB1PDIOuYDvwBgIUQ?e=QaTh2V" passHref>
                    <StyledButton>View Shared Notes</StyledButton>
                    </Link>
                </Buttons>
            </Content>
            <Footer />
        </Background>
    )
}

const Title = styled.div`
    padding-top: 24px;
    font-size: 54px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
`

const SubTitle = styled.div`
    font-size: 24px;
    letter-spacing: 4px;
`

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`

const Content = styled.div `
  color: #222755;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  width: 100%;
  padding: 150px 0 0 15%;
`

const Background = styled.div`
    height: 100vh;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
