import React from "react";
import "./Vaults.scss";
import LBM from "./assets/LBM-icon.svg";
import LUSD from "./assets/LUSD-icon.svg";

function YourVaults({
  shortName,
  img,
  stakingAPR,
  daily,
  total,
  states,
  setStateModals,
}) {
  const staking = 0;

  var urlImg;

  if (img === "LBM") {
    urlImg = LBM;
  } else if (img === "LUSD") {
    urlImg = LUSD;
  }

  function changeStateStake() {
    if (shortName === "LBM") {
      setStateModals({
        ...states,
        stakelbm: true,
      });
    } else if (shortName === "LUSD") {
      setStateModals({
        ...states,
        stakelusd: true,
      });
    }
  }
  function changeStateWithdraw() {
    if (shortName === "LBM") {
      setStateModals({
        ...states,
        withdrawallbm: true,
      });
    } else if (shortName === "LUSD") {
      setStateModals({
        ...states,
        withdrawallusd: true,
      });
    }
  }

  var modal = document.getElementById("stakelbm");
  var modal1 = document.getElementById("lbmform");
  var modal2 = document.getElementById("lbmsuccess");
  var modal3 = document.getElementById("stakelusd");
  var modal4 = document.getElementById("lusdform");
  var modal5 = document.getElementById("lusdsuccess");
  var modal6 = document.getElementById("withdrawallbm");
  var modal7 = document.getElementById("withdrawallbmrequest");
  var modal8 = document.getElementById("withdrawallbmlocked");
  var modal9 = document.getElementById("withdrawallbmsuccess");
  var modal10 = document.getElementById("withdrawallusd");
  var modal11 = document.getElementById("withdrawallusdrequest");
  var modal12 = document.getElementById("withdrawallusdlocked");
  var modal13 = document.getElementById("withdrawallusdsuccess");

  window.onclick = function (event) {
    switch (event.target) {
      case modal:
        setStateModals({
          ...states,
          stakelbm: false,
        });
        break;
      case modal1:
        setStateModals({
          ...states,
          lbmform: false,
        });
        break;
      case modal2:
        setStateModals({
          ...states,
          lbmsuccess: false,
        });
        break;
      case modal3:
        setStateModals({
          ...states,
          stakelusd: false,
        });
        break;
      case modal4:
        setStateModals({
          ...states,
          lusdform: false,
        });
        break;
      case modal5:
        setStateModals({
          ...states,
          lusdsuccess: false,
        });
        break;
      case modal6:
        setStateModals({
          ...states,
          withdrawallbm: false,
        });
        break;
      case modal7:
        setStateModals({
          ...states,
          withdrawallbmrequest: false,
        });
        break;
      case modal8:
        setStateModals({
          ...states,
          withdrawallbmlocked: false,
        });
        break;
      case modal9:
        setStateModals({
          ...states,
          withdrawallbmsuccess: false,
        });
        break;
      case modal10:
        setStateModals({
          ...states,
          withdrawallusd: false,
        });
        break;
      case modal11:
        setStateModals({
          ...states,
          withdrawallusdrequest: false,
        });
        break;
      case modal12:
        setStateModals({
          ...states,
          withdrawallusdlocked: false,
        });
        break;
      case modal13:
        setStateModals({
          ...states,
          withdrawallusdsuccess: false,
        });
    }
  };

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
        <button className="vault-button" onClick={changeStateStake}>
          Stake
        </button>
        <button className="vault-button" onClick={changeStateWithdraw}>
          Withdraw
        </button>
      </div>
    </div>
  );
}

export default YourVaults;
