import { getProductByCategory } from "../api/productApi";

export const filterProductsByCategory = async (products,category) => {
    if (category === 'All') {
      return products;

    } else {
      const filtered = await getProductByCategory(category);
      
      return filtered;

      
    }
  }
 