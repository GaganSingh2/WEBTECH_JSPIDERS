import React, { Component } from 'react'
import LightComponent from './LightComponent'

export default class LightSwitch extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         status: true
      }
    }

    handleSwitch = ()=>{
        this.setState({status: !this.state.status})
    }
  render() {
    return (
      <div>
        <button onClick={this.handleSwitch}>Click</button>
        <LightComponent status={this.state.status}/>
      </div>
    )
  }
}

/**
 * Q)The Light Switch (Boolean State)
 * Build a component with a single button when clicked, it should toggle the state between
 * true and false.
 * THe screen should display "The Light is ON" or "THe Light is OFF" depending on the state.
 */