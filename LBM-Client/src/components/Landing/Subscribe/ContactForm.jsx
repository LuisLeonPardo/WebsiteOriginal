import { useState } from "react";
import { motion } from "framer-motion";
import { Bounce, Flip } from "react-awesome-reveal";
import { FaHourglassEnd } from "react-icons/fa";
import { BsCheckAll } from "react-icons/bs";

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    const formElem = document.querySelector("form");
    e.preventDefault();
    const formData = new FormData(formElem);
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyJLJXjkfkkhzjkB7GZWWjjOHcm-XJ-zwjmOxQyciofomwP50QpUz2g4FCqsi4V1BVj/exec",
      {
        method: "POST",
        body: formData,
      }
    );
    setTimeout(() => {
      setSuccess(true);
      setLoading(false);
    }, 500);
  };

  return (
    <>
      {!success ? (
        !loading ? (
          <form onSubmit={handleSubmit}>
            <input
              type="Email"
              name="Email"
              placeholder="contact@libertum.com"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
            >
              Subscribe
            </motion.button>
          </form>
        ) : (
          <Flip style={{ marginTop: "10px" }}>
            <FaHourglassEnd size={28} color="gray" />;
          </Flip>
        )
      ) : (
        <Bounce style={{ marginTop: "10px" }}>
          <BsCheckAll size={30} color="#26c502" />
          <h3 style={{ color: "#26c502", margin: "0px" }}>
            ¡Thanks for subscribe!
          </h3>
        </Bounce>
      )}
    </>
  );
}
