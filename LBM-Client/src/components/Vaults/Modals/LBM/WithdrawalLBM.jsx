import React from "react";
import "./WithdrawalLBM.scss";
import LBM from "../../assets/LBM-icon.svg";
import close from "../../assets/Close-icon.svg";

function WithdrawalLBM({ state, setStateModal }) {
  function changeState() {
    setStateModal(false);
  }

  return (
    <div className={state ? "modal-withdrawal-container" : "modals-off"}>
      <div className="modal">
        <div className="top-modal">
          <h4>Withdrawal LBM</h4>
          <img src={close} alt="cross" onClick={changeState} />
        </div>
        <div className="mid-modal">
          <button className="withdrawal-button">Withdrawal</button>
          <button className="request-button">Request Withdrawal</button>
        </div>

        <div className="bottom-modal">
          <div className="container">
            <img src={LBM} alt="LBM incon" />
            <h4>Available LBM</h4>
          </div>
          <h4 style={{ fontWeight: 700, color: "#000000" }}>100LBM</h4>
        </div>
        <button onClick={changeState}>Confirm</button>
      </div>
    </div>
  );
}

export default WithdrawalLBM;
