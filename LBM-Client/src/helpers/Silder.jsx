import React, { useState } from "react";
import "./Slider.scss";
import { HiLightningBolt } from "react-icons/hi";

const Slider = ({ openModal }) => {
  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderOffsetLeft, setSliderOffsetLeft] = useState(0);
  const [iconWidth, setIconWidth] = useState(0);
  const [iconOffsetLeft, setIconOffsetLeft] = useState(0);
  const [text, setText] = useState("buy");

  const handleSliderRef = (sliderRef) => {
    if (sliderRef !== null) {
      setSliderWidth(sliderRef.offsetWidth);
      setSliderOffsetLeft(sliderRef.offsetLeft);
    }
  };

  const handleIconRef = (iconRef) => {
    if (iconRef !== null) {
      setIconWidth(iconRef.offsetWidth);
      setIconOffsetLeft(iconRef.offsetLeft);
    }
  };

  const handleTouchMove = (event) => {
    const iconLeft =
      event.touches[0].clientX - iconWidth / 2 - sliderOffsetLeft;
    if (iconLeft < 0) {
      setIconOffsetLeft(0);
      setText("buy");
    } else if (iconLeft + iconWidth > sliderWidth) {
      setIconOffsetLeft(sliderWidth - iconWidth);
      setText("bid");
    } else {
      setIconOffsetLeft(iconLeft);
      setText("");
    }
  };

  return (
    <div
      className={text === "buy" ? "slider" : "sliderBid"}
      ref={handleSliderRef}
    >
      <div
        className={text === "buy" ? "slider-icon" : "sliderBid-icon"}
        style={{ left: iconOffsetLeft }}
        onTouchMove={handleTouchMove}
        ref={handleIconRef}
      >
        <HiLightningBolt />
        <span />
      </div>
      <div className={text === "buy" ? "buy" : "buyClose"}>
        <button>Buy now</button>
      </div>
      <div className={text === "bid" ? "bid" : "bidClose"}>
        <button onClick={openModal}>Place Bid</button>
      </div>
    </div>
  );
};

export default Slider;
