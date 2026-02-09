import "./ProductPage.css"
import { useEffect, useState } from "react";
import { getProductById } from "../../api/productApi";
import { useParams } from "react-router-dom";


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
                <img src={product.images} alt="" srcset="" className="image" />
                </div>
                <div className="ppppp">
                    <p id="product-brand" className="product-details">{product.brand}</p>
                    <p id="product-title" className="product-details">{product.title}</p>
                    <p id="product-price" className="product-details">{product.price}</p>
                    <p id="product-rating" className="product-details">{product.rating}</p>
                    <p id="product-description" className="product-details">Product Description: {product.description}</p>
                    <button>Add to Cart</button>
                    {/* <p>{product.reviews}</p> */}
                </div>

            </div>

        </div>
    )
}

export default ProductPage;