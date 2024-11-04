import { NextRequest, NextResponse } from "next/server";

// safe to do here because on server side (AKA NEVER SET TO USE CLIENT)
const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)

/**
 * POST request endpoint for stripe API call
 * @param {NextRequest} request
 */ 
export async function POST(request) {
    try{
        const {amount} = await request.json();
        
        const paymentIntent = await stripe.paymentIntent.create({
            amount: "amount",
            currency: "usd",
            automatic_payment_methods: { enabled: true},
        });

        return NextResponse.json({ clientSecret: paymentIntent.client_secret });

    } catch (error) {
        console.log("Internal Error: ", error);
        // TODO: HANDLE OTHER ERRORS (e.g. network issues, parsing errors)

        return NextResponse.json(
            { error: `Internal Server Error: ${error}` },
            { status: 500 }
        )

    }
}