import styled from "styled-components";
import CartModal from "@/shop-components/CartModal"
import { useState } from "react";


// Section of the navbar
//  - name = label of section
//  - items belonging to dropdown

export default function ShopNavbar() {
    const [cartVisible, setCartVisible] = useState(false);

    return (
        <Nav>
            <NavLink href={"/"}>HOME</NavLink>
            {/* <Logo src="./images/logos/white-logo.png" alt="Logo" /> */}
            {/* <a><FontAwesomeIcon icon={faOpencart} /></a> */}
            {/* <NavLink href={"/"}>CART</NavLink> */}
            <div>
                <button onClick={() => setCartVisible(!cartVisible)}>Toggle Cart</button>
                <CartModal visible={cartVisible} onClose={() => setCartVisible(false)} />
                {/* Other components, such as ProductPage, go here */}
            </div>
        </Nav>
    );
}

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.5);
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

const NavLink = styled.a`
    background: none;
    border: none;
    // color: #001961;
    color: white;
    cursor: pointer;
    font-size: 16px;
    text-decoration: none;
`;