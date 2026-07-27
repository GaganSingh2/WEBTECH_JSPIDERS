import React from 'react'
import { ThemeContext } from '../App'
import '../ComponentF.css'
function CompoentFWithoutPropDrilling() {
  return (
    <div className='component-f'>
        <ThemeContext.Consumer>
            {(theme)=>{
                return (
                    <div>
                        <h1>The theme coming from App</h1>
                        <h4>Component F</h4>
                    </div>
                )
            }}
        </ThemeContext.Consumer>
    </div>
  )
}

export default CompoentFWithoutPropDrilling