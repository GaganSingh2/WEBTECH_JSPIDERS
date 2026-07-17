import React from 'react'
import './App.css'
import MotorCycleCard from './components/MotorCycleCard'
import ArtWorking from './components/ArtWorking'

const motorCycleDetails1 = {
  modelName: "Royal Enfield",
  engineCapacity: "350cc",
  isAppConnected: true
}


const motorCycleDetails2 = {
  modelName: "Himalyan",
  engineCapacity: "440cc",
  isAppConnected: false
}

const artWorkDetaisl1 = {
  title: "Greatest Of All Time",
  price: 1245,
  isOriginal: false,
  medium: "Oil on Canvas"
}

const artWorkDetaisl2 = {
  title: "Virat Kohli",
  price: 4999,
  isOriginal: true,
  medium: "WaterColor"
}

const artWorkDetaisl3 = {
  title: "Rohit Sharma",
  price: 4599,
  isOriginal: true,
  medium: "WaterColor"
}

function App() {
  

  return (
    <>
    {/* Display MotorCycleCard Component */}
      {/* <MotorCycleCard motorCycleDetails = {motorCycleDetails1}/>
      <MotorCycleCard motorCycleDetails ={motorCycleDetails2}/> */}

        {/* Display ArtWorkCard Component */}
      <ArtWorking artWorkDetails = {artWorkDetaisl1}/>
      <ArtWorking artWorkDetails = {artWorkDetaisl2}/>
      <ArtWorking artWorkDetails = {artWorkDetaisl3}/>
    </>
  )
}

export default App
