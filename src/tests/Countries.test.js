import React from 'react';
import axios from 'axios';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Countries from '../components/Countries';
import sampleResponseData from './sampleResponseData';

jest.mock('axios');

describe('Countries Component', () => {
  it('should render a list of countries', async () => {
    // Arrange
    axios.get.mockResolvedValue({ data: sampleResponseData });

    // Act
    let asFragment;
    await act(async () => {
      const component = render(
        <BrowserRouter>
          <Provider store={store}>
            <Countries countries={sampleResponseData} />
          </Provider>
        </BrowserRouter>,
      );
      asFragment = component.asFragment;
    });

    // Assert
    expect(asFragment()).toMatchSnapshot();

    // eslint-disable-next-line object-curly-newline
    const { name, area, capital, population } = sampleResponseData[0];

    // Check if extracted data is displayed
    expect(screen.getByText(name.common)).toBeInTheDocument();
    expect(screen.getByText(`${area} km²`)).toBeInTheDocument();
    expect(screen.getByText(capital)).toBeInTheDocument();
    expect(screen.getByText(population)).toBeInTheDocument();
  });
});
