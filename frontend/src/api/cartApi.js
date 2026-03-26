import { useEffect } from "react";
const BASE_URL = "http://localhost:3000/api";

export async function addToCart() {
    const res = await fetch(`${BASE_URL}/cart/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userId,
            productId: item._id
        })
    });
}


useEffect(() => {
    const fetchCart = async () => {

        const res = await fetch(`${BASE_URL}/cart/${userId}`);
        const data = await res.json();

        const formatted = data.map((item) => ({
            ...item.productId,
            quantity: item.quantity
        }));

        setCartItems(formatted);
    };

    if (userId) fetchCart();
}, [userId]);


export async function removeItem() {
    const res = await fetch(`${BASE_URL}/cart/remove`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userId,
            productId: item._id
        })
    });
};
