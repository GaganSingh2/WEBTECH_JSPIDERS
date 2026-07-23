import React, { Component } from 'react'
import ProductCardUsingIfElse from './ProductCardUsingIfElse'

export default class ProductSwitch extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         status: true
      }
    }

    loadButton = ()=>{
        this.setState({status: false})
    } 

    loadedButton = ()=>{
        this.setState({status: true})
    }
  render() {
    const {status} = this.state;
    const {productInfo} = this.props;
    return (
      <div>
        <button onClick={this.loadButton}>Load</button>
        <button onClick={this.loadedButton}>Loaded</button>
        <ProductCardUsingIfElse 
            productInfo = {this.props.productInfo}
            status = {this.state.status}/>
      </div>
    )
  }
}
