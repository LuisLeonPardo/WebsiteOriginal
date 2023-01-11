import React from "react";
import launchapp from "./assets/launchapp.svg";
import NavBar from "../NavBar/NavBar";
import "./Home.scss";

export default function Home() {
  return (
    <main className="home_items">
      <NavBar />
      <section className="home_section">
        <div className="section_text">
          <h1>
            Borrow Assets, <span>Create Opportunities</span> and Earn Interest
          </h1>
          <p>
            DeFi protocol with a fluid and inclusive economy; at you service, to
            help you on a daily basis
          </p>
        </div>
        <div className="section_links">
          <a className="launchapp">
            <span>Launch App</span> <img src={launchapp} />
          </a>
          <a className="token">Add token libertum</a>
        </div>
      </section>
    </main>
  );
}
