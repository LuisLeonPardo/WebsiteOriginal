import React, { useState } from "react";
import style from "./SideBarMobile.module.scss";
import style2 from "../SideBar.module.scss";
import SideBar from "../SideBar";
import { IoListOutline } from "react-icons/io5";
import CustomConnectButtom from "../CustomConnectButtom";
import { NavLink } from "react-router-dom";

function SideBarMobile() {
  const [open, setOpen] = useState(false);
  return (
    <div className={style.Container}>
      <div className={style.BarMobile}>
        <NavLink to={"./"}>
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
