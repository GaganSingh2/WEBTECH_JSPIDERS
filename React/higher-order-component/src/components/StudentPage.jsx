import React, { useEffect, useState } from 'react'
import LoginPage from './LoginPage';

function StudentPage({username, role, onLogout}) {
    const[loginTime, setLoginTime] = useState("")
    useEffect(()=>{
        const time = new Date().toLocaleString()
        setLoginTime(time);
    }, [])


  return (
    <div className="dashboard-container">

            <div className="dashboard-card">

                <div className="profile-icon">
                    🎓
                </div>

                <h1>Welcome, {username}!</h1>

                <p className="welcome-text">
                    You have successfully logged in to the Student Portal.
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

                        <span className="role-badge student">
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

                    <h3>Student Information</h3>

                    <p>
                        You can attend your classes, check your
                        schedule, view assignments and track your
                        academic progress from this portal.
                    </p>

                </div>

                <button className="logout-btn" onClick={onLogout}>
                    Logout
                </button>

            </div>

        </div>
  )
}

export default StudentPage