import React, { useEffect, useRef } from "react";
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
import line from "./assets/line.svg";
import avatar from "./assets/Avatar.png";
import divider from "./assets/Divider.svg";
import chevron from "./assets/chevron-right.svg";

export default function Details() {
  return (
    <div
      style={{
        margin: 150,
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
          <div className="head">
            <div className="title">
              <h1>Entire rental unit hosted by Ghazal</h1>
              <h2>2 guests · 1 bedroom · 1 bed · 1 bath</h2>
            </div>
            <img src={avatar} alt="avatar pic" className="avatar" />
          </div>
          <img src={divider} alt="divider line" className="divider" />
          <p>
            Come and stay in this superb duplex T2, in the heart of the historic
            center of Bordeaux. Spacious and bright, in a real Bordeaux building
            in exposed stone, you will enjoy all the charms of the city thanks
            to its ideal location. Close to many shops, bars and restaurants,
            you can access the apartment by tram A and C and bus routes 27 and
            44. <br />
            ...
          </p>
          <div className="showMore">
            <h1>Show more</h1>
            <img src={chevron} alt="arrow" />
          </div>

          <div className="offers">
            <h1>Offers</h1>
          </div>
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
              <div className="hourMinSec">
                <div className="times">
                  <h1>22</h1>
                  <h1 className="h-m-s">Hours</h1>
                </div>
                <div className="times">
                  <h1>22</h1>
                  <h1 className="h-m-s">Minutes</h1>
                </div>
                <div className="times">
                  <h1>22</h1>
                  <h1 className="h-m-s">Seconds</h1>
                </div>
              </div>
              <div className="saleTime">
                <h1>Sale ends Febraury 28th, 2023 at 2:54 p.m.</h1>
              </div>
            </div>
            <div className="detailsButtons">
              <button className="buyBtn">Buy Now</button>
              <button className="bidear">Place a bid</button>
            </div>
            <div className="detailsBalance">
              <div className="lines">
                <h1 className="underline">Your balance</h1>
                <h1 className="positiveNum">$600.500</h1>
              </div>
              <div className="lines">
                <h1 className="underline">Service fee</h1>
                <h1 className="negativeNum">-$300</h1>
              </div>
              <div className="lines">
                <h1 className="underline">Taxes</h1>
                <h1 className="negativeNum">-$5</h1>
              </div>
            </div>
            <img src={line} alt="line" className="line" />
            <div className="totalTaxesDetail">
              <h1 className="totalBTax">Total before taxes</h1>
              <h1 className="beforeTaxNum">$500.305</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
