import React from 'react'
import CompoentEWithoutPropDrilling from './CompoentEWithoutPropDrilling'
import '../ComponentC.css'
function CompoentCWithoutPropDrilling() {
  return (
    <div className='component-c'>
        <h2>Component C</h2>
        <CompoentEWithoutPropDrilling />
    </div>
  )
}

export default CompoentCWithoutPropDrilling