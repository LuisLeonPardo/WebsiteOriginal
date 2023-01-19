import React from "react";
import { Slide } from "react-awesome-reveal";

import logo from "../assets/logo.svg";
import { networks } from "../networks";
import "./Footer.scss";

export default function Footer() {
  return (
    <main className="footer_items">
      <Slide direction={"up"} delay={-300}>
        <section className="footer_section">
          <div className="footer_company">
            <img src={logo} />
            <div>
              <p>
                Libertum is a decentralized finance algorithmic money <br></br>
                market protocol that seeks to make DeFi adoption more friendly
                with real collaterals.
              </p>
              <span>© 2023 Libertum Protocol</span>
            </div>
          </div>
          <div className="footer_menu">
            <ul>
              <li>Home</li>
              <li>Whitepaper</li>
              <li>Product</li>
              <li>I want to be part</li>
            </ul>
            <div className="footer_network">
              {networks.map(({ net, href }, index) => (
                <a
                  key={index}
                  className="footer_network-item"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={net} />
                </a>
              ))}
            </div>
          </div>
        </section>
      </Slide>
    </main>
  );
}
