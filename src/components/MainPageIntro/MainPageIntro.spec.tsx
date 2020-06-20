import React from 'react';
import MainPageIntro from './MainPageIntro';
import { mount } from 'enzyme';

describe('MainPageIntro', () => {
  it('should render the main page intro image successfully', () => {
    const component = mount(<MainPageIntro />);
    const image = component.find('.intro-logo');
    expect(image.exists()).toBe(true);
  });
});
