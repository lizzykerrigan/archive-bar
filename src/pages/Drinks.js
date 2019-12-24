import React, { Component } from "react";
import Menu from "../components/Menu";
import Preloader from "./Preloader";
import BeerTable from "../components/BeerTable";
import MenuList from "../components/MenuList";
import WinesList from "../components/WinesList";

class Drinks extends Component {
  state = { loaded: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 1000);
  }

  render() {
    document.title = "Drinks Menu | Archive Bar & Bottle, Cheadle Hulme";

    return (
      <>
        {!this.state.loaded && <Preloader />}
        <Menu heading="Drinks" />
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
      </>
    );
  }
}

export default Drinks;
