import "./ProductCard.css"
import { useEffect, useState } from "react";
import { Link, useSearchParams} from "react-router-dom";
import { getProducts } from "../../api/productApi";
import { filterProductsByCategory } from "../../utils/filterProducts";
import CategoriesComponent from "../../Components/HomeCategories/CategoriesComponent";


function ProductCard() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const normalizeCategory = (cat) => {
    if (cat === "luggage-bags") return "Luggage & Bags";
    return cat;
  };
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts();
        
        setProducts(data);

        if (category) {
          const filtered = await filterProductsByCategory(data,normalizeCategory(category));

          setFilteredProducts(filtered);
        } else {
          setFilteredProducts(data);
        }

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

const filterProducts = async (category) => {
  const filter = await filterProductsByCategory(products, category);
  console.log(filter);
  
  setFilteredProducts(filter);
}

  
  if (loading) return <p>Loading products....</p>
  return (
    <div>

      <CategoriesComponent filterProducts={filterProducts} />

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <Link to={`/products/${product._id}`} key={product._id} className="product-link">

            <div className="product-card">
              <img src={`http://localhost:3000/${product.images[0]}`} alt={product.title} />

              <h3>{product.brand}</h3>
              
              <h4>{product.title}</h4>
              
              <p>₹ {product.price}</p>
              
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
