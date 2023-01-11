import React, { useRef, useState, useEffect } from "react";
import "./Slider.scss";
import Coin from "./assets/Coin.svg";
import Growth from "./assets/Growth.svg";
import Icons from "./assets/Icons.svg";
import Icons2 from "./assets/Icons2.svg";
import { motion } from "framer-motion";

function Slider() {
  const dragSlider = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
  });

  return (
    <motion.div className="container-slider">
      <h1>Your supply market</h1>
      <motion.div
        className="cards"
        ref={dragSlider}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        dragElastic={0.1}
      >
        {[...Array(7)].map(() => {
          return (
            <motion.div className="card">
              <div className="card__content">
                <img src={Coin} className="coin" />
                <div className="card__content-prize">
                  <div className="card__content-prize-in">
                    <h4>BTC</h4>
                    <img src={Icons2} />
                    <h4>USD</h4>
                  </div>
                  <h2>9784.79</h2>
                </div>
                <div className="card__content-percentage">
                  <img src={Icons} />
                  <h6>7.2%</h6>
                </div>
              </div>
              <img src={Growth} className="growth" />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default Slider;
