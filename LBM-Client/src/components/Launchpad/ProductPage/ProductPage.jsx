import React from "react";
import style from "./ProductPage.module.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function ProductPage() {
  const value = 54;
  document.documentElement.style.setProperty("--value", value);
  const [selected, setSelected] = useState("pools");
  return (
    <div className={style.launchpad}>
      <div className={style.mainPort}>
        <div className={style.header}>
          <div className={style.title}>
            <h1>Launchpad</h1>
          </div>
          <div className={style.interact}>
            <NavLink to={"/launchpad"} className={style.back}></NavLink>
            <button className={style.refresh}></button>
            <input
              className={style.search}
              placeholder="Search by NFT's"
            ></input>
          </div>
        </div>
        <div className={style.object}>
          <div className={style.LeftSide}>
            <div className={style.images}>
              <img
                className={style.Image}
                src="https://adanimals.lovelace.world/static/media/hero-desktop-cover.706897dc.jpg"
                alt="image"
              />
              <img
                className={style.Picture}
                src="https://fotografias.larazon.es/clipping/cmsimages02/2022/02/03/8C20B879-A8EC-4CF4-9173-E666D39492C2/69.jpg?crop=1000,563,x0,y169&width=1280&height=720&optimize=low&format=webply"
                alt="picture"
              />
            </div>
            <div className={style.Info}>
              <h1> Adanimals</h1>
              <div className={style.Buttons}>
                <p
                  onClick={() => setSelected("pools")}
                  className={selected === "pools" ? style.buttonSelected : null}
                >
                  Pools
                </p>
                <p
                  onClick={() => setSelected("description")}
                  className={
                    selected === "description" ? style.buttonSelected : null
                  }
                >
                  Description
                </p>
                <p
                  onClick={() => setSelected("vesting")}
                  className={
                    selected === "vesting" ? style.buttonSelected : null
                  }
                >
                  Vesting
                </p>
                <p
                  onClick={() => setSelected("tokenomics")}
                  className={
                    selected === "tokenomics" ? style.buttonSelected : null
                  }
                >
                  Tokenomics
                </p>
              </div>
              {selected === "pools" ? (
                <div className={style.descriptionContainer}>
                  <div className={style.descriptionFlex}>
                    <img src="./icons/galaxy.svg" alt="poolLogo" />
                    <div className={style.descriptionInfo}>
                      <div className={style.descriptionText}>
                        <p>Open time</p>
                        <p>TBD</p>
                      </div>
                      <div className={style.descriptionText}>
                        <p>Size</p>
                        <p>TBD</p>
                      </div>
                      <div className={style.descriptionText}>
                        <p>Value per ticket</p>
                        <p>TBD</p>
                      </div>
                    </div>
                    <button className={style.descriptionButton}> Join </button>
                  </div>
                </div>
              ) : selected === "description" ? (
                <div className={style.descriptionContainer}>
                  <div
                    className={style.descriptionFlex}
                    style={{ width: "100%" }}
                  >
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Neque id nulla sit eos obcaecati architecto, odio
                      temporibus in eum! Repudiandae vel voluptas itaque odit
                      exercitationem recusandae fuga ab quasi velit?
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className={style.RightSide}>
            <h1> Raise details</h1>
            <div className={style.data}>
              <div className={style.fundRaise}>
                <h2>Fundraise goal</h2>
                <p>$400.000</p>
              </div>
              <div className={style.builtOn}>
                <h2>Project built on</h2>
              </div>
            </div>
            <div className={style.Progress}>
              <div
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
              <div className={style.ProgressText}>
                <div className={style.ValueText}>
                  <p>{value}%</p>
                </div>
                <p>Current progress</p>
              </div>
              <div className={style.ProgressValue}>
                <p>$0</p>
                <p>$400.000</p>
              </div>
            </div>
            <div className={style.TokenInfo}>
              <div className={style.TokenData}>
                <p>Allocation</p>
                <p>TBD</p>
              </div>
              <div className={style.TokenData}>
                <p>Price per token</p>
                <p>$0.04000</p>
              </div>
              <div className={style.TokenData}>
                <p>Raising on</p>
                <p></p>
              </div>
              <div className={style.TokenData}>
                <p>Raising in</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
