import React, { Component } from 'react'

export default class ComponentDidUpdate extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
    // shouldComponentUpdate(nextProp, nextState){
    //     if(nextState.count <= 5){
    //         return true
    //     }
    //     return false
    // }
    
    //it will execute every time when the props/state is changed
    componentDidUpdate(prevProps, prevState){
        console.log("Previous Count: ",prevState.count);
        console.log("Current Count: ",this.state.count);
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
