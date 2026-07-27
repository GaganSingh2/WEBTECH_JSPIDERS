import React, { Component } from 'react'
import "../ProductCard.css"
export default class ProductCard extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         unit: 0
      }
    }

    increaseQty = ()=>{
        this.setState({unit: this.state.unit + 1})
    }

    decreaseQty = ()=>{
        this.setState({unit: this.state.unit - 1})
    }

  render() {
    const {product} = this.props
    const {image, title, unit, time, price} = product
    return (
      <div className='product-card'>
          <img src={image} alt={title} />
            <div className='content'>
                <span className='time'>{time}</span>
                <h3>{title}</h3>

                <p className='unit'>{unit}</p>
                <div className='bottom'>
                    <span className='price'>₹{price}</span>
                    {
                        this.state.unit === 0 ?
                        (
                             <button className='add-btn' onClick={this.increaseQty}>ADD</button>
                        )
                        :
                        (
                            <div className='qty-box'>
                                <button onClick={this.decreaseQty}>-</button>
                                <span>{this.state.unit}</span>
                                <button onClick={this.increaseQty}>+</button>
                            </div>
                        )
                    }
                </div>

            </div>
      </div>
    )
  }
}
