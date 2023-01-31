import React from "react";
import "./WithdrawalLUSDRequest.scss";
import LUSD from "../../assets/LUSD-icon.svg";
import { BsX } from "react-icons/bs";

function WithdrawalLUSDRequest({ states, setStateModals }) {
  function changeState() {
    setStateModals(false);
  }

  function withdrawBack() {
    setStateModals({
      ...states,
      withdrawallusdrequest: false,
      withdrawallusd: true,
    });
  }

  function confirm() {
    setStateModals({
      ...states,
      withdrawallusdrequest: false,
      withdrawallusdsuccess: true,
    });
  }

  function openList() {
    setStateModals({
      ...states,
      withdrawallusdrequest: false,
      withdrawallusdlocked: true,
    });
  }

  return (
    <div
      id="withdrawallusdrequest"
      className={
        states.withdrawallusdrequest ? "requestlusd-modal" : "modals-off"
      }
    >
      <div className="modal">
        <div className="top-modal">
          <h4>Withdrawal LUSD</h4>
          <div onClick={changeState}>
            <BsX className="close" />
          </div>
        </div>
        <div className="list">
          <h3 onClick={openList}>Withdrawal request list</h3>
        </div>
        <div className="upper-buttons">
          <button className="withdrawal-button" onClick={withdrawBack}>
            Withdrawal
          </button>
          <button className="request-button">Request Withdrawal</button>
        </div>
        <div className="mid-modal">
          <div className="container-locklusd">
            <img src={LUSD} alt="LUSD incon" />
            <input type="text" placeholder="0" />
          </div>
          <button className="max-button">MAX</button>
        </div>
        <div className="requestable-container">
          <div className="bottom-modal">
            <div className="container-locklusd">
              <img src={LUSD} alt="LUSD incon" />
              <h4>Requestable LUSD</h4>
            </div>
            <h4 style={{ fontWeight: 700, color: "#000000" }}>100LUSD</h4>
          </div>
          <div className="bottom-modal">
            <div className="container-lusdlck">
              <h4>Locking period</h4>
            </div>
            <h4 style={{ fontWeight: 700, color: "#000000" }}>7 days</h4>
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

export default WithdrawalLUSDRequest;
