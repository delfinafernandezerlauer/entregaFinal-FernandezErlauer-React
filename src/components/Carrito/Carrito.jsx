import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Carrito = () => {

    const {carrito, precioTotal, vaciarCarrito}=useContext(CartContext)

   const handleVaciar=()=>{
    vaciarCarrito()
   }
  return (
    <div className='box'>
        <h2 className='main-title'>
            Cart
        </h2>
        <div>
           { carrito.map((prod)=>(
            <div className='column' key={prod}>
                <h4 >{prod.name}</h4>
                <p>Precio Unitario ${prod.price}</p>
                <p>Precio total del Producto ${prod.price*prod.cantidad}</p>
                <p>Cantidad: {prod.cantidad}</p>
                
            </div>
            
           ))}
        </div>
        <div>
            {carrito.length>0 ? 
            <div>
                <div className='row'>
                    <div className='col-lg-5'><h3>Precio Total de la compra: ${precioTotal()}</h3> </div>
                </div>
                <div className='row'>
                    <div className='col-lg-2'>
                        <button className='agregar-al-carrito' onClick={handleVaciar}>Empty cart</button>
                    </div>
                    <div className='col-lg-2'>
                        <Link className='agregar-al-carrito'  to="/checkout">Complete purchase</Link>
                    </div>
                    <div className='col-lg-6'></div>
                    
                </div>  
            </div>
                
                :
                <h3>The cart is empty:( Start shopping!</h3>

        }
            
        </div>
    </div>
  )
}

export default Carrito