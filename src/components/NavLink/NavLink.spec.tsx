import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import NavLink from './NavLink';

describe('NavLink', () => {
  it('should render a NavLink with icon on smaller screens', () => {
    const component = mount(
      <Router>
        <NavLink element="test-menu" linkText="Test" icon="test.svg" />
      </Router>,
    );
    expect(component.find('img').prop('src')).toEqual('test.svg');
  });
});
