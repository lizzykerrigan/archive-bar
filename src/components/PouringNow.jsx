import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

export default class PouringNow extends Component {
  render() {
    return (
      <div>
        <h2 class="pouring-header">Pouring now:</h2>
        <Query
          query={gql`
            {
              beers(order_by: { id: asc }) {
                id
                beer
                brewery
                line
                price
                strength
                style
                caskorkeg
              }
            }
          `}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return data.beers.map(
              ({
                id,
                line,
                price,
                strength,
                style,
                brewery,
                beer,
                caskorkeg
              }) => (
                <div key={id}>
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        {caskorkeg} {line}: {beer}
                      </Card.Title>
                      {/* <Card.Subtitle className="mb-2">{brewery}</Card.Subtitle> */}
                      <Card.Text className="text-mono">
                        {brewery} | {strength} | {style} | {price}
                        <br />
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              )
            );
          }}
        </Query>
      </div>
    );
  }
}
