import React, { Component } from 'react'
import TrafficCompnent from './TrafficCompnent'

export default class TrafficColor extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: "green"
        }
    }
    handleColorRed = () => {

        this.setState({ color: this.state.color = "red" })
    }
    handleColorYellow = () => {
        this.setState({ color: this.state.color = "yellow" })
    }
    handleColorGreen = () => {
        this.setState({ color: this.state.color = "green" })
    }
    render() {
        return (
            <div className='container'>
                <button onClick={this.handleColorRed}>Click On Red</button>
                {/* console.log({this.state.color}); */}

                <button onClick={this.handleColorGreen}>Click On Green</button>
                <button onClick={this.handleColorYellow}>Click On Yellow</button>
                <TrafficCompnent color={this.state.color} />
            </div>
        )
    }
}


/**
 * Q) THe Traffic Light (Setting Specific values):
 * Make a component with three buttons "Red", "Yellow" and "Green".
 * Below the buttons display a text indicating the current. 
 * Clicking any button should update the state to that specific color.
 */
