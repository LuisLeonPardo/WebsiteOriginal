import React from "react";
import Slider from "../Slider/Slider";
import VertSlider from "../VertSlider/VertSlider";
import Mint from "../Mint/Mint";
import UserInfo from "../UserInfo/UserInfo";
import FinancialMarket from "../Deposit/Deposit";
import "./Dash.scss";

function Dash({setStateModal}) {
  return (

    <div className="general">
      <div className="dash">
      <div className="columnOne">
        <div className="account">
          <h1 className="show">Dashboard</h1>
          <UserInfo/>
        </div>
        <div className="hidden">
          <FinancialMarket/>
        </div>
      </div>
      <div className="columnOne">
        <div className="hidden">
          <Slider />
        </div>
        <div className="hidden">
          <VertSlider setStateModal={setStateModal} />
        </div>
        <Mint />
      </div>
      </div>
    </div>
  );
}

export default Dash;
