import React, { Component } from "react";
import Menu from "../components/Menu";
import Preloader from "./Preloader";
import DrinksList from "../components/DrinksList";

class Food extends Component {
  state = { loaded: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 1000);
  }

  render() {
    document.title = "Food Menu | Archive Bar & Bottle, Cheadle Hulme";

    const message =
      "N.B. All small plates are £4.95. All our food platters & plates come as standard with San Francisco sourdough. We also offer wholegrain pitta or crackers as an alternative.";

    return (
      <>
        {!this.state.loaded && <Preloader />}
        <Menu heading="Food" />
        <DrinksList
          listName="sharingPlatters"
          heading="Sharing Platters"
          sort={(a, b) => a.price.slice(1) - b.price.slice(1)}
        />
        <DrinksList
          listName="smallPlates"
          heading="Small Plates"
          message={message}
        />
        <DrinksList
          listName="snacks"
          heading="Snacks &amp; Sides"
          sort={(a, b) => a.price.slice(1) - b.price.slice(1)}
        />
      </>
    );
  }
}

export default Food;
