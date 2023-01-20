import Landing from "./components/Landing/Landing";
// import Dashboard from "./components/Dashboards/Dashboard";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import {
  Route,
  Routes,
  useLocation,
  Outlet,
  BrowserRouter,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./components/Landing/Home/Home";
import Dash from "./components/Dashboards/Dash/Dash";
import RealEstates from "./components/RealEstates";
import React, { useEffect, useState } from "react";
import Modals from "./components/Dashboards/Modals/Modals";
import Web3 from "web3";
import ConnectWallet from "./components/ConnectWallet/ConnectWallet";
import Governance from "./components/Governance/Governance";
import Vaults from "./components/Vaults/Vaults";
import RealEstateDetail from "./components/RealEstateDetail/index";

function App() {
  const [stateModal, setStateModal] = useState(false);
  const { selectedIcon, walletPopUp } = useSelector(
    (state) => state.reducerCompleto
  );
  const AppLayout = () => (
    <>
      <div className="bgImage">
        <img src="./icons/Background.svg" />
      </div>

      <Modals state={stateModal} setStateModal={setStateModal} />

      <div className="SideBar">
        <SideBar />
      </div>

      <Outlet />
    </>
  );
  const chainId = 592;
  useEffect(async () => {
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
                nativeCurrency: { name: "ASTAR", decimals: 18, symbol: "ASTR" },
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
  });

  return (
    <div className="App">
      <div className="Modal">
        <ConnectWallet />
      </div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<AppLayout />}>
          <Route
            path="/governance"
            element={
              <div className="Page">
                <Governance />
              </div>
            }
          />
          <Route
            path="/dashboard"
            element={
              <div className="Page">
                <Dash setStateModal={setStateModal} />
              </div>
            }
          />
          <Route
            path="/vaults"
            element={
              <div className="Page">
                <Vaults />
              </div>
            }
          />
          <Route
            path="/realestate"
            element={
              <div className="Page">
                <RealEstates />
              </div>
            }
          />
          <Route
            path="/realestate/:id"
            element={
              <div className="Page">
                <RealEstateDetail />
              </div>
            }
          />
          {/* Dentro de este Route van todas las cosas que tengan sidebar */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
