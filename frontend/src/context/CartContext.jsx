import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    function addToCart(product) {
        setCartItems((prevItems) => {
            const itemExists = prevItems.find((item) => item._id === product._id);

            if (itemExists) {
                return prevItems.map((item) =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }


        });
    }

    function removeFromCart(_id) {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item._id !== _id)
        );
    }

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart }}
        >{children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}