import styled from "styled-components";
import { Button } from "../components/Reusable";
import ShopNavbar from "../components/shop-components/ShopNavbar";
import ShopFooter from "../components/shop-components/ShopFooter";

export default function Demo() {
    return (
        <>
            <ShopNavbar />
            <Container>
                <Section>
                    <SubTitle>TLDR</SubTitle>
                    <List>
                        <ListItem>I really want to turn the website into a dominant form of communication and a hub for all science students</ListItem>
                        <ListItem>The website should be a place that ubc science students can go to get nearly any piece of information (or at least directions to find them)</ListItem>
                    </List>
                    <SubTitle>Highlights</SubTitle>
                    <List>
                        <ListItem>prioritize join sus options -> website should be the hub for applications</ListItem>
                        <ListItem>
                            in the "get involved" section, i made sure to highlight the difference in positions, and made it much easier to find the information (+ easier on the eyes)
                        </ListItem>
                        <ListItem>add more dynamic features (rotating images type shit), section animations</ListItem>
                        <ListItem>media queries</ListItem>
                    </List>
                </Section>
                <Section>
                    <SubTitle>Future improvements</SubTitle>
                    <List>
                        <ListItem>fully functioning shop for SUS merchandise</ListItem>
                        <ListItem>for organizational structure, get Visual Media to make a hierarchy tree</ListItem>
                        <ListItem>optimized booking system</ListItem>
                        <ListItem>automatic uploading of meeting minutes through the google docs API</ListItem>
                        <ListItem>
                            when we have things like educational events, we should have the same information in our website (i.e. if the unique aspect of sus doing the events is the anectodatal student relatability, then we should have those same anecdotes on our website)
                        </ListItem>
                    </List>
                </Section>
                <Section>
                    <SubTitle>AVP Position Notes</SubTitle>
                    <List>
                        <ListItem>add mailing list / more emphasis on mailing list</ListItem>
                        <ListItem>clean up linktree</ListItem>
                    </List>
                </Section>
                <Section>
                    <SubTitle>Future Styling Notes</SubTitle>
                    <List>
                        <ListItem>rem vs em vs px -> prio em for responsiveness</ListItem>
                        <ListItem>add more elements to Reusable.js to reduce duplicated code and improve abstraction</ListItem>
                        <ListItem>for shope: use Stripe (payment) and Sanity (cms)</ListItem>
                    </List>
                </Section>
                <StyledButton as="a" href="/">Back Home</StyledButton>
            </Container>
            <ShopFooter />
        </>
    );
}

const Container = styled.div`
    padding: 2rem;
    max-width: 800px;
    margin: 10rem auto;
    font-family: Arial, sans-serif;
`;

const Section = styled.div`
    margin-bottom: 2rem;
`;

const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 1rem;
`;

const SubTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 1rem;
`;

const Description = styled.p`
    font-size: 1rem;
    margin-bottom: 1rem;
`;

const List = styled.ul`
    list-style-type: disc;
    padding-left: 1.5rem;
`;

const ListItem = styled.li`
    margin-bottom: 0.5rem;
`;

const StyledButton = styled(Button)`
    margin-top: 1rem;
    display: inline-block;
`;