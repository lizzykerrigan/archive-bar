import React from 'react';
import './BeerTable.css';
import { GetData } from '../../lib/GetData';

type BeerTableProps = {
  listName: string;
};

const BeerTable = ({ listName }: BeerTableProps) => {
  const { fields, loaded } = GetData(listName);

  const headings: string[] = [
    'line',
    'beer',
    'style',
    'brewery',
    'strength',
    'price',
  ];

  fields.sort((a, b) => a.id - b.id);

  return loaded ? (
    <div className="beer-table">
      <h2>Beer Board</h2>
      <table>
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {fields.map(
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
          )}
        </tbody>
      </table>
      <img
        src="divider-bottom.svg"
        aria-hidden="true"
        className="bottom-divider"
      />
    </div>
  ) : null;
};

export default BeerTable;
