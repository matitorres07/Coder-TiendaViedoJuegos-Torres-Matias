import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { productList } from '../data/data.js';
import './styles/ItemDeatail.css';
import ItemCount from './ItemCount.js';
import Item from "./Item.js";
import './styles/ItemCategory.css';
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import NavBar from "./NavBar.js";

const ItemDetail = () => {
  const  {consola} = useParams( )
  const [juegosCons, setjuegosCons] = useState([])

  


  const getJuegos = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productList);
    }, 3000);
  });

{/*
  const getJuegosFromDB = async () => {
    try {
      const result = await getJuegos;
      setjuegosCons (result.filter  (m => m.consola == consola))
      
    } catch (error) {
      console.log(error);
      alert('No podemos mostrar los productos en este momento');
    }
  };
*/}

  useEffect(() => {

    setTimeout(() => {
      const db = getFirestore()
    const itemsCollection = collection(db,'items')
    getDocs (itemsCollection).then(snapshot => { 
        const productList = []
       snapshot.docs.forEach(s=> { 
           //console.log(s.data());
           productList.push({id : s.id,...s.data()})
       })
       //console.log(productList);
       setjuegosCons (productList.filter  (m => m.consola == consola))
     })
    }, 1100);
    
    
  }, [consola]); 


  const onAdd = (count) => {
    alert(`Has agregado ${count} Juegos`);
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="grid grid-cols-4 gap-4">
      {
        
        juegosCons.length ? ( 
          <>
            {
              
              juegosCons.map((juegosCons) => {
                
                return (
                    
                  <div key={juegosCons.id} className=" bajar flex justify-center grid-cols-4">
                    <Item
                      name={juegosCons.name}
                      thumbnail={juegosCons.thumbnail}
                      price={juegosCons.price}
                      stock={juegosCons.stock}
                      id={juegosCons.id}
                      tub2={juegosCons.tub2}
                    />
                  </div>
                );
              })
            }
          </>
        ) : (
          <img className='loader2'  src="https://pa1.narvii.com/7878/a30ff749e4268e8f8bdb196bc7a659cc8b340d9cr1-480-480_hq.gif" />
        ) 
      }
    </div>
    </div>
  );
};
    

export default ItemDetail