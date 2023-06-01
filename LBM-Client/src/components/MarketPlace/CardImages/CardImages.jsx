import React, { useState } from "react";
import "./CardImages.scss";
import HeartLine from "./assets/HeartLine.svg";
import Heart from "./assets/Heart.svg";

import image1 from "../assets/Image2.png";
import image2 from "../assets/Image3.png";
import image3 from "../assets/Image4.png";
import image4 from "../assets/Image5.png";
import { Link } from "react-router-dom";

const images = [image1, image2, image3, image4];

function CardImages({ img }) {
  const [favorite, setFavorite] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleClickFavorite = () => {
    setFavorite(!favorite);
  };

  const handleImageChange = (index) => {
    setSelectedImageIndex(index);
  };

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const touchDeltaX = touchEndX - touchStartX;

    if (touchDeltaX > 50) {
      // Deslizar hacia la izquierda
      const newIndex = Math.max(selectedImageIndex - 1, 0);
      setSelectedImageIndex(newIndex);
    } else if (touchDeltaX < -50) {
      // Deslizar hacia la derecha
      const newIndex = Math.min(selectedImageIndex + 1, images.length - 1);
      setSelectedImageIndex(newIndex);
    }
  };

  return (
    <div className="marketplace-card-image">
      {favorite ? (
        <img src={Heart} className="heart-icon" onClick={handleClickFavorite} />
      ) : (
        <img
          src={HeartLine}
          className="heart-icon"
          onClick={handleClickFavorite}
        />
      )}
      <div className="menu-nav">
        {images?.length > 0 &&
          images?.map((image, index) => (
            <div
              key={index}
              className={`custom-button ${
                selectedImageIndex === index ? "active" : ""
              }`}
              onClick={() => handleImageChange(index)}
              id={`btn${index + 1}`}
            />
          ))}
      </div>

      <div
        className="container-slider"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <ul className="slider">
          {images?.map((image, index) => (
            <li
              key={index}
              id={`slide${index + 1}`}
              className={selectedImageIndex === index ? "active" : ""}
            >

              <Link to={`/marketplace/${index}`}>
                <img src={image} alt={`Slide ${index + 1}`} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CardImages;
