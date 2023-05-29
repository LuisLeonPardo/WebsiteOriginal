import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Classes.scss";
import InfoClasses from "./InfoClasses";

function Classes() {
  const dragSlider = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth + 30 );
  });
  //console.log(InfoClasses)

  return (
    <motion.div className="classes-container">
      <motion.div
        className="classes-card-container"
        ref={dragSlider}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        dragElastic={0.1}
        dragMomentum={false}
      >
        {InfoClasses.map((e) => {
          return (
            <div className="classes-card" key={e.name}>
              <img src={e.img} />
              <p>{e.name}</p>
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default Classes;
