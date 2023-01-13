import React from "react";
import Slider from "../Slider/Slider";
import VertSlider from "../VertSlider/VertSlider";
import Mint from "../Mint/Mint";
import UserInfo from "../UserInfo/UserInfo"
import FinancialMarket from "../FinancialMarket/FinancialMarket"

function Dash() {


  return (
    <div>
      <Slider />
      <VertSlider />
      <Mint />
      <UserInfo/>
      <FinancialMarket/>
    </div>
  );
}

export default Dash;
