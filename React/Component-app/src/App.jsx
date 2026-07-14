import React from 'react'
import './App.css'

import FirstFunc from './Component/FunctionComponent'
//we have to import here like that bcz we export other function using export
import { SecFunc } from './Component/FunctionComponent'


function App() {
  
  return (
    // <h1>Hello</h1>
    <>
      <FirstFunc/>
      <SecFunc/>
   
    </>
   
  )
}

export default App
