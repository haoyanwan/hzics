import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app without crashing', () => {
  render(<App />);
  // Basic smoke test - just ensure the app renders without errors
  const appElement = screen.getByRole('banner'); // header element
  expect(appElement).toBeInTheDocument();
});
