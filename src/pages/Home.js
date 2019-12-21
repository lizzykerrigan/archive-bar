import React from "react";
import MainPageDescription from "../components/MainPageDescription";
import MainPageIntro from "../components/MainPageIntro";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <>
      <MainPageIntro />
      <MainPageDescription />
      <Gallery />
    </>
  );
};

export default Home;
