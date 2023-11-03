import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({products}) => {
  return (
    
    <div key={products.id} className="product">
      <div  className=''>
        <img className='' src={products.image} alt="" />
          <h4 className="">{products.name}</h4>
          <p >${products.price}</p>
          <p>Size: {products.size}</p>
          <p>Color: {products.color}</p>
          <p>Category: {products.category}</p>
          
          <Link className='ver-mas' to={`/detail/${products.id}`}>Ver Mas</Link>
      </div>
        
    </div>
  )
}

export default Item