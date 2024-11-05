// pages/shop/[id].js
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "../../../components/Reusable";
import Navbar from "@/components/Navbar";

const allProducts = [
    {
        id: 1,
        name: "Black Crewneck",
        type: "crewneck",
        color: "black",
        price: 45,
        image: "/images/shop-images/Black-Crew-1.png",
        quantities: { S: 2, M: 1, L: 8, XL: 8 }
    },
    {
        id: 2,
        name: "Black Hoodie",
        type: "hoodie",
        color: "black",
        price: 55,
        image: "/images/shop-images/Black-Hoodie-1.png",
        quantities: { S: 4, M: 1, L: 0, XL: 0 }
    },
    {
        id: 3,
        name: "Light Blue Crewneck",
        type: "crewneck",
        color: "blue",
        price: 45,
        image: "/images/shop-images/Blue-Crew-1.png",
        quantities: { S: 0, M: 0, L: 1, XL: 0 }
    },
    {
        id: 4,
        name: "Light Blue Hoodie",
        type: "hoodie",
        color: "blue",
        price: 55,
        image: "/images/shop-images/Blue-Hoodie-1.png",
        quantities: { S: 0, M: 0, L: 0, XL: 2 }
    },
    {
        id: 5,
        name: "Grey Crewneck",
        type: "crewneck",
        color: "grey",
        price: 45,
        image: "/images/shop-images/Grey-Crew-1.png",
        quantities: { S: 3, M: 2, L: 12, XL: 7 }
    },
    {
        id: 6,
        name: "Grey Hoodie",
        type: "hoodie",
        color: "grey",
        price: 55,
        image: "/images/shop-images/Grey-Hoodie-1.png",
        quantities: { S: 5, M: 2, L: 8, XL: 5 }
    },
    {
        id: 7,
        name: "Sand Crewneck",
        type: "crewneck",
        color: "sand",
        price: 45,
        image: "/images/shop-images/Sand-Crew-1.png",
        quantities: { S: 0, M: 0, L: 2, XL: 2 }
    },
    {
        id: 8,
        name: "Sand Hoodie",
        type: "hoodie",
        color: "sand",
        price: 55,
        image: "/images/shop-images/Sand-Hoodie-1.png",
        quantities: { S: 4, M: 2, L: 0, XL: 0 }
    },
    {
        id: 9,
        name: "White Crewneck",
        type: "crewneck",
        color: "white",
        price: 45,
        image: "/images/shop-images/White-Crew-1.png",
        quantities: { S: 4, M: 9, L: 17, XL: 9 }
    },
    {
        id: 10,
        name: "White Hoodie",
        type: "hoodie",
        color: "white",
        price: 55,
        image: "/images/shop-images/White-Hoodie-1.png",
        quantities: { S: 9, M: 7, L: 14, XL: 6 }
    },
];

export default function ProductPage() {
    const router = useRouter();
    const { id } = router.query;
    const product = allProducts.find((p) => p.id === parseInt(id));
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    const addToCart = () => {
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
        localStorage.setItem("cart", JSON.stringify(cart));
    };

    if (!product) return <p>Loading...</p>;

    return (
        <>
            <Navbar />
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>${product.price}</p>
            <Button onClick={addToCart}>Add to Cart</Button>
        </>
    );
}
