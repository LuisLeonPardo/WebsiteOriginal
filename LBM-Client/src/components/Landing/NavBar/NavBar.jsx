import React from "react";
import logo from "../../../assets/logo.svg";
import libertum from "../../../assets/libertum.svg";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <nav className="menu">
      <div className="logo-container">
        <img src={logo} className="logo-vector" />
        <img src={libertum} className="logo-titulo" />
      </div>
      <ul className="menu_items">
        <li>
          <a>HOME</a>
        </li>
        <li>
          <a>WHITEPAPER</a>
        </li>
        <li>
          <a>CONTACTS</a>
        </li>
        <li>
          <a>I WANT TO BE PART</a>
        </li>
      </ul>
      <span className="btn_menu"></span>
    </nav>
  );
}
