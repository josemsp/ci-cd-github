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
        <button onClick={onDecrease}>Decrease</button>
        <span>counter: {counter}</span>
        <button onClick={onIncrease}>Increase</button>
      </div>
    </div>
  )
}

export default Counter