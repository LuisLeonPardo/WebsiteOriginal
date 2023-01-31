import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";

import desktop from "./assets/desktop.png";
import arrow from "./assets/arrow.svg";
import "./Protocol.scss";

const firstParagraph =
  "Libertum is a decentralized borrowing protocolenables users to utilize their cryptocurrencies by supplying collateral to the network that  may be borrowed by pledging over-collateralized cryptocurrencies.";
const secondParagraph =
  "The Libertum difference from other money markets protocols is the ability to use the collateral supplied to the market not only to borrow other assets, but also to mint stablecoins with over-collateralized positions that protect the protocol";

export default function Protocol() {
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

  return (
    <main className="protocol_items">
      <section className="protocol_section">
        <Slide direction={"left"} triggerOnce={"true"}>
          <div className="procotol_image">
            <div>
              <div></div>
            </div>
            <img alt="Launch App" src={desktop} />
          </div>
        </Slide>
        <Slide direction={"right"} triggerOnce={"true"}>
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
        </Slide>
      </section>
    </main>
  );
}
