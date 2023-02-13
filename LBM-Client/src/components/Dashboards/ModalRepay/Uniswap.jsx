import Box from "./Assets/Box.svg";
import Vector from "./Assets/Vector.svg";
import Ok from "./Assets/ok.svg";
import { useState } from "react";
import { BsX } from "react-icons/bs";
import Uniswap from "./Assets/Uniswap.svg";
import Logo from "./Assets/Logo.svg";


export default function BorrowRepay({ handleClose, name }) {
  const [active, setActive] = useState("Supply");
  const [confirm, setConfirm] = useState(true);

  const handleClick = (e) => {
    setActive(e.target.name);
  };

  const handleConfirm = () => {
    setConfirm(false);
  };

  return (
    <div>
      <div className={confirm ? "brContainer" : "modalHide"}>
        <div className="header">
          <div></div>
          <div className="logo">
            <img src={Uniswap} />
            <h1>Uniswap</h1>
          </div>
          <div onClick={handleClose}>
            <BsX className="close" />
          </div>
        </div>
        <div className="text1">
          <p>The easiest way to support the Borrow market</p>
        </div>
        <div className="button1">
          <button
            name="Supply"
            className={active === "Supply" ? "buttonOn" : "buttonOff"}
            onClick={handleClick}
          >
            Borrow
          </button>
          <button
            name="Withdraw"
            className={active === "Withdraw" ? "buttonOn" : "buttonOff"}
            onClick={handleClick}
          >
            Repay
          </button>
        </div>
        <div className="text2">
          <p>
            To {active === "Supply" ? "borrow" : "repay"} UNI to the Libertum
            Protocol, you need to enable it first
          </p>
        </div>
        <div className="body">
          <div className="rowBody">
            <div className="columnBody">
              <img src={Uniswap} />
              <h4>Supply APY</h4>
            </div>
            <h3>-7.89%</h3>
          </div>
          <div className="rowBody">
            <div className="columnBody">
              <img src={Box} />
              <h4>Distribution APY</h4>
            </div>
            <h3>1.5%</h3>
          </div>
        </div>
        <div className="button2" onClick={handleConfirm}>
          <button>Confirm</button>
        </div>
      </div>
      <div className={confirm ? "modalHide" : "cContainer"}>
        <div onClick={handleClose} className="head">
          <BsX className="exit" />
        </div>
        <img src={Ok} alt="hello" />
        <h3 className="ready">Ready !</h3>
        <div className="supply">
          <h4>
            {" "}
            Your ETH {active === "Supply" ? "borrow" : "repay"} is 0.001110{" "}
          </h4>
        </div>
        <div className="button3" onClick={handleConfirm}>
          <button onClick={handleClose}>Confirm</button>
        </div>
      </div>
    </div>
  );
}
