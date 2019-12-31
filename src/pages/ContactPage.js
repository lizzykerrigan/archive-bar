import React from "react";
import ContactComponent from "../components/ContactComponent";
import Menu from "../components/Menu";

export const ContactPage = () => {
  return (
    <section id="contact">
      <Menu heading="contact" />
      <h1>CONTACT US</h1>
      <ContactComponent />
    </section>
  );
};
