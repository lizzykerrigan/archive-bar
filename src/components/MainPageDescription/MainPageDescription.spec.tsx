import React from 'react';
import MainPageDescription from './MainPageDescription';
import { mount } from 'enzyme';

describe('MainPageDescription', () => {
  const description = 'This description should render correctly...';
  const component = mount(<MainPageDescription desc={description} />);

  it('should render correct description passed through props', () => {
    expect(component.find('#main-description').text()).toBe(description);
  });
});
