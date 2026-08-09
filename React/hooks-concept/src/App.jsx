import React from 'react'
import './App.css'
import CounterUsingUseState from './components/CounterUsingUseState'
import Cart from './components/Cart'
import CounterUsingUseEffect from './components/CounterUsingUseEffect'
import CounterUsingUseRef from './components/CounterUsingUseRef'
import CounterUsingUseReducer from './components/CounterUsingUseReducer'
import TodoListUsingUseReducer from './components/TodoListUsingUseReducer'

function App() {

  return (
    <>
    {/* useState()---------------- */}
      {/* <CounterUsingUseState /> */}

    {/* Example on useState() to display Card */}
      {/* <Cart /> */}

    {/* useEffect()----------------- */}
      {/* <CounterUsingUseEffect /> */}

    {/* useRef()------------ */}
    <CounterUsingUseRef />

    {/* useReducer---------- */}
    {/* <CounterUsingUseReducer /> */}
    
    {/* Example of useReducer */}
    {/* <TodoListUsingUseReducer /> */}
    </>
  )
}

export default App
