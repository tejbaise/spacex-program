import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders header element', () => {
  const { getByText } = render(<App />);
  const headElement = getByText(/spaceX launch programs/i);
  expect(headElement).toBeInTheDocument();
});
