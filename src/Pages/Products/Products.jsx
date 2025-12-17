import './Products.css'
import FilterPanel from '../../Components/Filter Panel/FilterPanel';
import ProductGrid from '../../Components/Product Grid/ProductGrid';

export function Products() {

    return (
        <div className='product-page'>
            <FilterPanel />


            <ProductGrid />

            
        </div>
    );
}