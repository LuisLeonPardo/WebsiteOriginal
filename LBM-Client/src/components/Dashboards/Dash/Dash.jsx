import React, { useState, useEffect } from "react";
import Slider from "../Slider/Slider";
import VertSlider from "../VertSlider/VertSlider";
import Mint from "../Mint/Mint";
import UserInfo from "../UserInfo/UserInfo";
import FinancialMarket from "../Deposit/Deposit";
import "./Dash.scss";
import SupplyMarket from "../SupplyMarket/SupplyMarket";
import { useModal } from "../../../helpers/useModal/useModal";
//import WarningBuilding from "../../WarningBuilding";
function Dash({ setStateModal }) {
  const [active, setActive] = useState("Supply");
  const [isOpenModal, openModal, closeModal] = useModal();
  const handleClick = (e) => {
    setActive(e.target.name);
  };

  useEffect(() => {
    1;
    openModal();
  }, []);

  return (
    <div className="generalD">
      {/* <WarningBuilding isOpen={isOpenModal} closeModal={closeModal} /> */}
      <div className="dash">
        <div className="columnOne">
          <div className="account">
            <h1 className="show">Dashboard</h1>
            <UserInfo />
          </div>
          <div className="hidden">
            <FinancialMarket />
          </div>
        </div>
        <div className="columnTwo">
          <div className="hidden">
            <Slider />
          </div>
          <div className="hidden">
            <VertSlider setStateModal={setStateModal} />
          </div>
          <Mint />
        </div>
        <div className="markets">
          <h2>Markets</h2>
          <div className="buttons">
            <button
              className={active === "Supply" ? "buttonOn" : "buttonOff"}
              name="Supply"
              onClick={handleClick}
            >
              Supply
            </button>
            <button
              className={active === "Withdraw" ? "buttonOn" : "buttonOff"}
              name="Withdraw"
              onClick={handleClick}
            >
              Borrow
            </button>
          </div>
          <SupplyMarket active={active} />
        </div>
      </div>
    </div>
  );
}

export default Dash;
