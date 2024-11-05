import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // Initialize with secret key

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Parse the amount from the request body
      const { amount } = req.body;

      // Create the payment intent with Stripe
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: 'cad',
        automatic_payment_methods: { enabled: true },
      });

      // Return the client secret to the client
      res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      console.error('Internal Error: ', error);

      // Return an error response
      res.status(500).json({ error: `Internal Server Error: ${error.message}` });
    }
  } else {
    // Handle any non-POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
