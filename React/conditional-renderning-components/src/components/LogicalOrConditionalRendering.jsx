import React, { Component } from 'react'

export default class LogicalOrConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isAuth: true
      }
    }
  render() {
    return (
      
      <h1>Hello {this.props.user || "Stranger"}, Welcome To Home Page</h1>
    )
  }
}
/**
 * Used to display a fallback value when the first value (before the OR operator) is falsy value.
 * All falsy value i.e is present in JS is apply, total 8 falsy values are present.
 * 1)false
 * 2)0
 * 3)-0
 * 4)0n (BigInt)
 * 5)"" or '' (empty string)
 * 6)null
 * 7)undefined
 * 8)NaN
 */