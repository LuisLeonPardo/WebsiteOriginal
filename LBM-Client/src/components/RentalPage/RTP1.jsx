import React, { useState } from 'react';
import './RTP1.css'; // Importa el archivo CSS para el componente Home




function RTP1() {
  return (
    <div className="home-container">
      <img src="https://res.cloudinary.com/ds8n6d63e/image/upload/v1684800473/Imagen_de_WhatsApp_2023-05-22_a_las_21.06.22_mnifzt.jpg" alt="Home" className="home-image" />
      <div className="home-content">
        <h3 className='asad'>Connect your cryptocurrency wallet!</h3>
        <div className="text-box">
          <p className='adas'>
            Take advantage of the convenience of paying the rent of your next home with cryptocurrencies.
            Click the button below to connect your wallet and start enjoying. We are here to simplify your payment
            experience and offer you security in every transaction.
          </p>
        </div>
        <button  className="connect-button">Connect a Wallet!</button>
      </div>
    </div>
  );
}

export default RTP1;
