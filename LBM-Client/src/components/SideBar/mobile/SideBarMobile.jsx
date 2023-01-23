import React, { useState } from "react";
import style from "./SideBarMobile.module.scss";
import SideBar from "../SideBar";
import { IoListOutline } from "react-icons/io5";

function SideBarMobile() {
  const [open, setOpen] = useState(false);
  return (
    <div className={style.Container}>
      <div className={style.BarMobile}>
        <img src="./icons/Logo.svg" alt="logo" />
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
