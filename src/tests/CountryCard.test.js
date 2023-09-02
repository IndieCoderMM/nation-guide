import React from 'react';
import { MemoryRouter as Router, useLocation } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CountryCard from '../components/CountryCard';
import sampleResponseData from './sampleResponseData';
import { generateSlug } from '../lib/utils';

const testCountry = sampleResponseData[0];

describe('CountryCard Component', () => {
  it('renders the component with correct data', () => {
    // eslint-disable-next-line object-curly-newline
    const { name, area, capital, population, flag } = testCountry;
    const { asFragment } = render(
      <Router>
        <CountryCard
          name={name.common}
          area={area}
          flag={flag}
          capital={capital}
          population={population}
        />
      </Router>,
    );

    // Check with snapshot
    expect(asFragment()).toMatchSnapshot();

    // Check if the data is displayed
    expect(screen.getByText(name.common)).toBeInTheDocument();
    expect(screen.getByText(`${area} km²`)).toBeInTheDocument();
    expect(screen.getByText(capital)).toBeInTheDocument();
    expect(screen.getByText(population)).toBeInTheDocument();
    expect(screen.getByAltText(flag.alt)).toHaveAttribute('src', flag.png);
  });

  it('renders a link to the country page with the correct slug', () => {
    // eslint-disable-next-line object-curly-newline
    const { name, area, capital, population, flag } = testCountry;
    render(
      <Router>
        <CountryCard
          name={name.common}
          area={area}
          flag={flag}
          capital={capital}
          population={population}
        />
      </Router>,
    );

    // Check if the link is rendered with the correct slug
    const link = screen.getByRole('link', {
      name: `Go to ${name.common} page`,
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      'href',
      `/country/${generateSlug(name.common)}`,
    );
  });

  it('navigate to the country page when the link is clicked', () => {
    // Create a component that displays the current location
    const DisplayLocation = () => {
      const location = useLocation();
      return <div data-testid="route-location">{location.pathname}</div>;
    };
    // eslint-disable-next-line object-curly-newline
    const { name, area, capital, population, flag } = testCountry;
    render(
      <Router initialEntries={['/']} initialIndex={0}>
        <CountryCard
          name={name.common}
          area={area}
          flag={flag}
          capital={capital}
          population={population}
        />
        <DisplayLocation />
      </Router>,
    );

    // Click the link
    const link = screen.getByRole('link', {
      name: `Go to ${name.common} page`,
    });
    fireEvent.click(link);

    // Verify that location has changed to the expected country page URL
    const routeLocation = screen.getByTestId('route-location');
    expect(routeLocation.textContent).toBe(
      `/country/${generateSlug(name.common)}`,
    );
  });
});
