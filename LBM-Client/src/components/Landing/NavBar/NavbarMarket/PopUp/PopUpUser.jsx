import React, { useState } from "react";
import CustomConnectButtom from "../../../../SideBar/CustomConnectButtom";
import style from "./PopUpUser.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setCurrency } from "../../../../../../redux/reducer";
import { IoChevronDownOutline } from "react-icons/io5";

function PopUpUser() {
  const screenWidth = window.innerWidth || document.body.clientWidth;
  const { currency, isAdmin } = useSelector((state) => state.reducerCompleto);
  const [active, setActive] = useState("null");
  const dispatch = useDispatch();
  const languages = [
    "English",
    "Español",
    "Français",
    "Português",
    "Русский",
    "日本語",
    "简体中文",
    "繁体中文",
    "한국어",
    "Tiếng Việt",
    "Indonesian",
    "ภาษาไทย",
  ];
  const currencies = [
    "USD - $",
    "CNY - ¥",
    "JPY - ¥",
    "KRW - ₩",
    "EUR - €",
    "GBP - £",
    "HKD - $",
    "IDR - Rp",
    "INR - ₹",
    "RUB - ₽",
  ];
  return (
    <div className={style.container} data-menu>
      <div className={style.flexContainer}>
        <div className={style.connect}>
          <CustomConnectButtom />
        </div>
        {screenWidth < 800 ? (
          <div className={style.buttons}>
            <a href="/">Home</a>
            <a href="/about">About us</a>
            <a href="/contact">Contacts</a>
            <a>Notifications</a>
            <a>Post your property</a>
            <a>Post your project</a>
            <a>FAQ</a>
            {isAdmin ? <a href="/admin">Admin menu</a> : null}
            <div
              className={
                active === "language" ? style.dropdownActive : style.dropdown
              }
              onClick={() =>
                setActive(active === "language" ? "null" : "language")
              }
            >
              <a>Language</a>
              <IoChevronDownOutline />
            </div>
            <div
              className={active === "language" ? style.flexList : style.notList}
            >
              {languages.map((p) => (
                <p>{p}</p>
              ))}
            </div>
            <div
              className={
                active === "currency" ? style.dropdownActive : style.dropdown
              }
              onClick={() =>
                setActive(active === "currency" ? "null" : "currency")
              }
            >
              <a>{currency}</a>
              <IoChevronDownOutline />
            </div>
            <div
              className={active === "currency" ? style.flexList : style.notList}
            >
              {currencies.map((p) => (
                <p onClick={() => dispatch(setCurrency(p))}>{p}</p>
              ))}
            </div>
            <div className={style.ConnectButtom}>
              <CustomConnectButtom />
            </div>
          </div>
        ) : (
          <div className={style.buttons}>
            <a>Notifications</a>
            <a>Post your property</a>
            <a>Post your project</a>
            <a>FAQ</a>
            {isAdmin ? <a href="/admin">Admin menu</a> : null}
          </div>
        )}
      </div>
    </div>
  );
}

export default PopUpUser;
