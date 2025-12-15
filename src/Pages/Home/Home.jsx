import './Home.css';
import { Header } from '../../Components/Header/Header.jsx';
import { Banner } from '../../Components/Banner/Slider.jsx';
import { FeaturedItems } from '../../Components/FeaturedItems/FeaturedItems.jsx';
import { HeroBanner } from '../../Components/HeroBanner/HeroBanner.jsx'
import { Footer } from '../../Components/Footer/Footer.jsx';

export function Home() {
  return (
    <div className="App">
      
      <Header/>  
      <Banner />
      <FeaturedItems />
      <HeroBanner />
      <Footer />


    </div>

  );
}

