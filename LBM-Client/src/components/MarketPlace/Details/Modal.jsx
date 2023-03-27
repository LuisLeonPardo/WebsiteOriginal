import React from "react";
import "./Modal.scss";
import close from "../assets/Cerrar.svg";
import calendar from "../assets/Calendar today.svg";
import personIcon from "../assets/material-symbols_person.svg";
import line from "../assets/line.svg";

function Modal({ number, isOpen, closeModal }) {
  return (
    <article
      className={`modalPlaceBid ${isOpen ? null : "is-close"}`}
      onClick={() => closeModal()}
    >
      <div
        className={`modalContainer ${isOpen ? null : "is-close"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          className="closeIcon"
          src={close}
          alt="close icon"
          onClick={() => closeModal()}
        />

        <div className="header">
          <h1>Filters</h1>
        </div>
        <div className="upper">
          <div className="upHeader">
            <h1>Place a bid</h1>
            <div className="personBid">
              <img src={personIcon} alt="person icon" />
              <h1 className="bids">337 Bid</h1>
            </div>
          </div>
          <p>
            You are about to place a bid for <br />
            <span>Land #{number}</span> from <span>Libertum</span> collection
          </p>
        </div>
        <div className="middle">
          <div className="inputs">
            <div className="yourBid">
              <label htmlFor="your-bid">Your bid</label>
              <div>
                <input
                  type="text"
                  name="your-bid"
                  placeholder="Placeholder Text"
                />
              </div>
            </div>
            <div className="bidExp">
              <label htmlFor="expiration">Bid expiration</label>
              <div>
                <input
                  type="text"
                  name="your-bid"
                  placeholder="Placeholder Text"
                />
                <img src={calendar} alt="calendar icon" />
              </div>
            </div>
          </div>
          <div className="detailsBalance">
            <div className="lines">
              <h1 className="underline">Your balance</h1>
              <h1 className="positiveNum">$600.500</h1>
            </div>
            <div className="lines">
              <h1 className="underline">Service fee</h1>
              <h1 className="negativeNum">-$300</h1>
            </div>
            <div className="lines">
              <h1 className="underline">Taxes</h1>
              <h1 className="negativeNum">-$5</h1>
            </div>
          </div>
        </div>
        <div className="bottom">
          <img src={line} alt="line" className="line" />
          <div className="totalTaxesDetail">
            <h1 className="totalBTax">Total before taxes</h1>
            <h1 className="beforeTaxNum">$500.305</h1>
          </div>
          <button className="bidBtn" onClick={() => closeModal()}>
            Place a bid
          </button>
        </div>
      </div>
    </article>
  );
}

export default Modal;
