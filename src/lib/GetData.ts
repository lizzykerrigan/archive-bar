import { useState, useEffect } from 'react';
import fetchPosts from '../api';

export const GetData = (listName: string) => {
  const [loaded, setLoaded] = useState(false);
  const [fields, setFields] = useState<MenuItem[]>([]);

  useEffect(() => {
    fetchPosts(listName).then(response => setFields(response));
    setLoaded(true);
  }, [listName]);

  return { fields, loaded };
};
