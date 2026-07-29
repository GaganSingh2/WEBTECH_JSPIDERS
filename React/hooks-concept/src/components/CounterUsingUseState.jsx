import React, { useState } from 'react'
import RedBulb from '../assets/images/RedBulb.webp'
import WhiteBulb from '../assets/images/WhiteBulb.webp'

const initalVal = 0;
function CounterUsingUseState() {
    const [count, setCount] = useState(initalVal)
    const [name, setName] = useState("Submit")
    const [bulb, setBulb] = useState(false)
    const [skill, setSkill] = useState(["Java","SQL"])

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
        setName("Submitting..");
        setTimeout(() => {
            setName("Submitted")
        }, 2000);

        //if we want to again change the Submitted to Submit after 2sec
        setTimeout(() => {
            setName("Submit")
        }, 4000)
    }

    const handleBulb = () => {
        setBulb(!bulb)
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
        </div>
    )
}

export default CounterUsingUseState