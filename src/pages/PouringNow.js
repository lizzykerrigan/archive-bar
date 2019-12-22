import React, { Component } from "react";
import PouringNowIntro from "../components/PouringNowIntro";
import Menu from "../components/Menu";
import Preloader from "./Preloader";
import BeerTable from "../components/BeerTable";
import DrinksList from "../components/DrinksList";

class PouringNow extends Component {
  state = { loaded: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 1000);
  }

  render() {
    console.log(this.state.loaded)
    return (
      <>
        {!this.state.loaded && <Preloader />}
        <Menu />
        <BeerTable />
        <DrinksList listName={"gins"} />
      </>
    );
  }
}

export default PouringNow;
