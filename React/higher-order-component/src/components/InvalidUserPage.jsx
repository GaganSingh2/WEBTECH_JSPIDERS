import React from 'react'

function InvalidUserPage({username, onBackToLogin}) {
    return (
        <div className="auth-error">

            <div className="error-card">

                <div className="error-icon">
                    🔒
                </div>

                <h1>Access Denied</h1>

                <p>
                    Sorry <strong>{username}</strong>, you are not
                    authorized to enter this class.
                </p>

                <p className="error-message">
                    Invalid username, password or role.
                </p>

                <button className="logout-btn" onClick={onBackToLogin}>
                    Back To Login
                </button>
            </div>

        </div>
    )
}

export default InvalidUserPage