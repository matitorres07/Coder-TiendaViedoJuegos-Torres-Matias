import { useState } from "react"

const Prueba1 = (props) => {
    
  return (
      <>
      <div>componente prueba 1</div>
      {props.otroComponente ({name:'tienda', producto :'juegos'})}
      </>
    

  )
}
export default Prueba1