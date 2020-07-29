import React, { useState, useEffect } from 'react';
import '../MenuList/MenuList.css';
import fetchPosts from '../../api';

type WineListProps = {
  listName: string;
};

interface Wine {
  name: string;
  price: string;
  type: string;
  id: number;
}

const WinesList = ({ listName }: WineListProps) => {
  const [loaded, setLoaded] = useState(false);
  const [fields, setFields] = useState<Wine[]>([]);

  useEffect(() => {
    fetchPosts(listName).then(response => setFields(response));
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

  fields.sort((first, second) => first.id - second.id);

  return (
    <div>
      <h2>Wines</h2>
      <h3>Red</h3>
      <ul className="drinks-list" id="red-wines">
        <div className="flex flex-wrap">
          {loaded &&
            filterWines(fields, 'red').map(({ name, price }, index) => (
              <li key={index}>
                <strong>{name}</strong>
                <br />
                <em>{price}</em>
              </li>
            ))}
        </div>
      </ul>
      <h3>White</h3>
      <ul className="drinks-list" id="white-wines">
        {loaded &&
          filterWines(fields, 'white').map(({ name, price }, index) => (
            <li key={index} className="white-wine-list-item">
              <strong>{name}</strong>
              <br />
              <em>{price}</em>
            </li>
          ))}
      </ul>
      {filterWines(fields, 'rose').length > 0 && (
        <>
          <h3>Rosé</h3>
          <ul className="single-col" id="rose-wines">
            {loaded &&
              filterWines(fields, 'rose').map(({ name, price }, index) => (
                <li key={index} className="rose-wine-list-item">
                  <strong>{name}</strong>
                  <br />
                  <em>{price}</em>
                </li>
              ))}
          </ul>
        </>
      )}
      {filterWines(fields, 'fizz').length > 0 && (
        <>
          <h3>Fizz</h3>
          <ul className="single-col" id="fizz-wines">
            {loaded &&
              filterWines(fields, 'fizz').map(({ name, price }, index) => (
                <li key={index} className="fizz-wine-list-item">
                  <strong>{name}</strong>
                  <br />
                  <em>{price}</em>
                </li>
              ))}
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
