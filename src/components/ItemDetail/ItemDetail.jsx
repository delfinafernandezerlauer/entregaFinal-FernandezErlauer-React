import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {CartContext} from "../../context/CartContext"

export const ItemDetail = ({item}) => {

  const {carrito, agregarAlCarrito}=useContext(CartContext)

  const [cantidad, setCantidad]=useState(0)

    
    const handleRestar = () => {
        cantidad > 0 && setCantidad(cantidad - 1)
    }


    const handleSumar = () => {

        //cantidad < item.stock && 
        setCantidad(cantidad + 1) 
       
        // aca queda cambair esto (agregar stock al json, desp descomentar)
    }

    
    


  return(
    <div  className='box'>
      <div key={item.id} className="product-detail row">

        <div className='col-lg-7 column'>
          <h4 className="name">{item.name}</h4>
          <img src={item.image} alt="" />
        </div>

        <div className='col-lg-5 column '>
          <p className='price'>${item.price}</p>
          <p  className='price' >Size: {item.size}</p>
          
          <p className='price'>Category: {item.category}</p>
          <p className='price'>Color: {item.color}</p>
          <p className='description'>Description: {item.description}</p>
          
          <ItemCount cantidad={cantidad} handleRestar={handleRestar} handleSumar={handleSumar}
          handleAgregar={ ()=>{agregarAlCarrito(item, cantidad)}
          }/>
        </div>
        
       
      </div> 
    </div>
  )}
