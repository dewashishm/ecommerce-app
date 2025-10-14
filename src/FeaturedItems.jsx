import "./FeaturedItems.css";
import { useState } from "react";


export function FeaturedItems() {

  const items = [

    {id:1, name: "Item 1", img:""},
    {id:2, name: "Item 2", img:""},
    {id:3, name: "Item 3", img:""},
    {id:4, name: "Item 4", img:""},
    {id:5, name: "Item 5", img:""},
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

      <section>
      <button className="slider-btn left" onClick={goPrev}>◀</button>
      <div className="main-div">
        <div className="block-level">
              {/* Third section Featured Items */ }
        
              <h1>Top Deals</h1>
              <div></div>
        </div>
      </div>
      <button className="slider-btn right" onClick={goNext}>▶</button>


    );
}