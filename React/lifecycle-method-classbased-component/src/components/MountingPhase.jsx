import React, { Component } from 'react'

export default class MountingPhase extends Component {
    constructor(props){
        super(props)
        console.log("Constructor called");   
    }

    componentDidMount(){
        console.log("Component added to DOM");
        
    }
  render() {
    console.log("Render called");
    
    return (
      <div>Mounting Phase</div>
    )
  }
}

// Constructor called
//Render Called
//Component added to DOM