import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Routes></Routes>
    </div>
  );
}

export default App;
