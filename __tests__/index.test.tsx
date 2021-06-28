import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import Home from '../pages'

it('Should render hello text', () => {
  render(<Home />)
  const heading = screen.getByText(/Next.js features/i);
  expect(heading).toBeInTheDocument();
})