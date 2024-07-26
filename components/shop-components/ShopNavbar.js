import { useState } from "react";
import styled from "styled-components";
import {
    faApplePay,
    faCcStripe
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// Section of the navbar
//  - name = label of section
//  - items belonging to dropdown

export default function ShopNavbar() {
  return (
    <Nav>
        <NavLink href={"/"}><Logo src="./images/logos/white-logo.png" alt="Logo" /></NavLink>
        <Cart>
            <p>Powered By</p>
            <a><FontAwesomeIcon icon={faCcStripe} /></a>
        </Cart>
    </Nav>
  );
}

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(0, 25, 97, 0.8);
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

const Cart = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        color: white;
        width: 35px;
        transition: color 200ms;
    }

    p {
        color: white;
        margin-right: 10px;
        font-size: 12px;
    }
`