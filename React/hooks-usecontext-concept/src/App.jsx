import React from 'react'
import './App.css'
import ComponentC from './components/ComponentC'

//Create Context Object
export const MyContext = React.createContext();

const data = {
  name:"Gagan",
  pass: "Gagan@18",
  role: "admin"
}
function App() {
  return (
    <>
      {/* Provide the Data */}
      <MyContext.Provider value={data}>
        <ComponentC />
      </MyContext.Provider>
    </>
  )
}

export default App
