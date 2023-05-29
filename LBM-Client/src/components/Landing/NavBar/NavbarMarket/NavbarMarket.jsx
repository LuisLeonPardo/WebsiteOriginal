import React, { useState, useMemo, useEffect } from "react";
import style from "./NavbarMarket.module.scss";
import { useSelector } from "react-redux";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { NavLink } from "react-router-dom";
import CustomConnectButtom from "../../../SideBar/CustomConnectButtom";
import {
  IoChevronDownOutline,
  IoGlobeOutline,
  IoPerson,
  IoMenuOutline,
  IoCloseOutline,
} from "react-icons/io5";
import PopUpMarket from "./PopUp/PopUpMarket";
import PopUpUser from "./PopUp/PopUpUser";
import { useAccountModal } from "@rainbow-me/rainbowkit";
import PopUpLanguage from "./PopUp/PopUpLanguage";
import MobileMenu from "./MobileMenu/MobileMenu";
import { Divide as Hamburger } from "hamburger-react";

function NavbarMarket() {
  const { openAccountModal } = useAccountModal();
  const [active, setActive] = useState(false);
  const { currency } = useSelector((state) => state.reducerCompleto);
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeMenuMobile, setActiveMenuMobile] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState(false);
  const [activeIcon, setActiveIcon] = useState(false);
  const screenWidth = window.innerWidth || document.body.clientWidth;

  useEffect(() => {
    document.addEventListener("click", (e) => {
      const isDropdownButton = e.target.matches("[data-dropdown-button]");
      const isMenuButton = e.target.matches("[data-dropdown-menu]");
      const isMenuButtonMobile = e.target.matches("[data-dropdown-menumobile]");
      const isLanguageButton = e.target.matches("[data-dropdown-language]");

      if (!isMenuButton && e.target.closest("[data-menu]") != null) return;
      if (!isMenuButtonMobile && e.target.closest("[data-menumobile]") != null)
        return;
      if (!isDropdownButton && e.target.closest("[data-dropdown]") != null)
        return;
      if (!isLanguageButton && e.target.closest("[data-language]") != null)
        return;

      if (!isDropdownButton) {
        setActive(false);
      }
      // if (!isMenuButton) {
      //   setActiveMenu(false);
      // }
      // if (!isMenuButtonMobile) {
      //   setActiveMenuMobile(false);
      // }
      if (!isLanguageButton && e.target.closest("[data-language]") === null) {
        setActiveLanguage(false);
      }
    });
  }, []);
  return (
    <div>
      {screenWidth > 600 ? (
        <div className={style.container}>
          <div className={style.flexContainer}>
            <a href="/" className={style.icon}>
              <img src="../icons/Logo.svg"></img>
              <img src="../icons/Logo Cherryswap.svg"></img>
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
              <NavLink to ="/support">
              <p>SUPPORT</p>
              </NavLink>
            </div>
            <div className={style.buttons2}>
              <div className={style.language}>
                <div
                  className={style.languageButton}
                  data-dropdown-language
                  onClick={() => setActiveLanguage(!activeLanguage)}
                >
                  <IoGlobeOutline />
                  <p>{currency}</p>
                </div>
                {activeLanguage ? <PopUpLanguage data-language /> : null}
              </div>
              <div className={openAccountModal ? style.user : style.user1}>
                <div
                  data-dropdown-menu
                  className={style.hamburger}
                  onClick={() => setActiveMenu(!activeMenu)}
                >
                  <Hamburger size={18} toggled={activeMenu} />
                </div>
                {openAccountModal && (
                  <div onClick={openAccountModal} className={style.account}>
                    <IoPerson />
                  </div>
                )}
                {activeMenu ? <PopUpUser data-menu /> : null}
              </div>
            </div>
          </div>
          {active ? <PopUpMarket data-dropdown /> : null}
        </div>
      ) : (
        <div className={style.container}>
          <div
            className={
              openAccountModal ? style.flexContainer : style.flexContainer2
            }
          >
            <div
              data-dropdown-menumobile
              className={
                openAccountModal ? style.MobileMenuIcon : style.MobileMenuIcon2
              }
              onClick={() => setActiveMenuMobile(!activeMenuMobile)}
            >
              <Hamburger
                size={20}
                toggled={activeMenuMobile}
                data-dropdown-menumobile
              />
            </div>
            <a href="/" className={openAccountModal ? style.icon : style.icon2}>
              <img src="../icons/Logo.svg"></img>
              <img src="../icons/Logo Cherryswap.svg"></img>
            </a>
            {openAccountModal && (
              <div onClick={openAccountModal} className={style.accountIcon}>
                <IoPerson />
              </div>
            )}
          </div>
          {activeMenuMobile ? <MobileMenu data-menumobile /> : null}
        </div>
      )}
    </div>
  );
}

export default NavbarMarket;
