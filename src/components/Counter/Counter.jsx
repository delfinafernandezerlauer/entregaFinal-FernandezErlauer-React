import { useState } from "react"

export const Counter=()=>{

    const [number, setNumber]=useState(0) // const [variable, funcion setVariable]=useState (valorInicial)

    const sumar = ()=>{
        setNumber(number+1)
    }

    const restar = ()=>{
        setNumber(number-1)
    }

    return <div>
        <p>{number}</p>
        <button onClick={sumar} >+</button> 
        {/* en la eti de apertura, el evento. entre llaves el cod js (la fx) */}
        <button onClick={restar}>-</button> 
    </div>
}