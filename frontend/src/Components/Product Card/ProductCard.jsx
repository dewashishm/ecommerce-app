import "./ProductCard.css"
import { useEffect, useState } from "react";
import { getProducts } from "../../api/productApi";
import { Link, useParams } from "react-router-dom";

function ProductCard() {
  const {productid} = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts(10, 0);
        console.log(data);

        setProducts(data.products);
      }
      catch (err) {
        console.error(err);
      }
      finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products....</p>
  return (
    <div>
      <h1>Products</h1>

      <div className="products-grid">
        {products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id} className="product-link">
            <div className="product-card">
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.brand}</h3>
              <h3>{product.title}</h3>
              <p>₹ {product.price}</p>
              <p>Rating⭐: {product.rating}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
