import React from "react";
import { Slide } from "react-awesome-reveal";

import "./Value.scss";
import mobile from "./assets/mobile.svg";

export default function Value() {
  return (
    <main className="value_items">
      <section className="value_section">
        <Slide direction={"left"} triggerOnce={"true"}>
          <div className="value_image">
            <img src={mobile} />
          </div>
        </Slide>
        <Slide direction={"right"} triggerOnce={"true"}>
          <div className="value_text">
            <div className="value-text_item">
              <h2>Creativity & Technology</h2>
              <p>
                The next step to continue the cryptocurrency adoption foray is
                that all people can see and use DeFi platforms in the same way
                as they interact with traditional entities and the only way to
                make that possible is to implement decentralization and tangible
                assets. together with cryptocurrencies creating a strong and
                safe ecosystem.
              </p>
            </div>
            <div className="value-text_item">
              <h2>Our true Value</h2>
              <p>
                Is to be the gateway to all opportunities, with the aim of
                improving the quality of life of people and becoming the largest
                decentralized financial platform that allows cryptographic loans
                with guarantees such as real estate and real estate.
              </p>
            </div>
          </div>
        </Slide>
      </section>
    </main>
  );
}
