import React from 'react'
import '../ComponentF.css'

function ComponentFWithPropsDrilling({theme}) {
  return (
    <div className='component-f'>
        <h4>Component F</h4>
        <p>Theme - {theme}</p>
    </div>
  )
}

export default ComponentFWithPropsDrilling