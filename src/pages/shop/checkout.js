// pages/checkout.js
"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useCart } from "@/shop-components/CartContext";
import ShopFooter from "@/shop-components/ShopFooter";
import ShopNavbar from "@/shop-components/ShopNavbarAlt";

import CheckoutPage from "@/shop-components/CheckoutPage";
import convertToSubcurrency from "@/utility/ulilFunctions";

const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  max-width: 1000px;
  margin: auto;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const ItemsContainer = styled.div`
  flex: 2;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
`;

const SummaryContainer = styled.div`
  flex: 1;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  height: fit-content;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #ddd;
`;

const ItemImage = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  margin-right: 25px;
  border-radius: 8px;
`;

const ItemDetails = styled.div`
  flex-grow: 1;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  button {
    background: #007bff;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    margin: 0 5px;
  }

  button:hover {
    background: #0056b3;
  }
`;

const CheckoutButton = styled.button`
  width: 100%;
  background: #007bff;
  color: #fff;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin-top: 15px;
  border-radius: 4px;
  &:hover {
    background: #0056b3;
  }
`;

export default function Checkout() {
    const { state, dispatch } = useCart();

    const [cart, setCart] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() => {
        const amount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
        setTotalAmount(amount);
    }, [cart]);

    const updateQuantity = (id, size, delta) => {
        const updatedCart = cart.map(item => {
            // Compare by id and size
            if (item.id === id && item.size === size) {
                const newQuantity = item.quantity + delta;
                if (newQuantity <= 0) {
                    return null; // Remove item if quantity is 0 or less
                }
                return { ...item, quantity: newQuantity };
            }
            return item;
        }).filter(item => item !== null); // Remove null (deleted items)
        
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };    
    

    function showCheckoutWindow(e) {
      e.preventDefault();
      const url = "https://square.link/u/VspVw70x?src=embed";
      const title = "Square Payment Links";
      const topWindow = window.top ? window.top : window;
      const dualScreenLeft = topWindow.screenLeft !== undefined ? topWindow.screenLeft : topWindow.screenX;
      const dualScreenTop = topWindow.screenTop !== undefined ? topWindow.screenTop : topWindow.screenY;
      const width = topWindow.innerWidth || document.documentElement.clientWidth || screen.width;
      const height = topWindow.innerHeight || document.documentElement.clientHeight || screen.height;
      const h = height * 0.75;
      const w = 500;
      const systemZoom = width / topWindow.screen.availWidth;
      const left = (width - w) / 2 / systemZoom + dualScreenLeft;
      const top = (height - h) / 2 / systemZoom + dualScreenTop;
      const newWindow = window.open(url, title, `scrollbars=yes, width=${w / systemZoom}, height=${h / systemZoom}, top=${top}, left=${left}`);
      if (window.focus) newWindow.focus();
  }


    return (
        <div>
           <ShopNavbar showShopIcon={false} />
            
            <h1 style={{ textAlign: "center" }}>Checkout</h1>
            {cart.length === 0 ? (
                <p style={{ textAlign: "center" }}>Your cart is empty.</p>
            ) : (
                
                <CheckoutContainer>
                    <ItemsContainer>
                        {cart.map((item) => (
                            <Item key={item.id}>
                            <ItemImage src={item.image} alt={item.name} />
                            <ItemDetails>
                                <h4>{`${item.type.toUpperCase()} - ${item.color.toUpperCase()}`}</h4>
                                <p>Size: {item.size}</p>
                                <p>Price: ${item.price * item.quantity} CAD (${item.price} ea)</p>
                                <QuantityControls>
                                <button onClick={() => updateQuantity(item.id, item.size, -1)}>-</button>
                                <p>{item.quantity}</p>
                                <button onClick={() => updateQuantity(item.id, item.size, 1)}>+</button>
                                </QuantityControls>
                            </ItemDetails>
                            </Item>
                        ))}
                    </ItemsContainer>
                    <SummaryContainer>
                    <h3>Order Summary</h3>
                    <p>Subtotal: <strong>${totalAmount.toFixed(2)}</strong></p>
                    <CheckoutButton onClick={showCheckoutWindow}>Proceed to Payment</CheckoutButton>
                    </SummaryContainer>
                </CheckoutContainer>
                )}

            <ShopFooter />
        </div>
    );
}