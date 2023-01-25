import React from "react";
import "./WithdrawalLBMRequest.scss";
import LBM from "../../assets/LBM-icon.svg";
import close from "../../assets/Close-icon.svg";

function WithdrawalLBMRequest({ states, setStateModals }) {
  function changeState() {
    setStateModals(false);
  }

  function withdrawBack() {
    setStateModals({
      ...states,
      withdrawallbmrequest: false,
      withdrawallbm: true,
    });
  }

  function confirm() {
    setStateModals({
      ...states,
      withdrawallbmrequest: false,
      withdrawallbmlocked: true,
    });
  }

  return (
    <div
      className={states.withdrawallbmrequest ? "request-modal" : "modals-off"}
    >
      <div className="modal">
        <div className="top-modal">
          <h4>Withdrawal LBM</h4>
          <img src={close} alt="cross" onClick={changeState} />
        </div>
        <div className="list">
          <h3>Withdrawal request list</h3>
        </div>
        <div className="upper-buttons">
          <button className="withdraw-button" onClick={withdrawBack}>
            Withdrawal
          </button>
          <button className="request-button1">Request Withdrawal</button>
        </div>
        <div className="mid-modal">
          <div className="container">
            <img src={LBM} alt="LBM incon" />
            <input type="text" placeholder="0" />
          </div>
          <button className="max-button">MAX</button>
        </div>
        <div className="requestable-container">
          <div className="bottom-modal">
            <div className="container">
              <img src={LBM} alt="LBM incon" />
              <h4>Requestable LBM</h4>
            </div>
            <h4 style={{ fontWeight: 700, color: "#000000" }}>100LBM</h4>
          </div>
          <div className="bottom-modal">
            <div className="container">
              <h4>Locking period</h4>
            </div>
            <h4 style={{ fontWeight: 700, color: "#000000" }}>7 days</h4>
          </div>
        </div>
        <button className="confirm-button" onClick={confirm}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default WithdrawalLBMRequest;
