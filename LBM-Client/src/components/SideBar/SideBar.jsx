import React, { useState, useMemo, useEffect } from "react";
import style from "./SideBar.module.scss";
import FirstIcon from "../../../public/icons/firstIcon";
import OrdersIcon from "../../../public/icons/ordersIcon";
import Layer1Icon from "../../../public/icons/layer1Icon";
import HistoryIcon from "../../../public/icons/historyIcon";
import WalletIcon from "../../../public/icons/walletIcon";
import ExitIcon from "../../../public/icons/exitIcon";
import CollapseIcon from "../../../public/icons/collapseIcon";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedIcon, setWalletPopUp } from "../../../redux/reducer";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { NavLink } from "react-router-dom";
import CustomConnectButtom from "./CustomConnectButtom";
import LaunchpadIcon from "../../../public/icons/LaunchpadIcon";
function SideBar() {
  const dispatch = useDispatch();
  const { selectedIcon, walletPopUp } = useSelector(
    (state) => state.reducerCompleto
  );
  const screenWidth = window.innerWidth || document.body.clientWidth;
  const [container, setContainer] = useState(
    screenWidth < 600 ? style.OpenContainer : style.Container
  );

  const [Icons, setIcons] = useState(
    screenWidth < 600 ? style.Icons : style.IconsNone
  );
  const [buttonsContainer, setButtonsContainer] = useState(
    screenWidth < 600 ? style.OpenButtons : style.ButtonsContainer
  );

  useEffect(() => {
    document.addEventListener("click", (e) => {
      const isDropdownButton = e.target.matches("[data-dropdown-button]");
      const isSideBar = e.target.matches("[data-dropdown-sidebar]");
      if (!isSideBar && e.target.closest("[data-dropdown-sidebar]") != null)
        return;
      if (!isDropdownButton && e.target.closest("[data-dropdown]") != null)
        return;
      if (!isSideBar) {
        setContainer(style.Container);
        setIcons(style.IconsNone);
        setButtonsContainer(style.ButtonsContainer);
      }
    });
  }, []);

  return (
    <div data-dropdown-sidebar className={container}>
      <div className={style.FlexContainer}>
        <NavLink to={"./"}>
          <div className={style.LogoContainer}>
            <img src="./icons/Logo.svg" className={style.Logo} />
            {container === style.OpenContainer ? (
              <img
                src="./icons/Logo Cherryswap.svg"
                className={style.LogoCherryswap}
              />
            ) : (
              <img
                src="./icons/Logo Cherryswap.svg"
                className={style.LogoCherryswap2}
              />
            )}
          </div>
        </NavLink>
        <div className={buttonsContainer}>
          <NavLink to={"./dashboard"}>
            <div
              className={
                selectedIcon === "FirstIcon" && Icons === style.Icons
                  ? style.IconSelected
                  : Icons
              }
              onClick={() => dispatch(setSelectedIcon("FirstIcon"))}
            >
              <FirstIcon
                selected={selectedIcon === "FirstIcon" ? true : false}
              />
              <p>Dashboard</p>
            </div>
          </NavLink>
          <NavLink to={"./vaults"}>
            <div
              className={
                selectedIcon === "OrdersIcon" && Icons === style.Icons
                  ? style.IconSelected
                  : Icons
              }
              onClick={() => dispatch(setSelectedIcon("OrdersIcon"))}
            >
              <OrdersIcon
                selected={selectedIcon === "OrdersIcon" ? true : false}
              />
              <p>Vaults</p>
            </div>
          </NavLink>
          <NavLink to={"./realestate"}>
            <div
              className={
                selectedIcon === "Layer1Icon" && Icons === style.Icons
                  ? style.IconSelected
                  : Icons
              }
              onClick={() => dispatch(setSelectedIcon("Layer1Icon"))}
            >
              <Layer1Icon
                selected={selectedIcon === "Layer1Icon" ? true : false}
              />
              <p>Real Estate</p>
            </div>
          </NavLink>
          <NavLink to={"./launchpad"}>
            <div
              className={
                selectedIcon === "Launchpad" && Icons === style.Icons
                  ? style.IconSelected
                  : Icons
              }
              onClick={() => dispatch(setSelectedIcon("Launchpad"))}
            >
              <LaunchpadIcon
                selected={selectedIcon === "Launchpad" ? true : false}
              />
              <p>Launchpad</p>
            </div>
          </NavLink>
          <NavLink to={"./governance"}>
            <div
              className={
                selectedIcon === "HistoryIcon" && Icons === style.Icons
                  ? style.IconSelected
                  : Icons
              }
              onClick={() => dispatch(setSelectedIcon("HistoryIcon"))}
            >
              <HistoryIcon
                selected={selectedIcon === "HistoryIcon" ? true : false}
              />
              <p>Governance</p>
            </div>
          </NavLink>
        </div>
        {screenWidth < 600 ? null : (
          <div
            className={
              container === style.OpenContainer
                ? style.BottomOpenContainer
                : style.BottomButtonsContainer
            }
          >
            <CustomConnectButtom container={container} />
            <div
              className={
                container === style.OpenContainer
                  ? style.twoLastButtonsOpen
                  : style.twoLastButtons
              }
            >
              <div
                data-dropdown-button
                onClick={() =>
                  container === style.Container
                    ? (setContainer(style.OpenContainer),
                      setIcons(style.Icons),
                      setButtonsContainer(style.OpenButtons))
                    : (setContainer(style.Container),
                      setIcons(style.IconsNone),
                      setButtonsContainer(style.ButtonsContainer))
                }
                className={
                  container === style.OpenContainer
                    ? style.collapseOpen
                    : style.collapse
                }
              >
                <CollapseIcon />
                <p>Collapse</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SideBar;
