import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { productList } from '../data/data.js';
import './styles/ItemDeatail.css';
import ItemCount from './ItemCount.js';
import { Link } from 'react-router-dom';
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetail = () => {
  const  {id} = useParams( )
  const [juego, setJuego] = useState({})

  const [terminar,setTerminar] = useState(false)

  const onAdd = (count) => {
    setTerminar (true)
    //alert(`Has agregado ${count} Juegos`);
  };


  //result.find  (m => m.id == id)

  useEffect(() => {
    const db = getFirestore()
    const juego1 = doc(db,'items',id)
    getDoc (juego1).then(res => {
        if(res.exists()){
            //console.log(res.data());
            setJuego(res.data())
            
        }
    })
  }, []); 




  return (
    <div>
      {
        
        Object.keys(juego).length === 0 ? ( 
          <>
            {
              
            
              <img className='loader'  src="https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-12.jpg" />

            }
          </>
        ) : (
          <div>
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className="imagen-detalle" src={juego.thumbnail}/></figure>
            <div className="card-body">
              
              <h2 className="card-title">{juego.name}</h2>
              <div>
              <p>{juego.descripcion}</p>
              </div>
              <div className="detalles">
              <li>Pecio actual : {juego.price}</li>
              <li>Cantidad en Stock : {juego.stock}</li>
              <li>Plataforma : {juego.consola}</li>
              </div>
           
              <div className="card-actions justify-center">
                <h1>Comprar ahora!</h1>
       
              </div>
              {
                terminar ? (
                  <div><strong>Compra realizada : </strong> 
                        <Link to={`/cart`} className="btn btn-link" >
                          Visitar el carrito
                        </Link>
                  </div>
                ) : (
                  <ItemCount stock={juego.stock} onAdd={onAdd} initial={1} id = {id}/>

                )
              }
              
            </div>
          </div>
          </div>
          
        ) 
      }
    </div>
  );
};

export default ItemDetail