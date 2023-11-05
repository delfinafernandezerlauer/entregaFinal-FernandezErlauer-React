import React, { useState } from 'react'

const ItemCount = ({cantidad, handleRestar, handleSumar, handleAgregar}) => {

    
  return (
    <div className=''>
        <div className='item-count'>
            <button onClick={handleRestar}>-
            </button>
            <p>{cantidad}</p>
            <button onClick={handleSumar}>+</button>
            <button className='agregar-al-carrito' onClick={handleAgregar}>Add to Cart</button> 
        </div>
    </div>
  )
}

export default ItemCount