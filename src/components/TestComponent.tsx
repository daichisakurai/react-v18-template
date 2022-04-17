import React, { useState } from 'react'

const TestComponent: React.FC = () => {
  const [count, setCount] = useState(0)

  const countUp = () => {
    setCount(count + 1)
  }

  const countDown = () => {
    setCount(count - 1)
  }

  const countReset = () => {
    setCount(0)
  }
  return (
    <div>
      <button onClick={countUp}>countUp</button>
      <button onClick={countDown}>countDown</button>
      <button onClick={countReset}>countReset</button>
      <div>conut: {count}</div>
    </div>
  )
}

export default TestComponent
