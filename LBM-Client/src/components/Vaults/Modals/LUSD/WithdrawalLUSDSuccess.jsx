import React from "react";
import "./WithdrawalLUSDSuccess.scss";
import LUSD from "../../assets/LUSD-icon.svg";
import ok from "../../assets/Ok-tick.svg";
import { BsX } from "react-icons/bs";

function WithdrawalLUSDSuccess({ states, setStateModals }) {
  function changeState() {
    setStateModals(false);
  }

  return (
    <div
      id="withdrawallusdsuccess"
      className={
        states.withdrawallusdsuccess ? "withdrawal-success-modal" : "modals-off"
      }
    >
      <div className="modal">
        <div className="top-modal">
          <div onClick={changeState}>
            <BsX className="close" />
          </div>
          <img src={ok} alt="ok icon" />
        </div>
        <div className="mid-modal">
          <h3>Your withdrawal was successful</h3>
          <div className="container-lusdconf">
            <h4 className="wth-mobile">You successfully withdrew</h4>
            <h4>You successful requested a withdrawal of</h4>
            <div className="mobile-lusdconf">
              <img src={LUSD} alt="LUSD incon" />
              <h4 className="wth-mobile">100 LBM</h4>
              <h4>100LUSD</h4>
            </div>
          </div>
        </div>
        <button onClick={changeState}>Confirm</button>
      </div>
    </div>
  );
}

export default WithdrawalLUSDSuccess;
