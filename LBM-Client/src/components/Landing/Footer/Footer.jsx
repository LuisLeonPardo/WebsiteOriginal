import React from "react";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-scroll";
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
                Libertum is a decentralized finance algorithmic money <br></br>
                market protocol that seeks to make DeFi adoption more friendly
                with real collaterals.
              </p>
              <span>© 2023 Libertum Protocol</span>
            </div>
          </div>
          <div className="footer_menu">
            <ul>
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="footer_li"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href={pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="LBM-whitepaper.pdf"
                  className="footer_li"
                >
                  Whitepaper
                </a>
              </li>
              <li>
                <Link
                  to="subscribe"
                  smooth={true}
                  duration={1000}
                  className="footer_li"
                >
                  Contacts
                </Link>
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
