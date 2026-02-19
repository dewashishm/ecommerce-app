import "./CartPage.css"
import { useCart } from "../../context/CartContext.jsx";


function CartPage() {
    const { cartItems, removeFromCart } = useCart();


    return (
        <div className="cart-container0">
            <div className="cart-container">

                <div className="product-container">
                    <h2 className="cart-heading">My Cart</h2>

                    {cartItems.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id}>
                                <div className="cart-item">

                                    <img src={item.thumbnail} alt="" srcset="" className="item-thumbnail" />
                                    <div>

                                    <div className="item-details-row">
                                        <h3>{item.title}</h3>
                                        </div>
                                        <div className="item-details-row">
                                        <p>Price: ${item.price}</p>
                                            </div>
                                            <div className="item-details-row">
                                                
                                        <p>Quantity: {item.quantity}</p>
                                    </div>
                                    </div>
                                </div>

                                <button onClick={() => removeFromCart(item.id)} className="item-remove-button">REMOVE</button>
                            </div>
                        ))
                    )}
                </div>
                <div className="price-details">
                    <h2 className="price-details-header">
                        Price details
                    </h2>
                    {cartItems.map((item) => (
                        <div key={item.id} className="price-row-container">

                            <div className="price-row">
                                <span>MRP</span>
                                <span>${item.price}</span>
                            </div>

                            <div className="price-row">
                                <span>Delivery Charges</span>
                                <span>+$5</span>
                            </div>
                            <hr />
                            <div className="price-row">
                                <span>Total Amount</span>
                                <span>${`${item.price + 5}`}</span>
                            </div>

                        </div>
                    ))}
                    <button className="payment-button">Make Payment</button>
                </div>
            </div>
        </div>
    );
}

export default CartPage;