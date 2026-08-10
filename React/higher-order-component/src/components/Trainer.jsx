import React from 'react'

const time = new Date()
function Trainer(props) {
  return (
    <div>
        <hr />
        <h1>Hello {props.username}, You Are A {props.role}, Logged in Successfully!!</h1>
        <p>
            Login: 0{time.getHours()-12}:{time.getMinutes()}:{time.getSeconds()}
        </p>
    </div>
  )
}

export default Trainer