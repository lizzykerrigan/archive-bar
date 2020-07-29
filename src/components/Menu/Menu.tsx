import React from 'react';
import './Menu.css';

const Menu = ({ heading }: { heading: string }) => (
  <div
    className={`bg-img-${heading} w-full h-screen bg-cover bg-no-repeat bg-fixed bg-center`}
  />
);

export default Menu;
