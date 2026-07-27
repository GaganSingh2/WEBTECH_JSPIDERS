import React from 'react'
import ComponentFWithPropsDrilling from './ComponentFWithPropsDrilling'
import '../ComponentE.css'

function ComponentEWithPropsDrilling({theme}) {
  return (
    <div className='component-e'>
        <h3>Component E</h3>
        <p>Theme - {theme}</p>
        <ComponentFWithPropsDrilling theme = {theme}/>
    </div>
  )
}

export default ComponentEWithPropsDrilling