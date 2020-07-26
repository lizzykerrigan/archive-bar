import React, { useState, useEffect } from 'react';

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
      <h2 className="my-6 uppercase text-2xl">Beer Board</h2>
      <table className="table-auto m-auto border-collapse">
        <thead>
          <tr>
            {loaded &&
              headings.map((heading, index) => (
                <th
                  className="px-4 py-2 text-left uppercase pt-4 pb-4 border-b-2 border-t-0"
                  key={index}
                >
                  {heading}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {loaded
            ? fields.map(
                ({ line, beer, style, brewery, strength, price }, index) => (
                  <tr key={index}>
                    <td className="whitespace-normal border-b-0 capitalize text-left leading-4 text-lg">
                      {line}
                    </td>
                    <td className="whitespace-normal border-b-0 capitalize text-left leading-4 text-lg">
                      {beer}
                    </td>
                    <td className="whitespace-normal border-b-0 capitalize text-left leading-4 text-lg">
                      {style}
                    </td>
                    <td className="whitespace-normal border-b-0 capitalize text-left leading-4 text-lg">
                      {brewery}
                    </td>
                    <td className="whitespace-normal border-b-0 capitalize text-left leading-4 text-lg">
                      {strength}
                    </td>
                    <td className="whitespace-normal border-b-0 capitalize text-left leading-4 text-lg">
                      {price}
                    </td>
                  </tr>
                ),
              )
            : null}
        </tbody>
      </table>
      <img
        src="divider-bottom.svg"
        aria-hidden="true"
        className="bottom-divider h-auto w-1/2 my-4 mx-auto"
      />
    </div>
  );
};

export default BeerTable;
