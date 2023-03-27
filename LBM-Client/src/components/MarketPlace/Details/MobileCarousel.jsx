//import Carousel from "react-responsive-carousel";
import React from "react";
import "./MobileCarousel.scss";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Carousel from "nuka-carousel";

function MobileCarousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dragSlider = useRef();
  const [width, setWidth] = useState(0);

  //   useEffect(() => {
  //     setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
  //   });

  function nextPhoto() {
    if ((currentIndex >= 0) & (currentIndex < slides.length - 1)) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }

  return (
    <>
      <Carousel
        defaultControlsConfig={{
          nextButtonStyle: {
            display: "none",
          },
          prevButtonStyle: {
            display: "none",
          },

          pagingDotsStyle: {
            width: "7px",
            height: "7px",
            fill: "#F7931A",
            scale: "1.2",
            borderRadius: "50%",
            paddingLeft: "5px",
            paddingRight: "5px",
            paddingBottom: "30px",
          },
        }}
      >
        {slides.map((pic) => (
          <img src={pic} className="imgas" key={pic} />
        ))}
      </Carousel>
      {/* <div className="slidesDots">
        <div className="dots">
          {slides.map((pic, index) => (
            <div
              className="indicators"
              key={index}
              style={
                currentIndex === index ? { backgroundColor: "#F7931A" } : null
              }
            ></div>
          ))}
        </div>
      </div> */}
    </>
    // <motion.div className="carouselMobile">
    //   <motion.div
    //     ref={dragSlider}
    //     drag="x"
    //     dragConstraints={{ right: 0, left: -width }}
    //     dragElastic={0.1}
    //     dragMomentum={false}
    //     className="slidesMobile"
    //     onClick={nextPhoto}
    //   >
    //     {slides.map((pic) => (
    //       <img src={pic} alt="img" />
    //     ))}
    //     {/* <img onClick={nextPhoto} src={slides[currentIndex]} alt="img" /> */}
    //   </motion.div>

    // </motion.div>
  );
}

export default MobileCarousel;
