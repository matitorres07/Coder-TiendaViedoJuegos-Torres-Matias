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
  
      <label for="my-modal" class="btn modal-button">open modal</label>


      <input type="checkbox" id="my-modal" class="modal-toggle"/>
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">{count}</h3>
          <p class="py-4">placeholder</p>
          <div class="modal-action">
            <label for="my-modal" class="btn">Yay!</label>
          </div>
        </div>
      </div>
      </div>

    </div>


    </>
  )
}
export default ItemCount