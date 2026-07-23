import React from 'react'
import {Button} from 'react-bootstrap'

function Login() {
  return (
    <div className="login-container">
        <form action="" className="login-form">
            <h2>Login</h2>
            <input type="text" placeholder='Enter Your Email' />
            <input type="password" name="" id="" placeholder='Enter Your Password' />

            <Button type='submit' variant='primary'>Login</Button>
        </form>
    </div>
  )
}

export default Login