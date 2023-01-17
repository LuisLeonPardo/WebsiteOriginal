import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store, { Persistor } from "../redux/store/Store";
import "./index.css";
//wallet imports
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import {
  braveWallet,
  coinbaseWallet,
  ledgerWallet,
  trustWallet,
  metaMaskWallet,
  walletConnectWallet,
  injectedWallet,
} from "@rainbow-me/rainbowkit/wallets";
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

const { chains, provider } = configureChains(
  [AstarNetworkChain],
  [
    alchemyProvider({ apiKey: import.meta.env.ALCHEMY_API_KEY }),
    publicProvider(),
  ]
);

const connectors = connectorsForWallets([
  {
    groupName: "Libertum",
    wallets: [
      metaMaskWallet({ chains }),
      coinbaseWallet({ chains, appName: "Libertum" }),
      walletConnectWallet({ chains }),
      braveWallet({ chains }),
      ledgerWallet({ chains }),
      trustWallet({ chains }),
      injectedWallet({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={Persistor}>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider
            chains={chains}
            initialChain={AstarNetworkChain}
            theme={lightTheme({
              accentColor: "#F4911A",
              accentColorForeground: "white",
              borderRadius: "small",
              fontStack: "system",
              overlayBlur: "small",
            })}
          >
            <App />
          </RainbowKitProvider>
        </WagmiConfig>
      </PersistGate>
    </BrowserRouter>
  </Provider>
);
