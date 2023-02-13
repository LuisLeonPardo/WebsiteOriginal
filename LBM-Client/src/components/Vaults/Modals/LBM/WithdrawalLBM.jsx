import React from "react";
import "./WithdrawalLBM.scss";
import LBM from "../../assets/LBM-icon.svg";
import { BsX } from "react-icons/bs";

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
      withdrawallbm: false,
      withdrawallbmsuccess: true,
    });
  }

  // var modal = document.getElementById("withdrawallbm");
  // window.onclick = function (event) {
  //   if (event.target === modal) {
  //     setStateModals({
  //       ...states,
  //       withdrawallbm: false,
  //     });
  //   }
  // };

  return (
    <div
      id="withdrawallbm"
      className={
        states.withdrawallbm ? "modal-withdrawal-container" : "modals-off"
      }
    >
      <div className="modal">
        <div className="top-modal">
          <h4>Withdrawal LBM</h4>
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
          <div className="containerlbm">
            <img src={LBM} alt="LBM incon" />
            <h4>Available LBM</h4>
          </div>
          <h4
            style={{
              fontWeight: 700,
              color: "#000000",
              margin: "0px 15px 0px",
            }}
          >
            100 LBM
          </h4>
        </div>
        <button onClick={confirm}>Confirm</button>
        <button className="withdraw-btn" onClick={confirm}>
          Withdraw
        </button>
      </div>
    </div>
  );
}

export default WithdrawalLBM;
