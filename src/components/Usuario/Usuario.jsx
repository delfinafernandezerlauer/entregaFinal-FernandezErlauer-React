
export const Usuario = (props)=>{
  console.log(props)
    return <div>
      <h4> Nombre: {props.nombre}
      </h4>
      <h4>Nacionalidad: {props.nacionalidad}</h4>
      <p>Edad: {props.edad}</p>

    </div>
  }
