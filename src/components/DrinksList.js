import React, { Component } from "react";
import "./DrinksList.css";

import * as contentful from "contentful";

import { REACT_APP_CTF_SPACE, REACT_APP_CTF_CDA_TOKEN } from "../env";

class DrinksList extends Component {
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

  setPosts = response => {
    const fields = response.items.map(el => el.fields);
    this.setState({
      fields,
      loaded: true
    });
  };

  render() {
    const { fields, loaded } = this.state;
    fields.sort((a, b) => a.name.localeCompare(b.name));
    return (
      <div className={`drinks-list ${this.props.listName}-list`}>
        <h2>{this.props.heading}</h2>
        <ul>
          {loaded
            ? fields.map(el => (
                <li>
                  <strong>
                    {el.name}, {el.price}
                  </strong>{" "}
                  ({el.strength})
                </li>
              ))
            : null}
        </ul>
        <img src="divider-bottom.svg" aria-hidden="true" className="bottom-divider"/>
      </div>
    );
  }
}

export default DrinksList;
