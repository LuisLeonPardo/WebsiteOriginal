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
import ConnectWallet from "./components/ConnectWallet/ConnectWallet";
import { useSelector } from "react-redux";
import Home from "./components/Landing/Home/Home";
import Dash from "./components/Dashboards/Dash/Dash";
import RealEstates from "./components/RealEstates";
import React from "react";
function App() {
  const { selectedIcon, walletPopUp } = useSelector(
    (state) => state.reducerCompleto
  );
  const AppLayout = () => (
    <>
      <SideBar />
      <Outlet />
    </>
  );

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/home"
          element={
            <div className="Page">
              <Home />
            </div>
          }
        />
        <Route
          element={
            <div className="SideBar">
              <AppLayout />
            </div>
          }
        >
          <Route path="/dashboard" element={<Dash />} />
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
