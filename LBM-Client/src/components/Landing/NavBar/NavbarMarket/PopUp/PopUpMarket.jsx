import React from "react";
import style from "./PopUpMarket.module.scss";
import {
  IoGridOutline,
  IoArrowForward,
  IoRocketOutline,
  IoRocketSharp,
} from "react-icons/io5";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { TbVector } from "react-icons/tb";

function PopUpMarket() {
  return (
    <div className={style.Container} data-dropdown>
      <div className={style.flexContainer}>
        <a href="/realestate" className={style.button}>
          <div className={style.icon}>
            <IoGridOutline />
          </div>
          <div className={style.text}>
            <div className={style.title}>
              <h1>Marketplace</h1> <IoArrowForward />
            </div>
            <p>Buying and selling houses has never been so easy</p>
          </div>
        </a>
        <div className={style.button}>
          <div className={style.icon}>
            <BsFileEarmarkPlus />
          </div>
          <div className={style.text}>
            <div className={style.title}>
              <h1>Coming Soon</h1> <IoArrowForward />
            </div>
            <p>New things are coming</p>
          </div>
        </div>
        <a href="/IREO" className={style.button}>
          <div className={style.icon}>
            <TbVector />
          </div>
          <div className={style.text}>
            <div className={style.title}>
              <h1>IREO</h1> <IoArrowForward />
            </div>
            <p>Join and be part of the new real estate projects</p>
          </div>
        </a>
        <a href="/launchpad" className={style.button2}>
          <div className={style.icon}>
            <IoRocketSharp />
          </div>
          <div className={style.text}>
            <div className={style.title}>
              <h1>Launchpad</h1> <IoArrowForward />
            </div>
            <p>Drive high-value web3 projects</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default PopUpMarket;
