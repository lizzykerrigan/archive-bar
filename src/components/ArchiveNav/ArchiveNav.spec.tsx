import ArchiveNav from './ArchiveNav';
// import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';

test('Displays navigation and associated links', () => {
  render(<ArchiveNav />);
  expect(screen.getByRole('navigation')).toBeInTheDOM;
  expect(screen.getByText('Food')).toBeInTheDOM;
  expect(screen.getByText('Drinks')).toBeInTheDOM;
  expect(screen.getByText('Contact')).toBeInTheDOM;
});
