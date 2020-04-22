import React from 'react';
import Menu from '../../components/Menu';
import MenuList from '../../components/MenuList';

const Food = () => {
  const message =
    'N.B. All small plates are £4.95. All our food platters & plates come as standard with San Francisco sourdough. We also offer wholegrain pitta or crackers as an alternative.';

  return (
    <section id="food-menu">
      <Menu heading="food" />
      <h1 className="section-heading">Food</h1>
      <MenuList listName="sharingPlatters" heading="Sharing Platters" sort />
      <MenuList
        listName="smallPlates"
        heading="Small Plates"
        message={message}
      />
      <MenuList listName="snacks" heading="Snacks &amp; Sides" sort />
    </section>
  );
};

export default Food;
