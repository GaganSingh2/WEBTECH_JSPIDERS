import React, { Component } from 'react'

export default class ComponentDidMount extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    //it execute only once when component is mount
    componentDidMount(){
        console.log("Component Mounted!!");
    }

    handleIncrement = ()=>{
        this.setState({count: this.state.count+1})
    }
  render() {
   
    return (
      <>
      <h1>Count - {this.state.count}</h1>
      <button onClick={this.handleIncrement}>Increment</button>
      </>
    )
  }
}
