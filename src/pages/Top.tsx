import React from 'react'
import Styles from './Top.module.scss'
import TestComponent from '../components/TestComponent'

const Top: React.FC = () => {
  return (
    <div>
      <h2 className={Styles.text}>Hello React!</h2>
      <TestComponent />
    </div>
  )
}

export default Top
