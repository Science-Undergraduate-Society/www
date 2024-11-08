import styled from "styled-components";
import CartModal from "@/shop-components/CartModal"
import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
    
// Section of the navbar
//  - name = label of section
//  - items belonging to dropdown

export default function ShopNavbar({ onCartOpen }) {
    const [cartVisible, setCartVisible] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    
    const openCartModal = () => {
        setCartVisible(true);
    };
    const closeCartModal = () => {
        setCartVisible(false);
    };

    // Call the onCartOpen function when the cart is opened
    const handleOpenCart = () => {
        openCartModal();
        if (onCartOpen) onCartOpen(); // Trigger the cart open function passed as prop
    };
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Nav isScrolled={isScrolled}>
            <NavLink href={"/"}> 
                <Logo src="./images/logos/white-logo.png" alt="Logo" />
            </NavLink>
            <div>
                <CartIcon onClick={handleOpenCart}/>
                <CartModal visible={cartVisible} onClose={closeCartModal} />
                {/* Other components, such as ProductPage, go here */}
            </div>
        </Nav>
    );
}

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0); /* Transparent by default */
    padding: 40px 40px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1001;
    box-sizing: border-box;
    transition: background-color 0.3s ease, backdrop-filter 0.3s ease;

    ${({ isScrolled }) =>
        isScrolled &&
        `
        // background-color: rgba(34,39,85,0.8); /* Apply background color on scroll */
        background-color: rgba(0,0,0,0.4);
        backdrop-filter: blur(10px); /* Apply blur effect when scrolled */
    `}
`;

const Logo = styled.img`
    height: 100px;    
`;

const NavLink = styled.a`
    background: none;
    border: none;
    // color: #001961;
    color: white;
    cursor: pointer;
    font-size: 16px;
    text-decoration: none;
`;

const CartIcon = styled(FaShoppingCart)`
    color: white;
    cursor: pointer;
    font-size: 1.5rem;
    margin-right: 20px;

    &:hover {
        color: #ADD8E6; // Change color on hover
    }
`