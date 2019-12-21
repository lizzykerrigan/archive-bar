import React, { Component } from "react";
import PouringNowIntro from "../components/PouringNowIntro";
import Menu from "../components/Menu";
import Preloader from "./Preloader";

class PouringNow extends Component {
  state = { loaded: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 2000);
  }

  render() {
    return (
      <>
        {!this.state.loaded && <Preloader loaded={this.state.loaded}/>}
        <Menu />
      </>
    );
  }
}

export default PouringNow;
