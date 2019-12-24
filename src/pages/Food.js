import React, { Component } from "react";
import Menu from "../components/Menu";
import Preloader from "./Preloader";
import MenuList from "../components/MenuList";

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
      </>
    );
  }
}

export default Food;
