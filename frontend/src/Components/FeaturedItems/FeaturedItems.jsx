import "./FeaturedItems.css";
import { useState } from "react";
import thirdimg1 from "../../images/third-img1.jpeg"
import thirdimg2 from "../../images/third-img2.jpg"
import thirdimg3 from "../../images/third-img3.jpeg"
import thirdimg4 from "../../images/third-img4.jpg"
import thirdimg5 from "../../images/third-img4.jpg"


export function FeaturedItems() {

  const items = [

    {id:1, name: "Item 1", img:thirdimg1},
    {id:2, name: "Item 2", img:thirdimg2},
    {id:3, name: "Item 3", img:thirdimg3},
    {id:4, name: "Item 4", img:thirdimg4},
    {id:5, name: "Item 5", img:thirdimg5},
    {id:6, name: "Item 6", img:""},
    {id:7, name: "Item 7", img:""},

  ];

  const [counter, setCounter] = useState(0);

  const goPrev = () => {
    setCounter((prev) => Math.max(prev - 1,));

  };

  const goNext = () => {
    setCounter((prev) => Math.min(prev + 1, items.length - 5));

  };
    
    return(

      <section className="item-slider-section">
      <button className="slider-btn left" onClick={goPrev}>◀</button>
      <div className="items-container">
        <div className="items-row" style={{ transform: `translateX(-${counter * 25}%)` }}>
    
                {items.map((item) => (
                    <div className="item-card" key={item.id}>
                    <img src={item.img} alt={item.name} />
                    <p>{item.name}</p>
                    </div>
                ))}
              
        </div>
      </div>

      <button className="slider-btn right" onClick={goNext}>▶</button>
      </section>

    );
}