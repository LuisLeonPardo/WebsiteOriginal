import React from "react";
import "./StakeLBMForm.scss";
import LBM from "../../assets/LBM-icon.svg";
import close from "../../assets/Close-icon.svg";

function StakeLBMForm({ states, setStateModals }) {
  function changeState() {
    setStateModals(false);
  }

  function confirm() {
    setStateModals({
      ...states,
      lbmform: false,
      lbmsuccess: true,
    });
  }

  return (
    <div className={states.lbmform ? "modal-stakelbm-form" : "modals-off"}>
      <div className="modal">
        <div className="top-modal">
          <h4>Stake LBM</h4>
          <img src={close} alt="cross" onClick={changeState} />
        </div>
        <div className="mid-modal">
          <div className="container">
            <img src={LBM} alt="LBM incon" />
            <input type="text" placeholder="0" />
          </div>
          <button className="max-button">MAX</button>
        </div>
        <div className="bottom-modal">
          <div className="container">
            <img src={LBM} alt="LBM incon" />
            <h4>Available LBM</h4>
          </div>
          <h4 style={{ fontWeight: 700, color: "#000000" }}>100 LBM</h4>
        </div>
        <button onClick={confirm}>Confirm</button>
      </div>
    </div>
  );
}

export default StakeLBMForm;
