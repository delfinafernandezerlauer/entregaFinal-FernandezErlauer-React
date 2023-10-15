import React from 'react'
import { Counter } from '../Counter/Counter'
import { Link } from 'react-router-dom'
import Item from '../Item/Item'

const ItemList = ({products, title}) => {
  return (
    <div>
        <div>  
            <h2>{title}</h2>
        </div>
            
        <div className="row">

            {
            products.map((products)=> <Item products={products} key={products.id}/>
    
            )
            }
        </div>
    </div>
  )
}

export default ItemList