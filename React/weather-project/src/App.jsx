import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Weather from './components/Weather'
import Home from './components/Home'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/weather" element={<Weather/>} />
      </Routes>
     
    </>
  )
}

export default App
