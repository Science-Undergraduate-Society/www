import React from 'react';
import { useCart } from './CartContext';
import styled from 'styled-components';
import { FaShoppingBasket } from "react-icons/fa";
// import { loadStripe } from "@stripe/stripe-js";

// import convertToSubcurrency from "@/utility/ulilFunctions";
// import { Elements } from "@stripe/react-stripe-js";

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

    const handleAddQuantity = (product_id, item_size) => {
        const product = allProducts.find((p) => p.id === product_id);
        dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1, size: item_size} });
    };

    const handleSubtractQuantity = (product_id, item_size) => {
        const product = allProducts.find((p) => p.id === product_id);
        dispatch({ type: "REMOVE_FROM_CART", payload: { ...product, quantity: 1, size: item_size} });
    };

    const totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0)

    return (
        <>
            <Overlay visible={visible} onClick={onClose} /> {/* Close modal when overlay is clicked */}
            <Modal visible={visible}>
                <Top>
                    <h2>Cart - {state.items.reduce((total, item) => total + item.quantity, 0)}</h2>
                    <CloseButton onClick={onClose}>x</CloseButton>
                </Top>

                <CartItems>
                    {state.items.map(item => (
                        <Item key={item.id}>
                            <ItemImage src={item.image[0]} alt={item.id} />
                            <ItemInfo>
                                <ItemName>{`${item.type.toUpperCase().replace(/_/g, ' ')} - ${item.color.toUpperCase().replace(/_/g, ' ')}`}</ItemName>
                                <ItemSize>Size: {item.size}</ItemSize>
                                <ItemPrice>
                                    <p>CAD ${item.price * item.quantity}</p>
                                    <p>({item.price} ea)</p>
                                </ItemPrice>
                                <ItemQuantity>
                                    <QuantitySubtract onClick={() => handleSubtractQuantity(item.id, item.size)}>
                                        -
                                    </QuantitySubtract>
                                    <QuantityValue>{item.quantity}</QuantityValue>
                                    <QuantityAdd onClick={() => handleAddQuantity(item.id, item.size)}>
                                        +
                                    </QuantityAdd>
                                </ItemQuantity>
                            </ItemInfo>
                        </Item>
                    ))}
                </CartItems>
                
                <LineTop />
                <Cost>  
                    <p>Subtotal:</p>
                    <p>${totalPrice.toFixed(2)}</p>
                </Cost>
                <CheckoutLink href="/shop/checkout">
                    <FaShoppingBasket/>Checkout
                </CheckoutLink>
            </Modal>
        </>
    );
};

export default CartModal;

const CheckoutLink = styled.a`
    width: 100%;
    padding: 20px 0;
    margin-top: 20px;
    gap: 10px;
    font-size: 15px;
    border: none;
    border-radius: 30px;
    background-color: #222755;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.4s ease;
    text-decoration: none;

    &:hover{
        background-color: #3d96c2;
    }
`

// ------------------------------------------------------------------------

const Cost = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
`

const LineTop = styled.div`
    border-top: 1px solid #ccc; /* This adds the line between items */
    padding-top: 20px;
`

const LineBottom = styled.div`
    border-bottom: 1px solid #ccc; /* This adds the line between items */
    padding-bottom: 20px;
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
    height: 250px;
    
    border-top: 1px solid #ccc; /* This adds the line between items */

    padding: 30px 0;
`;

const ItemImage = styled.img`
    height: 150px;    
`;

const ItemInfo = styled.div`
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90%;
`

const ItemName = styled.div`
`

const ItemSize = styled.div`
`

const ItemPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const ItemQuantity = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgb(180,180,180);
    width: 150px;
`

const QuantityValue = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const QuantitySubtract = styled.button`
    border: none;
    background-color: transparent;
    padding: 15px 20px;
    border-right: 1px solid rgb(180,180,180);
    cursor: pointer;

    &:hover {
        background-color: rgb(240,240,240);
    }
`

const QuantityAdd = styled.button`
    border: none;
    background-color: transparent;
    padding: 15px 20px;
    border-left: 1px solid rgb(180,180,180);
    cursor: pointer;

    &:hover {
        background-color: rgb(240,240,240);
    }
`

const Modal = styled.div`
    position: fixed;
    right: ${props => (props.visible ? '0' : '-500px')};  /* Modal slides in and out */
    top: 0;
    width: 500px;
    height: 100vh;
    background: white;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
    padding: 20px;
    display: block;
    overflow-y: auto;
    transition: right 0.3s ease-in-out;  /* Animate the right position for sliding effect */
    z-index: 1001;  /* Modal stays above the overlay */
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: ${props => (props.visible ? 'block' : 'none')};
    opacity: ${props => (props.visible ? 1 : 0)};  /* Fade in/out effect */
    transition: opacity 0.3s ease-in-out;  /* Fade in/out animation */
    z-index: 1000;  /* Overlay appears just below the modal */
`;