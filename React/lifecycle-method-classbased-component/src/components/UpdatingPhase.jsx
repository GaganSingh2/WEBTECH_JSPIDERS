import React, { Component } from "react";

export default class UpdatingPhase extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    shouldComponentUpdate(nextProps, nextState) {

        console.log("shouldComponentUpdate called");
        if(nextState.count <= 5){
            return true
        }
        return false;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {

        console.log("getSnapshotBeforeUpdate called");

        return prevState.count;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        console.log("componentDidUpdate called");

        console.log("Previous Count:", snapshot);
        console.log("Current Count:", this.state.count);
    }

    handleIncrement = () => {

        this.setState({
            count: this.state.count + 1
        });
    };

    render() {

        console.log("render called");

        return (
            <>
                <h1>Count: {this.state.count}</h1>

                <button onClick={this.handleIncrement}>
                    Increment
                </button>
            </>
        );
    }
}