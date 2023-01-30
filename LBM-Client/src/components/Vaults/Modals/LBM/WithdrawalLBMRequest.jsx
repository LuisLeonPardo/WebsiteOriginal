import React from "react";
import "./WithdrawalLBMRequest.scss";
import LBM from "../../assets/LBM-icon.svg";
import { BsX } from "react-icons/bs";

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
      withdrawallbmsuccess: true,
    });
  }

  function openList() {
    setStateModals({
      ...states,
      withdrawallbmrequest: false,
      withdrawallbmlocked: true,
    });
  }

  return (
    <div
      id="withdrawallbmrequest"
      className={
        states.withdrawallbmrequest ? "requestlbm-modal" : "modals-off"
      }
    >
      <div className="modal">
        <div className="top-modal">
          <h4>Withdrawal LBM</h4>
          <div onClick={changeState}>
            <BsX className="close" />
          </div>
        </div>
        <div className="list">
          <h3 onClick={openList}>Withdrawal request list</h3>
        </div>
        <div className="upper-buttons">
          <button className="withdraw-button" onClick={withdrawBack}>
            Withdrawal
          </button>
          <button className="request-button1">Request Withdrawal</button>
        </div>
        <div className="mid-modal">
          <div className="container-locklbm">
            <img src={LBM} alt="LBM incon" />
            <input type="text" placeholder="0" />
          </div>
          <button className="max-button">MAX</button>
        </div>
        <div className="requestable-container">
          <div className="bottom-modal">
            <div className="container-locklbm">
              <img src={LBM} alt="LBM incon" />
              <h4>Requestable LBM</h4>
            </div>
            <h4 style={{ fontWeight: 700, color: "#000000", marginLeft: 5 }}>
              100LBM
            </h4>
          </div>
          <div className="bottom-modal">
            <div className="container-lbmlck">
              <h4>Locking period</h4>
            </div>
            <h4 style={{ fontWeight: 700, color: "#000000", marginLeft: 5 }}>
              7 days
            </h4>
          </div>
        </div>
        <button className="confirm-button" onClick={confirm}>
          Confirm
        </button>
        <button className="valid-button" onClick={confirm}>
          Enter a valid amount to request
        </button>
      </div>
    </div>
  );
}

export default WithdrawalLBMRequest;
