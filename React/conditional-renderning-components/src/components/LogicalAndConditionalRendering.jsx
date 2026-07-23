import React, { Component } from 'react'

export default class LogicalAndConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isAuth: false,
         isResp: true
      }
    }
  render() {
    return (
      (this.state.isResp) && <h1>The data is coming from server using Logical AND......</h1>
    )
  }
}
// Used when we want to show something only if the condition is true.