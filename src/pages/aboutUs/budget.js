import styled from "styled-components";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Alssc() {
  
    return (
        <>
            <Navbar />
            <Content>
                <Header>
                <Title>BUDGET SPREADSHEETS</Title>
                    <HeaderDescription>
                    The Science Undergraduate Society operates a $275k+ budget and is governed by policies evoked by the AMS and the Science Student body. The following document outline how the student fees are used.
                    </HeaderDescription>
                    <ButtonGroup>
                        <ButtonHollowBlack>
                            <Link href="https://docs.google.com/spreadsheets/d/1wG0j87hcq3qMozuOmajBFcDe5VX3q59m-PKoudzG2Gg/edit?usp=sharing">2024/2025 Budget</Link>    
                        </ButtonHollowBlack>
                    </ButtonGroup>

                    <Divider/>

                    <Title>BUDGET PRESENTATIONS</Title>
                    <HeaderDescription>
                    Below are links to all SUS Budget presentations made during council throughout the year.
                    </HeaderDescription>
                    <ButtonGroup>
                        <ButtonHollowBlack>
                            <Link href="https://drive.google.com/file/d/1qGn0VRMykNaHZi2ISfwJfx_bftQr3OXN/view?usp=share_link">SUS Budget Overview ‘24/’25</Link>    
                        </ButtonHollowBlack>
                        <ButtonHollowBlack>
                            <Link href="https://drive.google.com/file/d/1gL7NNiNntsW-ks-ul1FB9QNSRknCPuhC/view?usp=share_link">SUS Operational Surplus Request ‘24/’25</Link>    
                        </ButtonHollowBlack>
                    </ButtonGroup>

                    <ButtonGroup>
                        <ButtonHollow>
                            <Link href="https://drive.google.com/drive/folders/1SJYSaMw0CyQRvq2aU-vOFAesdk3cdaW8?usp=share_link">Budget Presentations 2024/2025</Link>    
                        </ButtonHollow>
                    </ButtonGroup>

                    <Divider/>

                    <Title>SUS BUDGET FEEDBACK FORM</Title>
                    <HeaderDescription>
                      Do you have any feedback or suggestions to the SUS budget? Please let us know using this form.
                    </HeaderDescription>
                    <ButtonGroup>
                        <ButtonHollowBlack>
                            <Link href="https://forms.gle/pGkj4oqNR1VCQEjWA">Budget Feedback Form</Link>    
                        </ButtonHollowBlack>
                    </ButtonGroup>

                    <Divider/>

                    <Title>INQUIRIES OR CONCERNS?</Title>
                    <ExecutiveImage src="/images/executive-images/Chloe-Chan.webp" />
                    <HeaderDescription>
                      Contact our VP Finance <b>Chloe Chan</b> at <a href="mailto:vpfinance@sus.ubc.ca">vpfinance@sus.ubc.ca</a>.
                    </HeaderDescription>
                </Header>


                <Footer/>
            </Content>
        </>
    )
}

// =============== GENERAL =============== //
const ExecutiveImage = styled.img`
  overflow: hidden;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  width: 200px;
  height: 200px;
  margin: 2.5vh;
`;

const Content = styled.main`
    margin-top: 30vh;
    width: 100%;
    height: auto;
    overflow-y: auto; 
    scroll-behavior: smooth;
    position: relative; 
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
`

const Divider = styled.div`
    margin-top: 5vh;
    margin-bottom: 5vh;
    width: 90%;
    border-bottom: 1px solid black;
`

const ButtonGroup = styled.div`
    margin-top: 1.5rem;
    display: flex;
    gap: 20px;
    justify-content: left;
`;

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

const ButtonHollow = styled.button`
    background-color: #222755;
    color: white;
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
const Link = styled.a`
    text-decoration: none;
    color: inherit;
`

// =============== HEADER =============== //

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;

    width: 50%;
    margin-bottom: 10vh;
`

const Title = styled.h2`
    color: black;
`

const HeaderDescription = styled.p`
    text-align: center;
`
