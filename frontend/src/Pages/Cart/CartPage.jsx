import { useCart } from "../../context/CartContext.jsx";


function CartPage() {
    const {cartItems, removeFromCart} = useCart();

    
    return(
        <div>
        <h2>Cart</h2>

    {cartItems.length ===0 ? (
        <p>Your cart is empty</p>
    ) : (
        cartItems.map((item) => (
            <div key={item.id}>
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>


                <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
        ))
    )}
    </div>
);
}

export default CartPage;