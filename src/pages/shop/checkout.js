// pages/checkout.js
"use client";

import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "@/shop-components/CheckoutPage";
import convertToSubcurrency from "@/utility/ulilFunctions";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Checkout() {
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

    return (
        <div>
            <h1>Checkout</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <h2>Your Items</h2>
                    {cart.map(item => (
                        <div key={item.id}>
                            <p>{item.name} - Quantity: {item.quantity}</p>
                        </div>
                    ))}
                    <p>Total Amount: ${totalAmount.toFixed(2)}</p>
                    <div className="flex h-screen justify-center items-center">
                        <Elements 
                            stripe={stripePromise}
                            options={{
                                mode: "payment",
                                amount: convertToSubcurrency(totalAmount),
                                currency: "cad"
                            }}
                        >
                            <CheckoutPage amount={totalAmount} />
                        </Elements>
                    </div>
                </>
            )}
        </div>
    );
}
