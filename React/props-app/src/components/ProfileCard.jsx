import React from 'react'

function ProfileCard({userInfo}) {
    //this is called Destructuring
    const {img, name, role, tag, info} = userInfo

    
  return (
    <div className='profile-card'>
            <img src={img} alt="Virat Kohil's" />
            <div className='content'>
                <h1>{name}</h1>
                <h2>{role}</h2>

                <span className="badge">Indian Cricket Legend</span>

                <h3>{tag}</h3>
                <p>{info}</p>
            </div>
        </div>
  )
}

export default ProfileCard