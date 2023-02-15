import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import CountryCard from '../components/CountryCard';

describe('Country Card Grid Item', () => {
  it('should render correctly', async () => {
    // Arrange
    const name = { common: 'Canada' };
    // Act
    const { asFragment } = render(<CountryCard name={name} />, {
      wrapper: BrowserRouter,
    });
    await screen.findByRole('heading');
    // Assert
    expect(screen.getByRole('heading')).toHaveTextContent('Canada');
    expect(asFragment()).toMatchSnapshot();
  });
});
