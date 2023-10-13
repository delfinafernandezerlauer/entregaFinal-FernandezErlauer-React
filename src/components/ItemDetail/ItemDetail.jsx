import React from 'react'
import { Counter } from '../Counter/Counter'

export const ItemDetail = (product) => {
  return(
    
      <div className="row">

        {product.length>0 && 

          product.map((products)=>{
            <div key={products.id} className="col-lg-4 border p-4">
              <img src={products.image} alt="" />
              <h4 className="bold">{products.name}</h4>
              <p>${products.price}</p>
              <p>Size: {products.size}</p>
              <p>color {products.color}</p>
              <p>descrition:{products.description}</p>
              <Counter/>
            </div> 
          })
}
      </div>
        
  
  )}
