import React from "react";
import "./App.css";
import ArchiveNav from "./components/ArchiveNav.js";
import Drinks from "./pages/Drinks";
import Food from "./pages/Food";
import { Router } from "@reach/router";
import Home from "./pages/Home";
import { ArchiveFooter } from "./components/ArchiveFooter";
import { ContactPage } from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <ArchiveNav />
        <Router>
          <Home path="/" />
          <Drinks path="/drinks" />
          <Food path="/food" />
          <ContactPage path="/contact" />
        </Router>
      <ArchiveFooter />
    </div>
  );
}

export default App;
