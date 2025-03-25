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
        quantities: { S: 4, M: 1, L: 1, XL: 1 },
        productDescription: "",
    },
    {
        id: "crewneck-blue",
        type: "crewneck",
        color: "light_blue",
        price: 45,
        image: ["/images/shop-images/Blue-Crew-1.png"],
        quantities: { S: 1, M: 1, L: 1, XL: 1 }
    },
    {
        id: "hoodie-light_blue",
        type: "hoodie",
        color: "light_blue",
        price: 55,
        image: ["/images/shop-images/Blue-Hoodie-1.png"],
        quantities: { S: 1, M: 1, L: 1, XL: 2 }
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
        quantities: { S: 1, M: 1, L: 2, XL: 2 }
    },
    {
        id: "hoodie-sand",
        type: "hoodie",
        color: "sand",
        price: 55,
        image: ["/images/shop-images/Sand-Hoodie-1.png"],
        quantities: { S: 4, M: 2, L: 1, XL: 1 }
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

const CheckoutButton = styled.button`
  width: 100%;
  background: #007bff;
  color: #fff;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin-top: 15px;
  border-radius: 4px;
  &:hover {
    background: #0056b3;
  }
`;

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
            if (!Array.isArray(product.image)) {
                product.image = [product.image]; // Convert to array if it's a string
            }
            setSelectedImage(product.image[0]);
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

    function showCheckoutWindow(e) {
        e.preventDefault();
        const url = "https://square.link/u/HPsERMII?src=embed";
        const title = "Square Payment Links";
        const topWindow = window.top ? window.top : window;
        const dualScreenLeft = topWindow.screenLeft !== undefined ? topWindow.screenLeft : topWindow.screenX;
        const dualScreenTop = topWindow.screenTop !== undefined ? topWindow.screenTop : topWindow.screenY;
        const width = topWindow.innerWidth || document.documentElement.clientWidth || screen.width;
        const height = topWindow.innerHeight || document.documentElement.clientHeight || screen.height;
        const h = height * 0.75;
        const w = 500;
        const systemZoom = width / topWindow.screen.availWidth;
        const left = (width - w) / 2 / systemZoom + dualScreenLeft;
        const top = (height - h) / 2 / systemZoom + dualScreenTop;
        const newWindow = window.open(url, title, `scrollbars=yes, width=${w / systemZoom}, height=${h / systemZoom}, top=${top}, left=${left}`);
        if (window.focus) newWindow.focus();
    }
    

    return (
        <>
            <ShopNavbar onCartOpen={() => setIsCartOpen(true)} showShopIcon={true} />

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
                    <p>SIZES AVAILABLE:</p>
                    <SizeContainer>
                        {Object.keys(product.quantities).map((size) => (
                            <SizeButton key={size}>
                                {size}
                            </SizeButton>
                        ))}
                    </SizeContainer>
                    <ProductDescription>{product.productDescription}</ProductDescription>
                    {/* <AddButton onClick={addToCart}>ADD TO CART</AddButton> */}
                    <CheckoutButton onClick={showCheckoutWindow}>Order Now</CheckoutButton>

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
    flex-direction: column;
    align-items: center;
    padding: 20px;
    
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
    }
`;

// ----------------------------------------------------------------

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
    
    @media (min-width: 768px) {
        margin-right: 40px;
    }
`;

const ProductImage = styled.img`
    width: 100%;
    max-width: 350px;
    height: auto;
    border-radius: 10px;
`;

const ImageOptions = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
    overflow-x: auto;
    padding: 5px;
    
    @media (min-width: 768px) {
        justify-content: center;
    }
`;


const ImgLink = styled.a`
    cursor: pointer;
`

const ProductImageOption = styled.img`
    width: 100px;
    height: 100px;
`

// ----------------------------------------------------------------

const ProductContent = styled.div`
    width: 100%;
    max-width: 400px;
    text-align: center;
    
    @media (min-width: 768px) {
        text-align: left;
    }
`;


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
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    
    @media (min-width: 768px) {
        justify-content: flex-start;
    }
`;

const SizeButton = styled.button`
    padding: 8px 16px;
    font-size: 14px;
    border: 0px solid #000;
    background: ${(props) => (props.isSelected ? "#000" : "#fff")};
    color: ${(props) => (props.isSelected ? "#fff" : "#000")};
    // cursor: pointer;
    border-radius: 4px;
    transition: 0.3s;
    
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;
