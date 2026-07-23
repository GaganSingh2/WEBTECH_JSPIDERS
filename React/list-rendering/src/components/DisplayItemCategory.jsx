// import React from 'react'
import React, { Component } from 'react'
import AmulAlphonso from "../assets/images/AmulAlphonso.avif";
import AmulChocoChips from "../assets/images/AmulChocoChips.avif";
import AmulChocolateBrownie from "../assets/images/AmulChocolateBrownie.avif";
import AmulFruitNNut from "../assets/images/AmulFruitNNut.avif";
import AmulVanila from "../assets/images/AmulVanila.avif";

import banana from "../assets/images/banana.avif";
import coconut from "../assets/images/coconut.avif";
import orange from "../assets/images/orange.avif";
import pineapple from "../assets/images/pineapple.avif";
import watermelon from "../assets/images/watermelon.avif";

import ProductCard from './ProductCard';
import "../Products.css"



export default class DisplayItemCategory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            category: "All"
        }
    }

    changeCategory = (event) => {
        this.setState({ category: event.target.value })
    }
    render() {

        const products = [
            {
                image: AmulAlphonso,
                title: "Amul Alphonoso",
                unit: 1,
                time: "8 min",
                price: 259,
                category: "icecream"
            },

            {
                image: AmulChocoChips,
                title: "Amul Choco Chips",
                unit: 1,
                time: "8 min",
                price: 249,
                category: "icecream"
            },

            {
                image: AmulChocolateBrownie,
                title: "Amul Chocolate Brownie",
                unit: 1,
                time: "8 min",
                price: 299,
                category: "icecream"
            },

            {
                image: AmulFruitNNut,
                title: "Amul Fruit N Nuts",
                unit: 1,
                time: "8 min",
                price: 389,
                category: "icecream"
            },

            {
                image: AmulVanila,
                title: "Amul Vanila",
                unit: 1,
                time: "8 min",
                price: 349,
                category: "icecream"
            },

            {
                image: banana,
                title: "Banana",
                unit: 3,
                time: "8 min",
                price: 76,
                category: "fruits"
            },

            {
                image: coconut,
                title: "Coconut",
                unit: 1,
                time: "8 min",
                price: 99,
                category: "fruits"
            },

            {
                image: orange,
                title: "Orange",
                unit: 4,
                time: "8 min",
                price: 79,
                category: "fruits"
            },

            {
                image: pineapple,
                title: "PineApple",
                unit: 1,
                time: "8 min",
                price: 119,
                category: "fruits"
            },

            {
                image: watermelon,
                title: "WaterMelon",
                unit: 1,
                time: "8 min",
                price: 69,
                category: "fruits"
            },
        ]
        const filterProducts = this.state.category === "All"
            ? products
            : products.filter(product => product.category === this.state.category)
        return (
            <div>
                <select name="" id="" onChange={this.changeCategory}>
                    <option value="All">All</option>
                    <option value="fruits">Fruits</option>
                    <option value="icecream">Ice Cream</option>
                </select>
                <div className='products'>
                    {
                        filterProducts.map((product) => {
                            return <ProductCard product={product} />
                        })
                    }\
                </div>


            </div>
        )
    }
}
