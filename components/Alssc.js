import styled from 'styled-components';
import { Button } from "./Reusable"

export default function Alssc() {
    return (
        <Background>
            <Title>Abdul Ladha Science Student Centre</Title>
            <Subtitle>The ALSSC is a building for science students. If you are looking for a place to study… this is the building for you!</Subtitle>
            <SubSection>
                <Frame width="560" height="315" src="https://www.youtube.com/embed/t-kc4Bppv2I?si=8kjHKUHZ9ZZhmQMy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></Frame>
                <Booking>
                    <BookingTitle>Have a meeting? Need a study space for you and your friends? <br/>Students can book with the link below ↓↓↓</BookingTitle>
                    <Button as="a" href="/bookings">Room Booking</Button>
                </Booking>  
            </SubSection>
        </Background>   
    )
}

const breakpoints = {
    mobile: '768px',
    tablet: '1024px',
};

const Background = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;

    @media (max-width: ${breakpoints.mobile}) {
        padding: 0.5rem;
    }
`

const Title = styled.div`
    font-size: 37px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 2rem;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 28px;
        margin-bottom: 1.5rem;
    }
`

const Subtitle = styled.div`
    color: white;
    font-size: 20px;  
    margin-bottom: 3rem;
    text-align: center;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 16px;
        margin-bottom: 2rem;
    }
`

const SubSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: ${breakpoints.mobile}) {
        flex-direction: column;
    }
`

const Frame = styled.iframe`
    margin-bottom: 3rem;
    margin-right: 1rem;

    @media (max-width: ${breakpoints.mobile}) {
        margin-bottom: 1rem;
        margin-right: 0;
        width: 100%;
    }
`

const Booking = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: 1rem;

    @media (max-width: ${breakpoints.mobile}) {
        margin-left: 0;
        width: 100%;
        text-align: center;
    }
`

const BookingTitle = styled.div`
    color: white;
    font-size: 20px;  
    margin-bottom: 1rem;
    line-height: 2;
    text-align: center;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 16px;
        margin-bottom: 0.5rem;
    }
`