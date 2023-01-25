import React from "react";
import "./StakeLBMSuccess.scss";
import LBM from "../../assets/LBM-icon.svg";
import ok from "../../assets/Ok-tick.svg";
import close from "../../assets/Close-icon.svg";

function StakeLBMSuccess({ states, setStateModals }) {
  function changeState() {
    setStateModals(false);
  }

  return (
    <div className={states.lbmsuccess ? "success-modal" : "modals-off"}>
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
            <img src={LBM} alt="LBM incon" />
            <h4>100 LBM</h4>
          </div>
        </div>
        <button onClick={changeState}>Confirm</button>
      </div>
    </div>
  );
}

export default StakeLBMSuccess;
