import React from "react";
import "./BorrowList.scss";
import { BsX } from "react-icons/bs";
import Coins from "./assets/Coins.svg";

function BorrowList({ handleClose }) {
  return (
    <div className="borrowlist-container">
      <div className="top-modal">
        <h1>Borrow</h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input className="search" placeholder="Search" name="search" />
          <div
            onClick={handleClose}
            style={{ display: "flex", alignItems: "center" }}
          >
            <BsX className="close" />
          </div>
        </div>
      </div>
      <div>
        <div className="title-list-modal">
          <h2>Asset</h2>
          <h2>Wallet</h2>
        </div>
        <div className="list-modal">
          {[...Array(10)].map(() => {
            return (
              <div className="list-item-modal">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "75px" }}
                >
                  <img src={Coins} width="35px" />
                  <h3>Bitcoin</h3>
                </div>
                <h3>0 BTC</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BorrowList;
