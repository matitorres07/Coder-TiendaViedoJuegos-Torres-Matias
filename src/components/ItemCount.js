import { useState } from "react"
import { useEffect } from "react"
import { productList } from '../data/data.js';
import { useAppContext } from "./context/AppContext.jsx";
import { useCartContext } from "./context/CartContext.jsx";
import './styles/ItemCount.css';


const ItemCount = ({ initial, stock, onAdd, id }) => {
    const [count, setCount] = useState(1)

    const {addToCart} = useCartContext()
    const {products} = useAppContext()


   
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

  const handleClick = (id, cantidad) => {
		const findProduct = products.find((producto) => producto.id === id)

		if (!findProduct) {
			alert("Error aqui")
			return
		}

		addToCart(findProduct, cantidad)
		onAdd(count)
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

      <button className="btn btn-primary" onClick={() => handleClick(id,count)}>
          Agregar al carrito
      </button>
   
      </div>

    </div>


    </>
  )
}
export default ItemCount