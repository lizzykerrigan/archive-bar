import React, { useState, useEffect } from 'react';
import './BeerTable.css';

import * as contentful from 'contentful';

import { REACT_APP_CTF_SPACE, REACT_APP_CTF_CDA_TOKEN } from '../env';

type BeerTableProps = {
  listName: string;
};

const BeerTable = ({ listName }: BeerTableProps) => {
  const [loaded, setLoaded] = useState(false);
  const [fields, setFields] = useState<any[]>([]);

  useEffect(() => {
    const client = contentful.createClient({
      space: REACT_APP_CTF_SPACE,
      accessToken: REACT_APP_CTF_CDA_TOKEN,
    });
    const getEntries = (): void => {
      client.getEntries({ content_type: listName }).then(response => {
        const fields = response.items.map(el => el.fields);
        setFields(fields);
      });
    };
    getEntries();
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

  const compareFieldsByLineNumber = (
    a: { line: string },
    b: { line: string },
  ): number => {
    // check line number
    // return in ascending order
    const lineA = a.line.slice(-2);
    const lineB = b.line.slice(-2);
    return Number(lineA) - Number(lineB);
  };

  const compareFieldsByLineType = (
    a: { line: string },
    b: { line: string },
  ): number => {
    // checks if line type is cask or keg
    // return keg above cask on table
    const lineA: string = a.line.slice(0, 4).toUpperCase();
    const lineB: string = b.line.slice(0, 4).toUpperCase();
    return lineB.localeCompare(lineA);
  };

  fields.sort(compareFieldsByLineNumber).sort(compareFieldsByLineType);

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
