import { render, screen } from '@testing-library/react';
import App from './App';

test('renders eventonica in app', () => {
  render(<App />);
  const linkElement = screen.getByText(/eventonica/i);
  expect(linkElement).toBeInTheDocument();
});
