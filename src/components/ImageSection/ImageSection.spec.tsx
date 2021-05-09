import React from 'react';
import { mount } from 'enzyme';
import ImageSection from './ImageSection';

describe('ImageSection', () => {
  it('should render background image with classname based on props', () => {
    const heading = 'test-classname';
    const component = mount(<ImageSection heading={heading} />);
    expect(component.find('.bg-img-test-classname').exists()).toBe(true);
  });
});
