import React from 'react'
import CompoentFWithoutPropDrilling from './CompoentFWithoutPropDrilling'
import '../ComponentE.css'
function CompoentEWithoutPropDrilling() {
  return (
    <div className='component-e'>
        <h3>Component D</h3>
        <CompoentFWithoutPropDrilling />
    </div>
  )
}

export default CompoentEWithoutPropDrilling