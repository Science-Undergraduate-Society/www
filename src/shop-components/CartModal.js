import React from 'react';
import { useCart } from './CartContext';
import styled from 'styled-components';

const Modal = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    width: 33.33vw;  /* Set the width to one-third of the viewport width */
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

const CartModal = ({ visible, onClose }) => {
    const { state } = useCart();

    console.log(state)

    return (
        <>
            <Overlay visible={visible} onClick={onClose} /> {/* Close modal when overlay is clicked */}
            <Modal visible={visible}>
                <h2>Your Cart</h2>
                <button onClick={onClose}>Close</button>
                <ul>
                    {state.items.map(item => (
                        <li key={item.id}>
                            {`${item.type.toUpperCase().replace(/_/g, ' ')} - ${item.color.toUpperCase().replace(/_/g, ' ')}`} - {item.quantity}
                        </li>
                    ))}
                </ul>
            </Modal>
        </>
    );
};

export default CartModal;
