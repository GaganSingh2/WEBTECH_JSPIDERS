import React from 'react'

function TrafficCompnent({color}) {
  return (
    <div>
        <h1>Color Name: {color}</h1>
       <div className="box" style={{ backgroundColor: color }}>
    </div>
    </div>
   
  )
}

export default TrafficCompnent