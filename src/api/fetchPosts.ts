import axios from 'axios';
import { REACT_APP_CTF_SPACE, REACT_APP_CTF_CDA_TOKEN } from '../base';

const API_BASE_URL = 'https://cdn.contentful.com';

const fetchPosts = async (type: string) => {
  const { data } = await axios.get(
    `${API_BASE_URL}/spaces/${REACT_APP_CTF_SPACE}/entries?access_token=${REACT_APP_CTF_CDA_TOKEN}`,
    {
      params: { content_type: type },
    },
  );
  const { items } = data;
  return items.map((item: { fields: string[] }) => item.fields);
};

export default fetchPosts;
