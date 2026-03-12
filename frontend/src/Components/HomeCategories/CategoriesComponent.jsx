// import { Link } from "react-router-dom";
import "./HomeCategories.css"



function HomeCategories ({filterProducts}){

    return(
        <div className='categories-main'>
            <ul>
                
                <li className='category-option' onClick={() => filterProducts('All')}>All Products</li>
                
                
                <li className='category-option' onClick={() => filterProducts('Electronics')}>Electronics</li>
                
                
                
                <li className='category-option' onClick={() => filterProducts('Furniture')}>Furniture</li>
            
                
                <li className='category-option' onClick={() => filterProducts('Toys')}>Toys</li>
                
                <li className='category-option' onClick={() => filterProducts('Luggage & Bags')}>Luggage & Bags</li>
            </ul>

        </div>
    )
}

export default HomeCategories;