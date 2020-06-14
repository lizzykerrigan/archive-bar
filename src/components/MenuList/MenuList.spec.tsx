import React from 'react';
import { mount } from 'enzyme';
import MenuList from './MenuList';
import { act } from 'react-dom/test-utils';
import { mockAxios } from '../../../__mocks__/mockAxios';
import { testData } from './testData';

jest.mock('axios');

describe('MenuList', () => {
  const flushPromises = () => new Promise(setImmediate);
  mockAxios(testData);

  it('renders the fields returned by axios as list items', async () => {
    const component = mount(<MenuList listName="whisky" heading="Whisky" />);
    await act(async () => {
      await flushPromises();
    });
    component.update();
    expect(component.find('.menu-item').length).toBe(4);
  });

  it('sorts by price if the sort prop is passed', async () => {
    const component = mount(
      <MenuList listName="whisky" heading="Whisky" sort />,
    );
    await act(async () => {
      await flushPromises();
    });
    component.update();
    const a = component
      .find('.item-price')
      .first()
      .text();
    const b = component
      .find('.item-price')
      .last()
      .text();

    expect(a.localeCompare(b)).toEqual(-1);
  });

  it('renders a description if one exists on items returned from axios', async () => {
    // only one of the testData items has a description
    const component = mount(<MenuList listName="whisky" heading="Whisky" />);
    await act(async () => {
      await flushPromises();
    });
    component.update();
    expect(component.find('.item-description').length).toBe(1);
  });

  it('renders a chooseFrom text node if one exists on items returned', async () => {
    // only one of the testData items has a chooseFrom
    const component = mount(<MenuList listName="whisky" heading="Whisky" />);
    await act(async () => {
      await flushPromises();
    });
    component.update();
    expect(component.find('.item-choose-from').length).toBe(1);
  });

  it('renders a message if message prop passed', async () => {
    const message = 'Ask about our gins!';
    const component = mount(
      <MenuList listName="whisky" heading="Whisky" message={message} />,
    );
    await act(async () => {
      await component.update();
    });
    expect(component.find('.message').text()).toEqual(message);
  });

  it('sets a classname if classname prop passed', async () => {
    const className = 'testing';
    const component = mount(
      <MenuList listName="whisky" heading="Whisky" className={className} />,
    );
    await act(async () => {
      await component.update();
    });
    expect(component.find('.testing').exists()).toBe(true);
  });
});
