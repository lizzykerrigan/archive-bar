import React from 'react';
import Contact from '../../components/Contact';
import ImageSection from '../../components/ImageSection';

const ContactPage = () => {
  return (
    <section id="contact">
      <ImageSection heading="contact" />
      <h1>CONTACT US</h1>
      <Contact />
    </section>
  );
};

export default ContactPage;
