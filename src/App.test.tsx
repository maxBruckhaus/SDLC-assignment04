import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders heading text', () => {
  render(<Home />);
  const textElement = screen.getByText('Maxwell Bruckhaus');
  expect(textElement).toBeInTheDocument();
});
