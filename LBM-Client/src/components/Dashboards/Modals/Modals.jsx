import React from "react";
import "./Modals.scss";
import Frame from "./assets/Frame.svg";
import Coin from "./assets/Coin.svg";

function Modals({ state, setStateModal }) {
  const listArray = [...Array(9)];

  function getRandom() {
    return Math.random();
  }

  function changeState() {
    setStateModal(false);
  }

  return (
    <div className={state ? "container-modals" : "modal-off"}>
      <div className="modal">
        <div className="top-modal">
          <h3>Borrow</h3>
          <div>
            <input className="search" placeholder="Search" name="search" />
            <img src={Frame} alt="close modal" onClick={changeState} />
          </div>
        </div>
        <div className="bottom-modal">
          <div>
            <h4>Asset</h4>
            {listArray.map(() => {
              return (
                <div className="modal-name" key={getRandom()}>
                  <img src={Coin} />
                  <h5>Bitcoin</h5>
                </div>
              );
            })}
          </div>
          <div>
            <h4>Wallet</h4>
            {listArray.map(() => {
              return <h5 key={getRandom()}>0 BTC</h5>;
            })}
          </div>
          <div>
            <h4>Amount</h4>
            {listArray.map(() => {
              return <h5 key={getRandom()}>+1545,00</h5>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modals;
