import React, { useState } from "react";

import logo from "../assets/logo.svg";
import cross from "./assets/cross.svg";
import home from "./assets/home.svg";
import whitepaper from "./assets/whitepaper.svg";
import contacts from "./assets/contacts.svg";
import bepart from "./assets/bepart.svg";
import { networks } from "../networks";
import "./NavBar.scss";

export default function NavBar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      <nav className="nav_items">
        <img src={logo} className="logo" />
        <ul className="menu_items">
          <li className="menu-li_items">
            <a className="menu-a_items">Home</a>
          </li>
          <li className="menu-li_items">
            <a className="menu-a_items">Whitepaper</a>
          </li>
          <li className="menu-li_items">
            <a className="menu-a_items">Contacts</a>
          </li>
          <li className="menu-li_items">
            <a className="menu-a_items">I want to be part</a>
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
      {nav ? (
        <nav className="responsive-nav_items">
          <ul className="responsive-menu_items">
            <li className="responsive-menu-li_items">
              <img src={home} />
              <a className="responsive-menu-a_items">Home</a>
            </li>
            <li className="responsive-menu-li_items">
              <img src={whitepaper} />
              <a className="responsive-menu-a_items">Whitepaper</a>
            </li>
            <li className="responsive-menu-li_items">
              <img src={contacts} />
              <a className="responsive-menu-a_items">Contacts</a>
            </li>
            <li className="responsive-menu-li_items">
              <img src={bepart} />
              <a className="responsive-menu-a_items">I want to be part</a>
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
