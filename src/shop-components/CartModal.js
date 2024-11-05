import React from 'react';
import { useCart } from './CartContext';
import styled from 'styled-components';

const Modal = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    width: 400px;  /* Set the width to one-third of the viewport width */
    height: 100vh;   /* Set the height to the full height of the viewport */
    background: white;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
    padding: 20px;
    display: ${props => (props.visible ? 'block' : 'none')};
    overflow-y: auto; /* Add scrolling for overflowing content */
    transition: transform 0.3s ease; /* Optional: Smooth transition */
    z-index: 1000; /* Make sure it appears above other content */
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    display: ${props => (props.visible ? 'block' : 'none')};
    z-index: 999; /* Make sure overlay appears below the modal */
`;

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

const CartModal = ({ visible, onClose }) => {
    const { state, dispatch } = useCart();

    const handleAddQuantity = (product_id) => {
        const product = allProducts.find((p) => p.id === product_id);
        dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });
    };

    const handleSubtractQuantity = (product_id) => {
        const product = allProducts.find((p) => p.id === product_id);
        dispatch({ type: "REMOVE_FROM_CART", payload: { ...product, quantity: 1 } });
    };

    return (
        <>
            <Overlay visible={visible} onClick={onClose} /> {/* Close modal when overlay is clicked */}
            <Modal visible={visible}>
                <Top>
                    <h2>Cart - {state.items.length}</h2>
                    <CloseButton onClick={onClose}>x</CloseButton>
                </Top>
                <CartItems>
                    {state.items.map(item => (
                        <Item key={item.id}>
                            <ItemImage src={item.image} alt={item.id} />
                            <ItemInfo>
                                <ItemName>{`${item.type.toUpperCase().replace(/_/g, ' ')} - ${item.color.toUpperCase().replace(/_/g, ' ')}`}</ItemName>
                                {/* <ItemSize>{item.size}</ItemSize> */}
                                <ItemPrice>CAD ${item.price}</ItemPrice>
                                <ItemQuantity>
                                    <QuantitySubtract onClick={() => handleSubtractQuantity(item.id)}>
                                        -
                                    </QuantitySubtract>
                                    Quantity: {item.quantity}
                                    <QuantityAdd onClick={() => handleAddQuantity(item.id)}>
                                        +
                                    </QuantityAdd>
                                </ItemQuantity>
                            </ItemInfo>
                        </Item>
                    ))}
                </CartItems>
            </Modal>
        </>
    );
};

export default CartModal;

// ------------------------------------------------------------------------

const QuantitySubtract = styled.button`
`

const QuantityAdd = styled.button`
`

const Line = styled.div`
    border-top: solid 1px black;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const CloseButton = styled.button`
    border: none;
    padding: 10px 16px;
    font-color: grey;
    font-size: 15px;
    cursor: pointer;

    &:hover {
        background-color: rgb(230, 230, 230);
    }
`

const CartItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`


const Item = styled.div`
    display: flex;
    padding: 10px 0;
    width: 100%;
    height: 100%;
    
    border-top: 1px solid #ccc; /* This adds the line between items */
`;

const ItemImage = styled.img`
    height: 100px;    
`;

const ItemInfo = styled.div`
    padding-left: 10px;
    display: flex;
    flex-direction: column;
`

const ItemName = styled.div`
`
const ItemPrice = styled.div`
`
const ItemQuantity = styled.div`
`
const ItemSize = styled.div`
`