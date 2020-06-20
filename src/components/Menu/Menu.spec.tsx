import React from 'react';
import { mount } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {
  it('should render background image with classname based on props', () => {
    const heading = 'test-classname';
    const component = mount(<Menu heading={heading} />);
    expect(component.find('.bg-img-test-classname').exists()).toBe(true);
  });
});
