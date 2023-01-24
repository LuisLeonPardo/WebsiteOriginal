import React from "react";
import "./WithdrawalLUSDRequest.scss";
import LUSD from "../../assets/LUSD-icon.svg";
import close from "../../assets/Close-icon.svg";

function WithdrawalLUSDRequest({ state, setStateModal }) {
  function changeState() {
    setStateModal(false);
  }
  return (
    <div className={state ? "request-modal" : "modals-off"}>
      <div className="modal">
        <div className="top-modal">
          <h4>Withdrawal LUSD</h4>
          <img src={close} alt="cross" onClick={changeState} />
        </div>
        <div className="list">
          <h3>Withdrawal request list</h3>
        </div>
        <div className="upper-buttons">
          <button className="withdrawal-button">Withdrawal</button>
          <button className="request-button">Request Withdrawal</button>
        </div>
        <div className="mid-modal">
          <div className="container">
            <img src={LUSD} alt="LUSD incon" />
            <input type="text" placeholder="0" />
          </div>
          <button className="max-button">MAX</button>
        </div>
        <div className="requestable-container">
          <div className="bottom-modal">
            <div className="container">
              <img src={LUSD} alt="LUSD incon" />
              <h4>Requestable LUSD</h4>
            </div>
            <h4 style={{ fontWeight: 700, color: "#000000" }}>100LUSD</h4>
          </div>
          <div className="bottom-modal">
            <div className="container">
              <h4>Locking period</h4>
            </div>
            <h4 style={{ fontWeight: 700, color: "#000000" }}>7 days</h4>
          </div>
        </div>
        <button className="confirm-button" onClick={changeState}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default WithdrawalLUSDRequest;
