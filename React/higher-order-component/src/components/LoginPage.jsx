import React, { useState } from 'react'

function LoginPage({onLogin}) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        role: ""
    })

    const handleChange = (e)=>{
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleRoleChange = (e)=>{
        const {name, checked} = e.target
        setFormData({
            ...formData,
            role: checked ? name: ""
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(formData.username === "" || formData.password === "" || formData.role === ""){
            alert("Please Fill all the fields")
            return
        }
        //send the data filled by the user
        onLogin(formData)
    }
    return (
        <div className='login-container'>
            <form action="" className='login-form' onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className='form-group'>
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder='Enter username'
                        name="" id=""
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className='form-group'>
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder='Enter Password'
                        name="" id=""
                        value={password}
                        onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className="role-section">
                    <label>Select Role</label>
                    <div className="role-options">
                        <label>
                            <input
                                type="checkbox"
                                name="student"
                                id=""
                                checked = {role.student}
                                onChange={handleRoleChange}
                            />
                            Student
                        </label>

                         <label>
                            <input
                                type="checkbox"
                                name="trainer"
                                id=""
                                checked = {role.trainer}
                                onChange={handleRoleChange}
                            />
                            Trainer
                        </label>
                    </div>
                </div>

                <button type='submit'>
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginPage