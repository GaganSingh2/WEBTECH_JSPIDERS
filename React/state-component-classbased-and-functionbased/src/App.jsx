import React from 'react'
import './App.css'
import StateUsingClassBasedComponent from './components/StateUsingClassBasedComponent'
import CartComponent from './components/CartComponent'
import LightSwitch from './components/LightSwitch'
import TrafficColor from './components/TrafficColor'
import VolumeControl from './components/VolumeControl'
import DefaultPropsInClassBasedComponent from './components/DefaultPropsInClassBasedComponent'


function App() {
  

  return (
    <>
     <StateUsingClassBasedComponent/>
     <LightSwitch/>
     <TrafficColor/>
     <VolumeControl />

     {/* used default props in class based component */}
     <DefaultPropsInClassBasedComponent />
     <DefaultPropsInClassBasedComponent name="Gagan" />
    </>
  )
}

export default App
