import React, { Component } from "react";
import Menu from "../components/Menu";
import Preloader from "./Preloader";
import BeerTable from "../components/BeerTable";
import DrinksList from "../components/DrinksList";
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
        <Menu heading="Drinks"/>
        <BeerTable />
        <DrinksList listName="gins" heading="Gin" />
        <DrinksList listName="flavouredGins" heading="Flavoured Gin" />
        <DrinksList listName="rum" heading="Rum" />
        <DrinksList listName="whisky" heading="Whisky" />
        <DrinksList listName="bourbon" heading="Bourbon" class="single-col" />
        <DrinksList listName="otherSpirits" heading="Other Spirits" />
        <WinesList listName="wines" />
        <DrinksList listName="cocktails" heading="Cocktails" />
        <DrinksList listName="hotDrinks" heading="Hot Drinks" sortByPrice />
        <DrinksList listName="softDrinks" heading="Soft Drinks" sortByPrice />
      </>
    );
  }
}

export default Drinks;
