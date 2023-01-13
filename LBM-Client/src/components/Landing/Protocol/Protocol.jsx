import React, { useState } from "react";
import { motion } from "framer-motion";
import desktop from "./assets/desktop.png";
import arrow from "./assets/arrow.svg";
import "./Protocol.scss";

const firstParagraph =
  "Libertum is a decentralized borrowing protocolenables users to utilize their cryptocurrencies by supplying collateral to the network that  may be borrowed by pledging over-collateralized cryptocurrencies.";
const secondParagraph =
  "The Libertum difference from other money markets protocols is the ability to use the collateral supplied to the market not only to borrow other assets, but also to mint stablecoins with over-collateralized positions that protect the protocol";

export default function Protocol() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(1);
  const [paragraph, setParagraph] = useState(firstParagraph);

  const nextParagraph = () => {
    if (paragraph === firstParagraph) {
      setParagraph(secondParagraph);
      index === 1 ? setIndex(2) : setIndex(1);
    } else {
      setParagraph(firstParagraph);
      index === 1 ? setIndex(2) : setIndex(1);
    }
  };

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleOnClose = () => setOpen(false);

  const ModalImg = ({ visible, onClose }) => {
    const handleOnClose = (e) => {
      if (e.target.id === "container") onClose();
    };
    if (!visible) return null;
    return (
      <div className="modal_items" id="container" onClick={handleOnClose}>
        <div className="modal_section">
          <motion.button whileHover={{ scale: 1.1 }} onClick={onClose}>
            x
          </motion.button>
          <img src={desktop} />
        </div>
      </div>
    );
  };

  return (
    <main className="protocol_items">
      <section className="protocol_section">
        <div className="procotol_image">
          <div>
            <div></div>
          </div>
          <img onClick={handleOpen} alt="Launch App" src={desktop} />
        </div>
        <div className="protocol_text">
          <h2>
            What is Libertum <br></br>Protocol?
          </h2>
          <div className="protocol_slide">
            <p>{paragraph}</p>
            <div>
              <img
                style={{ transform: "rotate(180deg)" }}
                src={arrow}
                onClick={nextParagraph}
              />
              <span>{index} / 2</span>
              <img src={arrow} onClick={nextParagraph} />
            </div>
          </div>
        </div>
      </section>
      <ModalImg onClose={handleOnClose} visible={open} />
    </main>
  );
}
