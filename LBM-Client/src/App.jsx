import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import { Route, Routes, useLocation, Outlet } from "react-router-dom";
import ConnectWallet from "./components/ConnectWallet/ConnectWallet";
import { useSelector } from "react-redux";

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
      <div className="Page"> {walletPopUp ? <ConnectWallet /> : null}</div>
      <Routes>
        <Route path="/" />
        {/* Dentro de este Route van todas las cosas que tengan sidebar */}
        <Route
          element={
            <div className="SideBar">
              <AppLayout />
            </div>
          }
        >
          <Route path="/home" element={<div className="Page"></div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
