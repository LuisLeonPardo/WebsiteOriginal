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
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import {
  AstarNetworkChain,
  BinanceSmartChain,
  BinanceTestNet,
  avalancheChain,
} from "./config/web3/chains/chains";
import {
  braveWallet,
  coinbaseWallet,
  ledgerWallet,
  trustWallet,
  metaMaskWallet,
  walletConnectWallet,
  injectedWallet,
} from "@rainbow-me/rainbowkit/wallets";

const { chains, provider } = configureChains(
  [BinanceSmartChain,BinanceTestNet, mainnet, polygon, optimism, arbitrum,avalancheChain, AstarNetworkChain],
  [
    alchemyProvider({
      apiKey: "ePeu2ooFujhSUo_Pqf5NS2uVDnz6ZiOO",
      priority: 0,
    }),
    publicProvider({ priority: 1 }),
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
            initialChain={BinanceSmartChain}
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
