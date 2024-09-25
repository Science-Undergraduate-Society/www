import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../components/Reusable";
import ShopFooter from "../../components/shop-components/ShopFooter";
import Navbar from "@/components/Navbar";

// List of all products
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


export default function Shop() {
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedType, setSelectedType] = useState("");

    // Filter products based on selected color and type
    const filteredProducts = allProducts.filter(product => {
        const colorMatch = selectedColor === "" || product.color === selectedColor;
        const typeMatch = selectedType === "" || product.type === selectedType;
        return colorMatch && typeMatch;
    });

    return (
        <>
            <Navbar />
            <Content>
                {/* <Hero>

                </Hero> */}
                <MainInfo>
                        <Title>SCIENCE UNDERGRADUATE SOCIETY MERCH SHOP</Title>
                        
                        <h2>Merch can be bought at Abdul Ladha during the following hours: </h2>
                        <p>Thursdays: 2pm - 3pm</p>
                        <p>Fridays: 11am - 12pm</p>
                        <Contact>
                            For any merch related questions, please reach out to our sales team at sales@sus.ubc.ca
                        </Contact>
                    </MainInfo>

                <Container>
                    <FilterBar>
                        <Dropdown onChange={(e) => setSelectedColor(e.target.value)}>
                            <option value="">All Colors</option>
                            <option value="black">Black</option>
                            <option value="blue">Blue</option>
                            <option value="grey">Grey</option>
                            <option value="sand">Sand</option>
                            <option value="white">White</option>
                        </Dropdown>
                        <FilterButton selected={selectedType === "hoodie"} onClick={() => setSelectedType("hoodie")}>
                            Hoodie
                        </FilterButton>
                        <FilterButton selected={selectedType === "crewneck"} onClick={() => setSelectedType("crewneck")}>
                            Crewneck
                        </FilterButton>
                        <FilterButton selected={selectedType === ""} onClick={() => setSelectedType("")}>
                            All Styles 
                        </FilterButton>
                    </FilterBar>
                    
                    <ProductGrid>
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id}>
                                <ProductImage src={product.image} alt={product.name} />
                                <ProductTitle>{product.name}</ProductTitle>
                                <SizeQuantities>
                                    Available Sizes: 
                                    {Object.entries(product.quantities).map(([size, quantity]) =>
                                        quantity !== 0 ? (
                                            <div key={size}>
                                                <strong>{size}</strong>
                                            </div>
                                        ) : null
                                    )}
                                </SizeQuantities>
                                <ProductPrice>${product.price}</ProductPrice>
                            </ProductCard>
                        ))}
                    </ProductGrid>

                </Container>
                
                {/* <StyledButton as="a" href="/">Back Home</StyledButton> */}
                <Description></Description>
            </Content>
            <ShopFooter />
        </>
    );
}

const Hero = styled.div`
    
`;

const Title = styled.h1`
    font-size: 50px;
    color: #222755;
`;

const ShopGridContainer = styled.div`
  display: flex;
  width: 70%;

  @media(max-width: 700px) {
    width: 0%;
  }
`

const ShopImage = styled.img`
  width: 20%;
  height: auto;
  object-fit: cover;
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 13rem;
`;

const MainInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    width: 100%;
    padding-left: 40px;

    margin-bottom: 3rem;
`

const Contact = styled.div`
    font-weight: bold;
    margin-top: 15px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
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
        font-size: 10px;
    }
`;

const Dropdown = styled.select`
    padding: 10px 20px;
    font-size: 16px;

    @media(max-width: 500px) {
        font-size: 15px;
    }

    @media(max-width: 500px) {
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
        font-size: 15px;
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
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 10px;
    text-align: left;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProductTitle = styled.p`
  font-size: 16px;
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  color: #555;
  font-weight: bold;
`;

const Description = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SizeQuantities = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #333;
  display: flex;
  gap: 5px;
`;
