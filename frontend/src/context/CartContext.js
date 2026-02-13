import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    function addToCart(product) {
        setCartItems((prevItems) => {
            const itemExists = prevItems.find(
                (item) => item.id === product.id
            );

            if (itemExists) {
                return prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    }



    function removeFromCart(id) {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== id)
        );
    }

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart }}
        >{children}
        </CartContext.Provider>
    );
}

export function useCart(){
    return useContext(CartContext);
}