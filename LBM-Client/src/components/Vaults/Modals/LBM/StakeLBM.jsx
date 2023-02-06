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

  // var modal = document.getElementById("stakelbm");
  // var modal1 = document.getElementById("lbmform");
  // var modal2 = document.getElementById("lbmsuccess");
  // var modal3 = document.getElementById("stakelusd");
  // var modal4 = document.getElementById("lusdform");
  // var modal5 = document.getElementById("lusdsuccess");
  // window.onclick = function (event) {
  //   if (event.target === modal) {
  //     setStateModals({
  //       ...states,
  //       stakelbm: false,
  //     });
  //   }
  //   if (event.target === modal1) {
  //     setStateModals({
  //       ...states,
  //       lbmform: false,
  //     });
  //   }
  //   if (event.target === modal2) {
  //     setStateModals({
  //       ...states,
  //       lbmsuccess: false,
  //     });
  //   }
  //   if (event.target === modal3) {
  //     setStateModals({
  //       ...states,
  //       stakelusd: false,
  //     });
  //   }
  //   if (event.target === modal4) {
  //     setStateModals({
  //       ...states,
  //       lusdform: false,
  //     });
  //   }
  //   if (event.target === modal5) {
  //     setStateModals({
  //       ...states,
  //       lusdsuccess: false,
  //     });
  //   }
  // };

  return (
    <div
      id="stakelbm"
      className={states.stakelbm ? "modal-container-lbm" : "modals-off"}
    >
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
