// pages/shop/[id].js
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ShopNavbar from "@/shop-components/ShopNavbarAlt";
import ShopFooter from "@/shop-components/ShopFooter";
import styled from "styled-components";
import { useCart } from "@/shop-components/CartContext";
import { FaArrowLeft } from "react-icons/fa";

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
        image: [
            "/images/shop-images/Black-Hoodie-1.png",
            "/images/shop-images/Sand-Hoodie-1.png",
            "/images/shop-images/Black-Hoodie-1.png",
            "/images/shop-images/Sand-Hoodie-1.png"
        ],
        quantities: { S: 4, M: 1, L: 0, XL: 0 },
        productDescription: "This description is not real piece a touch of UBC- im trying to fill this description with as many words as I can, in an attempt to mimic the style of another e-commerce webiste, based in Vancouver. I love the intricate detailing that goes into a bouncy castle. Consider the implications of a rock.",
    },
    {
        id: "crewneck-blue",
        type: "crewneck",
        color: "light_blue",
        price: 45,
        image: ["/images/shop-images/Blue-Crew-1.png"],
        quantities: { S: 0, M: 0, L: 1, XL: 0 }
    },
    {
        id: "hoodie-light_blue",
        type: "hoodie",
        color: "light_blue",
        price: 55,
        image: ["/images/shop-images/Blue-Hoodie-1.png"],
        quantities: { S: 0, M: 0, L: 0, XL: 2 }
    },
    {
        id: "crewneck-grey",
        type: "crewneck",
        color: "grey",
        price: 45,
        image: ["/images/shop-images/Grey-Crew-1.png"],
        quantities: { S: 3, M: 2, L: 12, XL: 7 }
    },
    {
        id: "hoodie-grey",
        type: "hoodie",
        color: "grey",
        price: 55,
        image: ["/images/shop-images/Grey-Hoodie-1.png"],
        quantities: { S: 5, M: 2, L: 8, XL: 5 }
    },
    {
        id: "crewneck-sand",
        type: "crewneck",
        color: "sand",
        price: 45,
        image: ["/images/shop-images/Sand-Crew-1.png"],
        quantities: { S: 0, M: 0, L: 2, XL: 2 }
    },
    {
        id: "hoodie-sand",
        type: "hoodie",
        color: "sand",
        price: 55,
        image: ["/images/shop-images/Sand-Hoodie-1.png"],
        quantities: { S: 4, M: 2, L: 0, XL: 0 }
    },
    {
        id: "crewneck-white",
        type: "crewneck",
        color: "white",
        price: 45,
        image: ["/images/shop-images/White-Crew-1.png"],
        quantities: { S: 4, M: 9, L: 17, XL: 9 }
    },
    {
        id: "hoodie-white",
        type: "hoodie",
        color: "white",
        price: 55,
        image: ["/images/shop-images/White-Hoodie-1.png"],
        quantities: { S: 9, M: 7, L: 14, XL: 6 }
    },
];

export default function ProductPage() {
    const router = useRouter();
    const { product_id } = router.query;
    const product = allProducts.find((p) => p.id === product_id);
    const { dispatch } = useCart();
    const [loading, setLoading] = useState(true);
    const [selectedSize, setSelectedSize] = useState();
    const [showSuccessPopup, setShowSuccessPopup] = useState(false); 
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [showFailPopup, setShowFailPopup] = useState(false); 
    const [selectedImage, setSelectedImage] = useState("");
    
    // wait until product is retrieved
    useEffect(() => {
        if (product) {
            setLoading(false);
        }
    }, [product]);

    // wait until product is retrieved to render
    useEffect(() => {
        if (product && product.image && product.image.length > 0) {
            setSelectedImage(product.image[0]);
        }
    }, [product]);

    const handleSizeSelection = (size) => {
        setSelectedSize(size); // Update the selected size
    };

    const addToCart = () => {
        if (selectedSize && product) {
            dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1, size: selectedSize } });
            setShowSuccessPopup(true); // Show the success message
            setTimeout(() => setShowSuccessPopup(false), 2000); 
        } else {
            setShowFailPopup(true); // Show the fail message
            setTimeout(() => setShowFailPopup(false), 2000);
        }
        setIsCartOpen(true);
    };


    if (loading) {
        return <div>Loading...</div>; // Show a loading state
    }

    if (!product) {
        return <div>Product not found.</div>; // Handle case when product is not found
    }

    return (
        <>
            <ShopNavbar onCartOpen={() => setIsCartOpen(true)} />

            {showSuccessPopup && (
                <SuccessPopupMessage>
                    Added {selectedSize} {product.color} {product.type} to cart!
                </SuccessPopupMessage>
            )}

            {showFailPopup && (
                <FailPopupMessage>
                    Please select a size!
                </FailPopupMessage>
            )}
            
            <BackToShop>
                <a href="/shop"><FaArrowLeft/>Back to Shop</a>
            </BackToShop>

            <Content>
                <ImageContainer>
                    <ImageOptions>
                        {product.image.map((imgSrc) => (
                            <ImgLink onClick={() => setSelectedImage(imgSrc)}>   
                                <ProductImageOption src={imgSrc}/>
                            </ImgLink>
                        ))}
                    </ImageOptions>
                    <ProductImage src={selectedImage} />
                </ImageContainer>

                <ProductContent>
                    <ProductName>{`${product.type.toUpperCase()} - ${product.color.toUpperCase()}`}</ProductName>
                    <Price>${product.price} CAD</Price>
                    <p>SIZE</p>
                    <SizeContainer>
                        {Object.keys(product.quantities).map((size) => (
                            <SizeButton
                                key={size}
                                disabled={product.quantities[size] === 0}
                                onClick={() => handleSizeSelection(size)}
                                isSelected={selectedSize === size}
                            >
                                {/* {size} ({product.quantities[size]}) */}
                                {size}
                            </SizeButton>
                        ))}
                    </SizeContainer>
                    <ProductDescription>{product.productDescription}</ProductDescription>
                    <AddButton onClick={addToCart}>ADD TO CART</AddButton>
                </ProductContent>
            </Content>

            <ShopFooter />
        </>
    );
}

// ----------------------------------------------------------------

const FailPopupMessage = styled.div`
    position: fixed;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%); 
    background-color: red;
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    font-size: 16px;
    z-index: 1000;
    opacity: 0; // Start hidden
    animation: fadeInOut 2s ease forwards; 

    @keyframes fadeInOut {
        0% { opacity: 0; }
        10% { opacity: 0.7; }
        90% { opacity: 0.7; }
        100% { opacity: 0; }
    }
`;

const SuccessPopupMessage = styled(FailPopupMessage)`
    background-color: green;
`;

// ----------------------------------------------------------------

const BackToShop = styled.div`
    font-size: 15px;
    margin-left: 50px;
    margin-top: 30px;
    margin-bottom: 40px;
    text-decoration: none; 

    & a {
        text-decoration: none; /* No underline on anchor tag */
        color: inherit; /* Inherit text color */
        display: flex; /* Ensure contents inside the anchor are aligned */
        flex-direction: row;
        align-items: center; /* Vertically center the contents */
        justify-content: left; /* Horizontally center the contents */
        gap: 10px;
    }

    &:hover{
        color: grey;
    }
`;

// ----------------------------------------------------------------

const Content = styled.div`
    display: flex;
    align-items: top;
    justify-content: center;
    gap: 60px;
    margin-bottom: 3rem;
`

// ----------------------------------------------------------------

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    width: 40%;
`

const ImageOptions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-right: 40px;
`

const ImgLink = styled.a`
    cursor: pointer;
`

const ProductImageOption = styled.img`
    width: 100px;
    height: 100px;
`

const ProductImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`

// ----------------------------------------------------------------

const ProductContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 40%;
`

const ProductName = styled.h1`

`

const Price = styled.p`
`

const ProductDescription = styled.p`
    font-size: 15px;
`

const AddButton = styled.button`
    font-size: 15px;
    text-decoration: none;
    border: none;
    border-radius: 3px;
    background-color: #046bd2;
    color: white;
    padding: 20px 0;
    width: 100%;
    &:hover {
        background-color: #0357a9;
    }
    cursor: pointer;
`

const SizeContainer = styled.div`
    display: flex;
    gap: 5px;
    margin-bottom: 10px;
`

const SizeButton = styled.button`
    font-size: 16px;
    color: black;
    background-color: transparent;
    padding: 10px 20px;
    border: ${({ isSelected }) => (isSelected ? "2px solid rgb(20,20,20)" : "1px solid rgb(150,150,150)")};
    transition: background-color 0.3s, border 0.3s;
    cursor: pointer;

    &:disabled {
        text-decoration: line-through;
        opacity: 0.25;
        cursor: not-allowed;
        &:hover {
            background-color: white;
            color: black;
        }
    }
`