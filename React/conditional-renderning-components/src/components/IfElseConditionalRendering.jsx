import React, { Component } from 'react'
//Spinners can be used to show the loading state in your projects.
import Spinner from 'react-bootstrap/Spinner';
let isDataLoaded = false
export default class IfElseConditionalRendering extends Component {
    render() {
        if (isDataLoaded) {
            return <h1>Data is Loaded...</h1>
        }
        else {
            return(
            <>
                <h1>Data is Loading...</h1>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </>
            )
        }
    }
}

