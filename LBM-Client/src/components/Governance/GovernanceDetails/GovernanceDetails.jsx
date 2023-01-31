import React from "react";
import "./GovernanceDetails.scss";
import Info from "../assets/info.svg";
import Vector from "./assets/Vector.svg";
import Help from "./assets/Help.svg";
import Check from "../assets/check.svg";

function GovernanceDetails() {
  return (
    <div className="govdetails-container">
      <div className="govdetails">
        <div className="govdetails-top">
          <div className="govdetails-top-text">
            <img src={Vector} />
            <h1>Proposals</h1>
          </div>
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
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default GovernanceDetails;
