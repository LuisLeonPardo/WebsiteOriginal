import React from "react";
import style from "./PopUpLanguage.module.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrency } from "../../../../../../redux/reducer";

function PopUpLanguage() {
  const [active, setActive] = useState("language");
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
    <div className={style.Container} data-language>
      <div className={style.FlexContainer}>
        <div className={style.Buttons}>
          <button
            className={
              active === "language" ? style.ActiveButton : style.Button
            }
            onClick={() => setActive("language")}
          >
            Language
          </button>
          <button
            className={
              active === "currency" ? style.ActiveButton : style.Button
            }
            onClick={() => setActive("currency")}
          >
            Currency
          </button>
        </div>
        <div className={style.GridContainer}>
          {active === "language"
            ? languages.map((p) => <p>{p}</p>)
            : currencies.map((p) => (
                <p onClick={() => dispatch(setCurrency(p))}>{p}</p>
              ))}
        </div>
      </div>
    </div>
  );
}

export default PopUpLanguage;
