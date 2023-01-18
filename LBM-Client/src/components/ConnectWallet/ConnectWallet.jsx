import React from "react";
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
import { useDispatch } from "react-redux";
import { setSelectedIcon } from "../../../redux/reducer";

//wallet imports
import { ApiPromise } from "@polkadot/api";
import { WsProvider } from "@polkadot/rpc-provider";
//import { options } from "@astar-network/astar-api";

//wallet imports

async function main() {
  const provider = new WsProvider("wss://shiden.api.onfinality.io/public-ws");
  // OR
  // const provider = new WsProvider('wss://shiden.api.onfinality.io/public-ws');
  const api = new ApiPromise(options({ provider }));
  await api.isReady;

  // Use the api
  // For example:
  console.log((await api.rpc.system.properties()).toHuman());

  process.exit(0);
}

function ConnectWallet() {
  const dispatch = useDispatch();
  main();
  return (
    <div className={style.Container}>
      <div className={style.FlexContainer}>
        <div className={style.Title}>
          <h1>Connect a wallet</h1>
          <div onClick={() => dispatch(setWalletPopUp(false))}>
            <Cancel />
          </div>
        </div>
        <div className={style.WalletSelect}>
          <div className={style.Button}>
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
