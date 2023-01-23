import React from "react";
import "./Vaults.scss";
import BTC from "../Dashboards/Deposit/assets/BTC.svg";
import LTC from "../Dashboards/Deposit/assets/LTC.svg";
import ETH from "../Dashboards/Deposit/assets/ETH.svg";

function YourVaults({ shortName, img, stakingAPR, daily, total }) {
  const staking = 0;

  var urlImg;

  if (img === "BTC") {
    urlImg = BTC;
  } else if (img === "LTC") {
    urlImg = LTC;
  } else if (img === "ETH") {
    urlImg = ETH;
  }

  console.log(img);

  return (
    <div className="vault-container">
      <div className="stake-name">
        <img src={urlImg} alt="Coin Icon" className="coin-icon" />
        <h1 className="coin-name">{shortName}</h1>
      </div>
      <div className="staking">You are staking</div>
      <img className="icon2" src={urlImg} alt="Coin Icon" />
      <div className="stake">{staking}</div>
      <div className="stakes-grid">
        <div className="stakes-text">
          <h3>LBM Staking APR</h3>
          <h4>{stakingAPR}</h4>
        </div>
        <div className="stakes-text">
          <h3>Daily Emission</h3>
          <div className="numbers">
            <img src={urlImg} alt="Coin Icon" className="icon3" />
            <h4>{daily}</h4>
          </div>
        </div>
        <div className="stakes-text">
          <h3>Total Staked</h3>
          <div className="numbers">
            <img src={urlImg} alt="Coin Icon" className="icon3" />
            <h4>{total}M</h4>
          </div>
        </div>
      </div>
      <div className="vault-buttons">
        <button className="vault-button">Stake</button>
        <button className="vault-button">Withdraw</button>
      </div>
    </div>
  );
}

export default YourVaults;
