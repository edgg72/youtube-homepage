import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import SearchInput from './SearchInput';
import App from '../../App'

test('Search input elements exist', () => {
  render(<SearchInput />);
  const input = screen.getByPlaceholderText("Search");
  expect(input).toBeInTheDocument();
});

test('User can type inside the textbox', () => {
  render(<App />);
  const input = screen.getByPlaceholderText("Search");
  userEvent.type(input, 'Belphegor');
  expect(input.value).toBe('Belphegor')
})
