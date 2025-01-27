import React from 'react'
import { useState } from 'react'

const itemCount = ({stock, initial, addOn}) => {
const [quantity, setQuantity] = useState (initial)

const increment = () => {
    if (quantity < stock) {
        setQuantity (quantity+1)
    }
}
const decrement = () => {
    if (quantity < stock) {
        setQuantity (quantity-1)
    }
}


    return (
    <div>
        <div>
            <button onClick={decrement}>-</button>
            <h4> {quantity} </h4>
            <button onClick={increment}>+</button>
        </div>

        <div>
            <button onClick={() => addOn(quantity)} disabled={stock}>agregar al carrito </button>
        </div>
    </div>
    )

}

export default itemCount