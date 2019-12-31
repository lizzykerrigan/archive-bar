import React, { Component } from "react";
import "./MenuList.css";

import * as contentful from "contentful";

import { REACT_APP_CTF_SPACE, REACT_APP_CTF_CDA_TOKEN } from "../env";

class WinesList extends Component {
  state = {
    fields: [],
    loaded: false
  };

  client = contentful.createClient({
    space: REACT_APP_CTF_SPACE,
    accessToken: REACT_APP_CTF_CDA_TOKEN
  });

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () =>
    this.client.getEntries({ content_type: this.props.listName });

  filterWines = (fields, type) => {
    return fields.filter(
      entry => entry.type.toUpperCase() === type.toUpperCase()
    );
  };

  setPosts = response => {
    const fields = response.items.map(el => el.fields);
    this.setState({
      fields,
      loaded: true
    });
  };

  render() {
    const { fields, loaded } = this.state;

    fields.sort((a, b) => a.price.slice(-5) - b.price.slice(-5));

    return (
      <div className={`drinks-list wines-list`}>
        <h2>Wines</h2>
        <h3>Red</h3>
        <ul>
          {loaded
            ? this.filterWines(fields, "red").map((el,index) => (
                <li key={index}>
                  <strong>{el.name}</strong>
                  <br />
                  <em>{el.price}</em>
                </li>
              ))
            : null}
        </ul>
        <h3>White</h3>
        <ul>
          {loaded
            ? this.filterWines(fields, "white").map((el, index) => (
                <li key={index}>
                  <strong>{el.name}</strong>
                  <br />
                  <em>{el.price}</em>
                </li>
              ))
            : null}
        </ul>
        {this.filterWines(fields, "rose").length > 0 && (
          <>
            <h3>Rosé</h3>
            <ul className="single-col">
              {loaded
                ? this.filterWines(fields, "rose").map((el, index) => (
                    <li key={index}>
                      <strong>{el.name}</strong>
                      <br />
                      <em>{el.price}</em>
                    </li>
                  ))
                : null}
            </ul>
          </>
        )}
        {this.filterWines(fields, "fizz").length > 0 && (
          <>
            <h3>Fizz</h3>
            <ul className="single-col">
              {loaded
                ? this.filterWines(fields, "fizz").map((el, index) => (
                    <li key={index}>
                      <strong>{el.name}</strong>
                      <br />
                      <em>{el.price}</em>
                    </li>
                  ))
                : null}
            </ul>
          </>
        )}
        <img
          src="divider-bottom.svg"
          aria-hidden="true"
          className="bottom-divider"
        />
      </div>
    );
  }
}

export default WinesList;
