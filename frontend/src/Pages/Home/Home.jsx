import "./Home.css";
import { Banner } from "../../Components/Banner/Slider.jsx";
import { FeaturedItems } from "../../Components/FeaturedItems/FeaturedItems.jsx";
import { HeroBanner } from "../../Components/HeroBanner/HeroBanner.jsx";
import HomeCategories from "../../Components/HomeCategories/HomeCategories.jsx";
import { filterProductsByCategory } from "../../utils/filterProducts.js";


function Home() {
    
  const homeFilterProducts = async (category) => {
      const filter = await filterProductsByCategory(products,category);
  }


  return (
    <div className="App">
      <HomeCategories  filterProducts={homeFilterProducts}/>
      <Banner />
      <FeaturedItems />
      <HeroBanner />


    </div>

  );
}

export default Home;