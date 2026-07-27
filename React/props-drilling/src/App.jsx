import React from 'react'
import './App.css'
// import ComponentCWithPropsDrilling from './components/ComponentCWithPropsDrilling'
import CompoentCWithoutPropDrilling from './components/CompoentCWithoutPropDrilling'

const theme = "pink"

// Overcome the Props Drilling
export const ThemeContext = React.createContext()


function App() {
  return (
    <div className='app'>
      <h1>App Component</h1>

      {/* Before handling the Props Drilling------- */}
      {/* <p>Theme - {theme}</p> */}
      {/* <ComponentCWithPropsDrilling theme = {theme} /> */}

      {/* After handling the Props Drilling using React Context------- */}
      <ThemeContext.Provider value={theme}>
        <CompoentCWithoutPropDrilling />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
