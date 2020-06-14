import React, { useState, useEffect } from 'react';
import './BeerTable.css';

import fetchPosts from '../../api';

type BeerTableProps = {
  listName: string;
};

interface Beer {
  id: number;
  beer: string;
  brewery: string;
  line: string;
  price: string;
  strength: string;
  style: string;
}

const BeerTable = ({ listName }: BeerTableProps) => {
  const [loaded, setLoaded] = useState(false);
  const [fields, setFields] = useState<Beer[]>([]);

  useEffect(() => {
    fetchPosts(listName).then(response => setFields(response));
    setLoaded(true);
  }, [listName]);

  const headings: string[] = [
    'line',
    'beer',
    'style',
    'brewery',
    'strength',
    'price',
  ];

  fields.sort((a, b) => a.id - b.id);

  return (
    <div className="beer-table">
      <h2>Beer Board</h2>
      <table>
        <thead>
          <tr>
            {loaded &&
              headings.map((heading, index) => <th key={index}>{heading}</th>)}
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
};

export default BeerTable;
