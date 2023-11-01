import React, { useState } from 'react'

const ItemCount = ({cantidad, handleRestar, handleSumar, handleAgregar}) => {

    
  return (
    <div className=''>
        <div className=''>
            <button onClick={handleRestar}>-
            </button>
            <p>{cantidad}</p>
            <button onClick={handleSumar}>+</button>
            
            <button onClick={handleAgregar}>Agregar al carrito</button> 
        </div>
    </div>
  )
}

export default ItemCount