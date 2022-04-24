import { useState } from "react"
import { useEffect } from "react"

let stock = 10
const ItemCount = () => {
    const [count, setCount] = useState(1)

  useEffect(() => {
    console.log("cambio el componenete");
     }
   , [count])
   
  const addHandler = () =>{
      if (count < 10) {
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
    <div class="card card-compact w-96 bg-base-100 shadow-xl ">
    <figure><img src="https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/12a0ed7c6bc09b73d6558c6f69ed7f5f.png" alt="Shoes" /></figure>
    <div class="card-body">
    <h2 class="card-title">Minecraft</h2>
    <p>Cuantas unidades deseas comprar?</p>
    <div class="card-actions justify-center ">
      
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={resHandler}>-</button>
      <strong>{count}</strong>
    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={addHandler}>+</button>

    </div>
    <div>
    <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
  Agregar al carrito
</button>
    </div>
    </div>
    </div>

    </>
  )
}
export default ItemCount