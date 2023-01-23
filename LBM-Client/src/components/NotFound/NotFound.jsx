import React from "react";
import { motion } from "framer-motion";
import "./NotFound.scss";

export default function NotFound() {
  return (
    <main className="notfound_items">
      <section className="notfound_section">
        <div className="notfound_text">
          <h1>404</h1>
          <div>
            <h3>Page Not Found!</h3>
            <p>The page you're looking for is not available</p>
          </div>
        </div>
        <div className="notfound_button">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className="go_home"
          >
            <a href="/">Go Home</a>
          </motion.button>
        </div>
      </section>
    </main>
  );
}
