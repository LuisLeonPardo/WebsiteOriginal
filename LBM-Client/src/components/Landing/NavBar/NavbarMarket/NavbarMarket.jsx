import React, { useState, useMemo, useEffect } from "react";
import style from "./NavbarMarket.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { NavLink } from "react-router-dom";
import CustomConnectButtom from "../../../SideBar/CustomConnectButtom";
import {
  IoChevronDownOutline,
  IoGlobeOutline,
  IoPerson,
  IoMenuOutline,
} from "react-icons/io5";
import PopUpMarket from "./PopUp/PopUpMarket";
import PopUpUser from "./PopUp/PopUpUser";
import { useAccountModal } from "@rainbow-me/rainbowkit";

function NavbarMarket() {
  const { openAccountModal } = useAccountModal();
  const [active, setActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  useEffect(() => {
    document.addEventListener("click", (e) => {
      const isDropdownButton = e.target.matches("[data-dropdown-button]");
      const isMenuButton = e.target.matches("[data-dropdown-menu]");

      if (!isMenuButton && e.target.closest("[data-menu]") != null) return;
      if (!isDropdownButton && e.target.closest("[data-dropdown]") != null)
        return;

      if (!isDropdownButton) {
        setActive(false);
      }
      if (!isMenuButton) {
        setActiveMenu(false);
      }
    });
  }, []);
  console.log(activeMenu);
  return (
    <div className={style.container}>
      <div className={style.flexContainer}>
        <a href="/" className={style.icon}>
          <img src="./icons/Logo.svg"></img>
          <img src="./icons/Logo Cherryswap.svg"></img>
        </a>
        <div className={style.buttons}>
          <div
            data-dropdown-button
            onClick={() => setActive(!active)}
            className={active ? style.button2 : style.button}
          >
            <p>MARKETPLACE</p>
            <IoChevronDownOutline />
          </div>
          <p>ABOUT US</p>
          <p>SUPPORT</p>
        </div>
        <div className={style.buttons2}>
          <div className={style.language}>
            <IoGlobeOutline />
            <p>EN ꞏ USD</p>
          </div>
          <div className={style.user}>
            <div data-dropdown-menu onClick={() => setActiveMenu(!activeMenu)}>
              <IoMenuOutline data-dropdown-menu />
            </div>
            {openAccountModal && (
              <div onClick={openAccountModal}>
                <IoPerson />
              </div>
            )}
            {activeMenu ? <PopUpUser data-Menu /> : null}
          </div>
        </div>
      </div>
      {active ? <PopUpMarket data-dropdown /> : null}
    </div>
  );
}

export default NavbarMarket;
