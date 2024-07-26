import styled from "styled-components";

export default function GetInvolved() {
    return (
        <Background>
            <Title>Get Involved</Title>
            <StyledButton href="/">Back to Home</StyledButton>
        </Background>
    )
}

const Background = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
`;

const Title = styled.div`
`

const StyledButton = styled.a`
    color: #001961;
`;
