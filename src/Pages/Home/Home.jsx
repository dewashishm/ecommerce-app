import './Home.css';
import { Banner } from '../../Components/Banner/Slider.jsx';
import { FeaturedItems } from '../../Components/FeaturedItems/FeaturedItems.jsx';
import { HeroBanner } from '../../Components/HeroBanner/HeroBanner.jsx'

function Home() {
  return (
    <div className="App">
      
      <Banner />
      <FeaturedItems />
      <HeroBanner />


    </div>

  );
}

export default Home;