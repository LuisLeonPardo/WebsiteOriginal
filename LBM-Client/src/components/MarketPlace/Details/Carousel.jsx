import React, { useState, useEffect } from "react";
import "./Carousel.scss";

function Carousel({ slides, isOpen, closeModal }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextPhoto() {
    if ((currentIndex >= 0) & (currentIndex < slides.length - 1)) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }

  return (
    <div
      className={`carouselModal ${isOpen ? null : "is-close"}`}
      onClick={() => closeModal()}
    >
      <div
        className={`carouselContainer ${isOpen ? null : "is-close"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <img onClick={nextPhoto} src={slides[currentIndex]} alt="img" />
      </div>
    </div>
  );
}

export default Carousel;
