import React from 'react';
import '../../styles/MenuList.css';
import { GetData } from '../../lib/GetData';

type WineListProps = {
  listName: string;
};

const WinesList = ({ listName }: WineListProps) => {
  const { fields, loaded } = GetData(listName);

  const filterWines = (fields: any[], type: string) => {
    return fields.filter(
      (entry: { type: string }) =>
        entry.type.toUpperCase() === type.toUpperCase(),
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
