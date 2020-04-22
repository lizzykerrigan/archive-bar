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
    fetchPosts(listName).then(response => setFields(response));
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
