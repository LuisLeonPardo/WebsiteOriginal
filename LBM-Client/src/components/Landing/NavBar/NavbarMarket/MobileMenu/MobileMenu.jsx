import React from "react";
import style from "./MobileMenu.module.scss";
import PopUpMarket from "../PopUp/PopUpMarket";
import PopUpUser from "../PopUp/PopUpUser";
import PopUpLanguage from "../PopUp/PopUpLanguage";

function MobileMenu() {
  return (
    <div className={style.Container}>
      <div className={style.FlexContainer}>
        <PopUpMarket />
        <PopUpUser />
      </div>
    </div>
  );
}

export default MobileMenu;
