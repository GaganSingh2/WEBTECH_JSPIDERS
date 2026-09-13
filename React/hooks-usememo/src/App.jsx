import React from 'react'
import './App.css'
import CounterWithoutUseMemo from './components/CounterWithoutUseMemo'
import CounterWithUseMemo from './components/CounterWithUseMemo'

function App() {
  

  return (
    <>
      {/* <CounterWithoutUseMemo /> */}
      <CounterWithUseMemo />
    </>
  )
}

export default App
