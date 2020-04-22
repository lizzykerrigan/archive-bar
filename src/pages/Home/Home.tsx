import React, { useEffect, useState } from 'react';
import MainPageDescription from '../../components/MainPageDescription';
import MainPageIntro from '../../components/MainPageIntro';
import Drinks from '../Drinks';
import Food from '../Food';
import Preloader from '../Preloader';
import ContactPage from '../ContactPage';
import EventsSection from '../Events';

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  document.title = 'Archive Bar & Bottle, Cheadle Hulme';
  return (
    <>
      {!loaded && <Preloader />}
      <MainPageIntro />
      <MainPageDescription />
      <Drinks />
      <Food />
      <EventsSection />
      <ContactPage />
    </>
  );
};

export default Home;
