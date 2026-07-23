import React, { Component } from 'react'
import DashBoard from './DashBoard'
import Login from './Login'

export default class TernaryConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      //Comment out bcz we pass the Auth status from App.jsx
    //   this.state = {
    //      isAuth : true
    //   }
    }
  render() {
    return (
    //   (this.state.isAuth) ? <DashBoard /> : <Login />

        (this.props.isAuth) ? <DashBoard user = {this.props.user} /> : <Login />
    )
  }
}
