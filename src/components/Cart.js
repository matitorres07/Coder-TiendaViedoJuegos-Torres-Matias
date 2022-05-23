import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "./context/CartContext.jsx";
import NavBar from "./NavBar.js";
import { addDoc, collection, getFirestore } from "firebase/firestore"


import './styles/carrito.css';

const Cart = () => {
  const {cart} = useCartContext()
  const {deleteFromCart} = useCartContext()
  const {deleteCart} = useCartContext()
  const [contrador2, setcontrador2] = useState(0)

  const [names, setNames] = useState("");
  const [numero, setNumero] = useState("")
  const [email, setEmail] = useState("");
  const [idCompra, setidCompra] = useState('')

  const totalCompra = cart.reduce((sum, i) => (
    sum += i.quantity * i.price
    ), 0)
  

  const handleNameChange = (e) => {
    setNames(e.target.value);
  };
  const handleNumeroChange = (e) => {
    setNumero(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    const hoy =   dd + '/' + mm + '/' + yyyy

  
  //Guardar la orden en firebase

  const saveOrder = async () => { 
    const usr = {
      name : names,
      phone : numero,
      emial : email,
    }

    const orderToSave = {
      user: usr,

      order: cart,

      date : hoy,

      total: totalCompra

    }

    console.log("esta es la orden",orderToSave);

    const db = getFirestore()
    const orderCollection = collection(db,'orders')

    const response = await addDoc (orderCollection,orderToSave)
    console.log("respuesta",response);
    console.log("respuesta id",response.id);
    setidCompra(response.id)
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
    <div>
      <NavBar></NavBar>
      <div className="">
      {
        
        cart.length ? (
      
      <div className=" bg-gray-100" style={{backgroundImage: `url("https://c4.wallpaperflare.com/wallpaper/300/544/973/discord-wallpaper-thumb.jpg")`}}>
        <div className="container mx-auto mt-10">
          <div className="cardcarrito2 flex shadow-md my-10 ">
            <div className="divacamb bg-white px-10 py-10 cart-div">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl" style={{color : 'white'}}>Carrito de compras</h1>
                <button class="btn btn-secondary" onClick={() => deleteCart()}>Vaciar carrito</button>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5" style={{color : 'white'}}>Detalle del producto</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center" style={{color : 'white'}}>Cantidad</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center" style={{color : 'white'}}>Precio</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center" style={{color : 'white'}}>Total</h3>
              </div>
            <div>
              
            <>
            {cart.map(({id, quantity, name,price,thumbnail }) => (
              <div className="flex items-center hover:bg-gray-300 -mx-8 px-6 py-5">
              <div className="flex w-2/5"> 
                <div className="w-20">
                  <img className="h-24" src={thumbnail} alt=""/>
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                  <span className="font-bold text-sm" style={{color : 'white'}}>{name}</span>
      
                  <button class="btn btn-xs btn-error " onClick={() => borrarDelCarrito(id)}>Eliminar</button>
                  
                </div>
              </div>
              <div className="flex justify-center w-1/5">
              <span className="font-bold text-sm" style={{color : 'white'}}>{quantity}</span>
              </div>
              <span className="text-center w-1/5 font-semibold text-sm" style={{color : 'white'}}>{price}</span>
              <span className="text-center w-1/5 font-semibold text-sm" style={{color : 'white'}}>{ quantity * price
          }</span>
            </div>
            ))}
          </>
          </div>
        
      
            
      
            </div>

            
            {/* 
           
            */}
             <div id="summary" className="divacamb2 px-8 py-10">
              <h1 className="font-semibold text-2xl border-b pb-8" style={{color : 'white'}}>Resumen de la orden!</h1>
              <div className="flex justify-between mt-10 mb-5 flex-col ...">
                <span className="font-semibold text-sm uppercase" style={{color : 'white'}}>Items en el carrito : {contrador2}</span>
                <span className="font-semibold text-sm uppercase" style={{color : 'white',marginTop : '16px'}}>Ingresa tus datos</span>
                
                <input type="text" id="promo" placeholder="Nombre completo" className="p-2 text-sm w-full" onChange={handleNameChange} />
                <br></br>
                <input type="text" id="promo" placeholder="Numero de contacto" className="p-2 text-sm w-full" onChange={handleNumeroChange}/>
                <br></br>
                <input type="email" id="promo" placeholder="email" className="p-2 text-sm w-full" onChange={handleEmailChange}/>
                
              </div>
              
              <div className="py-10">
                <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase" style={{color : 'white'}}>Codigo de descuento</label>
                <input type="text" id="promo" placeholder="Ingresa El codigo" className="p-2 text-sm w-full"/>
              </div>
              
                  <label for="my-modal" className="btn modal-button" style={{color : 'white'}}>Aplicar Codigo!</label>
      
      
                  <input type="checkbox" id="my-modal" class="modal-toggle" />
                  <div class="modal">
                    <div class="modal-box">
                      <h3 class="font-bold text-lg">Aca hubo un malentendido...</h3>
                      <p class="py-4">Este codigo no sirve o aun no implementamos codigos para descuentos aun :(</p>
                      <div class="modal-action">
                        <label for="my-modal" class="btn">Aceptar</label>
                      </div>
                    </div>
                  </div>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span style={{color : 'white'}}>Total :</span>
                  <span style={{color : 'white'}}>${cart.reduce((sum, i) => (
              sum += i.quantity * i.price
          ), 0)}</span>
                </div>
                
                
                  <label for="my-modal1" class="btn modal-button focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={saveOrder}>Finalizar compra</label>


                        <input type="checkbox" id="my-modal1" class="modal-toggle" />
                        <div class="modal">
                          <div class="modal-box">
                            <h3 class="font-bold text-lg">Felicitaciones <strong>{names}</strong> tu compra se realizado con exito!</h3>
                            <p class="py-4">Fecha de la compra : {hoy}</p>
                            <p class="py-4">Juegos comprados : {contrador2}</p>
                            <p class="py-4">Total de la compra : {totalCompra}</p>
                            <p class="py-4">Codigo de compra : {idCompra}</p>
                            <h1><strong>Te enviamos un correo con los detalles de tu compra a la direccion {email}, gracias por elegirnos!</strong></h1>
                            <div class="modal-action">
                            <Link to={'/juegos'}><button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={() => deleteCart()}>Seguir navegando!</button></Link>

                    
                            </div>
                          </div>
                        </div>
              </div>
            </div>
            
      
          </div>
        </div>
      </div>

                      
      
      
        ) : (
          <div className="flex flex-col ...">
              <div className="divcarrito">
                <h1>Tu carrito esta vacio!</h1>
              </div>
              <div className="flex flex-col ... items-center ... justify-center ...">
              <img className=''  src="https://cdni.iconscout.com/illustration/free/thumb/empty-cart-4085814-3385483.png" />
              
              <Link to={'/'}><button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Empezar a comprar!</button></Link>
              </div>
              
              </div>
        ) 
      }
    </div>
    </div>
  );
};
export default Cart