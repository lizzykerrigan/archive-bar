import React from 'react';
import { IntroHead, IntroLogo } from './MainPageIntro.styled';

const MainPageIntro = () => {
  return (
    <IntroHead imageUrl="https://res.cloudinary.com/dpj3m4zwi/image/upload/f_auto,q_auto/v1576786015/5df2a4eb047f851c3e9512b0_66840947_327860078153260_.jpg">
      <IntroLogo
        alt=""
        src="https://res.cloudinary.com/dpj3m4zwi/image/upload/f_auto,q_auto/v1577132543/archive-logo-transparent.png"
      />
    </IntroHead>
  );
};

export default MainPageIntro;
