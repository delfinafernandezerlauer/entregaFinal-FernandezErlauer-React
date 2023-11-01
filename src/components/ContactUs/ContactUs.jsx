import { useState } from "react"
import { useForm } from "react-hook-form"

export const ContactUs = ()=> {

   const {register, handleSubmit}=useForm()

   const enviar = (data)=>{
    console.log(data)
   }

    return (
    <div>
        <form onSubmit={handleSubmit(enviar)} >
            <input type="text"  placeholder="ingresa tu nombre"  {...register("nombre")}/>
            <input type="email" placeholder="ingresa tu email" {...register("email")} />
            <input type="phone" placeholder="ingresa tu telefono" {...register("telefono")}/>
            <button type="submit"> Enviar</button>
        </form>

    </div>
    )
}