import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function PaymentSuccess() {
  const router = useRouter();
  const { amount } = router.query;

  return (
      <Container>
          <div className="mb-10">
          <Title>Thank you!</Title>
          <Subtitle>You successfully sent</Subtitle>
  
          <AmountDisplay>
              ${amount || 'AMOUNT NOT DEFINED'} {/* Default to '0.00' if amount is not defined */}
          </AmountDisplay>
          </div>

          <ShopHomeButton href="/shop">Back to Shop Home</ShopHomeButton>
      </Container>
  );
}
const ShopHomeButton = styled.a`
  text-decoration: none;
  background-color: transparent;
  color: white;
  padding: 15px 35px;
  border-radius: 30px;
  border: 1px solid white;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;

  &:hover {
      color: light-grey;
      border: 1px solid light-grey;
  }
`;

const Container = styled.main`
  max-width: 1024px; /* Equivalent to max-w-6xl */
  margin: 2.5rem auto; /* Equivalent to m-10 */
  padding: 2.5rem; /* Equivalent to p-10 */
  text-align: center;
  border: 1px solid transparent; /* For the border */
  border-radius: 0.5rem; /* Equivalent to rounded-md */
  background: linear-gradient(to top right, #3b82f6, #7e3af2); /* Gradient background */
  color: white;
`;

const Title = styled.h1`
  font-size: 2.25rem; /* Equivalent to text-4xl */
  font-weight: 800; /* Equivalent to font-extrabold */
  margin-bottom: 0.5rem; /* Equivalent to mb-2 */
`;

const Subtitle = styled.h2`
  font-size: 1.5rem; /* Equivalent to text-2xl */
`;

const AmountDisplay = styled.div`
  background: white;
  padding: 0.5rem; /* Equivalent to p-2 */
  border-radius: 0.375rem; /* Equivalent to rounded-md */
  color: #7e3af2; /* Equivalent to text-purple-500 */
  margin-top: 1.25rem; /* Equivalent to mt-5 */
  font-size: 2.25rem; /* Equivalent to text-4xl */
  font-weight: bold; /* Equivalent to font-bold */

  margin-bottom: 3rem;ess

`;