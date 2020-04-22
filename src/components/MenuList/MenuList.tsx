import React, { useState, useEffect } from 'react';
import '../../styles/MenuList.css';

import fetchPosts from '../../api';

type MenuListProps = {
  className?: string;
  heading: string;
  listName: string;
  message?: string;
  sort?: boolean;
};

interface MenuItem {
  name: string;
  price: string;
  description?: string;
  chooseFrom?: string;
  strength?: string;
}

const MenuList = ({
  className,
  heading,
  listName,
  message,
  sort,
}: MenuListProps) => {
  const [loaded, setLoaded] = useState(false);
  const [fields, setFields] = useState<MenuItem[]>([]);

  useEffect(() => {
    fetchPosts(listName).then(response => setFields(response));
    setLoaded(true);
  }, [listName]);

  if (sort) {
    // if sort prop exists, sort by price
    fields.sort((a, b) => a.price.localeCompare(b.price));
  } else {
    // otherwise, sort by name
    fields.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className={`drinks-list ${listName}-list`}>
      <h2>{heading}</h2>
      <ul className={className ?? ''}>
        {loaded &&
          fields.map((el, index) => (
            <li key={index}>
              <strong>{el.name}</strong>
              <br />
              <em>
                {el.price ?? ''} {el.strength && `(${el.strength})`}
              </em>
              {el.chooseFrom && (
                <>
                  <br />
                  <em>Choose from: {el.chooseFrom}</em>
                </>
              )}
              {el.description && <p>{el.description}</p>}
            </li>
          ))}
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
