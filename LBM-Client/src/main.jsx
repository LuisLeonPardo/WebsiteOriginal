import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store, { Persistor } from "../redux/store/Store";
import "./index.css";
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "./config/web3";
//wallet imports

const AstarNetworkChain = {
  id: 592,
  name: "Astar",
  network: "Astar Network",
  iconUrl: "./icons/astar-logo.png",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "ASTAR",
    symbol: "ASTR",
  },
  rpcUrls: {
    default: {
      http: ["https://evm.astar.network", "https://astar.public.blastapi.io"],
    },
  },
  blockExplorers: {
    default: { name: "Subscan", url: "https://astar.subscan.io" },
    etherscan: {
      name: "PolkadotJs",
      url: "https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fastar.api.onfinality.io%2Fpublic-ws#/explorer",
    },
  },
  testnet: false,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={Persistor}>
        <Web3ReactProvider getLibrary={getLibrary}>
          <App />
        </Web3ReactProvider>
      </PersistGate>
    </BrowserRouter>
  </Provider>
);
