import React, { useState } from 'react';
import './RTP2.css';

function RTP2() {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [dragStart, setDragStart] = useState(0);

  const handleSliderClick = (index) => {
    setSliderPosition(index);
  };

  const handleSliderDragStart = (event) => {
    setDragStart(event.clientX);
  };

  const handleSliderDragEnd = (event) => {
    const dragEnd = event.clientX;
    const dragDistance = dragEnd - dragStart;

    if (dragDistance > 50 && sliderPosition > 0) {
      setSliderPosition(sliderPosition - 1);
    } else if (dragDistance < -50 && sliderPosition < 3) {
      setSliderPosition(sliderPosition + 1);
    }
  };

  return (
    <div className="rtp-container">
      <img src="https://res.cloudinary.com/ds8n6d63e/image/upload/v1684800473/Imagen_de_WhatsApp_2023-05-22_a_las_21.06.22_mnifzt.jpg" alt="RTP" className="rtp-image" />
      <div className="rtp-content">
        <h3 className="rtp-title">Ready to pay your rent in cryptocurrencies!</h3>
        <div className="rtp-text-box">
          <p className="rtp-description">
Choose the property you want to pay. Below you will find a list of their properties.
 Click on the corresponding property to proceed with the payment.
          </p>
        </div>
        <div
          className="rtp-slider"
          onMouseDown={handleSliderDragStart}
          onMouseUp={handleSliderDragEnd}
          onMouseLeave={handleSliderDragEnd}
          onMouseMove={handleSliderDragEnd}
        >
          <div className="rtp-slider-inner" style={{ transform: `translateX(-${sliderPosition * 33.33}%)` }}>
            <button className="rtp-slider-button" onClick={() => handleSliderClick(0)}><p>Bordeaux Getaway</p> <img src="https://res.cloudinary.com/ds8n6d63e/image/upload/v1684968537/66ad751f23f477b9acdc22a21356d886_zru7zy.png" alt="" /></button>
            <button className="rtp-slider-button" onClick={() => handleSliderClick(1)}><p>Example Getaway</p> <img src="https://res.cloudinary.com/ds8n6d63e/image/upload/v1685074535/341bf1fa7260f3c433408551977f3bb9_e2jwrj.png" alt="" /></button>
            <button className="rtp-slider-button" onClick={() => handleSliderClick(2)}><p>Example Getaway </p><img src="https://res.cloudinary.com/ds8n6d63e/image/upload/v1685074553/f53e71b29f4dcdc6a9498192f3582d50_brht9s.png" alt="" /></button>
            <button className="rtp-slider-button" onClick={() => handleSliderClick(3)}><p>Example Getaway</p> <img src="https://res.cloudinary.com/ds8n6d63e/image/upload/v1684968537/66ad751f23f477b9acdc22a21356d886_zru7zy.png" alt="" /></button>
            <button className="rtp-slider-button" onClick={() => handleSliderClick(4)}><p>Example Getaway</p> <img src="https://res.cloudinary.com/ds8n6d63e/image/upload/v1684968537/66ad751f23f477b9acdc22a21356d886_zru7zy.png" alt="" /></button>
            <button className="rtp-slider-button" onClick={() => handleSliderClick(5)}><p>Example Getaway</p> <img src="https://res.cloudinary.com/ds8n6d63e/image/upload/v1684968537/66ad751f23f477b9acdc22a21356d886_zru7zy.png" alt="" /></button>
          </div>
        </div>
        <button className="rtp-connect-button">Pay 1200$</button>
      </div>
    </div>
  );
}

export default RTP2;
