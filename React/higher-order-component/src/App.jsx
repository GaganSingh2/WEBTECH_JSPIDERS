import React from 'react'
import './App.css'
import AuthEntry from './components/AuthEntry'
import Student from './components/Student'
import Trainer from './components/Trainer'
import LoginPage from './components/LoginPage'


const StudentWithAuth = AuthEntry(Student)
const TrainerWithAuth = AuthEntry(Trainer)

function App() {
  return (
    <>
        {/* Higher Order Component----------------------- */}
        {/* <StudentWithAuth username="Gagan" role="Student"/>
        <TrainerWithAuth username="Disha" role="Trainer"/> */}


        <LoginPage />
    </>
  )
}

export default App
