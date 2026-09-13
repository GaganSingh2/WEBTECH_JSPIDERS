import React, { useState } from 'react'
import './App.css'
import AuthEntry from './components/AuthEntry'
import Student from './components/Student'
import Trainer from './components/Trainer'
import LoginPage from './components/LoginPage'
import AuthenticationPage from './components/AuthenticationPage'
import StudentPage from './components/StudentPage'
import TrainerPage from './components/TrainerPage'


const StudentWithAuth = AuthEntry(Student)
const TrainerWithAuth = AuthEntry(Trainer)


// const StudentWithAuth = AuthenticationPage(StudentPage)
// const TrainerWithAuth = AuthenticationPage(TrainerPage)

function App() {
  // const [user, setUser] = useState(null)

  // //Login User
  // const handleLogin = (userData) => {
  //   console.log("User Data: ", userData);
  //   setUser(userData)
  // }

  // //Logout User / Back to Login
  // const handleLogout = ()=>{
  //   setUser(null)
  // }
  
  // //user has not logged in yet
  // if(user === null){
  //   return(
  //     <LoginPage onLogin={handleLogin} />
  //   )
  // }

  // //user selected role as Student
  // if (user.role === "Student") {
  //   return(
  //     <StudentWithAuth 
  //       username = {user.username}
  //       password = {user.password}
  //       role = {user.role}
  //       onLogout = {handleLogout}
  //     />
  //   )
  // }

  // //user selected role as Trainer
  // if (user.role === "Trainer") {
  //   return(
  //     <TrainerWithAuth 
  //       username = {user.username}
  //       password = {user.password}
  //       role = {user.role}
  //       onLogout = {handleLogout}
  //     />
  //   )
  // }

  // return null



  return (
    <>
      {/* Higher Order Component----------------------- */}
      <StudentWithAuth username="Gagan" role="Student"/>
        <TrainerWithAuth username="Disha" role="Trainer"/>
    </>
  )
}

export default App
