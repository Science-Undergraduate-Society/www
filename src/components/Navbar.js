"use client"

import { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { FaBars, FaTimes } from "react-icons/fa";

const sections = [
  {
    name: "Join SUS",
    href: "/joinSus",
    items: [],
  },
  {
    name: "About Us",
    href: "",
    items: [
      { name: "The Executives", href: "/executives" },
      { name: "Budget", href: "/budget" },
      { name: "Code & Procedures", href: "/codeProcedures" },
    ],
  },
  {
    name: "Our Events",
    href: "",
    items: [
      { name: "Upcoming Events", href: "/events" },
    ],
  },
  {
    name: "Student Services",
    href: "",
    items: [
      { name: "Blue Card Program", href: "/bluecard" },
      { name: "Grants", href: "/grants" },
      { name: "Health & Wellness", href: "/health"},
    ],
  },
  {
    name: "Science Student Centre",
    href: "",
    items: [
      { name: "About the ALSSC", href: "/alssc" },
      { name: "Book a Meeting Room", href: "/alsscBooking" },
    ],
  },
  {
    name: "Give us Feedback",
    href: "",
    items: [
      { name: "Feedback Form", href: "https://docs.google.com/forms/d/e/1FAIpQLSeoybfzo-4VZgMUgie-eySFPczi_ToTwugPDu8F-IPLoS04Wg/viewform" },
      { name: "Future Improvements (for interview)", href: "/demo"}
    ],
  },
  {
    name: "Shop",
    href: "/shop",
    items: [],
  },
];

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(Array(sections.length).fill(false));
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // RUN ON CLIENT

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // DROPDOWN

  const handleDropdownOpen = (index) => {
    const updatedDropdownState = isDropdownOpen.map((item, idx) => idx === index);
    setDropdownOpen(updatedDropdownState);
  };

  const handleDropdownClose = () => {
    setDropdownOpen(Array(sections.length).fill(false));
  };

  const toggleMenu = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  // SEARCH 

  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Container>
      <Nav>
<<<<<<< HEAD
        <LogoContainer href="/">
          <Logo src="./images/logos/white-logo.png" alt="Logo" />
        </LogoContainer>
=======
        <Logo src="./images/logos/white-logo.png" alt="Logo" />
>>>>>>> main

        {!isMobile &&
          // NEED TO KEEP THIS OUTER DIV TO KEEP CONTENTS FROM "OVER-SPACE-BETWEENING"
          <div>
            <NavItems>
              {sections.map((section, index) => (
                <NavItem
                  key={index}
                  onMouseEnter={() => section.items.length > 0 && handleDropdownOpen(index)}
                  onMouseLeave={() => section.items.length > 0 && handleDropdownClose()}
                  onClick={() => section.items.length > 0 && handleDropdownOpen(index)}
                >
                  <NavLink href={section.items.length === 0 ? section.href : "/"}>
                    {section.name}
                  </NavLink>
                  {section.items.length > 0 && isDropdownOpen[index] && (
                    <DropdownMenu>
                      {section.items.map((item, itemIndex) => (
                        <DropdownItem
                          key={itemIndex}
                          href={item.href}
                          isLastItem={itemIndex === section.items.length - 1}
                        >
                          {item.name}
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  )}
                </NavItem>
              ))}
            </NavItems>
          </div>
        }

        <HamburgerMenu onClick={toggleMenu}>
          {isMobileDropdownOpen ? <FaTimes /> : <FaBars />}
        </HamburgerMenu>

        {!isMobile && 
          <SearchContainer>
            <Searchbar
              placeholder="Search SUS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown} 
            />
            <SearchButton onClick={handleSearch}> 
              <SearchIcon src="./images/index-images/search-icon-white.svg" alt="Search" />
            </SearchButton>
          </SearchContainer>
        }
      </Nav>

      {isMobileDropdownOpen && isMobile && (
        <MobileNav>
          <MobileNavItems>
            {sections.map((section, index) => (
              <MobileNavItem
                key={index}
                onMouseEnter={() => section.items.length > 0 && handleDropdownOpen(index)}
                onMouseLeave={() => section.items.length > 0 && handleDropdownClose()}
                onClick={() => section.items.length > 0 && handleDropdownOpen(index)}
                isLastItem={index === sections.length - 1}
              >
                <MobileNavLink href={section.items.length === 0 ? section.href : null}>
                  {section.name}
                </MobileNavLink>
                {section.items.length > 0 && isDropdownOpen[index] && (
                  <MobileDropdownMenu>
                    {section.items.map((item, itemIndex) => (
                      <MobileDropdownItem
                        key={itemIndex}
                        href={item.href}
                        isLastItem={itemIndex === section.items.length - 1}
                      >
                        {item.name}
                      </MobileDropdownItem>
                    ))}
                  </MobileDropdownMenu>
                )}
              </MobileNavItem>
            ))}
          </MobileNavItems>
        </MobileNav>
      )}
    </Container>
  );
}

//==============================================================

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1001;

  display: flex;
  flex-direction: column;
`

//==============================================================

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(34, 39, 85, 0.8);
  backdrop-filter: blur(15px);
  padding: 0 40px;
  width: 100%;
  box-sizing: border-box;
  height: 150px;

`;

<<<<<<< HEAD
const LogoContainer = styled.a`
  cursor: pointer;
`

=======
>>>>>>> main
const Logo = styled.img`
  height: 100px;
`;

//==============================================================

const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.div`
  position: relative;
  margin: 0;
  padding: 0 20px;
  height: 100%;
  display: flex;
  align-items: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled.a`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;

  @media (max-width: 1400px) {
    font-size: 14px;
  }
  
  @media (max-width: 1350px) {
    font-size: 13px;
  }

  @media (max-width: 1300px) {
    font-size: 12px;
  }

  @media (max-width: 1250px) {
    font-size: 11px;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: rgba(34, 39, 85, 0.8);
  backdrop-filter: blur(15px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  flex-direction: column;
`;

const DropdownItem = styled.a`
  padding: 20px 30px;
  text-decoration: none;
  color: white;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  ${({ isLastItem }) =>
    !isLastItem &&
    `
    border-bottom: 1px dashed #7076A7;
  `}

  @media (max-width: 1400px) {
    font-size: 14px;
  }
  
  @media (max-width: 1350px) {
    font-size: 13px;
  }

  @media (max-width: 1300px) {
    font-size: 12px;
  }

  @media (max-width: 1250px) {
    font-size: 11px;
  }
`;

//==============================================================

const HamburgerMenu = styled.div`
  display: none;
  font-size: 24px;
  color: white;
  cursor: pointer;

  @media (max-width: 1200px) {
    display: block;
  }
`;


//==============================================================

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
`;

const Searchbar = styled.input`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 15px;
  padding-right: 30px;
  border-radius: 10px;
  border: 1px solid transparent; 
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.3);
  outline: none;

  &:focus {
    box-shadow: 0 0 10px rgba(74, 144, 226, 0.8); 
  }
`;

const SearchButton = styled.button`
  background-color: transparent;
  border: none;
`;

const SearchIcon = styled.img`
  height: 20px;
  margin-left: 5px;
`;

//==============================================================

const MobileNav = styled.div`
  background-color: rgba(34, 39, 85, 0.8);
  backdrop-filter: blur(15px);
  padding: 15px;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: auto; 
  overflow-y: auto; 
`;

const MobileNavItems = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1; 
  overflow-y: auto;

  height: auto;
`;

const MobileNavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  
  ${({ isLastItem }) =>
    !isLastItem &&
    `
    border-bottom: 1px dashed #7076A7;
  `}
`;

const MobileNavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 12px;
  font-weight: 500;
  padding: 15px 0; 
`;

const MobileDropdownMenu = styled.div`
  padding-left: 20px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
`;

const MobileDropdownItem = styled.a`
  padding: 15px 0;
  color: white;
  text-decoration: none;
  font-size: 12px;
  font-weight: 400;

  &:hover {
    color: rgba(256, 256, 256, 0.5);
  }

  ${({ isLastItem }) =>
    !isLastItem &&
    `
    border-bottom: 1px dashed #7076A7;
  `}
`;