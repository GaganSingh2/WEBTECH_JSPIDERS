import React from 'react'
import './App.css'

import AllProducts from './components/AllProducts'
import Fruits from './components/Fruits'
import Home from './components/Home'
import Navbar from './components/Navbar'
import IceCreame from './components/IceCream'
import { Routes, Route } from "react-router"
function App() {
 

  return (
    <>
      {/* After using Routes it will work based on the condition or url */}
      <Navbar />
      <Routes>
        {/* if is render every time when we start the application */}
        <Route path="/" element={<Home />} />

        {/* if we pass http://localhost:5173/allproduct so this component will render */}
        <Route path="/allproduct" element={<AllProducts />} />

        {/* if we pass http://localhost:5173/fruit so this component will render */}
        <Route path="/fruit" element={<Fruits />} />

        {/* if we pass http://localhost:5173/icecreame so this component will render */}
        <Route path="/icecreame" element={<IceCreame />} />
      </Routes>
    </>
  )
}

export default App
