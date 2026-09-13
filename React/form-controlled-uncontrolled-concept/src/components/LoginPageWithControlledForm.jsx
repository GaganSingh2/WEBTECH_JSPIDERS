import React, { useState } from 'react'

function LoginPageWithControlledForm() {

    const [user, setUser] = useState({
        username: "",
        password: "",
        email: ""
    })


    const handleUserInput = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleForm = (e) => {
        e.preventDefault()

        const users = JSON.parse(localStorage.getItem("users")) || []

        const updatedUser = [...users, user]
        console.log(user);

        localStorage.setItem("users", JSON.stringify(updatedUser))
        alert("User Registered Successfully!")

        setUser({
            username: "",
            password: "",
            email: ""
        })
    }
    return (
        <div className='login'>
            <form action="" onSubmit={handleForm}>
                <h1>Login</h1>
                <input
                    type="text"
                    name='username'
                    value={user.username}
                    onChange={handleUserInput}
                    placeholder='Enter Username'
                    required />


                <input
                    type="password"
                    name='password'
                    value={user.password}
                    onChange={handleUserInput}
                    placeholder='Enter Password'
                    required />

                <input
                    type="email"
                    name='email'
                    value={user.email}
                    onChange={handleUserInput}
                    placeholder='Enter Email'
                    required />

                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginPageWithControlledForm