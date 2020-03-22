import React from 'react';
import { mount } from 'enzyme';
import ArchiveFooter from './ArchiveFooter';

describe('ArchiveFooter', () => {
  const component = mount(<ArchiveFooter />);

  it('Renders correct footer text', () => {
    expect(component.find('p').text()).toBe('Site by Lizzy Kerrigan© 2020');
  });
});
