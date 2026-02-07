import './Products.css'
import FilterPanel from '../../Components/Filter Panel/FilterPanel';
import ProductGrid from '../../Components/Product Grid/ProductGrid';

function Products() {

    return (
        <div className='product-page'>
            <FilterPanel />
            <ProductGrid />

        </div>
    );
}

export default Products;