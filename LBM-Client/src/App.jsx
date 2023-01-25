import Landing from "./components/Landing/Landing";
import NotFound from "./components/NotFound/NotFound";
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
import Governance from "./components/Governance/Governance";
import Vaults from "./components/Vaults/Vaults";
import RealEstateDetail from "./components/RealEstateDetail/index";
import WarningBuilding from "./components/WarningBuilding";
import SideBarMobile from "./components/SideBar/mobile/SideBarMobile";
import CoomingSoon from "./components/ComingSoon/ComingSoon";
import Launchpad from "./components/Launchpad/Launchpad";
function App() {
  const [stateModal, setStateModal] = useState(false);
  const { selectedIcon, walletPopUp } = useSelector(
    (state) => state.reducerCompleto
  );
  const AppLayout = () => (
    <>
      <WarningBuilding />
      <div className="bgImage">
        <img src="./icons/Background.svg" />
      </div>

      <Modals state={stateModal} setStateModal={setStateModal} />

      <div className="SideBar">
        <SideBarMobile />
      </div>
      <Outlet />
    </>
  );

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<AppLayout />}>
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
            path={"/realestate"}
            element={
              <div className="Page">
                <RealEstates />
              </div>
            }
          />
          <Route
            path={"/realestate/:id"}
            element={
              <div className="Page">
                <RealEstates />
              </div>
            }
          />
          <Route
            path={"/launchpad"}
            element={
              <div className="Page">
                <Launchpad/>
              </div>
            }
          />
          {/* Dentro de este Route van todas las cosas que tengan sidebar */}
        </Route>
        <Route path="/swap" element={<CoomingSoon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
