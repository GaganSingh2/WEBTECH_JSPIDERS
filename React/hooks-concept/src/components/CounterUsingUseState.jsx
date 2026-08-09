import React, { useState } from 'react'
import RedBulb from '../assets/images/RedBulb.webp'
import WhiteBulb from '../assets/images/WhiteBulb.webp'

const initalVal = 0;
function CounterUsingUseState() {
    const [count, setCount] = useState(initalVal)
    const [status, setStatus] = useState("Submit")
    const [bulb, setBulb] = useState(false)
    const [skill, setSkill] = useState(["Java","SQL"])
    const[name, setName] = useState("")
    const[user, setUser] = useState({name:"Gagan",age:22})

    const handleIncrement = () => {
        setCount(count < 10 ? count + 1 : count = 10)
    }

    const handleDecrement = () => {
        setCount(count === 0 ? 0 : count - 1)
    }

    const handleSubmit = () => {
        // if we want to set Submit to Submitted
        // setName("Submitted")

        // if we want to change the Submit to Submitted after 2sec
        setStatus("Submitting..");
        setTimeout(() => {
            setStatus("Submitted")
        }, 2000);

        //if we want to again change the Submitted to Submit after 2sec
        setTimeout(() => {
            setStatus("Submit")
        }, 4000)
    }

    const handleBulb = () => {
        setBulb(!bulb)
    }

    const handleName = (e)=>{
        setName(e.target.value)
    }

    const handleUser = ()=>{
        setUser({...user, age: 24})
    }

    // ... (spread Operator) it is used to store previous data and then merge the provide data and original array is remain same.
    const handleSKill = ()=>{
        setSkill([...skill,"React","DevOps"])
    }
    return (
        <div>
            <h1>Counter - {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <hr />
            <button onClick={handleSubmit}>{name}</button>
            <hr />
            <h1>Bulb - {bulb ? "ON" : "OFF"}</h1>
            <img src={bulb ? RedBulb : WhiteBulb} alt="" />
            <button onClick={handleBulb}>{bulb ? "ON" : "OFF"}</button>
            <hr />
            <h1>My Skills - {`${skill}`}</h1>
            <button onClick={handleSKill}>Update Skill</button>

            <hr />
            <h1>Hello {name === "" ? "Stranger" : name}</h1>
            <input type= "text" value={name} onChange={handleName} placeholder='Enter your name'/>

            <hr />
            <h1>User Details Before Updating</h1>
            <h3>Name: {user.name}</h3>
            <h5>Age: {user.age}</h5>

            <button onClick={handleUser}>Update User</button>
        </div>
    )
}

export default CounterUsingUseState