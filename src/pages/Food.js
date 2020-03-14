import React from "react";
import Menu from "../components/Menu";
import MenuList from "../components/MenuList";

const Food = () => {
  const message =
    "N.B. All small plates are £4.95. All our food platters & plates come as standard with San Francisco sourdough. We also offer wholegrain pitta or crackers as an alternative.";

  return (
    <section id="food-menu">
      <Menu
        heading="food"
        image="https://res.cloudinary.com/dpj3m4zwi/image/upload/f_auto,q_auto/v1577795219/75204589_394055008200433_2599243327693914112_n.jpg.jpg"
      />
      <h1 className="section-heading">Food</h1>
      <MenuList
        listName="sharingPlatters"
        heading="Sharing Platters"
        sort={(a, b) => a.price.slice(1) - b.price.slice(1)}
      />
      <MenuList
        listName="smallPlates"
        heading="Small Plates"
        message={message}
      />
      <MenuList
        listName="snacks"
        heading="Snacks &amp; Sides"
        sort={(a, b) => a.price.slice(1) - b.price.slice(1)}
      />
    </section>
  );
};

export default Food;
