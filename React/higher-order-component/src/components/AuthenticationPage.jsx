import React from 'react'
import users from './Users'
import InvalidUserPage from './InvalidUserPage'

function AuthenticationPage(Component) {
    return function (userData) {
        const isValid = users.some(
            user =>
                user.username === userData.username &&
                user.password === userData.password &&
                user.role === userData.role
        )

        if (!isValid) {
            return (
                <InvalidUserPage username={userData.username} onBackToLogin={userData.onLogout} />
            )
        }
        return (
            <Component {...userData} />
        )
    }
}

export default AuthenticationPage