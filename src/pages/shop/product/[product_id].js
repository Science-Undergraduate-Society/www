// pages/shop/[id].js
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "../../../components/Reusable";
import ShopNavbar from "@/shop-components/ShopNavbar";

import { useCart } from "@/shop-components/CartContext";


// List of all products
const allProducts = [
    {
        id: "crewneck-black",
        type: "crewneck",
        color: "black",
        price: 45,
        image: "/images/shop-images/Black-Crew-1.png",
        quantities: { S: 2, M: 1, L: 8, XL: 8 }
    },
    {
        id: "hoodie-black",
        type: "hoodie",
        color: "black",
        price: 55,
        image: "/images/shop-images/Black-Hoodie-1.png",
        quantities: { S: 4, M: 1, L: 0, XL: 0 }
    },
    {
        id: "crewneck-blue",
        type: "crewneck",
        color: "light_blue",
        price: 45,
        image: "/images/shop-images/Blue-Crew-1.png",
        quantities: { S: 0, M: 0, L: 1, XL: 0 }
    },
    {
        id: "hoodie-light_blue",
        type: "hoodie",
        color: "light_blue",
        price: 55,
        image: "/images/shop-images/Blue-Hoodie-1.png",
        quantities: { S: 0, M: 0, L: 0, XL: 2 }
    },
    {
        id: "crewneck-grey",
        type: "crewneck",
        color: "grey",
        price: 45,
        image: "/images/shop-images/Grey-Crew-1.png",
        quantities: { S: 3, M: 2, L: 12, XL: 7 }
    },
    {
        id: "hoodie-grey",
        type: "hoodie",
        color: "grey",
        price: 55,
        image: "/images/shop-images/Grey-Hoodie-1.png",
        quantities: { S: 5, M: 2, L: 8, XL: 5 }
    },
    {
        id: "crewneck-sand",
        type: "crewneck",
        color: "sand",
        price: 45,
        image: "/images/shop-images/Sand-Crew-1.png",
        quantities: { S: 0, M: 0, L: 2, XL: 2 }
    },
    {
        id: "hoodie-sand",
        type: "hoodie",
        color: "sand",
        price: 55,
        image: "/images/shop-images/Sand-Hoodie-1.png",
        quantities: { S: 4, M: 2, L: 0, XL: 0 }
    },
    {
        id: "crewneck-white",
        type: "crewneck",
        color: "white",
        price: 45,
        image: "/images/shop-images/White-Crew-1.png",
        quantities: { S: 4, M: 9, L: 17, XL: 9 }
    },
    {
        id: "hoodie-white",
        type: "hoodie",
        color: "white",
        price: 55,
        image: "/images/shop-images/White-Hoodie-1.png",
        quantities: { S: 9, M: 7, L: 14, XL: 6 }
    },
];

export default function ProductPage() {
    const router = useRouter();
    const { product_id } = router.query;
    const product = allProducts.find((p) => p.id === product_id);
    const { dispatch } = useCart();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (product) {
            setLoading(false);
        }
    }, [product]);

    const addToCart = () => {
        if (product) {
            dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });
        }
    };

    if (loading) {
        return <div>Loading...</div>; // Show a loading state
    }

    if (!product) {
        return <div>Product not found.</div>; // Handle case when product is not found
    }

    return (
        <div>
            <ShopNavbar />
            <h1>{`${product.type.toUpperCase()} - ${product.color.toUpperCase()}`}</h1>
            <img src={product.image} alt={product.type} />
            <p>Price: ${product.price}</p>
            <Button onClick={addToCart}>Add to Cart</Button>
        </div>
    );
}