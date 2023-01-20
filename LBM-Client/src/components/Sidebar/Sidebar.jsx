import React, { useState, useMemo, useCallback, useEffect } from "react";
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
import ConnectWallet from "../ConnectWallet/ConnectWallet";
import { useWeb3React } from "@web3-react/core";
import { connector } from "../../config/web3";
function SideBar() {
  const { active, activate, account, library } = useWeb3React();

  const dispatch = useDispatch();
  const { selectedIcon, walletPopUp } = useSelector(
    (state) => state.reducerCompleto
  );
  const [container, setContainer] = useState(style.Container);
  const [balance, setbalance] = useState(0);
  const [Icons, setIcons] = useState(style.IconsNone);
  const [buttonsContainer, setButtonsContainer] = useState(
    style.ButtonsContainer
  );
  const getBalance = useCallback(async () => {
    const toSet = await library.eth.getBalance(account);
    setbalance((toSet / 1e18).toFixed(2));
  }, [library?.eth, account]);

  useEffect(() => {
    getBalance();
  }, [getBalance]);
  return (
    <div className={container}>
      <div className={style.FlexContainer}>
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
          <div
            className={
              selectedIcon === "OrdersIcon" && Icons === style.Icons
                ? style.IconSelected
                : Icons
            }
            onClick={() => dispatch(setSelectedIcon("OrdersIcon"))}
          >
            <NavLink to={"./vaults"}>
              <div
                className={
                  selectedIcon === "OrdersIcon" && Icons === style.Icons
                    ? style.IconSelected
                    : Icons
                }
                onClick={() => dispatch(selectedIcon("OrdersIcon"))}
              >
                <OrdersIcon
                  selected={selectedIcon === "OrdersIcon" ? true : false}
                />
                <p>Vaults</p>
              </div>
            </NavLink>
          </div>
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
              <p>Real State</p>
            </div>
          </NavLink>
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
        </div>
        <div
          className={
            container === style.OpenContainer
              ? style.BottomOpenContainer
              : style.BottomButtonsContainer
          }
        >
          {active ? (
            <div
              className={
                container === style.OpenContainer
                  ? style.ConnectedModal
                  : style.ConnectedModalClosed
              }
            >
              <div className={style.chainModal}></div>
              <div className={style.balanceModal}>{balance}</div>
            </div>
          ) : (
            <div
              className={
                container === style.OpenContainer
                  ? style.walletButtonOpen
                  : style.walletButton
              }
              onClick={() => dispatch(setWalletPopUp(true))}
            >
              Connect Wallet
            </div>
          )}
          <div
            className={
              container === style.OpenContainer
                ? style.twoLastButtonsOpen
                : style.twoLastButtons
            }
          >
            <div
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
      </div>
    </div>
  );
}

export default SideBar;
