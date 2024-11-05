"use client"

import React, { useState } from "react";
import styled from "styled-components";
import Link from 'next/link';
import ShopFooter from "../../components/shop-components/ShopFooter";
import Navbar from "@/components/Navbar";

import CheckoutPage from "@/shop-components/CheckoutPage";
import convertToSubcurrency from "@/utility/ulilFunctions";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

// export default function Shop() {
//   const test_amount = 1.23;

//   return (
//     <>
//       <h1>Next Stripe</h1>
//       <div className="flex h-screen justify-center items-center">
//         <Elements 
//           stripe={stripePromise}
//           options={{
//             mode: "payment",
//             amount: convertToSubcurrency(test_amount),
//             currency: "cad"}}
//           >
//           <CheckoutPage amount={test_amount} /> 
//         </Elements>
//       </div>
//     </>
//   );
// }

// List of all products
const allProducts = [
    {
        id: 1,
        type: "crewneck",
        color: "black",
        price: 45,
        image: "/images/shop-images/Black-Crew-1.png",
        quantities: { S: 2, M: 1, L: 8, XL: 8 }
    },
    {
        id: 2,
        type: "hoodie",
        color: "black",
        price: 55,
        image: "/images/shop-images/Black-Hoodie-1.png",
        quantities: { S: 4, M: 1, L: 0, XL: 0 }
    },
    {
        id: 3,
        type: "crewneck",
        color: "light_blue",
        price: 45,
        image: "/images/shop-images/Blue-Crew-1.png",
        quantities: { S: 0, M: 0, L: 1, XL: 0 }
    },
    {
        id: 4,
        type: "hoodie",
        color: "light_blue",
        price: 55,
        image: "/images/shop-images/Blue-Hoodie-1.png",
        quantities: { S: 0, M: 0, L: 0, XL: 2 }
    },
    {
        id: 5,
        type: "crewneck",
        color: "grey",
        price: 45,
        image: "/images/shop-images/Grey-Crew-1.png",
        quantities: { S: 3, M: 2, L: 12, XL: 7 }
    },
    {
        id: 6,
        type: "hoodie",
        color: "grey",
        price: 55,
        image: "/images/shop-images/Grey-Hoodie-1.png",
        quantities: { S: 5, M: 2, L: 8, XL: 5 }
    },
    {
        id: 7,
        type: "crewneck",
        color: "sand",
        price: 45,
        image: "/images/shop-images/Sand-Crew-1.png",
        quantities: { S: 0, M: 0, L: 2, XL: 2 }
    },
    {
        id: 8,
        type: "hoodie",
        color: "sand",
        price: 55,
        image: "/images/shop-images/Sand-Hoodie-1.png",
        quantities: { S: 4, M: 2, L: 0, XL: 0 }
    },
    {
        id: 9,
        type: "crewneck",
        color: "white",
        price: 45,
        image: "/images/shop-images/White-Crew-1.png",
        quantities: { S: 4, M: 9, L: 17, XL: 9 }
    },
    {
        id: 10,
        type: "hoodie",
        color: "white",
        price: 55,
        image: "/images/shop-images/White-Hoodie-1.png",
        quantities: { S: 9, M: 7, L: 14, XL: 6 }
    },
];

export default function Shop() {
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedType, setSelectedType] = useState("all");
    const [cart, setCart] = useState([]);

    // Filter products based on selected color and type
    const filteredProducts = (selectedType === "all") ? 
    allProducts
    : 
    allProducts.filter(product => {
        const colorMatch = selectedColor === "" || product.color === selectedColor;
        const typeMatch = selectedType === "" || product.type === selectedType;
        return colorMatch && typeMatch;
    });

    const addToCart = (product) => {
      setCart((prevCart) => {
        const itemInCart = prevCart.find(item => item.id === product.id);
        if (itemInCart) {
            return prevCart.map(item => 
                item.id === product.id 
                    ? { ...item, quantity: item.quantity + 1 } 
                    : item
            );
        } else {
            return [...prevCart, { ...product, quantity: 1 }];
        }
      });
    };

    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    function getFilterTitle(type) {
      if (type === "hoodie") {
        return "HOODIES";
      }
      if (type === "crewneck") {
        return "CREWNECKS";
      }
      return "SHOP ALL";
    }

    return (
        <>
          <Navbar />
          <Content>
            <FilterTitle>{getFilterTitle(selectedType)}</FilterTitle>
            <Container>
              <FilterBar>
                <Dropdown onChange={(e) => setSelectedColor(e.target.value)}>
                    <option value="">ALL COLOURS</option>
                    <option value="black">BLACK</option>
                    <option value="blue">BLUE</option>
                    <option value="grey">GREY</option>
                    <option value="sand">SAND</option>
                    <option value="white">WHITE</option>
                </Dropdown>
                <FilterButton selected={selectedType === "hoodie"} onClick={() => setSelectedType("hoodie")}>
                    HOODIES
                </FilterButton>
                <FilterButton selected={selectedType === "crewneck"} onClick={() => setSelectedType("crewneck")}>
                    CREWNECKS
                </FilterButton>
                <FilterButton selected={selectedType === "all"} onClick={() => setSelectedType("all")}>
                    SHOP ALL 
                </FilterButton>
              </FilterBar>
              
              <ProductGrid>
                {filteredProducts.map(product => (
                  <Link href={`/shop/product/${product.id}`} key={product.id} passHref>
                    <ProductCard>
                        <ProductImage src={product.image} alt={product.name} />
                        <ProductTitle>
                            {`${product.type.toUpperCase().replace(/_/g, ' ')} - ${product.color.toUpperCase().replace(/_/g, ' ')}`}
                        </ProductTitle>
                        <ProductPrice>${product.price}</ProductPrice>
                    </ProductCard>
                  </Link>
                ))}
              </ProductGrid>
            </Container>
            <Cart>
              {cart.length === 0 ? (
                      <p>Your cart is empty.</p>
                  ) : (
                      cart.map(item => (
                          <div key={item.id}>
                              <p>{item.name} - Quantity: {item.quantity}</p>
                          </div>
                      ))
                  )}
                  <p>Total Amount: ${totalAmount.toFixed(2)}</p>
            </Cart>
            {cart.length > 0 && (
                <div className="checkout">
                    <h2>Checkout</h2>
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
                </div>
            )}
          </Content>
          <ShopFooter />
        </>
    );
}

const FilterTitle = styled.h1`

`;

const Cart = styled.div`
    
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const Description = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 50px;
  color: #222755;

  @media(max-width: 768px) {
    font-size: 40px;
  }

  @media(max-width: 480px) {
    font-size: 30px;
  }
`;

const ShopGridContainer = styled.div`
  display: flex;
  width: 70%;

  @media(max-width: 700px) {
    width: 100%;
    flex-direction: column;
  }
`;

const ShopImage = styled.img`
  width: 20%;
  height: auto;
  object-fit: cover;

  @media(max-width: 768px) {
    width: 50%;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 13rem;

  @media(max-width: 768px) {
    margin-top: 8rem;
    padding: 0 10px;
  }
`;

const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  width: 100%;
  padding-left: 40px;

  margin-bottom: 3rem;

  @media(max-width: 768px) {
    padding-left: 20px;
  }
`;

const FilterBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 20px;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid #eaeaea;

  @media(max-width: 500px) {
    gap: 10px;
    font-size: 12px;
  }
`;

const Dropdown = styled.select`
  padding: 10px 20px;
  font-size: 16px;

  @media(max-width: 500px) {
    font-size: 14px;
    padding: 6px 10px;
  }
`;

const FilterButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;
  color: ${props => props.selected ? '#0173be' : 'black'};

  &:hover {
    text-decoration: underline;
  }

  @media(max-width: 500px) {
    font-size: 14px;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media(max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media(max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 10px;
  text-align: left;

  @media(max-width: 500px) {
    padding: 5px;
  }
`;

const ProductTitle = styled.p`
  font-size: 16px;
  margin: 10px 0;

  @media(max-width: 500px) {
    font-size: 14px;
  }
`;

const ProductPrice = styled.p`
  font-size: 16px;
  color: #555;
  font-weight: bold;

  @media(max-width: 500px) {
    font-size: 14px;
  }
`;

const SizeQuantities = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #333;
  display: flex;
  gap: 5px;

  @media(max-width: 500px) {
    font-size: 12px;
  }
`;