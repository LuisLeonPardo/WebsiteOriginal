import React from "react";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
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
            <h2>Libertum Project Proposition</h2>
            <p>
              Libertum Project services are divided into 3 categories and were
              developed in 3 different stages. In
              the first stage we developed the DeFi 1.0 loans component with the functionality of
              minting stablecoins, in the second stage we finalized the real estate investment
              marketplace which provides for the tokenization of property, and in the last stage we created an environment where we encourage other projects to take part in
              offering loan services backed by real estate property collateral
            </p>
          </div>
        </Slide>
        <div className="services_quad">
          <Slide direction={"left"} triggerOnce={"true"}>
            <Link to={'/comingsoon'}> 
            <div className="services-quad_item">
              <img src={loans} />
              <h3>Decentralized Finance Loans</h3>
              <p>The ability to passively earn interest through DeFi 2.0 loans. Our proposition broadens the horizon of credit markets, connecting the real estate, and secondary market with Defi solutions</p>
              <div></div>
            </div>
            </Link>
          </Slide>
          <Slide direction={"up"} triggerOnce={"true"}>
          <Link to={'/comingsoon'}> 
            <div className="services-quad_item">
              <img src={mkt} />
              <h3>
                Real Estate Marketplace
              </h3>
              <p>
                One of the first real estate marketplaces where you can buy, sell, trade and
                invest in crypto or fiat-currency backed by real estate collateral
              </p>
              <div></div>
            </div>
            </Link>
          </Slide>
          <Slide direction={"right"} triggerOnce={"true"}>
          <Link to={'/comingsoon'}> 
            <div className="services-quad_item">
              <img src={launchpad} />
              <h3>Crypto Currency Launchpad</h3>
              <p>
                Libertum Project invites real estate owners, syndicates, individuals and startups that want a solid experience in
                the DeFi world are looking for liquidity
                
              </p>
              <div></div>
              <br />
            </div>
            </Link>
          </Slide>
        </div>
      </section>
    </main>
  );
}
