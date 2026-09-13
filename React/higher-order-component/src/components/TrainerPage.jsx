import React, { useEffect, useState } from 'react'

function TrainerPage({username, role, onLogout}) {
    const[loginTime, setLoginTime] = useState("")

    useEffect(()=>{
        const time = new Date().toLocaleString();
        setLoginTime(time)
    },[])

  return (
    <div className="dashboard-container">

            <div className="dashboard-card">

                <div className="profile-icon">
                    👨‍🏫
                </div>

                <h1>Welcome, {username}!</h1>

                <p className="welcome-text">
                    You have successfully logged in to the Trainer Portal.
                </p>

                <div className="user-info">

                    <div className="info-item">
                        <span className="info-label">
                            Name
                        </span>

                        <span className="info-value">
                            {username}
                        </span>
                    </div>

                    <div className="info-item">
                        <span className="info-label">
                            Role
                        </span>

                        <span className="role-badge trainer">
                            {role}
                        </span>
                    </div>

                    <div className="info-item">
                        <span className="info-label">
                            Login Time
                        </span>

                        <span className="info-value">
                            {loginTime}
                        </span>
                    </div>

                    <div className="info-item">
                        <span className="info-label">
                            Status
                        </span>

                        <span className="status-badge">
                            ● Active
                        </span>
                    </div>

                </div>

                <div className="dashboard-message">

                    <h3>Trainer Information</h3>

                    <p>
                        You can manage your classes, view student
                        information, upload assignments and track
                        student performance from this portal.
                    </p>

                </div>

                <button className="logout-btn" onClick={onLogout}>
                    Logout
                </button>

            </div>

        </div>
  )
}

export default TrainerPage