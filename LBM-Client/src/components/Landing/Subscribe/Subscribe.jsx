import React, { useState } from "react";
import { motion } from "framer-motion";
import { JackInTheBox } from "react-awesome-reveal";

import "./Subscribe.scss";

export default function Subscribe() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(undefined);

  const handleInput = (e) => {
    setInput(e.target.value);
    setError(emailValidation(input));
  };

  const emailValidation = (value) => {
    return /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i.test(
      value
    )
      ? true
      : false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Gracias");
  };

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
            <form onSubmit={handleSubmit}>
              <input onChange={handleInput} type="text" placeholder="Email" />
              {error == false && <span>*Direccion de email incorrecta</span>}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                disabled={!error}
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
