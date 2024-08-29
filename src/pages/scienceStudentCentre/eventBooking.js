import styled from "styled-components";
import { Button } from "../../components/Reusable";

export default function Bookings() {
    return(
        <>
            <Background>
                <Title>This is the Bookings Page</Title>
                <BookingsButton as="a" href="https://alsscroom103.youcanbook.me/">Book Room 103</BookingsButton>
                <BookingsButton as="a" href="https://alsscroom104.youcanbook.me/">Book Room 104</BookingsButton>
                <BookingsButton as="a" href="https://alsscroom105.youcanbook.me/">Book Room 105</BookingsButton>
                <Button as="a" href="/">Back home</Button>
            </Background>
        </>
    )
}

const Title = styled.div`
    color: #001961;
    font-size: 30px;
    margin-bottom: 1rem;
`

const Background = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const BookingsButton = styled(Button)`
    margin-bottom: 1rem;
`