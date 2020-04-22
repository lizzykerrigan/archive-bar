import React from 'react';
import Contact from '../../components/Contact';
import Menu from '../../components/Menu';

const ContactPage = () => {
  return (
    <section id="contact">
      <Menu heading="contact" />
      <h1>CONTACT US</h1>
      <Contact />
    </section>
  );
};

export default ContactPage;
