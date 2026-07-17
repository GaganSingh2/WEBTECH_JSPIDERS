import React from 'react'

//Default Props if i don't send any data from App.jsx so this value will apply.
function DefaultProps({user="Stranger", message="Have a bad day"}) {
  return (
    <div>
        <h1>Hello {user}, {message}</h1>
        <p>Welcome To Home Page</p>
    </div>
  )
}

export default DefaultProps