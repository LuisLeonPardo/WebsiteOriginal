import React from "react";
import "./StakeLUSD.scss";
import LUSD from "../../assets/LUSD-icon.svg";
import { BsX } from "react-icons/bs";

function StakeLUSD({ states, setStateModals }) {
  function changeState() {
    setStateModals(false);
  }
  function openForm() {
    setStateModals({
      ...states,
      stakelusd: false,
      lusdform: true,
    });
  }
  return (
    <div className={states.stakelusd ? "modal-container-lusd" : "modals-off"}>
      <div className="modal">
        <h1>Stake LUSD</h1>
        <div className="top-modal">
          <div onClick={changeState}>
            <BsX className="close" />
          </div>
          <img src={LUSD} alt="LUSD icon" />
        </div>
        <h3>To stake LUSD to this vault, you need to enable it first</h3>
        <button onClick={openForm}>Enable</button>
      </div>
    </div>
  );
}

export default StakeLUSD;
