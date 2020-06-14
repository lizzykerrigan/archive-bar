import React from 'react';
import { mount } from 'enzyme';
import WinesList from './WinesList';
import { act } from 'react-dom/test-utils';
import { mockAxios } from '../../../__mocks__/mockAxios';
import { testData } from './testData';

jest.mock('axios');

describe('WinesList', () => {
  const flushPromises = () => new Promise(setImmediate);
  mockAxios(testData);

  it('renders an individual list for each type of wine available', async () => {
    const component = mount(<WinesList listName="red" />);
    await act(async () => {
      await flushPromises();
    });
    component.update();
    expect(component.find('.red-wine-list-item').length).toEqual(9);
    expect(component.find('.white-wine-list-item').length).toEqual(6);
    expect(component.find('.fizz-wine-list-item').length).toEqual(1);
    expect(component.find('.rose-wine-list-item').length).toEqual(1);
  });
});
