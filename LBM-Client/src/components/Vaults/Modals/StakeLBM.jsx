import React from "react";
import "./StakeLBM.scss";
import LBM from "../assets/LBM-icon.svg";
import LUSD from "../assets/LUSD-icon.svg";
import close from "../assets/Close-icon.svg";

function LBMModals({ state, setStateModal }) {
  function changeState() {
    setStateModal(false);
  }

  return (
    <div className={state ? "modal-container" : "modals-off"}>
      <div className="modal">
        <div className="top-modal">
          <img
            src={close}
            alt="cross"
            onClick={changeState}
            className="close"
          />
          <img src={LBM} alt="LBM icon" />
        </div>
        <h3>To stake LBM to this vault, you need to enable it first</h3>
        <button onClick={changeState}>Enable</button>
      </div>
    </div>
  );
}

export default LBMModals;
