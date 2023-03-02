import React from "react";
import { Slide } from "react-awesome-reveal";

import mkt from "./assets/mkt.svg";
import launchpad from "./assets/launchpad.svg";
import loans from "./assets/loans.svg";
import "./Services.scss";

export default function Services() {
  return (
    <main className="services_items">
      <section className="services_section">
        <Slide direction={"down"} triggerOnce={"true"}>
          <div className="services_text">
            <h2>Libertum Services</h2>
            <p>
              Libertum Project services are divided into 3 categories and are
              developed in 3 different stages. In
              the first stage we have the DeFi 1.0 loans with the addition of
              minting stablecoins, in the second stage we have the real estate
              marketplace which allows for tokenization of property, and finally we encourage other projects to take part in
              offering loan services with real estate property collateral
            </p>
          </div>
        </Slide>
        <div className="services_quad">
          <Slide direction={"left"} triggerOnce={"true"}>
            <div className="services-quad_item">
              <img src={loans} />
              <h3>Loans</h3>
              <p>The ability to passively earn interest through DeFi 2.0 loans</p>
              <div></div>
            </div>
          </Slide>
          <Slide direction={"up"} triggerOnce={"true"}>
            <div className="services-quad_item">
              <img src={mkt} />
              <h3>
                Marketplace <br></br>Real Estate
              </h3>
              <p>
                One of the first real estate markets where you can buy, sell, trade and
                invest in crypto or fiat-currency with real estate collatoral
              </p>
              <div></div>
            </div>
          </Slide>
          <Slide direction={"right"} triggerOnce={"true"}>
            <div className="services-quad_item">
              <img src={launchpad} />
              <h3>Launchpad Crypto</h3>
              <p>
                Libertum Project invites real estate owners, syndicates, individuals and startups that want a solid experience in
                the DeFi world are looking for liquidity
              </p>
              <div></div>
            </div>
          </Slide>
        </div>
      </section>
    </main>
  );
}
