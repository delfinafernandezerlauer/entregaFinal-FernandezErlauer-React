import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products, title}) => {
  return (
    <div className='box'>
        <div>  
            <h2 className='main-title'>{title}</h2>
        </div>
            
        <div className="products">

            {
            products.map((products)=> <Item products={products} key={products.id}/>
    
            )
            }
        </div>
    </div>
  )
}

export default ItemList