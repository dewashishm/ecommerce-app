import "./CartPage.css"
import { useCart } from "../../context/CartContext.jsx";
import delete_icon from "../../images/delete.png"


function CartPage() {
    const { cartItems, removeFromCart } = useCart();
    const totalMRP = cartItems.reduce((total, item) => total + item.price, 0);
    const deliveryCharge = cartItems.length > 0 ? 9 : 0;
    const totalAmount = totalMRP + deliveryCharge;

    return (

        // Cart Items Section 

        <div className="cart-page">
            <div className="cart-layout">

                <div className="product-container">
                    <h2 className="cart-heading">My Cart</h2>

                    {cartItems.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id}>
                                <div className="cart-item">

                                    <img src={`http://localhost:3000/${item.images[0]}`} alt="" srcset="" className="item-thumbnail" />
                                    <div>
                                        <div className="item-details-row">
                                            <h3>{item.title}</h3>
                                        </div>
                                        <div className="item-details-row">
                                            <p>Price: ₹ {item.price}</p>
                                        </div>
                                        <div className="item-details-row">

                                            <p>Quantity: {item.quantity}</p>
                                        </div>
                                    </div>
                                </div>

                                <p className="delivery">Delivery in 2 days</p>
                                <div className="item-remove-container">
                                    <div className="remove-box">
                                        <button
                                            onClick={() => removeFromCart(item._id)}
                                            className="item-remove-button"
                                        >
                                            <img src={delete_icon} alt="" className="delete_icon" />
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                
                {/* Price Section */}

                <div className="price-details">
                    <h2 className="price-details-header">Price details</h2>

                    <div className="price-row-container">

                        <div className="price-row">
                            <span>MRP</span>
                            <span>₹ {totalMRP}</span>
                        </div>

                        <div className="price-row">
                            <span>Delivery Charges</span>
                            <span>+₹ {deliveryCharge}</span>
                        </div>

                        <hr />

                        <div className="price-row">
                            <span>Total Amount</span>
                            <span>₹ {totalAmount}</span>
                        </div>

                    </div>
                    <button className="payment-button">Make Payment</button>
                </div>
            </div>
        </div>
    );
}

export default CartPage;