import React from 'react';
import { mount } from 'enzyme';
import BeerTable from './BeerTable';
import { act } from 'react-dom/test-utils';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('BeerTable', () => {
  const flushPromises = () => new Promise(setImmediate);
  it('renders the fields returned by axios in the table in order of ID', async () => {
    mockedAxios.get.mockResolvedValue({
      data: {
        items: [
          {
            fields: {
              id: 1,
              line: 'Keg 1',
              beer: 'Do Not Seek the Treasure',
              style: 'Blackberry Sour',
              brewery: 'Pomona Island',
              strength: '6.8%',
              price: '£4.40 ⅔',
            },
          },
          {
            fields: {
              id: 2,
              line: 'Keg 2',
              beer: 'Lager',
              style: 'Brooklyn',
              brewery: 'Vienna',
              strength: '5.2%',
              price: '£4.00 ⅔',
            },
          },
        ],
      },
    });
    // Warning: An update to HelloUser inside a test was not wrapped in act(...).
    const component = mount(<BeerTable listName="pouring" />);
    await act(async () => {
      await flushPromises();
    });
    component.update();
    expect(
      component
        .find('td')
        .first()
        .text(),
    ).toEqual('Keg 1');
  });
});
