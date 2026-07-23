import React from 'react'
import ProductCard from './ProductCard'
import AmulAlphonso from "../assets/images/AmulAlphonso.avif";
import AmulChocoChips from "../assets/images/AmulChocoChips.avif";
import AmulChocolateBrownie from "../assets/images/AmulChocolateBrownie.avif";
import AmulFalooda from "../assets/images/AmulFalooda.avif";
import AmulFruitNNut from "../assets/images/AmulFruitNNut.avif";
import AmulVanila from "../assets/images/AmulVanila.avif";


import "../Products.css"

const products = [
    {
        image: AmulAlphonso,
        title: "Amul Alphonoso",
        unit: 1,
        time: "8 min",
        price: 259
    },

    {
        image: AmulChocoChips,
        title: "Amul Choco Chips",
        unit: 1,
        time: "8 min",
        price: 249
    },

    {
        image: AmulChocolateBrownie,
        title: "Amul Chocolate Brownie",
        unit: 1,
        time: "8 min",
        price: 299
    },

    {
        image: AmulFalooda,
        title: "Amul Falooda",
        unit: 1,
        time: "8 min",
        price: 289
    },

    {
        image: AmulFruitNNut,
        title: "Amul Fruit N Nuts",
        unit: 1,
        time: "8 min",
        price: 389
    },

    {
        image: AmulVanila,
        title: "Amul Vanila",
        unit: 1,
        time: "8 min",
        price: 349
    }
]
export default function Products() {
    return (
        <div className='products'>
            {
                products.map((product) => {
                    return <ProductCard product={product} />
                })
            }
        </div>
    )
}
