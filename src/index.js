import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as contentful from 'contentful';
import * as serviceWorker from "./serviceWorker";
import { REACT_APP_CTF_SPACE, REACT_APP_CTF_CDA_TOKEN } from "./env.js"

const client = contentful.createClient({
    space: REACT_APP_CTF_SPACE,
    accessToken: REACT_APP_CTF_CDA_TOKEN })
    client.getEntries().then(entries => {
    entries.items.forEach(entry => {
      if(entry.fields) {
        console.log(entry.fields)
      }
    })
  })


ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
