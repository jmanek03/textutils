import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // eslint-disable-next-line no-undef
  const linkElement = screen.getByRole('link', { name:/TextUtils/i });
  expect(linkElement).toBeInTheDocument();
});
