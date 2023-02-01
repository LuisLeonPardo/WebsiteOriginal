import React, { useState, useEffect } from "react";
import style from "./SideBarMobile.module.scss";
import style2 from "../SideBar.module.scss";
import SideBar from "../SideBar";
import { IoListOutline } from "react-icons/io5";
import CustomConnectButtom from "../CustomConnectButtom";
import { NavLink } from "react-router-dom";

function SideBarMobile() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.addEventListener("click", (e) => {
      const isDropdownButton = e.target.matches("[data-dropdown-button]");
      const isSideBar = e.target.matches("[data-dropdown-sidebar]");
      if (!isSideBar && e.target.closest("[data-dropdown-sidebar]") != null)
        return;
      if (!isDropdownButton && e.target.closest("[data-dropdown]") != null)
        return;
      if (!isSideBar) {
        setOpen(false);
      }
    });
  }, []);
  return (
    <div className={style.Container} data-dropdown-SideBar>
      <div className={style.BarMobile}>
        <NavLink to={"./"} data-dropdown-button>
          <img src="./icons/Logo.svg" alt="logo" />
        </NavLink>
        <div className={style.wallet}>
          <CustomConnectButtom container={style2.OpenContainer} />
        </div>
        <div className={style.icon} onClick={() => setOpen(!open)}>
          <IoListOutline />
        </div>
      </div>
      <div className={open ? style.BarShow : style.Bar}>
        <SideBar />
      </div>
    </div>
  );
}

export default SideBarMobile;
