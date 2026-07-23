import React, { Component } from 'react'
import Spinner from 'react-bootstrap/Spinner';
export default class ProductCardUsingIfElse extends Component {
    render() {
        const { productInfo, status } = this.props
        const { title, image, price, rating } = productInfo;
        if (status) {
            return (
                <div>
                    <h3>{title}</h3>
                    <img src={image} alt="teddy's" />
                    <h5>Price: {price}</h5>
                    <p>Rating: {rating}</p>
                </div>
            )
        }
        else {
            return(
            <>
                <h1>Data is Loading....</h1>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </>
            )
        }
    }
}
