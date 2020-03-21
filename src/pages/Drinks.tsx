import React from 'react';
import Menu from '../components/Menu';
import BeerTable from '../components/BeerTable';
import MenuList from '../components/MenuList';
import WinesList from '../components/WinesList';

const Drinks = () => {
  return (
    <section id="drinks-menu">
      <Menu heading="drinks" />
      <h1 className="section-heading">Drinks</h1>
      <BeerTable />
      <MenuList listName="gins" heading="Gin" />
      <MenuList listName="flavouredGins" heading="Flavoured Gin" />
      <MenuList listName="rum" heading="Rum" />
      <MenuList listName="whisky" heading="Whisky" />
      <MenuList listName="bourbon" heading="Bourbon" className="single-col" />
      <MenuList listName="otherSpirits" heading="Other Spirits" />
      <WinesList listName="wines" />
      <MenuList listName="cocktails" heading="Cocktails" />
      <MenuList listName="hotDrinks" heading="Hot Drinks" sort />
      <MenuList listName="softDrinks" heading="Soft Drinks" sort />
    </section>
  );
};
export default Drinks;
