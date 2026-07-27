import React from 'react'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './components/About'
import { Routes, Route } from "react-router"
function App() {


  return (
    <>
      {/* we render all the Component on the UI */}
      {/* <Home />
      <About />
      <Login />
      <Footer /> */}

      {/* After using Routes it will work based on the condition or url */}
      <Navbar />
      <Routes>
        {/* if is render every time when we start the application */}
        <Route path="/" element={<Home />} />

        {/* if we pass http://localhost:5173/about so this component will render */}
        <Route path="/about" element={<About />} />

        {/* if we pass http://localhost:5173/login so this component will render */}
        <Route path="/login" element={<Login />} />

        {/* if we pass http://localhost:5173/footer so this component will render */}
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </>
  )
}

export default App
