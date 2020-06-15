import React from 'react';
import { mount } from 'enzyme';
import Contact from './Contact';

describe('Contact', () => {
  const component = mount(<Contact />);

  it('renders correct mailto link', () => {
    expect(component.find('#email-link').prop('href')).toEqual(
      'mailto:archivebarandbottle@gmail.com',
    );
  });

  it('renders each social media link successfully', () => {
    expect(component.find('.social-media-link').length).toEqual(4);
  });
});
