import styled from "styled-components";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Footer from "@/components/Footer";

export default function Search() {
    const router = useRouter();
    const { query } = router.query; 
    const [results, setResults] = useState([]);

    useEffect(() => {
    if (query) {
    // Perform the search when the query is available
        const searchResults = performSearch(query.toLowerCase());
        setResults(searchResults);
    }
    }, [query]);

    const performSearch = (searchTerm) => {
    const pages = [
    { title: 'Join SUS', href: '/joinSus', content: 'Information about joining SUS.' },
    { title: 'About Us', href: '/about', content: 'Learn more about our organization.' },
    { title: 'The Executives', href: '/executives', content: 'Meet our executive team.' },
    { title: 'Budget', href: '/budget', content: 'Details about our budget and expenditures.' },
    { title: 'Code & Procedures', href: '/codeProcedures', content: 'Our code of conduct and procedures.' },
    { title: 'Upcoming Events', href: '/events', content: 'Details about our upcoming events.' },
    { title: 'Blue Card Program', href: '/bluecard', content: 'Information about the Blue Card Program.' },
    { title: 'Grants', href: '/grants', content: 'Grant application and information.' },
    { title: 'Health & Wellness', href: '/health', content: 'Health and wellness resources.' },
    { title: 'ALSSC', href: '/alssc', content: 'Information about the Science Student Centre.' },
    { title: 'Book a Meeting Room', href: '/alsscBooking', content: 'How to book a room at ALSSC.' },
    { title: 'Feedback Form', href: 'https://docs.google.com/forms/d/e/1FAIpQLSeoybfzo-4VZgMUgie-eySFPczi_ToTwugPDu8F-IPLoS04Wg/viewform', content: 'Give us feedback.' },
    { title: 'Shop', href: '/shop', content: 'Visit our shop for merchandise.' },
    ];

    return pages.filter(page =>
    page.title.toLowerCase().includes(searchTerm) ||
    page.content.toLowerCase().includes(searchTerm)
    );
  };
    return (
        <Background>
            <SearchContainer>
                <h1>Search Results</h1>
                {results.length > 0 ? (
                results.map((result, index) => (
                    <ResultItem key={index}>
                    <a href={result.href}>
                        <h2>{result.title}</h2>
                        <p>{result.content}</p>
                    </a>
                    </ResultItem>
                ))
                ) : (
                <p>No results found for "{query}".</p>
                )}
            </SearchContainer>
            <Link href="/" passHref>
                <StyledButton>Back to Home</StyledButton>
            </Link> 
            <Footer />
        </Background>
    )
}

const Title = styled.div`
    color: black;
`

const Background = styled.div`
    height: 100vh;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
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

const SearchContainer = styled.div`
  padding: 50px;
  max-width: 800px;
  margin: 0 auto;
`;

const ResultItem = styled.div`
  margin-bottom: 20px;

  a {
    text-decoration: none;
    color: #1a73e8;
    
    h2 {
      margin: 0;
    }

    p {
      margin: 5px 0 0;
      color: #333;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;
