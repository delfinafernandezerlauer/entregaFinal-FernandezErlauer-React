import React from 'react'
import { Counter } from '../Counter/Counter'

export const ItemDetail = ({item}) => {
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
              <Counter/>
            </div> 
            
          {/* })
} */}
      </div>
        
  
  )}
