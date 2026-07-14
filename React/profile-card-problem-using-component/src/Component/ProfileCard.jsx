import React from 'react'

const userInfo = {
    img: "https://media.gettyimages.com/id/2189852180/photo/brisbane-australia-virat-kohli-of-india-leaves-the-field-as-rain-causes-delays-during-day-one.jpg?s=612x612&w=0&k=20&c=XMk3zBfsgWV5DOs_OWG23DCVxjWTgNqsuHClyCyayxo=",
    name: "Virat Kohli",
    role: "Captain",
    tag: "GOAT Of Cricket!",
    info: "Virat Kohli concluded his Test career in May 2025 after playing 123 matches and scoring 9,230 runs with 30 centuries.  Renowned for his aggressive captaincy and dominance in overseas conditions, he is regarded as one of the format's greatest modern-day batters."
    

}
function ProfileCard() {
    return (
        
        <div className='profile-card'>
            <img src={userInfo.img} alt="Virat Kohil's" />
            <div className='content'>
                <h1>{userInfo.name}</h1>
                <h2>{userInfo.role}</h2>

                <span className="badge">Indian Cricket Legend</span>

                <h3>{userInfo.tag}</h3>
                <p>{userInfo.info}</p>
            </div>
        </div>
    )
}

export default ProfileCard