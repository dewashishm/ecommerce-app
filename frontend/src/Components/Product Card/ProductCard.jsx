import { useEffect } from "react";
import { getProducts } from "../../api/productApi";

function ProductCard() {

  useEffect(() => {
    async function fetchData() {
      const data = await getProducts(10,0);

      console.log("productspage data:", data);
      console.log("only products:", data.products);
      
    }

    fetchData();
  })
  return (
    <div className="product-card">
      <div className="image">
      
        
      </div>
      <h4>Product Name</h4>
      <p>₹999</p>
    </div>
  );
}

export default ProductCard;
