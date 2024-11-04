"use client"

import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../components/Reusable";
import ShopFooter from "../../components/shop-components/ShopFooter";
import Navbar from "@/components/Navbar";

import CheckoutPage from "@/shop-components/CheckoutPage";
import convertToSubcurrenct from "@/utility/ulilFunctions";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

export default function Shop() {
  const test_amount = 1.00;

  return (
    <>
      <h1>Next Stripe</h1>
      <div className="flex h-screen justify-center items-center">
        <Elements 
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: convertToSubcurrenct(test_amount),
            currency: "cad"}}
          >
          <CheckoutPage amount={test_amount} /> 
        </Elements>
      </div>
    </>
  );
}

// // List of all products
// const allProducts = [
//     {
//         id: 1,
//         name: "Black Crewneck",
//         type: "crewneck",
//         color: "black",
//         price: 45,
//         image: "/images/shop-images/Black-Crew-1.png",
//         quantities: { S: 2, M: 1, L: 8, XL: 8 }
//     },
//     {
//         id: 2,
//         name: "Black Hoodie",
//         type: "hoodie",
//         color: "black",
//         price: 55,
//         image: "/images/shop-images/Black-Hoodie-1.png",
//         quantities: { S: 4, M: 1, L: 0, XL: 0 }
//     },
//     {
//         id: 3,
//         name: "Light Blue Crewneck",
//         type: "crewneck",
//         color: "blue",
//         price: 45,
//         image: "/images/shop-images/Blue-Crew-1.png",
//         quantities: { S: 0, M: 0, L: 1, XL: 0 }
//     },
//     {
//         id: 4,
//         name: "Light Blue Hoodie",
//         type: "hoodie",
//         color: "blue",
//         price: 55,
//         image: "/images/shop-images/Blue-Hoodie-1.png",
//         quantities: { S: 0, M: 0, L: 0, XL: 2 }
//     },
//     {
//         id: 5,
//         name: "Grey Crewneck",
//         type: "crewneck",
//         color: "grey",
//         price: 45,
//         image: "/images/shop-images/Grey-Crew-1.png",
//         quantities: { S: 3, M: 2, L: 12, XL: 7 }
//     },
//     {
//         id: 6,
//         name: "Grey Hoodie",
//         type: "hoodie",
//         color: "grey",
//         price: 55,
//         image: "/images/shop-images/Grey-Hoodie-1.png",
//         quantities: { S: 5, M: 2, L: 8, XL: 5 }
//     },
//     {
//         id: 7,
//         name: "Sand Crewneck",
//         type: "crewneck",
//         color: "sand",
//         price: 45,
//         image: "/images/shop-images/Sand-Crew-1.png",
//         quantities: { S: 0, M: 0, L: 2, XL: 2 }
//     },
//     {
//         id: 8,
//         name: "Sand Hoodie",
//         type: "hoodie",
//         color: "sand",
//         price: 55,
//         image: "/images/shop-images/Sand-Hoodie-1.png",
//         quantities: { S: 4, M: 2, L: 0, XL: 0 }
//     },
//     {
//         id: 9,
//         name: "White Crewneck",
//         type: "crewneck",
//         color: "white",
//         price: 45,
//         image: "/images/shop-images/White-Crew-1.png",
//         quantities: { S: 4, M: 9, L: 17, XL: 9 }
//     },
//     {
//         id: 10,
//         name: "White Hoodie",
//         type: "hoodie",
//         color: "white",
//         price: 55,
//         image: "/images/shop-images/White-Hoodie-1.png",
//         quantities: { S: 9, M: 7, L: 14, XL: 6 }
//     },
// ];


// // Stripe
// import { loadStripe } from "@stripe/stripe-js";

// // Load Stripe outside of a component to avoid re-initializing it on re-render
// const stripePromise = loadStripe("your-public-stripe-key-here"); // Replace with your Stripe public key



// export default function Shop() {
//     const [selectedColor, setSelectedColor] = useState("");
//     const [selectedType, setSelectedType] = useState("");
//     const [cartItems, setCartItems] = useState([]);

//     // Filter products based on selected color and type
//     const filteredProducts = allProducts.filter(product => {
//         const colorMatch = selectedColor === "" || product.color === selectedColor;
//         const typeMatch = selectedType === "" || product.type === selectedType;
//         return colorMatch && typeMatch;
//     });

//     const addToCart = (product) => {
//       const itemExists = cartItems.find(item => item.id === product.id);
//       if (itemExists) {
//         setCartItems(
//           cartItems.map(item => 
//             item.id === product.id ? {...item, quantity: item.quantity + 1} : item
//           )
//         );
//       } else {
//         setCartItems([...cartItems, {...product, quantity: 1}]);
//       }
//     }

//     // Remove product from cart
//     const removeFromCart = (productId) => {
//       setCartItems(cartItems.filter(item => items.id !== productId));
//     }

//     // Calculate total price
//     const totalPrice = cartItems.reduce(
//       (acc, item) => acc + item.price * item.quantity, 0
//     );

//     // Stripe checkout
//     const handleCheckout = async () => {
//       const stripe = await stripePromise;
//       const response = await fetch("/api/checkout", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(cartItems),
//       });

//       const session = await response.json();
//       const result = await stripe.redirectToCheckout({
//         sessonId: session.id,
//       });

//       if (result.error) {
//         alert(result.error.message);
//       }
//     }

//     return (
//       <Container>
//       <Navbar />
//       <Filters>
//           <Filter>
//               <label htmlFor="color">Filter by color:</label>
//               <select
//                   id="color"
//                   value={selectedColor}
//                   onChange={(e) => setSelectedColor(e.target.value)}
//               >
//                   <option value="">All</option>
//                   <option value="black">Black</option>
//                   <option value="blue">Blue</option>
//                   <option value="grey">Grey</option>
//                   <option value="sand">Sand</option>
//                   <option value="white">White</option>
//               </select>
//           </Filter>

//           <Filter>
//               <label htmlFor="type">Filter by type:</label>
//               <select
//                   id="type"
//                   value={selectedType}
//                   onChange={(e) => setSelectedType(e.target.value)}
//               >
//                   <option value="">All</option>
//                   <option value="crewneck">Crewneck</option>
//                   <option value="hoodie">Hoodie</option>
//               </select>
//           </Filter>
//       </Filters>

//       <ProductList>
//           {filteredProducts.map(product => (
//               <Product key={product.id}>
//                   <img src={product.image} alt={product.name} />
//                   <h3>{product.name}</h3>
//                   <p>{`$${product.price}`}</p>
//                   <Button onClick={() => addToCart(product)}>Add to Cart</Button>
//               </Product>
//           ))}
//       </ProductList>

//       <Cart>
//           <h2>Your Cart</h2>
//           {cartItems.length > 0 ? (
//               <>
//                   {cartItems.map(item => (
//                       <CartItem key={item.id}>
//                           <img src={item.image} alt={item.name} />
//                           <div>
//                               <h3>{item.name}</h3>
//                               <p>Price: ${item.price}</p>
//                               <p>Quantity: {item.quantity}</p>
//                               <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
//                           </div>
//                       </CartItem>
//                   ))}
//                   <h3>Total: ${totalPrice}</h3>
//                   <Button onClick={handleCheckout}>Checkout</Button>
//               </>
//           ) : (
//               <p>Your cart is empty.</p>
//           )}
//       </Cart>

//       <ShopFooter />
//   </Container>
// );
// }

// // Styled components for cart, products, etc.
// const Container = styled.div`
// padding: 20px;
// `;

// const Filters = styled.div`
// display: flex;
// margin: 20px 0;
// `;

// const Filter = styled.div`
// margin-right: 20px;
// `;

// const ProductList = styled.div`
// display: grid;
// grid-template-columns: repeat(3, 1fr);
// gap: 20px;
// `;

// const Product = styled.div`
// display: flex;
// flex-direction: column;
// align-items: center;
// `;

// const Cart = styled.div`
// margin-top: 40px;
// `;

// const CartItem = styled.div`
// display: flex;
// align-items: center;

// img {
//   width: 100px;
//   height: 100px;
// }

// div {
//   margin-left: 20px;
// }
// `;