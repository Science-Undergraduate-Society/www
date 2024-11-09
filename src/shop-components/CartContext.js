import React, { createContext, useContext, useReducer, useEffect, useState } from 'react';

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
            const existingItem = state.items.find(item => item.id === action.payload.id && item.size === action.payload.size);
            
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id && item.size === action.payload.size
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            }
            return {
                ...state,
                items: [...state.items, { ...action.payload, quantity: 1, size: action.payload.size}],
            };

        case "REMOVE_FROM_CART":
            const itemToRemove = state.items.find(item => item.id === action.payload.id && item.size === action.payload.size);
            if (itemToRemove) {
                if (itemToRemove.quantity > 1) {
                    return {
                        ...state,
                        items: state.items.map(item =>
                            item.id === action.payload.id && item.size === action.payload.size
                                ? { ...item, quantity: item.quantity - 1 }
                                : item
                        ),
                    };
                } else {
                    return {
                        ...state,
                        items: state.items.filter(item => (item.id !== action.payload.id || item.size !== action.payload.size)),
                    };
                }
            }
            return state;

        // Load cart from local storage
        case "LOAD_CART":
            return {
                ...state,
                items: action.payload,
            };

        default:
            return state;
    }
};

// CartProvider component
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    const [cartLoaded, setCartLoaded] = useState(false); // To track if the cart has been loaded

    useEffect(() => {
        // Load cart from local storage on mount
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            console.log("Loading cart on mount:", savedCart);
            dispatch({ type: "LOAD_CART", payload: JSON.parse(savedCart) });
        }
        setCartLoaded(true); // Indicate that the cart has been loaded
    }, []);

    useEffect(() => {
        if (cartLoaded) {
            // Only save the cart if it has been loaded
            console.log("Saving cart to local storage:", state.items);
            localStorage.setItem("cart", JSON.stringify(state.items));
        }
    }, [state.items, cartLoaded]);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);