import React from 'react'
import './App.css'

function App() {
 

  return (
    //1)without using jsx to create a tag in React(we can pass directly here content)
      // React.createElement("div",{id:"wrap"},"THis is Wrap box")


    //2)without using jsx to create a tag in React(we can create child tags also)
      // React.createElement("div",{id:"wrap"},React.createElement("h1", null), "Hello I am Heading")

    //1)With using JSX(we can pass directly here content)
    // <div id='wrap'>
    //   This is Wrap Box
    // </div>

    //2)With using JSX(we can create child tags also)
    <div id='wrap'>
      <h1>This is a Heading</h1>
    </div>
  )
}

export default App
