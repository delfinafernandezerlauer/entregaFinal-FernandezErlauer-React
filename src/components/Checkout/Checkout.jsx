import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { useForm } from 'react-hook-form'
import {collection, addDoc, Timestamp} from "firebase/firestore"
import { db } from '../../firebase/config'

const Checkout = () => {

    const [purchaseDate, setPurchaseDate] = useState(null);

    const [orderId, setOrderId]=useState("")
    
    const {carrito, precioTotal, vaciarCarrito}=useContext(CartContext)

    const {register, handleSubmit, watch}=useForm()

    const comprar = (data)=>{

        const { email, emailConfirmation } = data;

        if (email !== emailConfirmation) {
            return;
        }

     const order = {
        client:data,
        products:carrito,
        total:precioTotal()
     }
     console.log(order)

        const ordersREF=collection(db, "orders")
        addDoc(ordersREF, order)
            .then((doc)=>{
                setOrderId(doc.id);
                vaciarCarrito();
                setPurchaseDate(new Date());
            })
    }
 
    if(orderId){
        return(
            <div className='box'>
                <h2 className='main-title'>Thank you for your purchase!</h2>
                <h4>The code of your order is : {orderId}</h4>
                {purchaseDate && <p>Date: {purchaseDate.toLocaleString()}</p>}
            </div>
        )
    }

  return (
    <div className='box'>
        <h3 className='main-title'>Checkout</h3>
    
        <div>
            <p>Complete the form to continue with your purchase</p>
        <form className='formulario' onSubmit={handleSubmit(comprar)} >
            <input type="text"  placeholder="add your name"  {...register("nombre",{ required: true })}/>
            <input type="text"  placeholder="add your last name"  {...register("apellido",{ required: true })}/>
            <input type="email" placeholder="add your email" {...register("email",{ required: true })} />

            <input
                        type="email"
                        placeholder="confirma tu email"
                        {...register('emailConfirmation',{ required: true })}
                    />
                    {watch('email') !== watch('emailConfirmation') && (
                        <p className="error-message">Emails do not match</p>
                    )}


            <input type="phone" placeholder="add your phone number" {...register("telefono",{ required: true })}/>
            <button className='enviar' type="submit">Complete purchase! </button>
        </form>

    </div>


    </div>
    
  )
}

export default Checkout