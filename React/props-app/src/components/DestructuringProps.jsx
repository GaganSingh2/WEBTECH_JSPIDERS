import React from 'react'

function DestructuringProps({empInfo}) {
    const {name, salary} = empInfo
  return (
    <div>
        <h1>Name: {name}</h1>
        <h3>Salary: {salary}</h3>
    </div>
  )
}

export default DestructuringProps