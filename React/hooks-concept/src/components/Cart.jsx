import React, { useState } from 'react'
import AmulAlphonso from '../assets/images/AmulAlphonso.avif'
import AmulChocoChips from '../assets/images/AmulChocoChips.avif';
import AmulChocolateBrownie from '../assets/images/AmulChocolateBrownie.avif';
import AmulFruitNNut from '../assets/images/AmulFruitNNut.avif';
import AmulVanila from '../assets/images/AmulVanila.avif';


import coconut from '../assets/images/coconut.avif';
import orange from '../assets/images/orange.avif';
import pineapple from '../assets/images/pineapple.avif';
import watermelon from '../assets/images/watermelon.avif';
import "../ProductCard.css"

function Cart() {
   

    const items = 
    {
        image: AmulAlphonso,
        title: "Amul Alphonoso",
        unit: 0,
        time: "8 min",
        price: 259,
        category: "icecream"
    }

    // {
    //     image: AmulChocoChips,
    //     title: "Amul Choco Chips",
    //     unit: 1,
    //     time: "8 min",
    //     price: 249,
    //     category: "icecream"
    // },

    // {
    //     image: AmulChocolateBrownie,
    //     title: "Amul Chocolate Brownie",
    //     unit: 1,
    //     time: "8 min",
    //     price: 299,
    //     category: "icecream"
    // },

    // {
    //     image: AmulFruitNNut,
    //     title: "Amul Fruit N Nuts",
    //     unit: 1,
    //     time: "8 min",
    //     price: 389,
    //     category: "icecream"
    // },

    // {
    //     image: AmulVanila,
    //     title: "Amul Vanila",
    //     unit: 1,
    //     time: "8 min",
    //     price: 349,
    //     category: "icecream"
    // },


    // {
    //     image: coconut,
    //     title: "Coconut",
    //     unit: 1,
    //     time: "8 min",
    //     price: 99,
    //     category: "fruits"
    // },

    // {
    //     image: orange,
    //     title: "Orange",
    //     unit: 4,
    //     time: "8 min",
    //     price: 79,
    //     category: "fruits"
    // },

    // {
    //     image: pineapple,
    //     title: "PineApple",
    //     unit: 1,
    //     time: "8 min",
    //     price: 119,
    //     category: "fruits"
    // },

    // {
    //     image: watermelon,
    //     title: "WaterMelon",
    //     unit: 1,
    //     time: "8 min",
    //     price: 69,
    //     category: "fruits"
    // }

     const [item, setItem] = useState(items)
    // const{image, title,unit, time, price, category} = item
    const handlIncrement = ()=>{
        setItem(item.unit<10? item.unit+1: item.unit)
    }

     const handlDecrement = ()=>{
        setItem(item.unit===0? 0: item.unit-1)
    }
    return (
        <div className='product-card'>
          <img src={item.image} alt={item.title} />
            <div className='content'>
                <span className='time'>{item.time}</span>
                <h3>{item.title}</h3>

                <p className='unit'>{item.unit}</p>
                <div className='bottom'>
                    <span className='price'>₹{item.price}</span>
                    {
                        item.unit === 0 ?
                        (
                             <button className='add-btn' onClick={handlIncrement}>ADD</button>
                        )
                        :
                        (
                            <div className='qty-box'>
                                <button onClick={handlDecrement}>-</button>
                                <span>{item.unit}</span>
                                <button onClick={handlIncrement}>+</button>
                            </div>
                        )
                    }
                </div>

            </div>
            
        </div>
    )
}

export default Cart