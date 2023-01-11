import React from "react";
import "./Mint.scss";

function Mint() {
  return (
    <div className="mint-container">
      <div className="title-mint">
        <h1>Mint/Repay LUSD</h1>
        <div className='mint-repay'>
          <h3>Mint LUSD</h3>
          <h3>Repay LUSD</h3>
        </div>
      </div>
      <p>
        To mint LUSD with the Libertum Protocol, you need to enable it first
      </p>
      <h2>Confirm</h2>
    </div>
  );
}

export default Mint;
