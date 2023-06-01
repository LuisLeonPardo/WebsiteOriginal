import React from "react";
import Home from "./Home/Home";
import Protocol from "./Protocol/Protocol";
import Services from "./Services/Services";
import Value from "./Value/Value";
import Subscribe from "./Subscribe/Subscribe";
import divider from "./assets/divider.png";
import "./Landing.scss";
import Footer from "./Footer/Footer"

export default function Landing() {
  return (
    <div>
      <Home />
      <Protocol />
      <img src={divider} className="divider" />
      <Services />
      <img src={divider} className="divider" />
      <Value />
      <img src={divider} className="divider" />
      <Subscribe />
      <Footer />
    </div>
  );
}
