import React from "react";
import CustomConnectButtom from "../../../../SideBar/CustomConnectButtom";
import style from "./PopUpUser.module.scss";

function PopUpUser() {
  return (
    <div className={style.container} data-Menu>
      <div className={style.flexContainer}>
        <CustomConnectButtom />
        <p>Notifications</p>
        <p>Post your property</p>
        <p>Post your project</p>
        <p>FAQ</p>
      </div>
    </div>
  );
}

export default PopUpUser;
