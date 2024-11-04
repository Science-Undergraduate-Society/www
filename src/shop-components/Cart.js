import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../components/Reusable";

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);

    // Add item to cart
    const addToCart = (product) => {
        const itemExists = cartItems.find(item => item.id === product.id);
        if (itemExists) {
            // Update quantity
            setCartItems(cartItems.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    // Remove item from cart
    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    // Calculate total price
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContainer>
            <h2>Your Cart</h2>
            {cartItems.length > 0 ? (
                <CartList>
                    {cartItems.map(item => (
                        <CartItem key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <div>
                                <h3>{item.name}</h3>
                                <p>Price: ${item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
                            </div>
                        </CartItem>
                    ))}
                    <h3>Total: ${totalPrice}</h3>
                    <Button onClick={handleCheckout}>Checkout</Button>
                </CartList>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </CartContainer>
    );
}

// Handle checkout using Stripe
const handleCheckout = async () => {
    const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cartItems)
    });

    const session = await response.json();
    window.location.href = session.url;  // Redirect to Stripe checkout
};

// Styled components for cart layout
const CartContainer = styled.div`
    padding: 20px;
`;

const CartList = styled.div`
    display: flex;
    flex-direction: column;
`;

const CartItem = styled.div`
    display: flex;
    margin: 10px 0;
    
    img {
        width: 100px;
        height: 100px;
    }
    
    div {
        margin-left: 20px;
    }
`;
