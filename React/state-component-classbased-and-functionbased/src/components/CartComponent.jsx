import React from 'react'
let price = 1000
function CartComponent({qty, title}) {

  return (
    <div>
        <h1>My Cart</h1>
        <h3>1. {title} - Total Price: {qty * price}</h3>
        <h3></h3>

        
    </div>
  )
}

export default CartComponent