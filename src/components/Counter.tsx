import { useState } from 'react'
import './Counter.css'

const Counter: React.FC = () => {
  const [counter, setCounter] = useState(0);

  const onIncrease = () => setCounter(prev => prev + 1)
  const onDecrease = () => setCounter(prev => prev - 1)

  return (
    <div className='counter-container'>
      <h3>Counter component</h3>
      <div className='counter-display'>
        <button data-cy="btn-decrease" onClick={onDecrease}>Decrease</button>
        <span data-cy="counter">counter: {counter}</span>
        <button data-cy="btn-increase" onClick={onIncrease}>Increase</button>
      </div>
    </div>
  )
}

export default Counter