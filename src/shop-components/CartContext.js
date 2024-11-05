import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Create your context
const CartContext = createContext();

// Initial cart state
const initialState = {
    items: [],
};

// Cart reducer
const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            // Check if item is already in the cart
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            }
            return {
                ...state,
                items: [...state.items, { ...action.payload, quantity: 1 }],
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
            };
        default:
            return state;
    }
};

// CartProvider component
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        // Load cart from local storage on mount
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            dispatch({ type: "LOAD_CART", payload: JSON.parse(savedCart) });
        }
    }, []);

    useEffect(() => {
        // Save cart to local storage whenever it changes
        localStorage.setItem("cart", JSON.stringify(state.items));
    }, [state.items]);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);
