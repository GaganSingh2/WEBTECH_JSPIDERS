import React, { useState } from 'react'

function LoginPage() {
    function login(){
        const [user, setUser] = useState({
            username = "",
            password = "",
            email = ""
        })
    }

    const handleUserInput = (e) => {
        const {name, value} = e.target
        setUser({...user, [name]: value})
    }

    const handleForm = (e) => {
        e.preventDefault()
        
        const user = {
            username,
            password
        }

        const users = JSON.parse(localStorage.getItem("users")) || []
        user.username = username
        user.password = password

        const updatedUser = [...users, user]
        console.log(user);
        localStorage.setItem("users", JSON.stringify(updatedUser))
        alert("User Registered Successfully!")

        setUserName("")
        setPassword("")
    }
    return (
        <div className='login'>
            <form action="" onSubmit={handleForm}>
                <h1>Login</h1>
                <input type="text" value={username} onChange={handleUsername} placeholder='Enter Username' required />
                <input type="password" value={password} onChange={handleUserpassword} placeholder='Enter Password' required />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginPage