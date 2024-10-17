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
                <Info>Share and use course specific study materials with your peers.</Info>
                <Buttons>
                    <Link href="https://ubcca-my.sharepoint.com/:f:/g/personal/njpv02_student_ubc_ca/ElDWP5sexdVFs1c6Hdzit2oBu9tFuMKhKGQqWSV8kdpVtQ?e=EFv22E" passHref>
                    <ButtonHollowBlack>Share Your Notes</ButtonHollowBlack>
                    <br></br>
                    <br></br>
                    </Link>
                    <Link href="https://ubcca-my.sharepoint.com/:f:/g/personal/njpv02_student_ubc_ca/EgiE8oZ-X65JgP65CyeH350BzhtYdmB1PDIOuYDvwBgIUQ?e=QaTh2V" passHref>
                    <ButtonHollowBlack>View Shared Notes</ButtonHollowBlack>
                    </Link>
                </Buttons>
            </Content>
            <Footer />
        </Background>
    )
}

const ButtonHollowBlack = styled.button`
    background-color: transparent;
    color: #222755;
    padding: 15px 35px;
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

const breakpoints = {
    mobile: '768px',
    tablet: '1024px',
};

const Title = styled.div`
    margin-top: 24px;
    font-size: 54px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
    height: auto;
    width: 100%;
`

const SubTitle = styled.div`
    font-size: 24px;
    letter-spacing: 4px;
`

const Info = styled.div`
    font-style: italic;
    padding: 20px 0;
    font-size: 12px;
`

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;

    @media (max-width: ${breakpoints.mobile}) {
        flex-direction: column;
        gap: 0;
    }
`

const Content = styled.div `
  color: #222755;
  text-align: left;
  width: 100%;
  padding: 150px 0 0 15%;
  background-size: cover;
  flex-wrap: wrap;
`

const Background = styled.div`
    height: 100%;
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
