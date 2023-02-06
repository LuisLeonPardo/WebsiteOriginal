import React from "react";
import "./WithdrawalLBMSuccess.scss";
import LBM from "../../assets/LBM-icon.svg";
import ok from "../../assets/Ok-tick.svg";
import { BsX } from "react-icons/bs";

function WithdrawalLBMSuccess({ states, setStateModals }) {
  function changeState() {
    setStateModals(false);
  }

  return (
    <div
      id="withdrawallbmsuccess"
      className={
        states.withdrawallbmsuccess
          ? "withdrawallbm-success-modal"
          : "modals-off"
      }
    >
      <div className="modal">
        <div className="top-modal">
          <div onClick={changeState}>
            <BsX className="close" />
          </div>
          <img src={ok} alt="LBM icon" />
        </div>
        <div className="mid-modal">
          <h3>Your withdrawal was successful</h3>
          <div className="container-lbmconf">
            <h4 className="wth-mobile">You successfully withdrew</h4>
            <h4>You successfully requested a withdrawal of</h4>
            <div className="mobile-lbmconf">
              <img src={LBM} alt="LBM incon" />
              <h4 className="wth-mobile">100 LBM</h4>
              <h4>100 LBM</h4>
            </div>
          </div>
        </div>
        <button onClick={changeState}>Confirm</button>
      </div>
    </div>
  );
}

export default WithdrawalLBMSuccess;
