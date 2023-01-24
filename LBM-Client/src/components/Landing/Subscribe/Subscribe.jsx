import React from "react";
import { motion } from "framer-motion";
import { JackInTheBox } from "react-awesome-reveal";

import "./Subscribe.scss";

export default function Subscribe() {
  return (
    <main name="subscribe" className="subscribe_items">
      <JackInTheBox direction={"top-left"} triggerOnce={"true"}>
        <section className="subscribe_section">
          <div className="subscribe_text">
            <h2>Creating opportunities where none existed</h2>
            <p>
              Subscribe to our newsletter to receive updates on the progress of
              Libertum and can be part of this growth.
            </p>
          </div>
          <div className="subscribe_form">
            <form>
              <input type="text" placeholder="Name"></input>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </section>
      </JackInTheBox>
    </main>
  );
}
