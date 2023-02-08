import React, { useRef, useState, useEffect } from "react";
import "./VertSlider.scss";
import add from "./assets/add.svg";
import refresh from "./assets/refresh.svg";
import Coin from "../Slider/assets/Coin.svg";
import { motion } from "framer-motion";
import ModalBorrow from "../ModalBorrow/ModalBorrow";
import ModalRepay from "../ModalRepay/ModalRepay";

function VertSlider({ setStateModal }) {
  const dragSlider = useRef();
  /* const [height, setHeight] = useState(0); */

  const listArray = [...Array(7)];
  const length = listArray.length;
  const height = (length - 3) * 73;

  const [first, setFirst] = useState(false);

  /* useEffect(() => {
    setHeight(dragSlider.current.scrollHeight - dragSlider.current.offsetTop);
    console.log(
      -(dragSlider.current.scrollHeight - dragSlider.current.offsetTop)
    );
  }); */

  function changeState() {
    setStateModal(true);
  }

  function scoope() {
    setFirst(true);
    setTimeout(() => {
      setFirst(false);
    }, 1700);
  }

  return (
    <div className="container-vertslider">
      <div className="top-vertslider">
        <div className="title-vertslider">
          <h1>Your borrow market</h1>
          <h2>Updated 12 minutes ago</h2>
        </div>
        <div className="icons-vertslider">
          <img
            src={refresh}
            onClick={scoope}
            className={first ? "refresh scoope" : "refresh"}
          />

          {/* <img src={add} onClick={changeState} /> */}
          <ModalBorrow />
        </div>
      </div>
      <div className="overflow">
        <div className="scroll">
          {listArray.map(() => {
            return (
              <div>
                <ModalRepay />
                {/* <div className="market-table">
                  <img src={Coin} />
                  <h3 className="coin-name">Bitcoin</h3>
                  <div className="danger-status">
                    <h4>High</h4>
                    <h6>Danger Status</h6>
                  </div>
                  <div className="last-payment">
                    <h5>7 Jun, 21</h5>
                    <h6>Last payment</h6>
                  </div>
                  <div className="balance">
                    <h5>-10.24 BTC</h5>
                    <h6>Balance</h6>
                  </div>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default VertSlider;
