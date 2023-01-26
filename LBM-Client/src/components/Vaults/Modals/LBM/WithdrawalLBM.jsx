import React from "react";
import "./WithdrawalLBM.scss";
import LBM from "../../assets/LBM-icon.svg";
import close from "../../assets/Close-icon.svg";
import { useState } from "react";

function WithdrawalLBM({ states, setStateModals }) {
  function changeState() {
    setStateModals(false);
  }

  function openForm() {
    setStateModals({
      ...states,
      withdrawallbm: false,
      withdrawallbmrequest: true,
    });
  }

  function confirm() {
    setStateModals({
      ...states,
      withdrawallbmsuccess: true,
    });
  }

  return (
    <div
      className={
        states.withdrawallbm ? "modal-withdrawal-container" : "modals-off"
      }
    >
      <div className="modal">
        <div className="top-modal">
          <h4>Withdrawal LBM</h4>
          <img src={close} alt="cross" onClick={changeState} />
        </div>
        <div className="mid-modal">
          <button className="withdrawal-button">Withdrawal</button>
          <button className="request-button" onClick={openForm}>
            Request Withdrawal
          </button>
        </div>

        <div className="bottom-modal">
          <div className="container">
            <img src={LBM} alt="LBM incon" />
            <h4>Available LBM</h4>
          </div>
          <h4 style={{ fontWeight: 700, color: "#000000" }}>100LBM</h4>
        </div>
        <button onClick={confirm}>Confirm</button>
      </div>
    </div>
  );
}

export default WithdrawalLBM;
