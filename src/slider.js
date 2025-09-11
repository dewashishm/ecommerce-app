import slideImg1 from "./images/img1.jpg";
import slideImg2 from "./images/img2.jpg";
import slideImg3 from "./images/img3.jpg";
import slideImg4 from "./images/img4.jpg";
import "./App.css";
import { useState } from "react";

export function Banner() {
  const slides = [slideImg1, slideImg2, slideImg3, slideImg4];
  const [counter, setCounter] = useState(0);
  // const [direction, setDirection] = useState("next"); // "next" or "prev"

  const goPrev = () => {
    // setDirection("prev");
    setCounter((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    // setDirection("next");
    setCounter((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="banner-section">
      <div  
        className="slides-container"
        style={{transform: `translateX(-${counter * 100}%)` }}>

          {slides.map((img, index) => (
          <img key={index} src={img} alt={`slide-${index}`} className="slide" />
        ))}

      </div>


      <div className="controls">
      <button onClick={goPrev}>Prev</button>
      <button onClick={goNext}>Next</button>
      </div>
    </section>
  );
}
