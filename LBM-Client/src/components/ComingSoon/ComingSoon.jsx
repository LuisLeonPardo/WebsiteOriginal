import React from "react";
import { JackInTheBox } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./CoomingSoon.scss";
import { networks } from "../Landing/networks";

export default function CoomingSoon() {
  const navigate = useNavigate();
  return (
    <main className="cs_items">
      <section className="cs_section">
        <div className="cs_text">
          <h1>Cooming Soon</h1>
          <div>
            <h3>Developing Page</h3>
            <p>
              We are currently working on our new website. We'll be here soon.
              <br></br>
              Sign up to receive notifications and prepare for the big day.
            </p>
          </div>
        </div>
        <div className="cs_form">
          <JackInTheBox direction={"top-left"} triggerOnce={"true"}>
            <form>
              <input type="text" placeholder="Name" />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
              >
                Subscribe
              </motion.button>
            </form>
          </JackInTheBox>
        </div>
        <motion.button
          className="cs_back"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          onClick={() => navigate(-1)}
        >
          <FaAngleLeft />
        </motion.button>
        <div className="cs_network">
          {networks.map(({ net, href }, index) => (
            <a
              key={index}
              className="cs_network-item"
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              <img src={net} />
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
