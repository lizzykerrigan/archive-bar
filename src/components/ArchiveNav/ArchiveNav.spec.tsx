import React from 'react';
import { mount } from 'enzyme';
import ArchiveNav from './ArchiveNav';

describe('ArchiveNav', () => {
  const component = mount(<ArchiveNav />);

  it('Renders nav successfully', () => {
    expect(component.find('nav').exists()).toBe(true);
  });
});
