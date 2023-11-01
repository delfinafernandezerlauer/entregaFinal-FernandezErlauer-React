import React from 'react'
import { Counter } from '../Counter/Counter'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({products}) => {
  return (
    
    <div key={products.id} className="col-lg-4 ">
      <div  className='container border border-2  m-2 p-5'>
        <img className='' src={products.image} alt="" />
          <h4 className="bold">{products.name}</h4>
          <p >${products.price}</p>
          {/* FALTA CATEGORIA. VA ACA!! */}
          <p>Size: {products.size}</p>
          <p>Color: {products.color}</p>
          <p>Category: {products.category}</p>
          <Counter/>
          
          <Link to={`/detail/${products.id}`}>Ver Mas</Link>
      </div>
        
    </div>
  )
}

export default Item