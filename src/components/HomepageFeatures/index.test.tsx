import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Hello } from './Hello';
import HomepageFeatures from '.';

test('Can render a simple component', () => {
  render(<Hello />);
  expect(screen.getByRole('heading')).toHaveTextContent('hello');
});

test('Can render the HomepageFeatures component', () => {
  render(<HomepageFeatures></HomepageFeatures>);
});
