import React from 'react'

function Student(props) {
  return (
    <div>
        <h1>Hello {props.username}, You Are A {props.role}, You Can Enter In Class!!!</h1>
    </div>
  )
}

export default Student