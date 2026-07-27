import React from 'react'
import ComponentEWithPropsDrilling from './ComponentEWithPropsDrilling'
import '../ComponentC.css'

function ComponentCWithPropsDrilling({theme}) {
  return (
    <div className='component-c'>
        <h2>Component C</h2>
        <p>Theme - {theme}</p>
        <ComponentEWithPropsDrilling theme = {theme}/>
    </div>
  )
}

export default ComponentCWithPropsDrilling