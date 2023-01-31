import React from "react";
import "./StakeLUSDSuccess.scss";
import LUSD from "../../assets/LUSD-icon.svg";
import ok from "../../assets/Ok-tick.svg";
import { BsX } from "react-icons/bs";

function StakeLUSDSuccess({ states, setStateModals }) {
  function changeState() {
    setStateModals(false);
  }

  return (
    <div
      id="lusdsuccess"
      className={states.lusdsuccess ? "lusdsuccess-modal" : "modals-off"}
    >
      <div className="modal">
        <div className="top-modal">
          <div onClick={changeState}>
            <BsX className="close" />
          </div>
          <img src={ok} alt="ok icon" />
        </div>
        <div className="mid-modal">
          <h3>Your stake was successful</h3>
          <div className="container-lusuc">
            <h4>You successfully staked</h4>
            <div className="mobile-lusuc">
              <img src={LUSD} alt="LUSD incon" />
              <h4>100 LUSD</h4>
            </div>
          </div>
        </div>
        <button onClick={changeState}>Confirm</button>
      </div>
    </div>
  );
}

export default StakeLUSDSuccess;
