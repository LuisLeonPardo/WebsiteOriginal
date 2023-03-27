import React from "react";
import "./IDO.scss";
import Search from "./assets/Search.svg";
import Mario from "./assets/Mario.jpg";
import binance from "./assets/binance.svg";

function IDO() {
  return (
    <div className="launchpad-container">
      <div className="launchpad-top">
        <div className="launchpad-top-buttons">
          <h1 className="upcoming">Upcoming</h1>
          <h1 className="ending">Ending</h1>
        </div>
        <div className="launchpad-top-input">
          <input type="text" placeholder="Start your search" />
          <img src={Search} />
        </div>
      </div>
      <div className="launchpad-content">
        {[...Array(5)].map(() => {
          return (
            <div className="launchpad-item">
              <img src={Mario} style={{ borderRadius: "8px" }} />
              <div className="launchpad-item-content">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h1>Adanimals</h1>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <p>Project built on</p>
                    <img src={binance} />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                    gap: "12px",
                    marginTop: "35px",
                  }}
                >
                  <p>For</p>
                  <h6>826.94K</h6>
                </div>
                <span></span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "25px",
                    marginTop: "50px",
                  }}
                >
                  <h2
                    style={{
                      color: "#000000",
                      borderBottom: "4px solid #000000",
                      borderRadius: "3px",
                      cursor: "pointer",
                    }}
                  >
                    Offerings
                  </h2>
                  <h2 style={{ cursor: "pointer" }}>Description</h2>
                </div>
                <div style={{ textAlign: "left", marginTop: "32px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "100px",
                      marginBottom: "30px",
                    }}
                  >
                    <div>
                      <h2>Launched on</h2>
                      <h3>Apr 28, 2022</h3>
                    </div>
                    <div>
                      <h2>Total Raise</h2>
                      <h3>$400,000</h3>
                    </div>
                  </div>
                  <div>
                    <h2>Token price for IDO</h2>
                    <h3>$2.00000</h3>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default IDO;
