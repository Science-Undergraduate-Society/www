import styled from "styled-components";
import { Button } from "../../components/Reusable";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Shop() {
    return (
        <>
            <Navbar />
            <Background>
                <Content>
                    <Title>Shop Under Construction 🔨 ...</Title>
                    <Description>A new SUS shop will be coming soon but in the meantime, make sure to check our social media to see if we have any in-person sales!</Description>
                    <StyledButton as="a" href="/">Back Home</StyledButton>
                </Content>
            </Background>
            <Footer color='#222755' background='transparent'/>
        </>
    );
}

const Background = styled.div`
    width: 100%;
    height: 100vh; /* Full viewport height */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center content vertically */
    align-items: center; /* Center content horizontally */
    overflow-y: auto;
    scroll-behavior: smooth;
    position: relative;
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Description = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.h1`
    margin-bottom: 2rem;
    text-align: center; /* Center align text */
`;

const StyledButton = styled(Button)`
    margin-top: 1rem;
`;
