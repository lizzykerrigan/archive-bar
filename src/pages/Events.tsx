import React from "react";
import ContactComponent from "../components/ContactComponent";
import Menu from "../components/Menu";

const EventsSection = () => {
  return (
    <section id="events">
      <Menu heading="events" />
      <h1>EVENTS</h1>
      <ContactComponent />
    </section>
  );
};

export default EventsSection;
