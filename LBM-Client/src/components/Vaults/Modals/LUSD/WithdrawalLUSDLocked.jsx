import React from "react";
import "./WithdrawalLUSDLocked.scss";
import LUSD from "../../assets/LUSD-icon.svg";
import close from "../../assets/Close-icon.svg";

function WithdrawalLUSDLocked({ states, setStateModals }) {
  function changeState() {
    setStateModals(false);
  }

  function goBack() {
    setStateModals({
      ...states,
      withdrawallusdlocked: false,
      withdrawallusdrequest: true,
    });
  }
  return (
    <div
      className={states.withdrawallusdlocked ? "locked-modal" : "modals-off"}
    >
      <div className="modal">
        <div className="top-modal">
          <h4>Withdrawal LUSD</h4>
          <img src={close} alt="cross" onClick={changeState} />
        </div>
        <div className="bottom-modal">
          <div className="container">
            <img src={LUSD} alt="LUSD incon" />
            <h4 style={{ fontWeight: 700, color: "#000000" }}>100LUSD</h4>
          </div>
          <h4>Locked until 26.09.22 4:18PM</h4>
        </div>
        <button onClick={goBack}>Confirm</button>
      </div>
    </div>
  );
}

export default WithdrawalLUSDLocked;
