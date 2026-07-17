
import './App.css'
import DefaultProps from './components/DefaultProps'
import DestructuringProps from './components/DestructuringProps'
import ProfileCard from './components/ProfileCard'

const userInfo = {
    img: "https://media.gettyimages.com/id/2189852180/photo/brisbane-australia-virat-kohli-of-india-leaves-the-field-as-rain-causes-delays-during-day-one.jpg?s=612x612&w=0&k=20&c=XMk3zBfsgWV5DOs_OWG23DCVxjWTgNqsuHClyCyayxo=",
    name: "Virat Kohli",
    role: "Captain",
    tag: "GOAT Of Cricket!",
    info: "Virat Kohli concluded his Test career in May 2025 after playing 123 matches and scoring 9,230 runs with 30 centuries.  Renowned for his aggressive captaincy and dominance in overseas conditions, he is regarded as one of the format's greatest modern-day batters."
  
}

const empInfo = {
  name: "Gagan",
  salary: 20000
}
function App() {
  

  return (
   
    <>
     {/* Called Default Props */}
      {/* <DefaultProps/> */}

      {/* Destructuring Props---- */}
      <DestructuringProps empInfo={empInfo}/>


      {/* Make Profile Card using Props and Destructuring */}
      <ProfileCard userInfo={userInfo}/>
    </>
  )
}

export default App
