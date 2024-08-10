import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing hamburger and close icons

// Section of the navbar
//  - name = label of section
//  - items belonging to dropdown
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
      { name: "Code & Procedure", href: "/codeProcedures" },
      { name: "Office Hours", href: "/officeHours" },
      { name: "Meeting Minutes", href: "/meetingMinutes" },
      { name: "Clubs", href: "/clubs" },
      // { name: "Office Hours", href: "/" }
    ],
  },
  {
    name: "Our Events",
    href: "",
    items: [
      { name: "Upcoming Events", href: "/events" },
      { name: "Past Events", href: "/pastevents" },
    ],
  },
  {
    name: "Student Services",
    href: "",
    items: [
      { name: "Blue Card Program", href: "/bluecard" },
      { name: "Grants", href: "/grants" },
      { name: "Health & Wellness", href: "/health" },
      // { name: "Volunteer Portal", href: "/"},
      // { name: "Study Sphere", href: "/"},
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
      {
        name: "Feedback Form",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSeoybfzo-4VZgMUgie-eySFPczi_ToTwugPDu8F-IPLoS04Wg/viewform",
      },
      { name: "Future Improvements (for interview)", href: "/demo" },
    ],
  },
  {
    name: "Shop",
    href: "/shop",
    items: [],
  },
];

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(
    Array(sections.length).fill(false)
  );
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleDropdown = (index) => {
    const updatedDropdownState = isDropdownOpen.map((item, idx) =>
      idx === index ? !item : item
    );
    setDropdownOpen(updatedDropdownState);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Nav>
      <NavLink href={"/"}>
        <Logo src="./images/logos/white-logo.png" alt="Logo" />
      </NavLink>
      <HamburgerMenu onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </HamburgerMenu>
      <NavItems $isMenuOpen={isMenuOpen}>
        {sections.map((section, index) => (
          <NavItem
            key={index}
            onMouseEnter={() =>
              section.items.length > 0 && handleDropdown(index)
            }
            onMouseLeave={() =>
              section.items.length > 0 && handleDropdown(index)
            }
            onClick={() =>
              section.items.length > 0 && isMenuOpen && handleDropdown(index)
            }
          >
            <NavLink href={section.items.length === 0 ? section.href : "/"}>
              {section.name}
            </NavLink>
            {section.items.length > 0 &&
              (isDropdownOpen[index] || isMenuOpen) && (
                <DropdownMenu>
                  {section.items.map((item, itemIndex) => (
                    <DropdownItem key={itemIndex} href={item.href}>
                      {item.name}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              )}
          </NavItem>
        ))}
      </NavItems>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(34, 39, 85, 1);
  backdrop-filter: blur(15px);
  padding: 20px 40px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1001;
  box-sizing: border-box;
`;

const Logo = styled.img`
  height: 100px;
`;

const NavItems = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 1200px) {
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.9);
    position: fixed;
    top: 0;
    left: ${(props) => (props.$isMenuOpen ? "0" : "-100%")};
    width: 75%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    transition: left 0.3s ease-in-out;
  }
`;

const NavItem = styled.li`
  position: relative;
  margin: 0 20px;

  @media (max-width: 1200px) {
    margin: 20px 0;
  }
`;

const NavLink = styled.a`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;

  @media (max-width: 1200px) {
    font-size: 24px;
    color: black;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: rgba(34, 39, 85, 0.95);
  backdrop-filter: blur(15px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out,
    transform 0.3s ease-in-out;

  ${NavItem}:hover &,
  ${NavItem}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  @media (max-width: 1200px) {
    position: static;
    transform: none;
    opacity: 1;
    visibility: visible;
    box-shadow: none;
  }
`;

const DropdownItem = styled.a`
  padding: 20px 30px;
  text-decoration: none;
  color: white;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1200px) {
    color: black;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  font-size: 24px;
  color: white;
  cursor: pointer;

  @media (max-width: 1200px) {
    display: block;
  }
`;
