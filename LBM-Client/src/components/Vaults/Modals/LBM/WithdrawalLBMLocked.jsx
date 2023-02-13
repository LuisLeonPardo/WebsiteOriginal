import React from "react";
import "./WithdrawalLBMLocked.scss";
import LBM from "../../assets/LBM-icon.svg";
import { BsX } from "react-icons/bs";

function WithdrawalLBMLocked({ states, setStateModals }) {
  function goBack() {
    setStateModals({
      ...states,
      withdrawallbmlocked: false,
      withdrawallbmrequest: true,
    });
  }
  return (
    <div
      id="withdrawallbmlocked"
      className={states.withdrawallbmlocked ? "lockedlbm-modal" : "modals-off"}
    >
      <div className="modal">
        <div className="top-modal">
          <h4>Withdrawal LBM</h4>
          <div onClick={goBack}>
            <BsX className="close" />
          </div>
        </div>
        <div className="bottom-modal">
          <div className="container-lbmwth">
            <img src={LBM} alt="LBM incon" />
            <h4 style={{ fontWeight: 700, color: "#000000" }}>100LBM</h4>
            <h4 className="mobile">Requestable LBM</h4>
            <h4 className="hidden-amount">100LBM</h4>
          </div>
          <h4 className="locked-mobile">Locked until 26.09.22 4:18PM</h4>
        </div>
        <button onClick={goBack}>Confirm</button>
      </div>
    </div>
  );
}

export default WithdrawalLBMLocked;
