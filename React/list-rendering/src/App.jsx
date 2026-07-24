import React from 'react'
import './App.css'
import Student from './components/Student'
import Products from './components/Products'
import IndianState from './components/IndianState'
import IndianUnionTerritories from './components/IndianUnionTerritories'
import DisplayItemCategory from './components/DisplayItemCategory'
import StudentDetails from './components/StudentDetails'

function App() {
  

  return (
    <>
      {/* without using Key */}
      {/* <Student /> */}
      
      {/* After using key----- */}
      <StudentDetails />

      {/* Rendering the Product Details */}
      {/* <Products /> */}

      {/* Rendering the Indian State */}
      {/* <IndianState /> */}

      {/* Rendering the Indian Union Territories */}
      {/* <IndianUnionTerritories /> */}

      {/* <DisplayItemCategory /> */}
    </>
  )
}

export default App
