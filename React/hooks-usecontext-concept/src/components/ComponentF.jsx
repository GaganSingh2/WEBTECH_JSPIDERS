import React,{useContext} from 'react'

//import Context Object created in App.jsx
import { MyContext } from '../App'

function ComponentF() {
    // use useContext() to consume the current value
    const userData = useContext(MyContext)
  return (
    <div>
        <h3>Name: {userData.name}</h3>
        <p>Role: {userData.role}</p>
    </div>
  )
}

export default ComponentF