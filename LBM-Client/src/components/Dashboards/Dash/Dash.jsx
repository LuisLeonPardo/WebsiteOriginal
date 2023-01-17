import React from "react";
import Slider from "../Slider/Slider";
import VertSlider from "../VertSlider/VertSlider";
import Mint from "../Mint/Mint";
import UserInfo from "../UserInfo/UserInfo";
import FinancialMarket from "../FinancialMarket/FinancialMarket";
import "./Dash.scss";

function Dash({setStateModal}) {
  return (

    <div className="general">
      <div className="dash">
      <div className="columnOne">
        <UserInfo/>
        <FinancialMarket/>
      </div>
      <div className="columnOne">
        <Slider />
        <VertSlider setStateModal={setStateModal} />
        <Mint />
      </div>
      </div>
    </div>
  );
}

export default Dash;
