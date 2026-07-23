import React from 'react'

function LightComponent({status}) {
  return (
    <div>
        <h1>{status? "Light ON": "Light Off"}</h1>
    </div>
  )
}

export default LightComponent