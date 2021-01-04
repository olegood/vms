import {render, screen} from '@testing-library/react';
import App from './App';

test('renders copyright text', () => {
  render(<App/>);
  const version = screen.getByText(/copyright/i);
  expect(version).toBeInTheDocument();
});
