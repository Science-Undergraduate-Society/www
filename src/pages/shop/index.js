import styled from "styled-components";
import ShopNavbar from "../../../components/shop-components/ShopNavbar";
import { Button } from "../../../components/Reusable";
import ShopFooter from "../../../components/shop-components/ShopFooter";

export default function Shop() {
    return (
        <>
            <ShopNavbar />
            <Background>
                <Content>
                    <Title>Shop Under Construction 🔨 ...</Title>
                    <StyledButton as="a" href="/">Back Home</StyledButton>
                    <Description>
                    </Description>
                </Content>
                <ShopFooter />
            </Background>
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
