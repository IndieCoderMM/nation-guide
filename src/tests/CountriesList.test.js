import React from 'react';
import axios from 'axios';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import CountriesList from '../components/CountriesList';

jest.mock('axios');

const responseData = [
  {
    name: {
      common: 'Canada',
      nativeName: {
        eng: {
          official: 'Canada',
          common: 'Canada',
        },
      },
    },
    currencies: {
      CAD: {
        name: 'Canadian dollar',
        symbol: '$',
      },
    },
    capital: ['Ottawa'],
    altSpellings: ['CA'],
    region: 'Americas',
    latlng: [60.0, -95.0],
    area: 9984670.0,
    flag: '🇨🇦',
    population: 38005238,

    timezones: ['UTC-08:00', 'UTC-07:00'],
    continents: ['North America'],
    flags: {
      png: 'https://flagcdn.com/w320/ca.png',
      svg: 'https://flagcdn.com/ca.svg',
      alt: 'The flag of Canada is composed of a red vertical band on the hoist and fly sides and a central white square that is twice the width of the vertical bands. A large eleven-pointed red maple leaf is centered in the white square.',
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/ca.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/ca.svg',
    },
  },
];

describe('Component for Homepage', () => {
  it('should fetch data from API on load', async () => {
    // Arrange
    axios.get.mockResolvedValue({ data: responseData });
    let asFragment;
    // Act
    await act(() => {
      const component = render(
        <BrowserRouter>
          <Provider store={store}>
            <CountriesList />
          </Provider>
          ,
        </BrowserRouter>,
      );
      asFragment = component.asFragment;
    });
    await screen.findByText(responseData[0].name.common);
    // Assert
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText(responseData[0].name.common)).toBeInTheDocument();
  });
});
