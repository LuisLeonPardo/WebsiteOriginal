import React from "react";
import { motion } from "framer-motion";
import { Zoom } from "react-awesome-reveal";

import launchapp from "./assets/launchapp.svg";
import NavBar from "../NavBar/NavBar";
import "./Home.scss";

export default function Home() {
  return (
    <main className="home_items" name="home">
      <NavBar />
      <section className="home_section">
        <div>
          <div className="home_text">
            <h1>
              Tokenize Property, <span>Democratize Real Estate</span> and Earn Interest
            </h1>
            <p>
              DeFi protocol for a fluid and all inclusive economy; to make Real Estate Investing,
              accessible to everyone
            </p>
          </div>
          <div className="home_links">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
              <a href="/dashboard" className="launchapp">
                <span>Launch App</span> <img src={launchapp} />
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
              <a href="/swap" className="token">
                Add token libertum
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
