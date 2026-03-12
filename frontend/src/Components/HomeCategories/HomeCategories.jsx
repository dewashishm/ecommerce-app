import { Link } from "react-router-dom";
import "./HomeCategories.css"



function HomeCategories ({filterProducts}){

    return(
        <div className="categories-main">
            <ul>
                <Link to="/products?category=All" className="category-option">
                <li>All Products</li>
                </Link>
                
                <Link to="/products?category=Electronics" className="category-option">
                <li>Electronics</li>
                </Link>
                
                <Link to="/products?category=Furniture" className="category-option">
                <li>Furniture</li>
                </Link>
                
                <Link to="/products?category=Toys" className="category-option">
                <li>Toys</li>
                </Link>
                
                <Link to="/products?category=luggage-bags" className="category-option">
                <li>Luggage & Bags</li>
                </Link>
            </ul>

        </div>
    )
}

export default HomeCategories;