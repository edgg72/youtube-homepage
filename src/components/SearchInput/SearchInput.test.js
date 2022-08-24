import { render, screen } from '@testing-library/react';
import SearchInput from './SearchInput'

test('Search input elements exist', () => {
  render(<SearchInput />);
  const input = screen.getByPlaceholderText("Search");
  expect(input).toBeInTheDocument();
});
