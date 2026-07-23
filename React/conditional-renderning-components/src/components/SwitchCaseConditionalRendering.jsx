import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
export default class SwitchCaseConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         status: "waiting"
      }
    }

    handleOrderAccpeted = ()=>{
        this.setState({status: "accept"})
    }

    handleOrderPrepare = ()=>{
        this.setState({status: "prepare"})
    }

    handleOrderDispatch = ()=>{
        this.setState({status: "dispatch"})
    }

    handleOrderReject = ()=>{
        this.setState({status: "reject"})
    }
  render() {
    let msg = ""
    switch (this.state.status) {
        case "accept":
            msg = "Your Order Is Accpeted..."
            break;
        case "prepare":
            msg = "Your Order Is Preparing..."
            break;
        case "dispatch":
            msg = "Your Order Is Dispatching..."
            break;
        case "reject":
            msg = "Your Order Is Rejected..."
            break;
        default:
            msg = "Order Your Fav Food.."
            break;
    }
    return (
      <div className='food'>
        <h1>Order Status -{msg || "Waiting"}</h1>
        <div className='btns'>
            <Button variant='success' onClick={this.handleOrderAccpeted}>Accepted</Button>
            <Button variant='primary' onClick={this.handleOrderPrepare}>Prepare</Button>
            <Button variant='info' onClick={this.handleOrderDispatch}>Dispatch</Button>
            <Button variant='danger' onClick={this.handleOrderReject}>Reject</Button>
        </div>
      </div>
    )
  }
}
