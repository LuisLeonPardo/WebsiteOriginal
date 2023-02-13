import React from "react";
import "./GovernanceDetails.scss";
import Info from "../assets/info.svg";
import Vector from "./assets/Vector.svg";
import Help from "./assets/Help.svg";
import Check from "../assets/check.svg";
import { NavLink } from "react-router-dom";

function GovernanceDetails() {
  return (
    <div className="govdetails-container">
      <div className="govdetails">
        <div className="govdetails-top">
          <NavLink to={'/governance'}>
            <div className="govdetails-top-text" style={{ cursor: "pointer" }}>
              <img src={Vector} />
              <h1>Proposals</h1>
            </div>
          </NavLink>

          <div className="govdetails-top-text grey">
            <h2>+ Create proposal</h2>
            <img src={Info} />
          </div>
        </div>
        <div className="govdetails-title">
          <div className="govdetails-name">
            <h2>#82</h2>
            <div className="govdetails-name-text">
              <h1>VIP-82 XVS Quarterly Buyback and Funds Allocation</h1>
              <div className="govdetails-name-help">
                <h3>0x7a...91ba</h3>
                <img src={Help} />
              </div>
            </div>
          </div>
          <div className="govdetails-proposal">
            <h1>Proposal History</h1>
            <div className="proposal-list">
              <div className="proposal-list-item">
                <div className="proposal-list-item-text">
                  <img src={Check} />
                  <h2>Created</h2>
                </div>
                <h3>06 Jan 2023 1:48 AM</h3>
              </div>
              <div className="proposal-list-item">
                <div className="proposal-list-item-text">
                  <img src={Check} />
                  <h2>Active</h2>
                </div>
                <h3>06 Jan 2023 1:48 AM</h3>
              </div>
              <div className="proposal-list-item">
                <div className="proposal-list-item-text">
                  <img src={Check} />
                  <h2>Succeed</h2>
                </div>
                <h3>07 Jan 2023 1:48 AM</h3>
              </div>
              <div className="proposal-list-item">
                <div className="proposal-list-item-text">
                  <img src={Check} />
                  <h2>Queue</h2>
                </div>
                <h3>07 Jan 2023 2:20 AM</h3>
              </div>
              <div className="proposal-list-item">
                <div className="proposal-list-item-text">
                  <img src={Check} />
                  <h2>Execute</h2>
                </div>
                <h3>09 Jan 2023 4:24 AM</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="govdetails-middle">
          <div className="govdetails-cards">
            <div className="govdetails-cards-top">
              <div className="govdetails-cards-top-text">
                <h2>For</h2>
                <h1>826.94K</h1>
              </div>
              <span></span>
              <h6>For</h6>
            </div>
            <div className="govdetails-list-title">
              <h1>38 addresses</h1>
              <h1>Votes</h1>
            </div>
            <div className="govdetails-list">
              <div className="govdetails-list-text">
                <h2>0xc4...2391</h2>
                <h3>721.80K</h3>
              </div>
              <div className="govdetails-list-text">
                <h2>0x65...0527</h2>
                <h3>31.28K</h3>
              </div>
              <div className="govdetails-list-text">
                <h2>0x3b...afba</h2>
                <h3>23.35K</h3>
              </div>
              <div className="govdetails-list-text">
                <h2>0x7c...db0b</h2>
                <h3>15.10K</h3>
              </div>
            </div>
          </div>
          <div className="govdetails-cards">
            <div className="govdetails-cards-top">
              <div className="govdetails-cards-top-text">
                <h2>Against</h2>
                <h1>0</h1>
              </div>
              <span className="span-grey"></span>
              <h6>Against</h6>
            </div>
            <div className="govdetails-list-title">
              <h1>0 addresses</h1>
              <h1>Votes</h1>
            </div>
          </div>
          <div className="govdetails-cards">
            <div className="govdetails-cards-top">
              <div className="govdetails-cards-top-text">
                <h2>Abstain</h2>
                <h1>0</h1>
              </div>
              <span className="span-grey"></span>
              <h6>Abstain</h6>
            </div>
            <div className="govdetails-list-title">
              <h1>0 addresses</h1>
              <h1>Votes</h1>
            </div>
          </div>
        </div>
        <div className="govdetails-bottom">
          <h2 style={{ marginBottom: "9px" }}>Description</h2>
          <div>
            <h1 style={{ marginBottom: "18px" }}>Summary</h1>
            <p style={{ marginBottom: "25px" }}>
              VIP-82 relates to the Quarterly Venus Protocol XVS Buyback & Funds
              allocation as indicated in our Tokenomics.
            </p>
          </div>
          <div>
            <h1 style={{ marginBottom: "18px" }}>Specifications</h1>
            <p style={{ marginBottom: "20px" }}>
              You can read the latest details about the Buyback & Burn and
              tokenomics distribution here:{" "}
              <em className="yellow">
                Venus proposal: Venus Tokenomics Upgrade v3.0 Proposal
                (snapshot.org)
              </em>
            </p>
            <p style={{ marginBottom: "25px" }}>
              As we now have the ability to include more commands in our
              proposals, only 1 is required to withdraw all of the funds to
              proceed with the Q4 2022 withdrawals for the buyback and
              corresponding funds allocations.
            </p>
          </div>
          <div>
            <h2 style={{ marginBottom: "9px" }}>Voting options</h2>
            <div className="voting">
              <p style={{ marginBottom: "4px" }}>
                For - I agree that Venus Protocol should proceed with the
                Buyback & Tokenomics Distribution
              </p>
              <p style={{ marginBottom: "4px" }}>
                Against - I do not think that Venus Protocol should proceed with
                the Buyback & Tokenomics Distribution
              </p>
              <p style={{ marginBottom: "25px" }}>
                Abstain - I am indifferent to whether Venus Protocol proceeds
                with the Buyback & Tokenomics Distribution
              </p>
            </div>
          </div>
          <div>
            <h2 style={{ marginBottom: "3px" }}>Operation</h2>
            {[...Array(20)].map(() => {
              return (
                <div>
                  <p className="long">
                    <em className="cyan">Usdc</em>
                    ._reduceReserves(65092893675489105452628)
                  </p>
                  <p className="long">
                    <em className="cyan">Usdt</em>
                    .transfer("0x6657911F7411765979Da0794840D671Be55bA273",
                    65092893675489105452628)
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GovernanceDetails;
