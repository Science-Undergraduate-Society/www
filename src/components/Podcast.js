import styled from 'styled-components';

export default function Podcast() {
    return (
        <Background>
            <Title>Ever Bored on the R4?</Title>
            <Subtitle>Checkout Suspisode! SUS' very own Podcast 🎧🎧🎧</Subtitle>
            <Frame width="560" height="315" src="https://open.spotify.com/embed/show/6LvV59dTsORiXSn4z28Zon/video?utm_source=generator" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></Frame> 
        </Background>   
    )
}

const Background = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.div`
    font-size: 37px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 2rem;
`

const Subtitle = styled.div`
    color: white;
    font-size: 20px;  
    margin-bottom: 3rem;
`

const Frame = styled.iframe`
    margin-bottom: 3rem;
    margin-right: 1rem;
`;