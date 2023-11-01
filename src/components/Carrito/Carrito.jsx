import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Carrito = () => {

    const {carrito, precioTotal, vaciarCarrito}=useContext(CartContext)

   const handleVaciar=()=>{
    vaciarCarrito()
   }
  return (
    <div>
        <h2>
            Carrito
        </h2>
        <div>
           { carrito.map((prod)=>(
            <div key={prod}>
                <h4 >{prod.name}</h4>
                <p>Precio Unitario ${prod.price}</p>
                <p>Precio total del Producto ${prod.price*prod.cantidad}</p>
                <p>Cantidad: {prod.cantidad}</p>
                
            </div>
            
           ))}
        </div>
        <div>
            {carrito.length>0 ? 
                <><h3>Precio Total de la compra: ${precioTotal()}</h3> 
                <button onClick={handleVaciar}>Vaciar Carrito</button> </>
                :
                <h3>El carrito esta vacio :( Chusmea y empeza a agregar!</h3>
        }
            
        </div>
    </div>
  )
}

export default Carrito