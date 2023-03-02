import React from "react";
import { Slide } from "react-awesome-reveal";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import pdf from "../assets/LBM-whitepaper.pdf";
import { networks } from "../networks";
import "./Footer.scss";

export default function Footer() {
  return (
    <main className="footer_items">
      <Slide direction={"up"} delay={-300} triggerOnce={"true"}>
        <section className="footer_section">
          <div className="footer_company">
            <img src={logo} />
            <div>
              <p>
                Libertum Project is a decentralized finance algorithmic money <br></br>
                market protocol that acts as the intermediate bridge between the tradition 
                real estate economy and the Web3 world, democratizing real estate investing, 
                and making DeFi adoption more friendly and safe with real estate property collateral.
              </p>
              <span>© 2023 Libertum Project</span>
            </div>
          </div>
          <div className="footer_menu">
            <ul>
              <li>
                <Scroll
                  to="home"
                  smooth={true}
                  duration={500}
                  className="footer_li"
                >
                  Home
                </Scroll>
              </li>
              <li>
                <Link
                  to={pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="LBM-whitepaper.pdf"
                  className="footer_li"
                >
                  Whitepaper
                </Link>
              </li>
              <li>
                <Scroll
                  to="subscribe"
                  smooth={true}
                  duration={1000}
                  className="footer_li"
                >
                  Contacts
                </Scroll>
              </li>
              <li>
                <a
                  href="https://discord.com/invite/cAB2MKRw7b"
                  target="_blank"
                  rel="noreferrer"
                  className="footer_li"
                >
                  I want to be part
                </a>
              </li>
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
