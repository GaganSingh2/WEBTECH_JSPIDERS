import React, { Component } from 'react'
import CartComponent from './CartComponent'
export default class StateUsingClassBasedComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         qty: 0,
         title: "Teddy Bear"
         
      }
    }

    handleIncQty = ()=>{
        this.setState(this.state.qty < 5 ? {qty: this.state.qty + 1} : {qty: this.state.qty})

    }

    handleDicQty = ()=>{
        this.setState(this.state.qty > 0 ? {qty: this.state.qty - 1} : {qty: this.state.qty})
    }
  render() {
    return (
      <div className='wrapper'>
        <div className='prod'>
            <img className='toy' src="https://static.vecteezy.com/system/resources/thumbnails/035/845/381/small/ai-generated-toys-bears-and-toys-in-the-foreground-free-photo.jpg" alt="" />

            <div className='qty'>
                <button onClick={this.handleDicQty}>-</button>
                <p>{this.state.qty}</p>
                <button onClick={this.handleIncQty}>+</button>
            </div>
        </div>
        
        <CartComponent qty={this.state.qty} title={this.state.title}/>
      </div>
    )
  }
}
