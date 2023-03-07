import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";
import cross from "./assets/cross.svg";
import home from "./assets/home.svg";
import whitepaper from "./assets/whitepaper.svg";
import contacts from "./assets/contacts.svg";
import bepart from "./assets/bepart.svg";
import pdf from "../assets/LBM-whitepaper.pdf";
import { networks } from "../networks";
import "./NavBar.scss";

export default function NavBar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      <Slide direction={"down"} delay={-300}>
        <nav className="nav_items">
          <img src={logo} className="logo" />
          <ul className="menu_items">
            <li className="menu-li_items">
              <Scroll
                to="home"
                smooth={true}
                duration={500}
                className="menu-a_items"
              >
                Home
              </Scroll>
            </li>
            <li className="menu-li_items">
              <Link
                to={pdf}
                target="_blank"
                rel="noopener noreferrer"
                download="LBM-whitepaper.pdf"
                className="menu-a_items"
              >
                Whitepaper
              </Link>
            </li>
            <li className="menu-li_items">
              <Scroll
                to="subscribe"
                smooth={true}
                duration={1000}
                className="menu-a_items"
              >
                Contact
              </Scroll>
            </li>
            <li className="menu-li_items">
              <a
                href="https://discord.com/invite/cAB2MKRw7b"
                target="_blank"
                rel="noreferrer"
                className="menu-a_items"
              >
                Community
              </a>
            </li>
          </ul>

          {!nav ? (
            <div onClick={handleClick} className="btn_menu">
              Menu
            </div>
          ) : (
            <div onClick={handleClick} className="btn_cross">
              <img src={cross} />
            </div>
          )}
        </nav>
      </Slide>
      {nav ? (
        <nav className="responsive-nav_items">
          <ul className="responsive-menu_items">
            <li className="responsive-menu-li_items">
              <img src={home} />
              <Scroll
                to="home"
                smooth={true}
                duration={500}
                className="responsive-menu-a_items"
              >
                Home
              </Scroll>
            </li>
            <li className="responsive-menu-li_items">
              <img src={whitepaper} />
              <Link
                to={pdf}
                target="_blank"
                rel="noopener noreferrer"
                download="LBM-whitepaper.pdf"
                className="responsive-menu-a_items"
              >
                Whitepaper
              </Link>
            </li>
            <li className="responsive-menu-li_items">
              <img src={contacts} />
              <Scroll
                to="subscribe"
                smooth={true}
                duration={1000}
                className="responsive-menu-a_items"
              >
                Contacts
              </Scroll>
            </li>
            <li className="responsive-menu-li_items">
              <img src={bepart} />
              <a
                href="https://discord.com/invite/cAB2MKRw7b"
                target="_blank"
                rel="noreferrer"
                className="responsive-menu-a_items"
              >
                Community
              </a>
            </li>
          </ul>
          <div className="responsive-menu_networks">
            {networks.map(({ net, href }, index) => (
              <a
                key={index}
                className="responsive-menu-networks_a"
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                <img src={net} />
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </>
  );
}
