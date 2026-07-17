import React from 'react'

function MotorCycleCard({motorCycleDetails}) {

    const {modelName, engineCapacity, isAppConnected} = motorCycleDetails;
  return (
    <div className='motorcycle-card'>
        <h1>Model Name: {modelName}</h1>
        <p>
            <strong>Engine: </strong>{engineCapacity}
        </p>
        
        <p>
            <strong>Status: </strong>
            <span>{isAppConnected? "Connected to Mobile App": "Offline"}</span>
        </p>
    </div>
  )
}

export default MotorCycleCard

{/*
    The Requirements and Question:
    1)Create a child component called "MotorCycleCard"
    2)The component should accept three props:
        a)modelName(String) 
        b)engineCapacity (String, eg: 350cc)
        c)isAppConnected (boolean)
    3)Inside MotorCycleCard, display the modelName, engineCapacity using appropriate HTML tags
    4)Use the isAppConnected boolean prop to conditionally display a status message, if true, display a message "Status: Connected To Mobile App", if false, display "Status: Offline"
    5)In your main App component, render at least two MotorCycleCard component with different data. make sure both MotorCycleCard have different isAppConnected i.e 1st have true and 2nd have false.*/}