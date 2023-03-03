import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";

import desktop from "./assets/desktop.png";
import arrow from "./assets/arrow.svg";
import "./Protocol.scss";

const firstParagraph =
  "Real estate is the single biggest asset class that may be tokenized. Global real estate market size is worth around $369 trillion today and only 7% of this is available to retail investors. However, more than 80% of people believe real estate to be a good investment.";
const secondParagraph =
  "The Libertum Project democratizes the real estate investment market by allowing each and everyone to invest in tokenized property with crypto or fiat-currency. With tokenization, real estate assets can be represented as tokens on the blockchain that will become as efficient and inexpensive to issue, transfer and trade as other cryptocurrencies.";
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
              The <span>Libertum</span> Project
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
