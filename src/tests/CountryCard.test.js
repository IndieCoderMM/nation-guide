import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import CountryCard from '../components/CountryCard';

describe('Country Card Grid Item', () => {
  it('should render correctly', async () => {
    // Arrange
    const { asFragment } = render(
      <CountryCard name={{ common: 'Canada' }} area={9984670} />,
      {
        wrapper: BrowserRouter,
      },
    );
    // Act
    await screen.findByRole('heading');
    // Assert
    expect(screen.getByRole('heading')).toHaveTextContent('Canada');
    expect(asFragment()).toMatchSnapshot();
  });
});
