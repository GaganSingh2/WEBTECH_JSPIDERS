import React, { Component } from 'react'

export default class ComponentWillUnmount extends Component {

    //it is execute just before the component is removed from DOM
    componentWillUnmount(){
        console.log("Component is going to be removed");
    }


  render() {
    return (
      <div>Component Will Unmount</div>
    )
  }
}
