import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { useForm } from 'react-hook-form'
import {collection, addDoc} from "firebase/firestore"
import { db } from '../../firebase/config'

const Checkout = () => {

    const [orderId, setOrderId]=useState("")
    
    const {carrito, precioTotal, vaciarCarrito}=useContext(CartContext)

    const {register, handleSubmit}=useForm()

    const comprar = (data)=>{
     const order = {
        client:data,
        products:carrito,
        total:precioTotal()
     }
     console.log(order)

        const ordersREF=collection(db, "orders")
        addDoc(ordersREF, order)
            .then((doc)=>{
                setOrderId(doc.id)
                vaciarCarrito()
            })
    }
 
    if(orderId){
        return(
            <div className='box'>
                <h2 className='main-title'>Muchas gracias por tu compra!</h2>
                <h4>Tu codigo de pedido es : {orderId}</h4>
            </div>
        )
    }

  return (
    <div className='box'>
        <h3 className='main-title'>Checkout</h3>
        <h4>Finalizar Compra!</h4>
        <div>
        <form className='formulario' onSubmit={handleSubmit(comprar)} >
            <input type="text"  placeholder="ingresa tu nombre"  {...register("nombre")}/>
            <input type="email" placeholder="ingresa tu email" {...register("email")} />
            <input type="phone" placeholder="ingresa tu telefono" {...register("telefono")}/>
            <button className='enviar' type="submit"> Comprar</button>
        </form>

    </div>


    </div>
    
  )
}

export default Checkout