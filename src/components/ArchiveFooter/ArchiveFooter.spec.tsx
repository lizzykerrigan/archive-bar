import ArchiveFooter from './ArchiveFooter';
// import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';

test('shows the children when the checkbox is checked', () => {
  render(<ArchiveFooter />);

  expect(screen.getByTestId('footer-text').textContent).toBe(
    'Site by Lizzy Kerrigan© 2020',
  );
});
