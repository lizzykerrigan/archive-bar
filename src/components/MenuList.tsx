import React, { useState, useEffect } from 'react';
import './MenuList.css';

import * as contentful from 'contentful';

import { REACT_APP_CTF_SPACE, REACT_APP_CTF_CDA_TOKEN } from '../env';

type MenuListProps = {
  className?: string;
  heading: string;
  listName: string;
  message?: string;
  sort?: boolean;
};

const MenuList = ({
  className,
  heading,
  listName,
  message,
  sort,
}: MenuListProps) => {
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

  if (sort) {
    fields.sort((a, b) => a.price.slice(1) - b.price.slice(1));
  } else {
    fields.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className={`drinks-list ${listName}-list`}>
      <h2>{heading}</h2>
      <ul className={className ?? ''}>
        {loaded
          ? fields.map((el, index) => (
              <li key={index}>
                <strong>{el.name}</strong>
                <br />
                <em>
                  {el.price || null} {el.strength ? `(${el.strength})` : null}
                </em>
                {el.chooseFrom ? (
                  <>
                    <br />
                    <em>Choose from: {el.chooseFrom}</em>
                  </>
                ) : null}
                {el.description ? <p>{el.description}</p> : null}
              </li>
            ))
          : null}
      </ul>
      {message && <p className="message">{message}</p>}
      <img
        src="divider-bottom.svg"
        aria-hidden="true"
        className="bottom-divider"
      />
    </div>
  );
};

export default MenuList;
