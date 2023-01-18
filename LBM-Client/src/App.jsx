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
  useEffect(() => {
    if (window.ethereum) {
    }
  });

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
            path="/realestate"
            element={
              <div className="Page">
                <RealEstates />
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
