import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { productList } from '../data/data.js';
import './styles/ItemDeatail.css';
import ItemCount from './ItemCount.js';
import Item from "./Item.js";
import './styles/ItemCategory.css';

const ItemDetail = () => {
  const  {consola} = useParams( )
  const [juegosCons, setjuegosCons] = useState([])

  


  const getJuegos = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productList);
    }, 500);
  });


  const getJuegosFromDB = async () => {
    try {
      const result = await getJuegos;
      setjuegosCons (result.filter  (m => m.consola == consola))
      
    } catch (error) {
      console.log(error);
      alert('No podemos mostrar los productos en este momento');
    }
  };

  //result.find  (m => m.id == id)

  useEffect(() => {
    getJuegosFromDB();
  }, [consola]); 


  const onAdd = (count) => {
    alert(`Has agregado ${count} Juegos`);
  };

  return (
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
                    />
                  </div>
                );
              })
            }
          </>
        ) : (
          <img className='loader'  src="https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-12.jpg" />
        ) 
      }
    </div>
  );
};
    

export default ItemDetail