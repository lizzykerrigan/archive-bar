import React from "react";
import "./App.css";
import ArchiveNav from "./components/ArchiveNav.js";
import PouringNow from "./components/PouringNow.js";
import { Router } from "@reach/router";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <ArchiveNav />
        <Router>
          <Home path="/" />
          <PouringNow path="/pouring" />
        </Router>
    </div>
  );
}

export default App;
