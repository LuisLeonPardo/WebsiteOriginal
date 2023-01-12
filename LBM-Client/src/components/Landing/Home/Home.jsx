import React from "react";
import { motion } from "framer-motion";
import launchapp from "./assets/launchapp.svg";
import NavBar from "../NavBar/NavBar";
import "./Home.scss";

export default function Home() {
  return (
    <main className="home_items">
      <NavBar />
      <section className="home_section">
        <div>
          <div className="home_text">
            <h1>
              Borrow Assets, <span>Create Opportunities</span> and Earn Interest
            </h1>
            <p>
              DeFi protocol with a fluid and inclusive economy; at you service,
              to help you on a daily basis
            </p>
          </div>
          <div className="home_links">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <a className="launchapp">
                <span>Launch App</span> <img src={launchapp} />
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <a className="token">Add token libertum</a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
