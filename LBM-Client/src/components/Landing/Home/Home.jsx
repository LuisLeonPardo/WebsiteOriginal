import React from "react";
import { motion } from "framer-motion";
import Tada from "react-reveal/Tada";
import Fade from "react-reveal/Fade";

import launchapp from "./assets/launchapp.svg";
import NavBar from "../NavBar/NavBar";
import "./Home.scss";

export default function Home() {
  return (
    <main className="home_items">
      <Fade top>
        <NavBar />
      </Fade>
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
            <Tada>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
                <a href="/dashboard" className="launchapp">
                  <span>Launch App</span> <img src={launchapp} />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
                <a className="token">Add token libertum</a>
              </motion.div>
            </Tada>
          </div>
        </div>
      </section>
    </main>
  );
}
