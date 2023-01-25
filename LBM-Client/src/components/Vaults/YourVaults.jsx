import React from "react";
import "./Vaults.scss";
import LBM from "./assets/LBM-icon.svg";
import LUSD from "./assets/LUSD-icon.svg";
//prueba-------------
import { motion } from "framer-motion";
import { useModal } from "../../helpers/useModal/useModal";
import WithdrawalLUSD from "./Modals/LUSD/WithdrawalLUSD";
//prueba-------------

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
  //prueba-------------
  //const [isOpenModal, openModal, closeModal] = useModal();
  //prueba--------------
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

  return (
    <div className="vault-container">
      {/* prueba-------------
      <motion.div
        animate={isOpenModal ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.1 }}
      >
        <WithdrawalLUSD isOpen={isOpenModal} closeModal={closeModal} />
      </motion.div>
      prueba------------- */}
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
        {/* prueba----------------------------- */}
        <button className="vault-button" onClick={changeStateWithdraw}>
          {/* prueba----------------------------- */}
          Withdraw
        </button>
      </div>
    </div>
  );
}

export default YourVaults;
