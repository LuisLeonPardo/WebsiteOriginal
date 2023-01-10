import React from "react";
import "./VertSlider.scss";
import add from "./assets/add.svg";
import refresh from "./assets/refresh.svg";
import Coin from "../Slider/assets/Coin.svg";

function VertSlider() {
  return (
    <div className="container-vertslider">
      <div className="top-vertslider">
        <div className="title-vertslider">
          <h1>Your borrow market</h1>
          <h2>Updated 12 minutes ago</h2>
        </div>
        <div className="icons-vertslider">
          <img src={refresh} />
          <img src={add} />
        </div>
      </div>
      <div>
        {[...Array(5)].map(() => {
          return (
            <div className="market-table">
              <img src={Coin} />
              <h3 className="coin-name">Bitcoin</h3>
              <div className="danger-status">
                <h4>High</h4>
                <h6>Danger Status</h6>
              </div>
              <div className="last-payment">
                <h5>7 Jun, 21</h5>
                <h6>Last payment</h6>
              </div>
              <div className="balance">
                <h5>-10.24 BTC</h5>
                <h6>Balance</h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default VertSlider;
