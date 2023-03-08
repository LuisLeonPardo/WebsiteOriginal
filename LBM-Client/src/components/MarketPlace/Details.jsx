import React from "react";
import "./Details.scss";
import star from "./assets/star.svg";
import share from "./assets/share.svg";
import heart from "./assets/heart.svg";
import image1 from "./assets/Image.png";
import image2 from "./assets/Image2.png";
import image3 from "./assets/Image3.png";
import image4 from "./assets/Image4.png";
import image5 from "./assets/Image5.png";
import iconPic from "./assets/Icon1.svg";
import blackStar from "./assets/blackStar.svg";

export default function Details() {
  return (
    <div
      style={{
        marginLeft: 279,
        marginTop: 150,
        marginRight: 279,
      }}
    >
      <div>
        <div className="detailsTitle">
          <h1>Bordeax Getaway</h1>
          <div className="detailsSubtitle">
            <div className="cityAndPoints">
              <img src={star} alt="star icon" />
              <h2>5.0</h2>
              <span className="dot">·</span>
              <h2 className="city">Bordeaux, Dubai</h2>
            </div>
            <div className="cardShareSave">
              <div className="cardShare">
                <img src={share} alt="share icon" />
                <h2>Share</h2>
              </div>
              <div className="cardSave">
                <img src={heart} alt="heart icon" />
                <h2>Save</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="detailsImages">
          <img src={image1} alt="first image" className="item one" />
          <img src={image2} alt="other image" className="item" />
          <img src={image3} alt="other image" className="item" />
          <img src={image4} alt="other image" className="item" />
          <img src={image5} alt="other image" className="item" />
          <button className="showPhotosBtn">
            <img src={iconPic} alt="tuvieja" />
            <h1>Show all photos</h1>
          </button>
        </div>
      </div>
      <div className="lowerDetails">
        <div className="lowerLeft">
          <div>Description</div>
          <div>Offers</div>
        </div>
        <div className="lowerRight">
          <div className="modal">
            <div className="priceAndPoints">
              <div className="subPricePoints">
                <h1>500.000 USDT</h1>
                <div className="points">
                  <img src={blackStar} alt="star icon" />
                  <h2>4.99</h2>
                </div>
              </div>
              <h2>= 0.04800000 ETH</h2>
            </div>
            <div className="time">
              <div>
                <h1>22</h1>
                <h1>Hours</h1>
              </div>
              <div>
                <h1>22</h1>
                <h1>Minutes</h1>
              </div>
              <div>
                <h1>22</h1>
                <h1>Seconds</h1>
              </div>
              <div>
                <h2>Sale ends Febraury 28th, 2023 at 2:54 p.m.</h2>
              </div>
            </div>
            <div className="detailsButtons">
              <button>Buy Now</button>
              <button>Place a Bb</button>
            </div>
            <div className="DetailsBalance">
              <div>
                <h1>Your balance</h1>
                <h1>$600.500</h1>
              </div>
              <div>
                <h1>Service fee</h1>
                <h1>-$300</h1>
              </div>
              <div>
                <h1>Taxes</h1>
                <h1>-$5</h1>
              </div>
            </div>
            <div>------------división--------------</div>
            <div className="totalTaxesDetail">
              <h1>Total before taxes</h1>
              <h1>$500.305</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
