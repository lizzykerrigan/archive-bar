import React, { useState, useEffect } from 'react';
import '../../styles/MenuList.css';
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
