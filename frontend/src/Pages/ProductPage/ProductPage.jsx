import "./ProductPage.css"
import { useEffect, useState } from "react";
import { getProductById } from "../../api/productApi";
import { useParams } from "react-router-dom";
import visa from "../../images/visa.png";
import mastercard from "../../images/mastercard.png";
import ammericanexpress from "../../images/american-express.png";
import gpay from "../../images/google-pay.png";
import paypal from "../../images/paypal.png";
import facebook from "../../images/facebook.png";
import x from "../../images/twitter.png";
import linkedin from "../../images/linkedin.png";
import copy from "../../images/copy.png";


function ProductPage() {

    const { productid } = useParams();
    const [product, setProduct] = useState(null);


    useEffect(() => {
        async function retriveProducts() {
            try {
                const data_item = await getProductById(productid);

                setProduct(data_item);
                console.log(data_item);

            }
            catch (err) {
                console.error(err);

            }
        }
        if (productid) {

            retriveProducts();
        }
    }, [productid]);

    if (!product) {
        return <div className="pp">Loading...</div>;
    }

    return (
        <div className="pp">

            <div className="ppp">
                <div className="pppp">
                    <img src={product.images} alt="" srcset="" className="product-image" />
                </div>
                <div className="ppppp">
                    <p id="product-brand" className="product-details">{product.brand}</p>
                    <p id="product-title" className="product-details">{product.title}</p>
                    <p id="product-price" className="product-details">₹ {product.price}</p>
                    <p id="product-rating" className="product-details">Rating⭐: {product.rating}</p>
                    <button id="cart-btn" className="product-details">Add To Cart</button>
                    <p className="product-details payment">Payment:
                        <img src={visa} alt="" srcset="" className="payment-icons" />
                        <img src={mastercard} alt="" srcset="" className="payment-icons" />
                        <img src={gpay} alt="" srcset="" className="payment-icons" />
                        <img src={ammericanexpress} alt="" srcset="" className="payment-icons" />
                        <img src={paypal} alt="" srcset="" className="payment-icons" />

                    </p>
                    <p className="product-details share" >Share:
                        <img src={facebook} alt="" srcset="" className="share-icons" />
                        <img src={x} alt="" srcset="" className="share-icons" />
                        <img src={linkedin} alt="" srcset="" className="share-icons" />
                        <img src={copy} alt="" srcset="" className="share-icons" />

                    </p>
                </div>

                <p className="product-description">
                    Product Description: 
                    <hr />
                    <p>
                        {product.description}
                    </p>
                </p>
            </div>

        </div>
    )
}

export default ProductPage;