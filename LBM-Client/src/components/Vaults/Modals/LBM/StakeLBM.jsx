import React from "react";
import "./StakeLBM.scss";
import LBM from "../../assets/LBM-icon.svg";
import { BsX } from "react-icons/bs";

function StakeLBM({ states, setStateModals }) {
  function closeModal() {
    setStateModals(false);
  }

  function openForm() {
    setStateModals({
      ...states,
      stakelbm: false,
      lbmform: true,
    });
  }

  return (
    <div className={states.stakelbm ? "modal-container-lbm" : "modals-off"}>
      <div className="modal">
        <h1>Stake LBM</h1>
        <div className="top-modal">
          <div onClick={closeModal}>
            <BsX className="close" />
          </div>
          <img src={LBM} alt="LBM icon" />
        </div>
        <h3>To stake LBM to this vault, you need to enable it first</h3>
        <button onClick={openForm}>Enable</button>
      </div>
    </div>
  );
}

export default StakeLBM;
