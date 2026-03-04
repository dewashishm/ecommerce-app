import "./HomeCategories.css"
import { Link } from "react-router-dom";

function HomeCategories (){
    return(
        <div className="categories-main">
            <ul>
                <Link to='products' className="category-option">
                <li>All Products</li>
                </Link>
                <Link to='Electronics' className="category-option">
                <li>Electronics</li>
                </Link>
                <Link to='Furniture' className="category-option">
                <li>Furniture</li>
                </Link>
                <Link to='Toys' className="category-option">
                <li>Toys</li>
                </Link>
                <Link to='Luggage&Bags' className="category-option">
                <li>Luggage & Bags</li>
                </Link>
            </ul>
        </div>
    )
}

export default HomeCategories;