import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { productList } from '../data/data.js';
import './styles/ItemDeatail.css';
import ItemCount from './ItemCount.js';
import { Link } from 'react-router-dom';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import NavBar from "./NavBar.js";

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
      <NavBar></NavBar>
      <div>
      {
        
        Object.keys(juego).length === 0 ? ( 
          <>
            {
              
            
              <img className='loader'  src="https://pa1.narvii.com/7878/a30ff749e4268e8f8bdb196bc7a659cc8b340d9cr1-480-480_hq.gif" />

            }
          </>
        ) : (
          <div>
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className="imagen-detalle" src={juego.thumbnail}/></figure>
            <div className="card-body" style={{ backgroundImage: `url("https://c4.wallpaperflare.com/wallpaper/300/544/973/discord-wallpaper-thumb.jpg")` }}>
              
              <h2 className="card-title" style={{color: 'white'}}>{juego.name}</h2>
              <div>
              <p style={{color: 'white'}}>{juego.descripcion}</p>
              </div>
              <div className="detalles">
              <li style={{color: 'white'}}>Pecio actual : {juego.price}</li>
              <li style={{color: 'white'}}>Cantidad en Stock : {juego.stock}</li>
              <li style={{color: 'white'}}>Plataforma : {juego.consola}</li>
              </div>
           
              <div className="card-actions justify-center">
                <h1 style={{color: 'white'}}>Comprar ahora!</h1>
       
              </div>
              {
                terminar ? (
                  <div><strong style={{color: 'white'}}>Compra realizada : </strong> 
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
    </div>
  );
};

export default ItemDetail