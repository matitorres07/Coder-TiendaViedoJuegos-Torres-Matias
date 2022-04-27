import { useState } from "react"
import { useEffect } from "react"
import { productList } from '../data/data.js';

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

    <div class="card-actions justify-center ">
      
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={resHandler}>-</button>
      <strong>{count}</strong>
    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={addHandler}>+</button>

    </div>
    <div>
    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => onAdd(count)}>
  Agregar al carrito
</button>
    </div>


    </>
  )
}
export default ItemCount