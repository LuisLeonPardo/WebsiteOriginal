import React from "react";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";

import mkt from "./assets/mkt.svg";
import launchpad from "./assets/launchpad.svg";
import loans from "./assets/loans.svg";
import "./Services.scss";

export default function Services() {
  return (
    <Zoom>
      <main className="services_items">
        <section className="services_section">
          <Zoom>
            <div className="services_text">
              <h2>Libertum Services</h2>
              <p>
                Libertum services were divided into 3 categories and will be
                developed in 3 different times according to the avaze project.
                In the first place we have the DeFi 1.0 loans with the plus of
                minting stablecoins, in the second we will have the real estate
                marketplace and finally encourage other projects to incur in
                offering loan services with real collaterals
              </p>
            </div>
          </Zoom>
          <Slide left cascade>
            <div className="services_quad">
              <div className="services-quad_item">
                <img src={loans} />
                <h3>Loans</h3>
                <p>The ability to passively earn through DeFi 2.0 loans</p>
                <div></div>
              </div>
              <div className="services-quad_item">
                <img src={mkt} />
                <h3>
                  Marketplace <br></br>Real Estate
                </h3>
                <p>
                  One of the first real estate markets where you can buy, sell
                  and invest in crypto
                </p>
                <div></div>
              </div>
              <div className="services-quad_item">
                <img src={launchpad} />
                <h3>Launchpad Crypto</h3>
                <p>
                  Libertum promotes ventures and startups that want adventures
                  in the DeFi world and need an immediate Liquidity market
                </p>
                <div></div>
              </div>
            </div>
          </Slide>
        </section>
      </main>
    </Zoom>
  );
}
