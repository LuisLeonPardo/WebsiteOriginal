import React from "react";
import Home from "./Home/Home";
import Protocol from "./Protocol/Protocol";
import Services from "./Services/Services";
import divider from "./divider.png";
import "./Landing.scss";

export default function Landing() {
  return (
    <>
      <Home />
      <Protocol />
      <img src={divider} className="divider" />
      <Services />
      <img src={divider} className="divider" />
    </>
  );
}
