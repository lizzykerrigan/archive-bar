import ArchiveFooter from './ArchiveFooter';
// import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';

test('Displays the correct text in the footer', () => {
  render(<ArchiveFooter />);

  expect(screen.getByTestId('footer-text').textContent).toBe(
    'Site by Lizzy Kerrigan© 2020',
  );
});
