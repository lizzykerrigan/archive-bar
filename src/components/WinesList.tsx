import React, { useState, useEffect } from 'react';
import './MenuList.css';

import * as contentful from 'contentful';

import { REACT_APP_CTF_SPACE, REACT_APP_CTF_CDA_TOKEN } from '../env';

type WineListProps = {
  listName: string;
};

const WinesList = ({ listName }: WineListProps) => {
  const [loaded, setLoaded] = useState(false);
  const [fields, setFields] = useState(Array());

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

  const filterWines = (
    fields: { name: string; price: string; type: string }[],
    type: string,
  ): { name: string; price: string; type: string }[] => {
    return fields.filter(
      entry => entry.type.toUpperCase() === type.toUpperCase(),
    );
  };

  fields.sort((a, b) => a.price.slice(-5) - b.price.slice(-5));

  return (
    <div className={`drinks-list wines-list`}>
      <h2>Wines</h2>
      <h3>Red</h3>
      <ul>
        {loaded
          ? filterWines(fields, 'red').map(({ name, price }, index) => (
              <li key={index}>
                <strong>{name}</strong>
                <br />
                <em>{price}</em>
              </li>
            ))
          : null}
      </ul>
      <h3>White</h3>
      <ul>
        {loaded
          ? filterWines(fields, 'white').map(({ name, price }, index) => (
              <li key={index}>
                <strong>{name}</strong>
                <br />
                <em>{price}</em>
              </li>
            ))
          : null}
      </ul>
      {filterWines(fields, 'rose').length > 0 && (
        <>
          <h3>Rosé</h3>
          <ul className="single-col">
            {loaded
              ? filterWines(fields, 'rose').map(({ name, price }, index) => (
                  <li key={index}>
                    <strong>{name}</strong>
                    <br />
                    <em>{price}</em>
                  </li>
                ))
              : null}
          </ul>
        </>
      )}
      {filterWines(fields, 'fizz').length > 0 && (
        <>
          <h3>Fizz</h3>
          <ul className="single-col">
            {loaded
              ? filterWines(fields, 'fizz').map(({ name, price }, index) => (
                  <li key={index}>
                    <strong>{name}</strong>
                    <br />
                    <em>{price}</em>
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
        alt=""
      />
    </div>
  );
};

export default WinesList;
