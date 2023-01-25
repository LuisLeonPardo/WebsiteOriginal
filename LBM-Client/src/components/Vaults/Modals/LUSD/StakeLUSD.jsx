import React from "react";
import "./StakeLUSD.scss";
import LUSD from "../../assets/LUSD-icon.svg";
import close from "../../assets/Close-icon.svg";

function StakeLUSD({ states, setStateModals }) {
  function changeState() {
    setStateModals(false);
  }
  function openForm() {
    setStateModals({
      ...states,
      stakelusd: false,
      lusdform: true,
    });
  }
  return (
    <div className={states.stakelusd ? "modal-container" : "modals-off"}>
      <div className="modal">
        <div className="top-modal">
          <img
            src={close}
            alt="cross"
            onClick={changeState}
            className="close"
          />
          <img src={LUSD} alt="LUSD icon" />
        </div>
        <h3>To stake LUSD to this vault, you need to enable it first</h3>
        <button onClick={openForm}>Enable</button>
      </div>
    </div>
  );
}

export default StakeLUSD;
