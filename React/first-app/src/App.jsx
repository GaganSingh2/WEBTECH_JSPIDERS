import React from 'react'

import './App.css'

function App() {

  let user = "Jspider"
  return (
    <div id='wrap'>
      {/*Attribute Value as string literals */}
      <h1 className='primary-heading'>This is h1 in Wrapper Box</h1>

    {/*Attribute value as js expresiion */}
      <h2 style={{ color: "red" }}>My name is {user}</h2>

    {/*Without Adding JS expression into JSX */}
      <p style={myStyle}>Addition of 10 and 5: 10 + 5</p>

    {/*After Adding JS expression into JSX */}
      <p style={myStyle}>Addition of 10 and 5: {10 + 5}</p>
    </div>
  )
}

export default App
