import React, { useContext, useState } from 'react'
import { Counter } from '../Counter/Counter'
import ItemCount from '../../ItemCount/ItemCount'
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
    
      <div className="row">
{/* 
        {product.map((products)=>{ */}
            <div key={item.id} className="col-lg-4 border p-4">
              <img src={item.image} alt="" />
              <h4 className="bold">{item.name}</h4>
              <p>${item.price}</p>
              <p>Size: {item.size}</p>
              <p>color {item.color}</p>
              <p>descrition:{item.description}</p>
              <ItemCount cantidad={cantidad} handleRestar={handleRestar} handleSumar={handleSumar}
              handleAgregar={ ()=>{agregarAlCarrito(item, cantidad)}
              }/>
            </div> 
            
          {/* })
} */}
      </div>
        
  
  )}
