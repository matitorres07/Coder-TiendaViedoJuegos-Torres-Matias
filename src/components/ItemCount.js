import { useState } from "react"
import { useEffect } from "react"
import { productList } from '../data/data.js';
import './styles/ItemCount.css';


const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(1)

  useEffect(() => {
    console.log("cambio el componenete");
     }
   , [count])
   
  const addHandler = () =>{
      if (count < stock) {
    setCount(count + 1)
      }
  }
  const resHandler = () =>{
    if (count > 1) {
        setCount(count - 1)
    }
  }

  return (
    <>

    <div className="card-actions justify-center ">
      
      <button className="btn btn-errr" onClick={resHandler}>-</button>
      <strong>{count}</strong>
    <button className="btn btn-active btn-accen" onClick={addHandler}>+</button>

    </div>
    <div>
      <div className="btn-comprar">
      <button className="btn btn-primary" onClick={() => onAdd(count)}>
          Agregar al carrito
      </button>
      </div>

    </div>


    </>
  )
}
export default ItemCount