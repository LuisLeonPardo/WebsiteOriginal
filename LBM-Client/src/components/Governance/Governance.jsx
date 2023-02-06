import React from "react";
import Check from "./assets/check.svg";
import Info from "./assets/info.svg";
import Coin from "./assets/coin.svg";
import "./Governance.scss";
import { Link } from "react-router-dom";

function Governance() {
  const listArray = [...Array(7)];

  return (
    <div className="governance-container">
      <div className="gov">
        <div className="first-column">
          <h1>Governance</h1>
          <div className="first-column-title">
            <h2>Proposals</h2>
            <div className="proposal">
              <h4>+ Create Proposal</h4>
              <img src={Info} />
            </div>
          </div>
          <div className="governance-list">
            <div className="sdadsa">
              {listArray.map(() => {
                return (
                  <Link to='/governance/id' style={{textDecoration: 'none', color: 'black'}}>
                    <div className="governance-list-item">
                      <h6>#79</h6>
                      <div className="governance-list-item-text">
                        <h3>
                          VIP-79 Whitelist BNB Chain as sole liquidator of the
                          BNB Exploiter address
                        </h3>
                        <div className="executed">
                          <img src={Check} />
                          <h5>Executed</h5>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="second-column">
          <h1 className="governance-phone">Governance</h1>
          <h2>Voting wallet</h2>
          <div className="gov-deposit">
            <div className="voting-weight">
              <h4>Voting weight</h4>
              <h3>0</h3>
            </div>
            <div className="total-locked">
              <h4>Total locked</h4>
              <div className="gov-coin">
                <img src={Coin} />
                <h3>0</h3>
              </div>
            </div>
            <h5>Deposit LBM</h5>
          </div>
          <div className="gov-recommendations">
            <h4>To vote you should:</h4>
            <h5>
              1. <em>Deposit your tokens</em> in the LBM Vault
            </h5>
            <h5>
              2. <em>Delegate your voting power</em> to yourself or somebody
              else
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Governance;
