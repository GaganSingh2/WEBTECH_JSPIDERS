import React, { Component } from 'react'

export default class DefaultPropsInClassBasedComponent extends Component {
  render() {
    return (
      <h1>Name: {this.props.name}</h1>
    )
  }
}

DefaultPropsInClassBasedComponent.defaultProps = {
    name: "Stranger"
};