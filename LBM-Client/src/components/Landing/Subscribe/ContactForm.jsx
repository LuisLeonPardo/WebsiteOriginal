import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { Bounce, Flip } from "react-awesome-reveal";
import { BsCheckAll, FaHourglassEnd, BiError, SlReload } from "react-icons/all";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mbjegdnw");
  const navigate = useNavigate();

  if (state.submitting) {
    return (
      <Flip style={{ marginTop: "10px" }}>
        <FaHourglassEnd size={28} color="gray" />;
      </Flip>
    );
  }
  if (state.succeeded) {
    return (
      <Bounce style={{ marginTop: "10px" }}>
        <BsCheckAll size={30} color="#26c502" />
        <h3 style={{ color: "#26c502", margin: "0px" }}>
          ¡Thanks for subscribe!
        </h3>
      </Bounce>
    );
  }
  if (state.errors.length) {
    setTimeout(() => {
      navigate(0);
    }, 1500);
    return (
      <>
        <Bounce style={{ marginTop: "10px" }}>
          <BiError size={30} color="#ce0018" />
          <h3 style={{ color: "#ce0018", margin: "0px" }}>
            {state.errors[0].message}
          </h3>
        </Bounce>
      </>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="contact@libertum.com"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <motion.button
        type="submit"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
      >
        Subscribe
      </motion.button>
    </form>
  );
}
