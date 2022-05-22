import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../components/context/CartContext"



const Orden = () => {

    const {cart} = useCartContext()

    useEffect(() => {
     console.log('este es el carrtioa ctuasl',cart);
    }, [])

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    console.log(today);

    const saveOrder = async () => { 
      const usr = {
        name : "juan",
        phone : "3561231312",
        emial : "asedadsa@adsadasd.com",
      }
      console.log();

      const orderToSave = {
        user: usr,

        order: cart,

        date : today,

        total: cart.length

      }
      console.log("esta es la orden",orderToSave);

      const db = getFirestore()
      const orderCollection = collection(db,'orders')

      const response = await addDoc (orderCollection,orderToSave)
      console.log("respuesta",response);
      console.log("respuesta id",response.id);
     }

     
    
  return (
    <div>
      <Link to={'/juegos'}><button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Empezar a comprar!</button></Link>
      <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={saveOrder}>salvar favoritos</button>
    </div>
    
    
  )
}
export default Orden