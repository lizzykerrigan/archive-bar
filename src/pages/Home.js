import React from "react";
import MainPageDescription from "../components/MainPageDescription";
import MainPageIntro from "../components/MainPageIntro";
import Gallery from "../components/Gallery";

const Home = () => {
  document.title = "Archive Bar & Bottle, Cheadle Hulme"
  return (
    <>
      <MainPageIntro />
      <MainPageDescription />
      <Gallery />
    </>
  );
};

export default Home;
