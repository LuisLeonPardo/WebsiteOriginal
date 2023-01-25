import React from "react";
import "./StakeLUSDSuccess.scss";
import LUSD from "../../assets/LUSD-icon.svg";
import ok from "../../assets/Ok-tick.svg";
import close from "../../assets/Close-icon.svg";

function StakeLUSDSuccess({ states, setStateModals }) {
  function changeState() {
    setStateModals(false);
  }

  return (
    <div className={states.lusdsuccess ? "success-modal" : "modals-off"}>
      <div className="modal">
        <div className="top-modal">
          <img
            src={close}
            alt="cross"
            onClick={changeState}
            className="close"
          />
          <img src={ok} alt="ok icon" />
        </div>
        <div className="mid-modal">
          <h3>Your stake was successful</h3>
          <div className="container">
            <h4>You successfully staked</h4>
            <img src={LUSD} alt="LUSD incon" />
            <h4>100 LUSD</h4>
          </div>
        </div>
        <button onClick={changeState}>Confirm</button>
      </div>
    </div>
  );
}

export default StakeLUSDSuccess;
