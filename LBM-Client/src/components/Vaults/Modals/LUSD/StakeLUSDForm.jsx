import React from "react";
import "./StakeLUSDForm.scss";
import LUSD from "../../assets/LUSD-icon.svg";
import close from "../../assets/Close-icon.svg";

function StakeLUSDForm({ states, setStateModals }) {
  function changeState() {
    setStateModals(false);
  }

  function confirm() {
    setStateModals({
      ...states,
      lusdform: false,
      lusdsuccess: true,
    });
  }
  return (
    <div className={states.lusdform ? "modal-stakelusd-form" : "modals-off"}>
      <div className="modal">
        <div className="top-modal">
          <h4>Stake LUSD</h4>
          <img src={close} alt="cross" onClick={changeState} />
        </div>
        <div className="mid-modal">
          <div className="container">
            <img src={LUSD} alt="LUSD incon" />
            <input type="text" placeholder="0" />
          </div>
          <button className="max-button">MAX</button>
        </div>
        <div className="bottom-modal">
          <div className="container">
            <img src={LUSD} alt="LUSD incon" />
            <h4>Available LUSD</h4>
          </div>
          <h4 style={{ fontWeight: 700, color: "#000000" }}>100 LUSD</h4>
        </div>
        <button onClick={confirm}>Confirm</button>
      </div>
    </div>
  );
}

export default StakeLUSDForm;
