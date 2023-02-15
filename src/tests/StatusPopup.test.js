import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StatusPopup from '../components/StatusPopup';

describe('Popup Window', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<StatusPopup />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should display title and message', async () => {
    // Arrange
    const title = 'Hello';
    const message = 'Welcome to my app!';
    // Act
    render(<StatusPopup title={title} message={message} />);
    await screen.findByRole('heading');
    await screen.findByText(message);
    // Assert
    expect(screen.getByRole('heading')).toHaveTextContent(title);
    expect(screen.getByText(message)).toBeInTheDocument();
  });
});
