import React, { Component } from "react";
import Menu from "../components/Menu";
import BeerTable from "../components/BeerTable";
import MenuList from "../components/MenuList";
import WinesList from "../components/WinesList";

const Drinks = () => {
  return (
    <section id="drinks-menu">
      <Menu
        heading="drinks"
        image="https://res.cloudinary.com/dpj3m4zwi/image/upload/f_auto,q_auto/v1576941701/76935991_415094802763120_6370016677035245568_n.jpg.jpg"
      />
      <h1 className="section-heading">Drinks</h1>
      <BeerTable />
      <MenuList listName="gins" heading="Gin" />
      <MenuList listName="flavouredGins" heading="Flavoured Gin" />
      <MenuList listName="rum" heading="Rum" />
      <MenuList listName="whisky" heading="Whisky" />
      <MenuList listName="bourbon" heading="Bourbon" class="single-col" />
      <MenuList listName="otherSpirits" heading="Other Spirits" />
      <WinesList listName="wines" />
      <MenuList listName="cocktails" heading="Cocktails" />
      <MenuList
        listName="hotDrinks"
        heading="Hot Drinks"
        sort={(a, b) => a.price.slice(1) - b.price.slice(1)}
      />
      <MenuList
        listName="softDrinks"
        heading="Soft Drinks"
        sort={(a, b) => a.price.slice(1) - b.price.slice(1)}
      />
    </section>
  );
};
export default Drinks;
