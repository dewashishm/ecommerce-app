import PriceRange from "../Price Range/PriceRange";
import Categories from "../Categories/Categories";
import Brands from "../Brands/Brands";

function FilterPanel(){

    return(
        <div className="filter-panel">
            <PriceRange />
            <Categories />
            <Brands />
        </div>
    )
}

export default FilterPanel;