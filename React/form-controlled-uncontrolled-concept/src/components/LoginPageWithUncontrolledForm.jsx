import React, { useRef } from 'react'

function LoginPageWithUncontrolledForm() {
    const usernameRef = useRef();
    const passwordRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();

        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        console.log("Username: ", username);
        console.log("Password: ", password);
    }
    return (
        <div className='login'>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="" id="" ref={usernameRef} placeholder='Enter Your name' />

                <input type="password" name="" id="" ref={passwordRef} placeholder='Enter Your password' />

                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default LoginPageWithUncontrolledForm