import React from "react";
import ContactForm from "./ContactForm";
import "./Subscribe.scss";

export default function Subscribe() {
  return (
    <main name="subscribe" className="subscribe_items">
      <section className="subscribe_section">
        <div className="subscribe_text">
          <h2>Creating opportunities where none existed</h2>
          <p>
            Subscribe to our newsletter to receive updates on the progress of
            Libertum Project and be part of a movement to democratize the real estate investment market
          </p>
        </div>
        <div className="subscribe_form">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
