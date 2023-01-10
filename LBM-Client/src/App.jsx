import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import { Route, Routes, useLocation, Outlet } from "react-router-dom";

function App() {
  const AppLayout = () => (
    <>
      <SideBar />
      <Outlet />
    </>
  );

  return (
    <div className="App">
      <Routes>
        <Route path="/" />
        {/* Dentro de este Route van todas las cosas que tengan sidebar */}
        <Route element={<AppLayout />}>
          <Route path="/home" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
