import fetchPosts from './fetchPosts';
import axios from 'axios';
import { REACT_APP_CTF_SPACE, REACT_APP_CTF_CDA_TOKEN } from '../base';

const API_BASE_URL = 'https://cdn.contentful.com';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

mockedAxios.get.mockRejectedValue('Network error: Something went wrong');
mockedAxios.get.mockResolvedValue({ data: {} });

describe('fetchPosts', () => {
  it('should successfully fetch data', async () => {
    mockedAxios.get.mockResolvedValue({
      data: {
        items: [
          {
            name: 'Woodford Rye',
            price: '£5.00 per 25ml',
            strength: '43.2%',
          },
        ],
      },
    });

    await fetchPosts('bourbon');

    expect(mockedAxios.get).toHaveBeenCalledWith(
      `${API_BASE_URL}/spaces/${REACT_APP_CTF_SPACE}/entries?access_token=${REACT_APP_CTF_CDA_TOKEN}`,

      { params: { content_type: 'bourbon' } },
    );
  });
});
