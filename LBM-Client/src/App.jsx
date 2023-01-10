import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import NavBar from "./components/Landing/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/*<SideBar /> */}
    </div>
  );
}

export default App;
