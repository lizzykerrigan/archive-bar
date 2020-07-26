import React, { useEffect, useState } from 'react';
import MainPageDescription from '../../components/MainPageDescription';
import MainPageIntro from '../../components/MainPageIntro';
import Drinks from '../Drinks';
import Food from '../Food';
import Preloader from '../Preloader';
import ContactPage from '../ContactPage';
import fetchPosts from '../../api';
// import EventsSection from '../Events';

const Home = () => {
  const [desc, setDesc] = useState('');

  useEffect(() => {
    fetchPosts('mainDescription').then(response => setDesc(response[0].text));
  }, []);

  document.title = 'Archive Bar & Bottle, Cheadle Hulme';
  return (
    <>
      {!desc && <Preloader />}
      <MainPageIntro />
      <MainPageDescription desc={desc} />
      <Drinks />
      <Food />
      {/* <EventsSection /> */}
      <ContactPage />
    </>
  );
};

export default Home;
