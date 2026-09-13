import React, { Component } from 'react'

export default class ShouldComponentUpdate extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
    
    //it tells component is re-render on not based on the return type
    shouldComponentUpdate(nextProp, nextState){
        if(nextState.count <= 5){
            return true
        }
        return false
    }

    handleIncrement = ()=>{
        this.setState({count: this.state.count+1})
        console.log(this.state.count);
        
    }
    render(){
        return(
            <>
            <h1>Count - {this.state.count}</h1>
            <button onClick={this.handleIncrement}>Increment</button>
        </>
        )
    }
}
