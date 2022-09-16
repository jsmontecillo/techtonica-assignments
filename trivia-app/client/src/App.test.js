import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<App />);
})

test('renders title in app', () => {
  render(<App />);
  const linkElement = screen.getByText(/trivia quiz/i);
  expect(linkElement).toBeInTheDocument();
});
