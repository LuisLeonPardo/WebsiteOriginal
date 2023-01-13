import React, { useState } from "react";
import logo from "./assets/logo-navbar.svg";
import cross from "./assets/cross.svg";
import home from "./assets/home.svg";
import whitepaper from "./assets/whitepaper.svg";
import contacts from "./assets/contacts.svg";
// import bepart from "./assets/bepart.svg";
import instagram from "./assets/networks/instagram.svg";
import twitter from "./assets/networks/twitter.svg";
import github from "./assets/networks/github.svg";
import linkedin from "./assets/networks/linkedin.svg";
import tiktok from "./assets/networks/tiktok.svg";
import "./NavBar.scss";

export default function NavBar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const networks = [
    {
      net: instagram,
      href: "https://www.instagram.com/libertum_project/",
    },
    { net: twitter, href: "https://twitter.com/liberumproject" },
    { net: github, href: "https://github.com/Libertum-Project" },
    {
      net: linkedin,
      href: "https://www.linkedin.com/company/libertum-project/",
    },
    { net: tiktok, href: "" },
  ];

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
