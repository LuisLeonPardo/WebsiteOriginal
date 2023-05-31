import React from "react";
import "./Marketplace.scss";
//import Star from "./assets/Star.svg"
//import image from "./assets/image.png";
import ModalFilter from "./ModalFilter/ModalFilter";
import Classes from "./Classes/Classes";
import image from "./assets/Image2.png";
import CardImages from "./CardImages/CardImages";
import Footer from "../RealEstates/Footer/Footer";
// import Slide from "./Slide";

function Marketplace() {
  return (
    <div className="marketplace-container">
      <Classes />
      <div className="marketplace-content">
        <div className="marketplace-title">
          <h1>Dubai</h1>
          <div className="marketplace-filters">
            <div className="content-select">
              <select>
                <option hidden value="">
                  Status
                </option>
                <option>Buy now</option>
                <option>Not for sale</option>
              </select>
              <i></i>
            </div>
            <ModalFilter />
          </div>
        </div>
        <div className="marketplace-content-items">
          {[...Array(20)].map(() => {
            return (
              <div className="marketplace-card">
                <CardImages />
                <div className="marketplace-card-details">
                  <div className="marketplace-card-text">
                    <h1>Groveland, California</h1>
                    <h2>Yosemite National Park</h2>
                    <h2 style={{ marginBottom: "4px" }}>Oct 23</h2>
                    <h1>$289</h1>
                  </div>
                  <div className="marketplace-card-stars">
                    {/* <img src={Star} /> */}
                    <h4>4.91</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Marketplace;