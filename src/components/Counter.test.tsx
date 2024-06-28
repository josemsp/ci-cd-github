import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('<Counter />', () => {
  beforeEach(() => {
    render(<Counter />);
  })

  test('initial state', () => {
    expect(screen.getByText('counter: 0')).toBeInTheDocument();
  })

  test('Increment', async () => {
    const incrementBtn = screen.getByRole('button', { name: 'Increase' });
    // await act(async ()=> incrementBtn.click());
    fireEvent.click(incrementBtn)
    expect(screen.getByText('counter: 1')).toBeInTheDocument();
  })

  test('Decrement', async () => {
    const decrementBtn = screen.getByRole('button', { name: 'Decrease' });
    // await act(async ()=> decrementBtn.click());
    fireEvent.click(decrementBtn)
    expect(screen.getByText('counter: -1')).toBeInTheDocument();
  })
})