
import React, { Component } from 'react'
import VolumeComponent from "./VolumeComponent";

export default class VolumeControl extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         value: 5
      }
    }

    handleIncValue = ()=>{
        this.setState(this.state.value < 10 ? {value: this.state.value + 1} : {value: this.state.value})
    }

    handleDecValue = ()=>{
        this.setState(this.state.value > 5 ? {value: this.state.value - 1}: {value: this.state.value})
    }
  render() {
    return (
      <div>
        <div className='value'>
            <button onClick={this.handleDecValue}>Volume Down</button>
            <p>{this.state.qty}</p>
            <button onClick={this.handleIncValue}>Volume Up</button>
        </div>
        <VolumeComponent value={this.state.value} />
      </div>
    )
  }
}
