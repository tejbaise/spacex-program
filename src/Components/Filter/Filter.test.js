import React from 'react';
import { render } from '@testing-library/react';
import Filter from './Filter';

test('renders filter element', () => {
  function onFilterChange(response) {}
  const { getByText } = render(<Filter onFilterChange={onFilterChange} />);
  const headElement = getByText(/filters/i);
  expect(headElement).toBeInTheDocument();
  expect(headElement).toBeInTheDocument();
});
