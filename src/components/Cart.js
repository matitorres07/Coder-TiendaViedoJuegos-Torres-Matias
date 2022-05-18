import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "./context/CartContext.jsx";


import './styles/carrito.css';

const Cart = () => {
  const {cart} = useCartContext()
  const {deleteFromCart} = useCartContext()
  const [contrador2, setcontrador2] = useState(0)

  const estoImprime = () => {
    console.log('esete es el carrito ',cart);
  }


  useEffect(() => {
    setcontrador2 (cart.reduce((a,v) =>  a = a + v.quantity , 0 ))
  }, [{contrador2}]); 
  console.log(contrador2);


  const borrarDelCarrito = (id) => {
		const findProduct = cart.find((producto) => producto.id === id)
    console.log('Este es el producto a borrar',id);
		if (!1) {
			alert("Error aca!")
			return
		}

		deleteFromCart(id)

	}

  return (
    cart.length ? (
<div className="bg-gray-100">
  <div className="container mx-auto mt-10">
    <div className="flex shadow-md my-10">
      <div className="w-3/4 bg-white px-10 py-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">Carrito de compras</h1>
          <h2 className="font-semibold text-2xl"></h2>
        </div>
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Detalle del producto</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Cantidad</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Precio</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
        </div>
        <div>
      <>
      {cart.map(({id, quantity, name,price,thumbnail }) => (
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
        <div className="flex w-2/5"> 
          <div className="w-20">
            <img className="h-24" src={thumbnail} alt=""/>
          </div>
          <div className="flex flex-col justify-between ml-4 flex-grow">
            <span className="font-bold text-sm">{name}</span>

            
            <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={() => borrarDelCarrito(id)}>Borrar</a>
          </div>
        </div>
        <div className="flex justify-center w-1/5">
        <span className="font-bold text-sm">{quantity}</span>
        </div>
        <span className="text-center w-1/5 font-semibold text-sm">{price}</span>
        <span className="text-center w-1/5 font-semibold text-sm">{ quantity * price
    }</span>
      </div>
      ))}
    </>
    </div>
	

      

      </div>
      {/* 
     
      */}
       <div id="summary" className="w-1/4 px-8 py-10">
        <h1 className="font-semibold text-2xl border-b pb-8">Resumen de la orden!</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Items en el carrito : {contrador2}</span>
          
        </div>
        
        <div className="py-10">
          <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Codigo de descuento</label>
          <input type="text" id="promo" placeholder="Ingresa El codigo" className="p-2 text-sm w-full"/>
        </div>
        
            <label for="my-modal" class="btn modal-button">Aplicar Codigo!</label>


            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
              <div class="modal-box">
                <h3 class="font-bold text-lg">Aca hubo un malentendido...</h3>
                <p class="py-4">Este codigo no sirve o aun no implementamos codigos para descuentos :(</p>
                <div class="modal-action">
                  <label for="my-modal" class="btn">Aceptar</label>
                </div>
              </div>
            </div>
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total :</span>
            <span>${cart.reduce((sum, i) => (
        sum += i.quantity * i.price
    ), 0)}</span>
          </div>
          <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
        </div>
      </div>
      

    </div>
  </div>
</div>

  ):
  (
    <div className="flex flex-col ...">
    <div className="divcarrito">
      <h1>Tu carrito esta vacio!</h1>
    </div>
    <div className="flex items-center ... justify-center ...">
    <img className=''  src="https://cdni.iconscout.com/illustration/free/thumb/empty-cart-4085814-3385483.png" />
    
    <Link to={'/'}><button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Empezar a comprar!</button></Link>
    </div>
    
    </div>
    
))
}
export default Cart