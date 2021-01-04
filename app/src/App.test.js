import {render, screen} from '@testing-library/react';
import App from './App';

test('renders application version', () => {
    render(<App/>);
    const linkElement = screen.getByText(/version/i);
    expect(linkElement).toBeInTheDocument();
});
