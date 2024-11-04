"use client"
import React, {useEffect, useState} from "react";
import {
    useStripe,
    useElements,
    PaymentElement,
} from '@stripe/react-stripe-js'
import convertToSubcurrenct from "@/utility/ulilFunctions";


const CheckoutPage = ({ amount }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setErrorMessage] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState(false);


    return(
        <>
            Yas
        </>
    )
}

export default CheckoutPage;