import React from "react";
import "./WithdrawalLUSD.scss";
import LUSD from "../../assets/LUSD-icon.svg";
import { BsX } from "react-icons/bs";

function WithdrawalLUSD({ states, setStateModals }) {
  function changeState() {
    setStateModals(false);
  }

  function openForm() {
    setStateModals({
      ...states,
      withdrawallusd: false,
      withdrawallusdrequest: true,
    });
  }

  function confirm() {
    setStateModals({
      ...states,
      withdrawallusd: false,
      withdrawallusdsuccess: true,
    });
  }

  return (
    <div
      id="withdrawallusd"
      className={
        states.withdrawallusd ? "modal-withdrawalLUSD-container" : "modals-off"
      }
    >
      <div className="modal">
        <div className="top-modal">
          <h4>Withdrawal LUSD</h4>
          <div onClick={changeState}>
            <BsX className="close" />
          </div>
        </div>
        <div className="mid-modal">
          <button className="withdrawal-button">Withdrawal</button>
          <button className="request-button" onClick={openForm}>
            Request Withdrawal
          </button>
        </div>

        <div className="bottom-modal">
          <div className="containerlusd">
            <img src={LUSD} alt="LUSD incon" />
            <h4>Available LUSD</h4>
          </div>
          <h4
            style={{
              fontWeight: 700,
              color: "#000000",
              margin: "0px 15px 0px",
            }}
          >
            100LUSD
          </h4>
        </div>
        <button onClick={confirm}>Confirm</button>
        <button className="withdrawlusd-btn" onClick={confirm}>
          Withdraw
        </button>
      </div>
    </div>
  );
}

export default WithdrawalLUSD;
