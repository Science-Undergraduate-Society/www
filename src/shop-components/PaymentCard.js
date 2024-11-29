"use client"
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
import styled, { keyframes } from "styled-components";
import {
    useStripe,
    useElements,
    PaymentElement,
} from '@stripe/react-stripe-js'
import convertToSubcurrency from "@/utility/ulilFunctions";

const PaymentSection = styled.div`
`;

const PaymentButton = styled.button`
    background-color: transparent;
    color: #222755;
    padding: 15px 35px;
    border-radius: 10px;
    border: 1px solid #222755;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    width: 100%;
    margin-top: 2rem;
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;

    &:hover {
        color: #0052FF;
        border: 1px solid #0052FF;
    }

    &:disabled {
        background-color: #f0f0f0; /* or any color to indicate disabled state */
        color: #a9a9a9; /* lighter text color */
        border: 1px solid #d3d3d3; /* lighter border color */
        cursor: not-allowed; /* change cursor to indicate disabled */
        opacity: 0.6; /* optional: change opacity for a visual effect */
    } 
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spinner = styled.div`
  height: 2rem; /* Adjust size as needed */
  width: 2rem; /* Adjust size as needed */
  border: 0.25rem solid currentColor;
  border-radius: 9999px;
  border-left-color: transparent;
  animation: ${spin} 1.5s linear infinite;
  color: #222755; 

  &::after {
    content: 'Loading...';
    position: absolute;
    margin: -1px; /* Negative margin to hide the loading text */
    width: 1px; 
    height: 1px; 
    overflow: hidden;
    white-space: nowrap;
    border: 0;
    padding: 0;
    clip: rect(0, 0, 0, 0);
  }
`;

const PaymentForm = styled.form`
    width: 100%;
    margin-top: 2rem;
`;

// ---------

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
`;

const InputField = styled.input`
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
`;

const InputRow = styled.div`
    display: flex;
    gap: 0.5rem;

    & > * {
        flex: 1;
    }
`;

const PaymentCard = ({ amount }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");

    const [errorMessage, setErrorMessage] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        fetch("/api/create-payment-intent/route", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
        })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret))
        .catch((err) => setErrorMessage("Failed to initialize payment."))
    }, [amount]);

    const handleSubmit = async(event) => {
        event.preventDefault();
        setLoading(true);

        if (!stripe || !elements) {
            return;
        }

        const { error: submitError } = await elements.submit();
        if (submitError) {
            setErrorMessage(submitError.message);
            setLoading(false);
            return;
        }

        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
        const { error } = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams: {
                return_url: `${baseUrl}/shop/payment-success?amount=${amount}`
            }
        });

        if (error) {
            // This point is only reached if there;s an immediate error when
            // confirming the payment. Show the error to customer
            // (ex. payment details incomplete)
            setErrorMessage(error.message);
        } else {
            // The payment UI automatically closes with a success animation.
            // Your customer is redirected to your `return-url`.
        }
        setLoading(false);

        // FIREBASE: Save order details to Firestore via API
        try {
            const response = await fetch('/api/save-order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON,stringify({
                    email,
                    firstName,
                    lastName,
                    phone,
                    amount,
                    paymentId: paymentIntent.id,
                }),
            });

            if (!response.ok) throw new Error('Failed to save order');

            const data = await response.json();
            console.log('Order saved successfully with ID:', data.orderId);
        } catch (err) {
            console.log('Error saving order:', err.message);
        }
    };

    if (!clientSecret || !stripe || !elements) {
        return (
          <FlexContainer>
            <Spinner role="status" />
          </FlexContainer>
        );
    }

    return(
        <>
            <PaymentForm onSubmit={handleSubmit}>
                <FormContainer>
                    <SectionTitle>Contact</SectionTitle>
                    <InputRow>
                        <InputField 
                            type="email" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </InputRow>
                    <InputRow>
                        <InputField 
                            type="text" 
                            placeholder="First name" 
                            value={firstName} 
                            onChange={(e) => setFirstName(e.target.value)} 
                        />
                        <InputField 
                            type="text" 
                            placeholder="Last name" 
                            value={lastName} 
                            onChange={(e) => setLastName(e.target.value)} 
                        />
                    </InputRow>
                    <InputRow>
                        <InputField 
                            type="text" 
                            placeholder="Phone" 
                            value={phone} 
                            onChange={(e) => setPhone(e.target.value)} 
                        />
                    </InputRow>
                </FormContainer>

                <PaymentSection>
                    <SectionTitle>Contact</SectionTitle>
                    {clientSecret && <PaymentElement />}
                    {errorMessage && <div>{errorMessage}</div>}
                    <PaymentButton
                        disabled={!stripe || loading || !email || ! firstName || !lastName || !phone}
                    >
                        {!loading ? `Pay $ ${amount}` : "Processing..."}
                    </PaymentButton>
                </PaymentSection>
            </PaymentForm>
        </>
    )
}

export default PaymentCard; 