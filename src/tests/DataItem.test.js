import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DataItem from '../components/DataItem';

describe('Component for Displaying Data', () => {
  it('should render correctly', () => {
    // Arrange
    const title = 'Area';
    const data = 9984670;
    // Act
    const { asFragment } = render(<DataItem title={title} data={data} />);
    // Assert
    expect(asFragment()).toMatchSnapshot();
  });
  it('should display data correctly', async () => {
    // Arrange
    const title = 'Area';
    const data = 9984670;
    // Act
    render(<DataItem title={title} data={data} />);
    await screen.findByRole('heading');
    await screen.findByText(data);
    // Assert
    expect(screen.getByRole('heading')).toHaveTextContent(title);
    expect(screen.getByText(data)).toBeInTheDocument();
  });
});
