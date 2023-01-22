import React, { useCallback, useEffect } from "react";
import Binance from "../../../public/icons/Binance";
import BitKeep from "../../../public/icons/BitKeep";
import Brave from "../../../public/icons/Brave";
import Coinbase from "../../../public/icons/Coinbase";
import Infinity from "../../../public/icons/Infinity";
import Ledger from "../../../public/icons/Ledger";
import Metamask from "../../../public/icons/Metamask";
import TrustWallet from "../../../public/icons/TrustWallet";
import WalletConnect from "../../../public/icons/WalletConnect";
import Cancel from "../../../public/icons/x";
import style from "./ConnectWallet.module.scss";
import { setWalletPopUp } from "../../../redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedIcon } from "../../../redux/reducer";

//wallet imports
import { ApiPromise } from "@polkadot/api";
import { WsProvider } from "@polkadot/rpc-provider";
import { options } from "@astar-network/astar-api";

//wallet imports
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import { connector } from "../../config/web3";
import { useState } from "react";

function ConnectWallet() {
  const { active, activate, account, deactivate, error, library } =
    useWeb3React();
  const chainId = 592;

  const changeNetwork = async () => {
    if (window.ethereum.networkVersion !== chainId) {
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: Web3.utils.toHex(chainId) }],
        });
      } catch (err) {
        if (err.code === 4902) {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainName: "Astar Network Mainnet",
                chainId: Web3.utils.toHex(chainId),
                nativeCurrency: {
                  name: "ASTAR",
                  decimals: 18,
                  symbol: "ASTR",
                },
                rpcUrls: [
                  "https://evm.astar.network",
                  "https://astar.public.blastapi.io",
                ],
              },
            ],
          });
        }
      }
    }
  };

  const connect = useCallback(() => {
    changeNetwork();
    activate(connector);
    localStorage.setItem("previouslyConnected", "true");
  });

  const { walletPopUp } = useSelector((state) => state.reducerCompleto);
  const dispatch = useDispatch();

  {
    active ? dispatch(setWalletPopUp(false)) : null;
  }
  return (
    <div className={walletPopUp ? style.Container : style.ContainerClosed}>
      <div
        className={
          walletPopUp ? style.FlexContainer : style.FlexContainerClosed
        }
      >
        <div className={style.Title}>
          <h1>Connect a wallet</h1>
          <div onClick={() => dispatch(setWalletPopUp(false))}>
            <Cancel />
          </div>
        </div>
        <div className={style.WalletSelect}>
          <div className={style.Button} onClick={() => connect()}>
            <Metamask />
            <p>MetaMask</p>
          </div>
          <div className={style.Button}>
            <Coinbase />
            <p>Coinbase Wallet</p>
          </div>
          <div className={style.Button}>
            <TrustWallet />
            <p>Trust Wallet</p>
          </div>
          <div className={style.Button}>
            <WalletConnect />
            <p>WalletConnect</p>
          </div>
          <div className={style.Button}>
            <Binance />
            <p>Binance Wallet</p>
          </div>
          <div className={style.Button}>
            <Brave />
            <p>Brave Wallet</p>
          </div>
          <div className={style.Button}>
            <Infinity />
            <p>Infinity Wallet</p>
          </div>
          <div className={style.Button}>
            <BitKeep />
            <p>BitKeep</p>
          </div>
          <div className={style.Button}>
            <Ledger />
            <p>Ledger</p>
          </div>
        </div>
        <h1 className={style.Terms}>
          By connecting a wallet, you agree to Venus' <p>Terms of Service</p>
        </h1>
      </div>
    </div>
  );
}

export default ConnectWallet;
