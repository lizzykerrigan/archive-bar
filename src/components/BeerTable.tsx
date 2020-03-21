import React, { Component } from 'react';
import './BeerTable.css';

import * as contentful from 'contentful';

import { REACT_APP_CTF_SPACE, REACT_APP_CTF_CDA_TOKEN } from '../env';

class BeerTable extends Component {
  state = {
    fields: [],
    headings: [],
    loaded: false,
  };

  client = contentful.createClient({
    space: REACT_APP_CTF_SPACE,
    accessToken: REACT_APP_CTF_CDA_TOKEN,
  });

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () => this.client.getEntries({ content_type: 'pouring' });

  setPosts = (response: { items: any[] }) => {
    const fields = response.items.map(el => el.fields);
    this.setState({
      fields,
      headings: Object.keys(fields[0]),
      loaded: true,
    });
  };

  compareFieldsByLineNumber = (a: any = {}, b: any = {}) => {
    const lineA = a.line.slice(-2);
    const lineB = b.line.slice(-2);

    return lineA - lineB;
  };

  compareFieldsByLineType = (a: any = {}, b: any = {}) => {
    const lineA = a.line.slice(0, 4).toUpperCase();
    const lineB = b.line.slice(0, 4).toUpperCase();
    return lineB.localeCompare(lineA);
  };

  render() {
    const { fields, headings, loaded } = this.state;
    fields
      .sort(this.compareFieldsByLineNumber)
      .sort(this.compareFieldsByLineType);

    return (
      <div className="beer-table">
        <h2>Beer Board</h2>
        <table>
          <thead>
            <tr>
              {loaded
                ? headings.map((heading, index) => (
                    <th key={index}>{heading}</th>
                  ))
                : null}
            </tr>
          </thead>
          <tbody>
            {loaded
              ? fields.map(
                  ({ line, beer, style, brewery, strength, price }, index) => (
                    <tr key={index}>
                      <td>{line}</td>
                      <td>{beer}</td>
                      <td>{style}</td>
                      <td>{brewery}</td>
                      <td>{strength}</td>
                      <td>{price}</td>
                    </tr>
                  ),
                )
              : null}
          </tbody>
        </table>
        <img
          src="divider-bottom.svg"
          aria-hidden="true"
          className="bottom-divider"
        />
      </div>
    );
  }
}

export default BeerTable;
